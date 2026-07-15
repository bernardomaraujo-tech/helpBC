import type { Article } from '../types';

export type ArticleAudience = 'user' | 'agent';

function cleanMarkdown(value?: string) {
  return String(value ?? '')
    .replace(/\r\n/g, '\n')
    .replace(/\*\*/g, '')
    .replace(/#{1,6}\s*/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function notesToMarkdown(notes?: string[]) {
  return (notes ?? [])
    .map((note) => String(note).trim())
    .filter(Boolean)
    .map((note) => (/^[-*]\s/.test(note) ? note : `- ${note}`))
    .join('\n');
}

function clip(value: string, maxLength = 190) {
  const cleaned = cleanMarkdown(value).replace(/\s+/g, ' ').trim();
  if (cleaned.length <= maxLength) return cleaned;
  return `${cleaned.slice(0, maxLength).trim()}...`;
}

function fullArticleMarkdown(article: Article) {
  return [
    `## ${article.code} — ${article.title}`,
    `**Categoria:** ${article.category}`,
    `**Disponível para Utilizador:** ${article.availableForUser ? 'Sim' : 'Não'}`,
    `**Disponível para Agente:** ${article.availableForAgent ? 'Sim' : 'Não'}`,
    article.problem ? `**Problema**\n${article.problem}` : '',
    article.diagnosis ? `**Diagnóstico**\n${article.diagnosis}` : '',
    article.cause ? `**Causa provável**\n${article.cause}` : '',
    article.solution ? `**Solução**\n${article.solution}` : '',
    article.procedure ? `**Como proceder**\n${article.procedure}` : '',
    article.validation ? `**Validação final**\n${article.validation}` : '',
    (article.notes ?? []).length ? `**Notas**\n${notesToMarkdown(article.notes)}` : ''
  ]
    .filter(Boolean)
    .join('\n\n');
}

export function canViewArticle(article: Article, audience: ArticleAudience = 'agent') {
  if (audience === 'agent') return article.availableForAgent !== false;
  return article.availableForUser === true;
}

export function getArticleSearchText(article: Article, audience: ArticleAudience = 'agent') {
  if (!canViewArticle(article, audience)) return '';

  const notes = (article.notes ?? []).join(' ');

  if (audience === 'user') {
    return [article.code, article.title, article.category, article.procedure, notes]
      .filter(Boolean)
      .join(' ');
  }

  return [
    article.code,
    article.title,
    article.category,
    ...(article.tags ?? []),
    article.problem,
    article.diagnosis,
    article.cause,
    article.solution,
    article.procedure,
    article.validation,
    notes,
    article.rawMarkdown
  ]
    .filter(Boolean)
    .join(' ');
}

export function getArticlePreview(article: Article, audience: ArticleAudience = 'user') {
  if (!canViewArticle(article, audience)) return '';

  if (audience === 'user') {
    return clip(article.procedure || notesToMarkdown(article.notes) || article.title);
  }

  return clip(article.problem || article.solution || article.procedure || article.title);
}

export function getVisibleArticleMarkdown(article: Article, audience: ArticleAudience = 'agent') {
  if (!canViewArticle(article, audience)) return '';

  if (audience === 'agent') {
    return article.rawMarkdown || fullArticleMarkdown(article);
  }

  return [
    `## ${article.code} — ${article.title}`,
    `**Categoria:** ${article.category}`,
    `**Como proceder**\n${article.procedure?.trim() || 'Sem procedimento definido.'}`,
    `**Notas finais**\n${notesToMarkdown(article.notes) || 'Sem notas finais.'}`
  ]
    .filter(Boolean)
    .join('\n\n');
}

export function getArticleAnswerText(article: Article, audience: ArticleAudience = 'agent') {
  if (!canViewArticle(article, audience)) {
    return 'Este artigo não está disponível para este perfil.';
  }

  if (audience === 'user') {
    return [
      article.title,
      '',
      'Como proceder',
      article.procedure?.trim() || 'Sem procedimento definido.',
      '',
      'Notas finais',
      notesToMarkdown(article.notes) || 'Sem notas finais.'
    ]
      .join('\n')
      .trim();
  }

  return [
    article.title,
    '',
    article.problem ? `Problema\n${article.problem}` : '',
    article.diagnosis ? `Diagnóstico\n${article.diagnosis}` : '',
    article.cause ? `Causa provável\n${article.cause}` : '',
    article.solution ? `Solução\n${article.solution}` : '',
    article.procedure ? `Como proceder\n${article.procedure}` : '',
    article.validation ? `Validação final\n${article.validation}` : '',
    (article.notes ?? []).length ? `Notas\n${notesToMarkdown(article.notes)}` : ''
  ]
    .filter(Boolean)
    .join('\n\n')
    .trim();
}
