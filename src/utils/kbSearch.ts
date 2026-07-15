import type { Article, ArticleSearchResult, SearchMode, SearchRelevance } from '../types';

type SearchOptions = {
  audience?: SearchMode;
  category?: string;
  sort?: 'relevance' | 'recent';
import type { Article } from '../types';
import {
  type ArticleAudience,
  canViewArticle,
  getArticleAnswerText,
  getArticleSearchText
} from './kbVisibility';

interface SearchOptions {
  audience?: ArticleAudience;
limit?: number;
};

type WeightedField = {
  label: string;
  value: string;
  weight: number;
};

const FIELD_LABELS: Record<string, string> = {
  code: 'código',
  title: 'título',
  tags: 'tags',
  category: 'categoria',
  problem: 'problema',
  diagnosis: 'diagnóstico',
  cause: 'causa',
  solution: 'solução',
  procedure: 'procedimento',
  steps: 'passos',
  notes: 'notas',
  validation: 'validação'
};
}

export const normalizeText = (value: string) =>
  value
function normalize(value: string) {
  return String(value ?? '')
.toLowerCase()
.normalize('NFD')
.replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/[^a-z0-9]+/g, ' ')
.trim();

function getAllowedArticles(articles: Article[], audience?: SearchMode) {
  return articles.filter((article) => {
    if (audience === 'user') return article.availableForUser;
    if (audience === 'agent') return article.availableForAgent;
    return true;
  });
}

export function getAudienceArticles(articles: Article[], audience: SearchMode) {
  return getAllowedArticles(articles, audience);
}

function toWeightedFields(article: Article): WeightedField[] {
  return [
    { label: FIELD_LABELS.code, value: article.code, weight: 18 },
    { label: FIELD_LABELS.title, value: article.title, weight: 15 },
    { label: FIELD_LABELS.tags, value: article.tags.join(' '), weight: 12 },
    { label: FIELD_LABELS.category, value: article.category, weight: 10 },
    { label: FIELD_LABELS.problem, value: article.problem, weight: 7 },
    { label: FIELD_LABELS.diagnosis, value: article.diagnosis, weight: 6 },
    { label: FIELD_LABELS.cause, value: article.cause, weight: 5 },
    { label: FIELD_LABELS.solution, value: article.solution, weight: 6 },
    { label: FIELD_LABELS.procedure, value: article.procedure, weight: 6 },
    { label: FIELD_LABELS.steps, value: article.steps.join(' '), weight: 5 },
    { label: FIELD_LABELS.validation, value: article.validation, weight: 4 },
    { label: FIELD_LABELS.notes, value: article.notes.join(' '), weight: 3 }
  ];
function getTerms(query: string) {
  return normalize(query)
    .split(' ')
    .map((term) => term.trim())
    .filter((term) => term.length >= 2);
}

function parseDateScore(value: string) {
  const parts = value.match(/(\d{1,2})[/-](\d{1,2})[/-](\d{2,4})/);
  if (!parts) return 0;

  const [, day, month, year] = parts;
  const fullYear = year.length === 2 ? `20${year}` : year;
  const timestamp = new Date(Number(fullYear), Number(month) - 1, Number(day)).getTime();

  return Number.isNaN(timestamp) ? 0 : timestamp;
}
function scoreArticle(query: string, article: Article, audience: ArticleAudience) {
  const normalizedQuery = normalize(query);
  const terms = getTerms(query);
  const searchableText = normalize(getArticleSearchText(article, audience));

function getRelevance(score: number): SearchRelevance {
  if (score >= 30) return 'Alta';
  if (score >= 14) return 'Média';
  return 'Baixa';
}
  if (!normalizedQuery || !terms.length || !searchableText) return 0;

function scoreArticle(article: Article, query: string): ArticleSearchResult {
  const normalizedQuery = normalizeText(query);
  const words = normalizedQuery.split(' ').filter(Boolean);
  const matchedFields = new Set<string>();
  const title = normalize(article.title);
  const code = normalize(article.code);
  const category = normalize(article.category);

let score = 0;

  toWeightedFields(article).forEach((field) => {
    const normalizedField = normalizeText(field.value);
    if (!normalizedField) return;

    if (normalizedField.includes(normalizedQuery)) {
      score += field.weight * 2;
      matchedFields.add(field.label);
    }

    words.forEach((word) => {
      if (word.length < 2) return;

      if (normalizedField.includes(word)) {
        score += field.weight;
        matchedFields.add(field.label);
      }

      if (normalizedField.split(' ').some((token) => token.startsWith(word))) {
        score += Math.ceil(field.weight / 2);
        matchedFields.add(field.label);
      }
    });
  });

  return {
    article,
    score,
    relevance: getRelevance(score),
    matchedFields: Array.from(matchedFields).slice(0, 5)
  };
}

export function searchArticles(query: string, articles: Article[], options?: SearchOptions): ArticleSearchResult[] {
  const limit = options?.limit ?? 10;
  const normalizedCategory = normalizeText(options?.category ?? '');

  const allowedArticles = getAllowedArticles(articles, options?.audience).filter((article) => {
    if (!normalizedCategory) return true;
    return normalizeText(article.category) === normalizedCategory;
  });

  if (!query.trim()) {
    return allowedArticles
      .slice()
      .sort((a, b) => parseDateScore(b.updatedAt) - parseDateScore(a.updatedAt))
      .slice(0, limit)
      .map((article) => ({
        article,
        score: 0,
        relevance: 'Baixa',
        matchedFields: []
      }));
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

  const results = allowedArticles
    .map((article) => scoreArticle(article, query))
    .filter((result) => result.score > 0);
  return score;
}

  if (options?.sort === 'recent') {
    results.sort((a, b) => parseDateScore(b.article.updatedAt) - parseDateScore(a.article.updatedAt));
  } else {
    results.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return parseDateScore(b.article.updatedAt) - parseDateScore(a.article.updatedAt);
    });
  }
export function searchArticles(query: string, allArticles: Article[], options: SearchOptions = {}) {
  const audience = options.audience ?? 'agent';
  const limit = options.limit ?? 10;

  return results.slice(0, limit);
}
  if (!normalize(query)) return [];

export function getRecommendedArticles(articles: Article[], audience: SearchMode, limit = 6) {
  return getAllowedArticles(articles, audience)
    .slice()
    .sort((a, b) => parseDateScore(b.updatedAt) - parseDateScore(a.updatedAt))
    .slice(0, limit);
  return allArticles
    .filter((article) => canViewArticle(article, audience))
    .map((article) => ({ article, score: scoreArticle(query, article, audience) }))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score || a.article.title.localeCompare(b.article.title, 'pt-PT'))
    .slice(0, limit)
    .map((result) => result.article);
}

export function buildAnswer(article: Article): string {
  const steps = article.steps.length
    ? article.steps.map((step, index) => `${index + 1}. ${step}`).join('\n')
    : article.procedure;

  return `Encontrei este artigo na base de conhecimento: "${article.title}" (${article.code}).\n\n${article.problem}\n\n${steps}\n\nValidação final: ${article.validation}`;
export function buildAnswer(article: Article, options: SearchOptions = {}) {
  return getArticleAnswerText(article, options.audience ?? 'agent');
}
