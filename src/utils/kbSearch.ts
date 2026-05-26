import type { Article } from '../types';

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

export function searchArticles(
  query: string,
  articles: Article[],
  options?: { audience?: 'user' | 'agent' }
): Article[] {
  const allowedArticles = articles.filter((article) => {
    if (options?.audience === 'user') return article.availableForUser;
    if (options?.audience === 'agent') return article.availableForAgent;
    return true;
  });

  const q = normalize(query);

  if (!q.trim()) {
    return allowedArticles.slice(0, 6);
  }

  return allowedArticles
    .map((article) => {
      const haystack = normalize([
        article.code,
        article.title,
        article.category,
        article.problem,
        article.diagnosis,
        article.cause,
        article.solution,
        article.procedure,
        article.validation,
        ...article.tags,
        ...article.steps,
        ...article.notes
      ].join(' '));

      const words = q.split(/\s+/).filter(Boolean);
      const score = words.reduce((total, word) => total + (haystack.includes(word) ? 1 : 0), 0);

      return { article, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.article)
    .slice(0, 8);
}

export function buildAnswer(article: Article): string {
  const steps = article.steps.length
    ? article.steps.map((step, index) => `${index + 1}. ${step}`).join('\n')
    : article.procedure;

  return `Encontrei este artigo na knowledge base: "${article.title}" (${article.code}).\n\n${article.problem}\n\n${steps}\n\nValidação final: ${article.validation}\n\nSe isto não resolver, podes enviar o pedido para um agente.`;
}
