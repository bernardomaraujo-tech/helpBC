import { ChevronRight, Search, X } from 'lucide-react';
import { useDeferredValue, useEffect, useId, useMemo, useState } from 'react';
import { articles } from '../data/articles';
import type { SearchMode } from '../types';
import { searchArticles } from '../utils/kbSearch';

interface Props {
  mode: SearchMode;
  onOpenArticle: (articleId: string) => void;
}

export function KnowledgeSearch({ mode, onOpenArticle }: Props) {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(-1);
  const deferredQuery = useDeferredValue(query);
  const listId = useId();
  const hasQuery = Boolean(query.trim());

  const results = useMemo(
    () => hasQuery
      ? searchArticles(deferredQuery, articles, {
          audience: mode,
          sort: 'relevance',
          limit: 10
        })
      : [],
    [deferredQuery, hasQuery, mode]
  );

  useEffect(() => {
    setActiveIndex(-1);
  }, [query]);

  function openResult(index: number) {
    const result = results[index];
    if (result) onOpenArticle(result.article.id);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (!results.length) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex((current) => (current + 1) % results.length);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex((current) => (current <= 0 ? results.length - 1 : current - 1));
    } else if (event.key === 'Enter' && activeIndex >= 0) {
      event.preventDefault();
      openResult(activeIndex);
    } else if (event.key === 'Escape') {
      setQuery('');
    }
  }

  return (
    <section className="simple-search" aria-label="Pesquisa na base de conhecimento">
      <h2>Pesquisa na base de conhecimento</h2>

      <div className="simple-search-combobox">
        <div className="simple-search-box">
          <Search size={22} aria-hidden="true" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Pesquisar"
            aria-label="Pesquisa na base de conhecimento"
            aria-autocomplete="list"
            aria-controls={hasQuery ? listId : undefined}
            aria-expanded={hasQuery}
            role="combobox"
          />
          {hasQuery && (
            <button
              className="simple-search-clear"
              onClick={() => setQuery('')}
              type="button"
              aria-label="Limpar pesquisa"
            >
              <X size={19} />
            </button>
          )}
        </div>

        {hasQuery && (
          <div className="simple-search-suggestions" id={listId} role="listbox" aria-label="Sugestões de pesquisa">
            {results.length > 0 ? (
              <ol>
                {results.map((result, index) => (
                  <li key={result.article.id}>
                    <button
                      type="button"
                      className={activeIndex === index ? 'active' : ''}
                      onMouseEnter={() => setActiveIndex(index)}
                      onClick={() => openResult(index)}
                      role="option"
                      aria-selected={activeIndex === index}
                    >
                      <span className="simple-search-rank">{index + 1}</span>
                      <span className="simple-search-result">
                        <strong>{result.article.title}</strong>
                        <small>{result.article.code} · {result.article.category}</small>
                      </span>
                      <ChevronRight size={18} aria-hidden="true" />
                    </button>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="simple-search-empty">Não foram encontradas sugestões para “{query.trim()}”.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
