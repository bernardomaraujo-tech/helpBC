import type { Article } from '../types';
import {
  type ArticleAudience,
  canViewArticle,
  getArticleAnswerText,
  getArticleSearchText
} from './kbVisibility';

export interface SearchOptions {
  audience?: ArticleAudience;
  limit?: number;
  /**
   * Mantido por compatibilidade com componentes existentes.
   * A ordenação principal continua a ser por relevância.
   */
  sort?: 'relevance' | 'title' | 'category' | string;
}

export interface ArticleSearchResult {
  article: Article;
  score: number;
}

function normalize(value: string) {
  return String(value ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function getTerms(query: string) {
  return normalize(query)
    .split(' ')
    .map((term) => term.trim())
    .filter((term) => term.length >= 2);
}

function scoreArticle(query: string, article: Article, audience: ArticleAudience) {
  const normalizedQuery = normalize(query);
  const terms = getTerms(query);
  const searchableText = normalize(getArticleSearchText(article, audience));

  if (!normalizedQuery || !terms.length || !searchableText) return 0;

  const title = normalize(article.title);
  const code = normalize(article.code);
  const category = normalize(article.category);

  let score = 0;

  if (code === normalizedQuery) score += 120;
  if (code.includes(normalizedQuery)) score += 80;
  if (title.includes(normalizedQuery)) score += 60;
  if (category.includes(normalizedQuery)) score += 30;
  if (searchableText.includes(normalizedQuery)) score += 25;

  for (const term of terms) {
    if (code.includes(term)) score += 35;
    if (title.includes(term)) score += 25;
    if (category.includes(term)) score += 12;
    if (searchableText.includes(term)) score += 8;
  }

  return score;
}

function sortResults(results: ArticleSearchResult[], sort: SearchOptions['sort']) {
  if (sort === 'title') {
    return [...results].sort((a, b) => a.article.title.localeCompare(b.article.title, 'pt-PT'));
  }

  if (sort === 'category') {
    return [...results].sort(
      (a, b) =>
        a.article.category.localeCompare(b.article.category, 'pt-PT') ||
        b.score - a.score ||
        a.article.title.localeCompare(b.article.title, 'pt-PT')
    );
  }

  return [...results].sort(
    (a, b) => b.score - a.score || a.article.title.localeCompare(b.article.title, 'pt-PT')
  );
}

export function searchArticles(
  query: string,
  allArticles: Article[],
  options: SearchOptions = {}
): ArticleSearchResult[] {
  const audience = options.audience ?? 'agent';
  const limit = options.limit ?? 10;

  if (!normalize(query)) return [];

  const results = allArticles
    .filter((article) => canViewArticle(article, audience))
    .map((article) => ({ article, score: scoreArticle(query, article, audience) }))
    .filter((result) => result.score > 0);

  return sortResults(results, options.sort).slice(0, limit);
}

function unwrapArticle(input: Article | ArticleSearchResult) {
  return 'article' in input ? input.article : input;
}

export function buildAnswer(input: Article | ArticleSearchResult, options: SearchOptions = {}) {
  return getArticleAnswerText(unwrapArticle(input), options.audience ?? 'agent');
}
