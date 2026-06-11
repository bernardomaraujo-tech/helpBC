import type { Article } from '../types';

export interface ArticleGroupSummary {
  name: string;
  count: number;
}

function removeAccents(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function normalize(value: string) {
  return removeAccents(value).trim().toLowerCase();
}

function getBaseCategory(category: string) {
  return category.split('/')[0]?.trim() || 'Sem categoria';
}

const categoryAliases: Record<string, string> = {
  'agt': 'AGT',
  'armazem': 'Armazém',
  'business central': 'Business Central',
  'centro de perfil': 'Centro de Perfil',
  'dtqar': 'DTQAR',
  'financeira': 'Financeiro',
  'financeiro': 'Financeiro',
  'logistica externa': 'Logística',
  'portal cliente': 'Portal Cliente',
  'pricing': 'Pricing',
  'pricing & modelo comercial': 'Pricing',
  'stock': 'Stock'
};

export function getArticleGroupName(article: Article) {
  const baseCategory = getBaseCategory(article.category);
  const normalizedBase = normalize(baseCategory);

  return categoryAliases[normalizedBase] ?? baseCategory;
}

export function sortArticlesByGroupAndTitle(articleA: Article, articleB: Article) {
  const groupComparison = getArticleGroupName(articleA).localeCompare(getArticleGroupName(articleB), 'pt', {
    sensitivity: 'base'
  });

  if (groupComparison !== 0) {
    return groupComparison;
  }

  return articleA.title.localeCompare(articleB.title, 'pt', { sensitivity: 'base' });
}

export function getArticleGroups(articles: Article[]): ArticleGroupSummary[] {
  const grouped = articles.reduce<Record<string, number>>((accumulator, article) => {
    const groupName = getArticleGroupName(article);
    accumulator[groupName] = (accumulator[groupName] ?? 0) + 1;
    return accumulator;
  }, {});

  return Object.entries(grouped)
    .map(([name, count]) => ({ name, count }))
    .sort((groupA, groupB) => groupA.name.localeCompare(groupB.name, 'pt', { sensitivity: 'base' }));
}
