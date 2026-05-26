import { BookOpen, CheckCircle2, FileSearch, Inbox, PenLine, Send } from 'lucide-react';
import { useMemo, useState } from 'react';
import { KpiCard } from '../components/KpiCard';
import { Tabs } from '../components/Tabs';
import { articles } from '../data/articles';
import type { Ticket } from '../types';

interface Props {
  tickets: Ticket[];
  onCloseTicket: (ticketId: string) => void;
  onOpenArticle: (articleId: string) => void;
}

export function AgentPortal({ tickets, onCloseTicket, onOpenArticle }: Props) {
  const [tab, setTab] = useState('queue');
  const [selectedTicketId, setSelectedTicketId] = useState(tickets[0]?.id ?? '');

  const selectedTicket = tickets.find((ticket) => ticket.id === selectedTicketId) ?? tickets[0];

  const suggestedArticle = useMemo(() => {
    if (!selectedTicket) return articles[0];
    return articles.find((article) => article.id === selectedTicket.suggestedArticleId) ?? articles.find((article) => article.availableForAgent) ?? articles[0];
  }, [selectedTicket]);

  const openTickets = tickets.filter((ticket) => ticket.status !== 'Resolvido').length;
  const resolvedTickets = tickets.filter((ticket) => ticket.status === 'Resolvido').length;

  return (
    <main className="page">
      <section className="portal-title">
        <div>
          <span className="eyebrow">Portal Agente</span>
          <h1>Gestão de pedidos</h1>
        </div>
      </section>

      <section className="app-card">
        <Tabs
          active={tab}
          onChange={setTab}
          tone="purple"
          tabs={[
            { key: 'queue', label: 'Fila' },
            { key: 'kb', label: 'Base de conhecimento' }
          ]}
        />

        {tab === 'queue' ? (
          <>
            <div className="kpi-grid">
              <KpiCard label="Abertos" value={openTickets} icon={Inbox} tone="teal" />
              <KpiCard label="Resolvidos por KB" value={resolvedTickets} icon={CheckCircle2} tone="purple" />
              <KpiCard label="Artigos a rever" value={articles.length} icon={BookOpen} tone="orange" />
            </div>

            <div className="agent-layout">
              <div className="queue-card">
                <div className="section-header">
                  <h2>Fila de pedidos</h2>
                  <span>Mais recentes</span>
                </div>

                {tickets.map((ticket) => (
                  <button
                    key={ticket.id}
                    className={`queue-item ${ticket.id === selectedTicket?.id ? 'selected' : ''}`}
                    onClick={() => setSelectedTicketId(ticket.id)}
                  >
                    <span className="avatar">{ticket.requester.slice(0, 2).toUpperCase()}</span>
                    <span>
                      <strong>{ticket.subject}</strong>
                      <small>{ticket.requester}</small>
                    </span>
                    <em>{ticket.createdAt}</em>
                  </button>
                ))}
              </div>

              <div className="suggested-response">
                <div className="section-header">
                  <h2>Resposta sugerida</h2>
                  <PenLine size={18} />
                </div>

                {selectedTicket ? (
                  <>
                    <p>
                      Com base no pedido selecionado, o artigo mais provável é:
                    </p>
                    <button className="article-link" onClick={() => onOpenArticle(suggestedArticle.id)}>
                      <FileSearch size={17} />
                      {suggestedArticle.title}
                    </button>
                    <div className="response-box">
                      <p>{suggestedArticle.problem}</p>
                      <ol>
                        {suggestedArticle.steps.slice(0, 3).map((step) => (
                          <li key={step}>{step}</li>
                        ))}
                      </ol>
                    </div>
                    <div className="button-row">
                      <button className="primary purple">
                        <Send size={16} />
                        Enviar resposta
                      </button>
                      <button className="secondary" onClick={() => onCloseTicket(selectedTicket.id)}>
                        Fechar pedido
                      </button>
                    </div>
                  </>
                ) : (
                  <p className="muted">Não existem pedidos para apresentar.</p>
                )}
              </div>

              <aside className="side-card">
                <h2>Base de conhecimento</h2>
                <div className="article-list">
                  {articles.map((article) => (
                    <button key={article.id} onClick={() => onOpenArticle(article.id)}>
                      <BookOpen size={17} />
                      <span>{article.title}</span>
                    </button>
                  ))}
                </div>
              </aside>
            </div>
          </>
        ) : (
          <div className="kb-grid">
            {articles.map((article) => (
              <article key={article.id} className="kb-card" onClick={() => onOpenArticle(article.id)}>
                <span>{article.category}</span>
                <h2>{article.title}</h2>
                <p>{article.problem}</p>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
