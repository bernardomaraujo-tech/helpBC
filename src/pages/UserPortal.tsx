import { AlertTriangle, Bot, FileText, MessageCircle, Paperclip, Send } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Tabs } from '../components/Tabs';
import { articles } from '../data/articles';
import type { ChatMessage, Ticket } from '../types';
import { buildAnswer, searchArticles } from '../utils/kbSearch';
import { getArticlePreview } from '../utils/kbVisibility';

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
    text: 'Escreve a tua dúvida sobre Business Central. A pesquisa consulta apenas a informação disponível para utilizador.',
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

  const userArticles = useMemo(() => articles.filter((article) => article.availableForUser), []);

  const suggestedArticles = useMemo(
    () => searchArticles(lastQuery || query, articles, { audience: 'user', limit: 10 }),
    [lastQuery, query]
  );

  function submitQuestion() {
    if (!query.trim()) return;

    const results = searchArticles(query, articles, { audience: 'user', limit: 10 });
    const response = results[0]
      ? buildAnswer(results[0], { audience: 'user' })
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
    const subject = lastQuery || query || 'Pedido enviado pelo utilizador';

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
          <h1>Pesquisa na base de conhecimento</h1>
        </div>
      </section>

      <section className="app-card">
        <Tabs
          active={tab}
          onChange={setTab}
          tone="teal"
          tabs={[
            { key: 'chat', label: 'Pesquisa' },
            { key: 'kb', label: 'Base de conhecimento' },
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
                  placeholder="Pesquisar na base de conhecimento..."
                />
                <button onClick={submitQuestion} aria-label="Enviar pergunta">
                  <Send size={18} />
                </button>
              </div>
            </div>

            <aside className="side-card">
              <h2>10 principais propostas</h2>
              <div className="article-list">
                {query.trim() || lastQuery.trim() ? (
                  suggestedArticles.length > 0 ? (
                    suggestedArticles.map((article, index) => (
                      <button key={article.id} onClick={() => onOpenArticle(article.id)}>
                        <FileText size={17} />
                        <span>{index + 1}. {article.title}</span>
                      </button>
                    ))
                  ) : (
                    <p className="muted">Sem artigos sugeridos.</p>
                  )
                ) : (
                  <p className="muted">As sugestões aparecem depois de escrever uma pesquisa.</p>
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
        ) : tab === 'kb' ? (
          <div className="kb-grid">
            {userArticles.map((article) => (
              <article key={article.id} className="kb-card" onClick={() => onOpenArticle(article.id)}>
                <span>{article.category}</span>
                <h2>{article.title}</h2>
                <p>{getArticlePreview(article, 'user')}</p>
              </article>
            ))}

            {userArticles.length === 0 && (
              <div className="chat-card">
                <p className="muted">Ainda não existem artigos disponíveis para utilizador.</p>
              </div>
            )}
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
