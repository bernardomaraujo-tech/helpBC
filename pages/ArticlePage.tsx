import type { ReactNode } from 'react';
import { useState } from 'react';
import { ArrowLeft, Printer, Share2, ThumbsDown, ThumbsUp } from 'lucide-react';
import { articles } from '../data/articles';

interface Props {
  articleId: string;
  onBack: () => void;
}

function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    return part;
  });
}

function MarkdownContent({ content }: { content: string }) {
  const lines = content.split('\n');
  const blocks: ReactNode[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();

    if (!line) {
      index += 1;
      continue;
    }

    const heading = line.match(/^(#{3,4})\s+(.+)$/);
    if (heading) {
      const HeadingTag = heading[1].length === 3 ? 'h3' : 'h4';
      blocks.push(<HeadingTag key={`heading-${index}`}>{renderInline(heading[2])}</HeadingTag>);
      index += 1;
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];

      while (index < lines.length) {
        const current = lines[index].trim();
        const numbered = current.match(/^\d+\.\s+(.+)$/);

        if (!numbered) break;

        items.push(numbered[1]);
        index += 1;
      }

      blocks.push(
        <ol key={`ol-${index}`}>
          {items.map((item, itemIndex) => (
            <li key={`${item}-${itemIndex}`}>{renderInline(item)}</li>
          ))}
        </ol>
      );
      continue;
    }

    if (/^-\s+/.test(line)) {
      const items: string[] = [];

      while (index < lines.length) {
        const current = lines[index].trim();
        const bullet = current.match(/^-\s+(.+)$/);

        if (!bullet) break;

        items.push(bullet[1]);
        index += 1;
      }

      blocks.push(
        <ul key={`ul-${index}`}>
          {items.map((item, itemIndex) => (
            <li key={`${item}-${itemIndex}`}>{renderInline(item)}</li>
          ))}
        </ul>
      );
      continue;
    }

    const paragraph: string[] = [line];
    index += 1;

    while (index < lines.length) {
      const next = lines[index].trim();

      if (!next || /^(#{3,4})\s+/.test(next) || /^\d+\.\s+/.test(next) || /^-\s+/.test(next)) break;

      paragraph.push(next);
      index += 1;
    }

    blocks.push(<p key={`p-${index}`}>{renderInline(paragraph.join(' '))}</p>);
  }

  return <>{blocks}</>;
}

export function ArticlePage({ articleId, onBack }: Props) {
  const article = articles.find((item) => item.id === articleId) ?? articles[0];
  const [copied, setCopied] = useState(false);

  async function copyArticleLink() {
    const articleUrl = window.location.href;

    try {
      await navigator.clipboard.writeText(articleUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      window.prompt('Copiar link do artigo:', articleUrl);
    }
  }

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
            <button type="button" aria-label="Imprimir artigo" title="Imprimir artigo" onClick={() => window.print()}>
              <Printer size={18} />
            </button>
            <button type="button" aria-label="Copiar link do artigo" title="Copiar link do artigo" onClick={copyArticleLink}>
              <Share2 size={18} />
            </button>
            {copied && <span className="share-status">Link copiado</span>}
          </div>
        </div>

        <section>
          <h2>Problema</h2>
          <MarkdownContent content={article.problem} />
        </section>

        {article.diagnosis && (
          <section>
            <h2>Diagnóstico</h2>
            <MarkdownContent content={article.diagnosis} />
          </section>
        )}

        {article.cause && (
          <section>
            <h2>Causa provável</h2>
            <MarkdownContent content={article.cause} />
          </section>
        )}

        {article.solution && (
          <section>
            <h2>Solução</h2>
            <MarkdownContent content={article.solution} />
          </section>
        )}

        {article.procedure && (
          <section>
            <h2>Como proceder</h2>
            <MarkdownContent content={article.procedure} />
          </section>
        )}

        {article.validation && (
          <section>
            <h2>Validação final</h2>
            <MarkdownContent content={article.validation} />
          </section>
        )}

        {article.notes.length > 0 && (
          <section>
            <h2>Notas</h2>
            <ul>
              {article.notes.map((note) => (
                <li key={note}>{renderInline(note)}</li>
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
