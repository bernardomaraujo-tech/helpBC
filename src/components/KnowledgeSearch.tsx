import { ChevronRight, FileText, Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { articles } from '../data/articles';
import type { ArticleSearchResult, SearchMode } from '../types';
import { searchArticles } from '../utils/kbSearch';

interface Props {
  mode: SearchMode;
  onOpenArticle: (articleId: string) => void;
}

function getArticlePreview(result: ArticleSearchResult, mode: SearchMode) {
  const { article } = result;

  if (mode === 'user') {
    return article.procedure || article.problem || article.notes.join(' ') || article.title;
  }

  return article.problem || article.procedure || article.notes.join(' ') || article.title;
}

export function KnowledgeSearch({ mode, onOpenArticle }: Props) {
  const [query, setQuery] = useState('');

  const suggestions = useMemo(
    () => (query.trim() ? searchArticles(query, articles, { audience: mode, limit: 10 }) : []),
    [mode, query]
  );

  return (
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
                <small>{getArticlePreview(result, mode)}</small>
              </span>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
