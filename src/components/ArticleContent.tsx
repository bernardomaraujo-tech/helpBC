import type { Article } from '../types';
import { type ArticleAudience, getVisibleArticleMarkdown } from '../utils/kbVisibility';

interface Props {
  article: Article;
  audience: ArticleAudience;
}

export function ArticleContent({ article, audience }: Props) {
  const markdown = getVisibleArticleMarkdown(article, audience);
  const lines = markdown.split('\n');

  return (
    <div className="article-content">
      {lines.map((line, index) => {
        const key = `${article.id}-${index}`;
        const value = line.trim();

        if (!value) return <br key={key} />;
        if (value.startsWith('## ')) return <h2 key={key}>{value.replace(/^##\s+/, '')}</h2>;
        if (/^\*\*(.+)\*\*$/.test(value)) return <h3 key={key}>{value.replace(/\*\*/g, '')}</h3>;
        if (/^[-*]\s+/.test(value)) return <li key={key}>{value.replace(/^[-*]\s+/, '')}</li>;

        return <p key={key}>{value.replace(/\*\*/g, '')}</p>;
      })}
    </div>
  );
}
