import {
  BookOpen,
  ChevronRight,
  Clock3,
  FileSearch,
  FileText,
  Filter,
  Info,
  Search,
  Sparkles,
  Tag
} from 'lucide-react';
import { useMemo, useState } from 'react';
import { articles } from '../data/articles';
import type { Article, ArticleSearchResult, SearchMode } from '../types';
import { getRecommendedArticles, searchArticles } from '../utils/kbSearch';

interface Props {
  mode: SearchMode;
  onOpenArticle: (articleId: string) => void;
}

const quickTerms = ['acesso', 'produto', 'aprovação', 'fatura', 'stock', 'permissões'];

function getAudienceLabel(mode: SearchMode) {
  return mode === 'user' ? 'Utilizador' : 'Agente';
}

function getAudienceDescription(mode: SearchMode) {
  if (mode === 'user') {
    return 'A pesquisa mostra apenas artigos disponíveis para utilizadores.';
  }

  return 'A pesquisa mostra artigos internos disponíveis para agentes.';
}

function getArticleSummary(article: Article) {
  return article.problem || article.solution || article.procedure || 'Artigo disponível na base de conhecimento.';
}

function getRelevanceClass(result: ArticleSearchResult) {
  const suffix = result.relevance === 'Alta' ? 'alta' : result.relevance === 'Média' ? 'media' : 'baixa';
  return `relevance-pill relevance-${suffix}`;
}

export function KnowledgeSearch({ mode, onOpenArticle }: Props) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState<'relevance' | 'recent'>('relevance');

  const availableArticles = useMemo(
    () => articles.filter((article) => (mode === 'user' ? article.availableForUser : article.availableForAgent)),
    [mode]
  );

  const categories = useMemo(
    () => Array.from(new Set(availableArticles.map((article) => article.category))).sort((a, b) => a.localeCompare(b, 'pt')),
    [availableArticles]
  );

  const results = useMemo(
    () =>
      searchArticles(query, articles, {
        audience: mode,
        category,
        sort,
        limit: 12
      }),
    [category, mode, query, sort]
  );

  const suggestedArticles = useMemo(() => getRecommendedArticles(articles, mode, 5), [mode]);
  const hasActiveSearch = Boolean(query.trim() || category);

  function applyQuickSearch(term: string) {
    setQuery(term);
    setSort('relevance');
  }

  return (
    <div className="search-layout">
      <aside className="quick-search-panel">
        <div className="search-panel-heading">
          <span className="icon-pill teal"><Sparkles size={17} /></span>
          <div>
            <h2>Pesquisas rápidas</h2>
            <p>Atalhos para os temas mais comuns.</p>
          </div>
        </div>

        <div className="quick-chip-list">
          {quickTerms.map((term) => (
            <button key={term} className="quick-search-chip" onClick={() => applyQuickSearch(term)}>
              <Search size={15} />
              {term}
            </button>
          ))}
        </div>

        <div className="search-tip-card">
          <Info size={18} />
          <strong>Dicas de pesquisa</strong>
          <p>Pesquisa por nome do processo, erro apresentado, código do artigo, área funcional ou funcionalidade BC.</p>
        </div>
      </aside>

      <section className="knowledge-search-panel">
        <div className="search-context-row">
          <div>
            <span className="eyebrow compact-eyebrow">Pesquisa na base de conhecimento</span>
            <h2>Encontrar informação rapidamente</h2>
            <p>{getAudienceDescription(mode)}</p>
          </div>

          <div className="role-pills" aria-label="Modo de pesquisa">
            <span className={mode === 'user' ? 'role-pill active teal' : 'role-pill'}>Utilizador</span>
            <span className={mode === 'agent' ? 'role-pill active purple' : 'role-pill'}>Agente</span>
          </div>
        </div>

        <div className="search-box">
          <Search size={22} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Pesquisar artigos, processos, temas ou códigos..."
            aria-label="Pesquisar na base de conhecimento"
          />
          {query && (
            <button className="clear-search" onClick={() => setQuery('')} type="button">
              Limpar
            </button>
          )}
        </div>

        <div className="search-filters">
          <label>
            <Filter size={15} />
            Área
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
              <option value="">Todas</option>
              {categories.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </label>

          <label>
            <Tag size={15} />
            Disponibilidade
            <select value={mode} disabled>
              <option>{getAudienceLabel(mode)}</option>
            </select>
          </label>

          <label>
            <Clock3 size={15} />
            Ordenar por
            <select value={sort} onChange={(event) => setSort(event.target.value as 'relevance' | 'recent')}>
              <option value="relevance">Mais relevantes</option>
              <option value="recent">Mais recentes</option>
            </select>
          </label>
        </div>

        <div className="section-header search-results-header">
          <div>
            <h2>Resultados da pesquisa</h2>
            <span>
              {results.length} {results.length === 1 ? 'artigo encontrado' : 'artigos encontrados'}
            </span>
          </div>
          <FileSearch size={22} />
        </div>

        {results.length > 0 ? (
          <div className="search-result-list">
            {results.map((result) => (
              <button key={result.article.id} className="search-result-card" onClick={() => onOpenArticle(result.article.id)}>
                <span className="search-result-icon"><FileText size={20} /></span>
                <span className="search-result-content">
                  <strong>{result.article.title}</strong>
                  <span>{getArticleSummary(result.article)}</span>
                  <small>
                    {result.article.code} · {result.article.category} · Atualizado em {result.article.updatedAt} · {result.article.readTime}
                    {result.matchedFields.length > 0 && ` · Encontrado em: ${result.matchedFields.join(', ')}`}
                  </small>
                </span>
                {hasActiveSearch && <span className={getRelevanceClass(result)}>{result.relevance}</span>}
                <ChevronRight size={18} />
              </button>
            ))}
          </div>
        ) : (
          <div className="empty-search-state">
            <FileSearch size={28} />
            <strong>Não foram encontrados artigos para a pesquisa indicada.</strong>
            <p>Tenta pesquisar por outro termo, remover filtros ou consultar a base de conhecimento por categoria.</p>
          </div>
        )}
      </section>

      <aside className="suggestions-panel">
        <div className="search-panel-heading">
          <span className="icon-pill purple"><BookOpen size={17} /></span>
          <div>
            <h2>Artigos sugeridos</h2>
            <p>Mais recentes para {mode === 'user' ? 'utilizadores' : 'agentes'}.</p>
          </div>
        </div>

        <div className="suggestion-list">
          {suggestedArticles.map((article) => (
            <button key={article.id} className="suggestion-card" onClick={() => onOpenArticle(article.id)}>
              <span>
                <strong>{article.title}</strong>
                <small>{article.category}</small>
              </span>
              <ChevronRight size={17} />
            </button>
          ))}
        </div>

        <div className="most-searched-card">
          <strong>Mais pesquisados</strong>
          <div>
            {quickTerms.slice(0, 5).map((term) => (
              <button key={term} onClick={() => applyQuickSearch(term)}>{term}</button>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
