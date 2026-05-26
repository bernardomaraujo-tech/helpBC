import { ArrowLeft, Printer, Share2, ThumbsDown, ThumbsUp } from 'lucide-react';
import { articles } from '../data/articles';

interface Props {
  articleId: string;
  onBack: () => void;
}

export function ArticlePage({ articleId, onBack }: Props) {
  const article = articles.find((item) => item.id === articleId) ?? articles[0];

  return (
    <main className="page article-page">
      <button className="ghost-button back-button" onClick={onBack}>
        <ArrowLeft size={16} />
        Voltar
      </button>

      <article className="article-document">
        <div className="breadcrumbs">Base de conhecimento &gt; {article.category} &gt; {article.code}</div>

        <div className="article-heading">
          <div>
            <h1>{article.title}</h1>
            <p>
              {article.code} · Atualizado em {article.updatedAt} · {article.readTime} de leitura
            </p>
            <div className="availability">
              <span className={article.availableForUser ? 'available' : 'not-available'}>
                Utilizador: {article.availableForUser ? 'Sim' : 'Não'}
              </span>
              <span className={article.availableForAgent ? 'available' : 'not-available'}>
                Agente: {article.availableForAgent ? 'Sim' : 'Não'}
              </span>
            </div>
          </div>
          <div className="article-actions">
            <button><Printer size={18} /></button>
            <button><Share2 size={18} /></button>
          </div>
        </div>

        <section>
          <h2>Problema</h2>
          <p>{article.problem}</p>
        </section>

        {article.diagnosis && (
          <section>
            <h2>Diagnóstico</h2>
            <p>{article.diagnosis}</p>
          </section>
        )}

        {article.cause && (
          <section>
            <h2>Causa provável</h2>
            <p>{article.cause}</p>
          </section>
        )}

        {article.solution && (
          <section>
            <h2>Solução</h2>
            <p>{article.solution}</p>
          </section>
        )}

        <section>
          <h2>Como proceder</h2>
          {article.steps.length > 0 ? (
            <ol>
              {article.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          ) : (
            <pre className="markdown-block">{article.procedure}</pre>
          )}
        </section>

        {article.validation && (
          <section>
            <h2>Validação final</h2>
            <p>{article.validation}</p>
          </section>
        )}

        {article.notes.length > 0 && (
          <section>
            <h2>Notas</h2>
            <ul>
              {article.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </section>
        )}

        <footer className="article-feedback">
          <strong>Este artigo foi útil?</strong>
          <button><ThumbsUp size={18} /></button>
          <button><ThumbsDown size={18} /></button>
        </footer>
      </article>
    </main>
  );
}
