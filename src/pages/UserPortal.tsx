import { AlertTriangle, Bot, FileText, MessageCircle, Paperclip, Send } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Tabs } from '../components/Tabs';
import { articles } from '../data/articles';
import type { ChatMessage, Ticket } from '../types';
import { buildAnswer, searchArticles } from '../utils/kbSearch';

interface Props {
  tickets: Ticket[];
  onEscalate: (ticket: Ticket) => void;
  onOpenArticle: (articleId: string) => void;
  onAddTicketMessage: (ticketId: string, text: string) => void;
}

const initialMessages: ChatMessage[] = [
  {
    id: 'm1',
    author: 'assistant',
    text: 'Olá. Coloca a tua dúvida sobre Business Central. Vou procurar uma resposta na knowledge base aprovada.',
    createdAt: 'Agora'
  }
];

function nowLabel() {
  return new Date().toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' });
}

export function UserPortal({ tickets, onEscalate, onOpenArticle, onAddTicketMessage }: Props) {
  const [tab, setTab] = useState('chat');
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [lastQuery, setLastQuery] = useState('');
  const [selectedTicketId, setSelectedTicketId] = useState(tickets[0]?.id ?? '');
  const [ticketReply, setTicketReply] = useState('');

  const selectedTicket = tickets.find((ticket) => ticket.id === selectedTicketId) ?? tickets[0];

  const suggestedArticles = useMemo(
    () => searchArticles(lastQuery || query, articles, { audience: 'user' }),
    [lastQuery, query]
  );

  function submitQuestion() {
    if (!query.trim()) return;

    const results = searchArticles(query, articles, { audience: 'user' });
    const response = results[0]
      ? buildAnswer(results[0])
      : 'Não encontrei um artigo suficientemente claro para responder com segurança. Podes enviar este pedido para um agente.';

    setMessages((current) => [
      ...current,
      {
        id: crypto.randomUUID(),
        author: 'user',
        text: query,
        createdAt: nowLabel()
      },
      {
        id: crypto.randomUUID(),
        author: 'assistant',
        text: response,
        createdAt: nowLabel()
      }
    ]);

    setLastQuery(query);
    setQuery('');
  }

  function escalate() {
    const ticketId = `TCK-${Math.floor(Math.random() * 900 + 100)}`;
    const createdAt = nowLabel();
    const subject = lastQuery || 'Pedido enviado pelo utilizador';

    const ticket: Ticket = {
      id: ticketId,
      subject,
      requester: 'Utilizador Demo',
      area: suggestedArticles[0]?.category ?? 'Configuração',
      status: 'Aberto',
      priority: 'Média',
      createdAt,
      updatedAt: createdAt,
      message: subject,
      suggestedArticleId: suggestedArticles[0]?.id,
      messages: [
        {
          id: `${ticketId}-M1`,
          author: 'user',
          text: subject,
          createdAt
        },
        {
          id: `${ticketId}-M2`,
          author: 'assistant',
          text: 'Pedido enviado para análise por agente.',
          createdAt
        }
      ]
    };

    onEscalate(ticket);
    setSelectedTicketId(ticketId);
    setTab('requests');
  }

  function sendTicketReply() {
    if (!selectedTicket || !ticketReply.trim()) return;
    onAddTicketMessage(selectedTicket.id, ticketReply.trim());
    setTicketReply('');
  }

  return (
    <main className="page">
      <section className="portal-title">
        <div>
          <span className="eyebrow">Portal Utilizador</span>
          <h1>Como podemos ajudar?</h1>
        </div>
      </section>

      <section className="app-card">
        <Tabs
          active={tab}
          onChange={setTab}
          tone="teal"
          tabs={[
            { key: 'chat', label: 'Chat' },
            { key: 'requests', label: 'Os meus pedidos' }
          ]}
        />

        {tab === 'chat' ? (
          <div className="user-layout">
            <div className="chat-card">
              <div className="chat-stream">
                {messages.map((message) => (
                  <div key={message.id} className={`chat-row ${message.author}`}>
                    {message.author === 'assistant' && (
                      <span className="bot-avatar">
                        <Bot size={18} />
                      </span>
                    )}
                    <div className="chat-bubble">
                      <p>{message.text}</p>
                      <small>{message.createdAt}</small>
                    </div>
                  </div>
                ))}
              </div>

              <div className="chat-input">
                <Paperclip size={18} />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  onKeyDown={(event) => event.key === 'Enter' && submitQuestion()}
                  placeholder="Escreve a tua dúvida..."
                />
                <button onClick={submitQuestion} aria-label="Enviar pergunta">
                  <Send size={18} />
                </button>
              </div>
            </div>

            <aside className="side-card">
              <h2>Artigos sugeridos</h2>
              <div className="article-list">
                {suggestedArticles.length > 0 ? (
                  suggestedArticles.map((article) => (
                    <button key={article.id} onClick={() => onOpenArticle(article.id)}>
                      <FileText size={17} />
                      <span>{article.title}</span>
                    </button>
                  ))
                ) : (
                  <p className="muted">Sem artigos sugeridos.</p>
                )}
              </div>

              <div className="warning-box">
                <AlertTriangle size={20} />
                <strong>Sem artigo correspondente?</strong>
                <p>Envia o pedido para agente para análise.</p>
                <button onClick={escalate}>Enviar para agente</button>
              </div>
            </aside>
          </div>
        ) : (
          <div className="requests-chat-layout">
            <div className="requests-list request-selector">
              {tickets.map((ticket) => (
                <button
                  key={ticket.id}
                  className={`ticket-card ticket-selector-card ${ticket.id === selectedTicket?.id ? 'selected' : ''}`}
                  onClick={() => setSelectedTicketId(ticket.id)}
                >
                  <div>
                    <strong>{ticket.subject}</strong>
                    <p>{ticket.message}</p>
                  </div>
                  <span className={`status status-${ticket.status.replace(' ', '-').toLowerCase()}`}>
                    {ticket.status}
                  </span>
                </button>
              ))}
            </div>

            <div className="chat-card ticket-chat-card">
              {selectedTicket ? (
                <>
                  <div className="section-header">
                    <div>
                      <h2>{selectedTicket.subject}</h2>
                      <span>Conversa com o agente</span>
                    </div>
                    <MessageCircle size={20} />
                  </div>

                  <div className="ticket-thread user-ticket-thread">
                    {(selectedTicket.messages ?? []).map((message) => (
                      <div key={message.id} className={`ticket-message ticket-message-${message.author}`}>
                        <span>{message.author === 'agent' ? 'Agente' : message.author === 'assistant' ? 'Assistente' : 'Tu'}</span>
                        <p>{message.text}</p>
                        <small>{message.createdAt}</small>
                      </div>
                    ))}
                  </div>

                  {selectedTicket.status !== 'Resolvido' ? (
                    <div className="chat-input ticket-reply-input">
                      <Paperclip size={18} />
                      <input
                        value={ticketReply}
                        onChange={(event) => setTicketReply(event.target.value)}
                        onKeyDown={(event) => event.key === 'Enter' && sendTicketReply()}
                        placeholder="Responder ao agente..."
                      />
                      <button onClick={sendTicketReply} aria-label="Enviar resposta ao agente">
                        <Send size={18} />
                      </button>
                    </div>
                  ) : (
                    <p className="resolved-note">Este pedido está resolvido.</p>
                  )}
                </>
              ) : (
                <p className="muted">Ainda não existem pedidos.</p>
              )}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
