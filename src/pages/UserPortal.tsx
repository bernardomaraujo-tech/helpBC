import { AlertTriangle, BookOpen, ChevronRight, FileText, Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { KnowledgeBaseIndex, ALL_ARTICLES_KEY } from '../components/KnowledgeBaseIndex';
import { Tabs } from '../components/Tabs';
import { TrainingVideos } from '../components/TrainingVideos';
import { articles } from '../data/articles';
import type { ArticleSearchResult, Ticket } from '../types';
import { getArticleGroups, getArticleGroupName, sortArticlesByGroupAndTitle } from '../utils/articleGroups';
import { searchArticles } from '../utils/kbSearch';

interface Props {
  tickets: Ticket[];
  onEscalate: (ticket: Ticket) => void;
  onOpenArticle: (articleId: string) => void;
  onAddTicketMessage: (ticketId: string, text: string) => void;
}

function nowLabel() {
  return new Date().toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' });
}

function getArticlePreview(result: ArticleSearchResult) {
  const { article } = result;
  return article.procedure || article.notes.join(' ') || article.title;
}

export function UserPortal({ tickets, onEscalate, onOpenArticle, onAddTicketMessage }: Props) {
  const [tab, setTab] = useState('search');
  const [query, setQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('');
  const [selectedTicketId, setSelectedTicketId] = useState(tickets[0]?.id ?? '');
  const [ticketReply, setTicketReply] = useState('');

  const selectedTicket = tickets.find((ticket) => ticket.id === selectedTicketId) ?? tickets[0];

  const userArticles = useMemo(
    () => articles.filter((article) => article.availableForUser).sort(sortArticlesByGroupAndTitle),
    []
  );

  const articleGroups = useMemo(() => getArticleGroups(userArticles), [userArticles]);

  const visibleArticles = useMemo(
    () => userArticles.filter((article) => {
      if (!selectedGroup || selectedGroup === ALL_ARTICLES_KEY) return true;
      return getArticleGroupName(article) === selectedGroup;
    }),
    [selectedGroup, userArticles]
  );

  const suggestions = useMemo(
    () => (query.trim() ? searchArticles(query, articles, { audience: 'user', limit: 10 }) : []),
    [query]
  );

  function escalate() {
    const ticketId = `TCK-${Math.floor(Math.random() * 900 + 100)}`;
    const createdAt = nowLabel();
    const subject = query || 'Pedido enviado pelo utilizador';

    const ticket: Ticket = {
      id: ticketId,
      subject,
      requester: 'Utilizador Demo',
      area: suggestions[0]?.article.category ?? 'Configuração',
      status: 'Aberto',
      priority: 'Média',
      createdAt,
      updatedAt: createdAt,
      message: subject,
      suggestedArticleId: suggestions[0]?.article.id,
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
      <section className="app-card">
        <Tabs
          active={tab}
          onChange={setTab}
          tone="teal"
          tabs={[
            { key: 'search', label: 'Pesquisa' },
            { key: 'kb', label: 'Base de conhecimento' },
            { key: 'videos', label: 'Vídeos formativos' },
            { key: 'requests', label: 'Os meus pedidos' }
          ]}
        />

        {tab === 'search' ? (
          <section className="simple-search">
            <h2>Pesquisa na base de conhecimento</h2>

            <div className="simple-search-combobox">
              <div className="simple-search-box">
                <Search size={22} />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Escreve a tua pesquisa..."
                  aria-label="Pesquisa na base de conhecimento"
                  autoComplete="off"
                />
                {query && (
                  <button type="button" className="simple-search-clear" onClick={() => setQuery('')} aria-label="Limpar pesquisa">
                    <X size={18} />
                  </button>
                )}
              </div>

              {query.trim() && (
                <div className="simple-search-suggestions">
                  {suggestions.length > 0 ? (
                    <ol>
                      {suggestions.map((result, index) => (
                        <li key={result.article.id}>
                          <button type="button" onClick={() => onOpenArticle(result.article.id)}>
                            <span className="simple-search-rank">{index + 1}</span>
                            <span className="simple-search-result">
                              <strong>{result.article.title}</strong>
                              <small>{result.article.code} · {result.article.category}</small>
                            </span>
                            <ChevronRight size={17} />
                          </button>
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <p className="simple-search-empty">Não foram encontrados artigos para a pesquisa indicada.</p>
                  )}
                </div>
              )}
            </div>

            {query.trim() && suggestions.length > 0 && (
              <div className="article-list compact-article-list">
                {suggestions.map((result, index) => (
                  <button key={result.article.id} onClick={() => onOpenArticle(result.article.id)}>
                    <FileText size={17} />
                    <span>
                      {index + 1}. {result.article.title}
                      <small>{getArticlePreview(result)}</small>
                    </span>
                  </button>
                ))}
              </div>
            )}

            {query.trim() && suggestions.length === 0 && (
              <div className="warning-box search-escalation-box">
                <AlertTriangle size={20} />
                <strong>Sem artigo correspondente?</strong>
                <p>Envia o pedido para agente para análise.</p>
                <button onClick={escalate}>Enviar para agente</button>
              </div>
            )}
          </section>
        ) : tab === 'kb' ? (
          <>
            <div className="section-header kb-section-header">
              <div>
                <h2>Base de conhecimento</h2>
                <span>
                  {selectedGroup && selectedGroup !== ALL_ARTICLES_KEY
                    ? `${visibleArticles.length} de ${userArticles.length} artigos disponíveis para utilizador · ${selectedGroup}`
                    : `${userArticles.length} artigos disponíveis para utilizador`}
                </span>
              </div>
              <BookOpen size={22} />
            </div>

            <KnowledgeBaseIndex
              groups={articleGroups}
              totalArticles={userArticles.length}
              selectedGroup={selectedGroup}
              tone="teal"
              onSelectGroup={setSelectedGroup}
            />

            {(selectedGroup || selectedGroup === ALL_ARTICLES_KEY) && (
              <div className="kb-grid">
                {visibleArticles.map((article) => (
                  <article key={article.id} className="kb-card" onClick={() => onOpenArticle(article.id)}>
                    <span>{getArticleGroupName(article)} / {article.category}</span>
                    <h2>{article.title}</h2>
                    <p>{article.procedure || article.notes.join(' ') || 'Artigo disponível na base de conhecimento.'}</p>
                  </article>
                ))}
              </div>
            )}
          </>
        ) : tab === 'videos' ? (
          <TrainingVideos />
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
                      <span>{selectedTicket.status} · Atualizado em {selectedTicket.updatedAt ?? selectedTicket.createdAt}</span>
                    </div>
                  </div>

                  <div className="chat-stream ticket-thread">
                    {(selectedTicket.messages ?? []).map((message) => (
                      <div key={message.id} className={`chat-row ${message.author === 'agent' ? 'assistant' : message.author}`}>
                        <div className="chat-bubble">
                          <p>{message.text}</p>
                          <small>{message.createdAt}</small>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="chat-input">
                    <input
                      value={ticketReply}
                      onChange={(event) => setTicketReply(event.target.value)}
                      onKeyDown={(event) => event.key === 'Enter' && sendTicketReply()}
                      placeholder="Adicionar mensagem ao pedido..."
                    />
                    <button onClick={sendTicketReply}>Enviar</button>
                  </div>
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
