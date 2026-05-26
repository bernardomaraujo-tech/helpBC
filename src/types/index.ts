export type Role = 'entry' | 'user' | 'agent';

export type ArticleCategory = string;

export interface Article {
  id: string;
  code: string;
  title: string;
  category: ArticleCategory;
  availableForUser: boolean;
  availableForAgent: boolean;
  tags: string[];
  updatedAt: string;
  readTime: string;
  problem: string;
  diagnosis: string;
  cause: string;
  solution: string;
  procedure: string;
  steps: string[];
  validation: string;
  notes: string[];
  rawMarkdown: string;
}

export type TicketStatus = 'Aberto' | 'Em espera' | 'Resolvido';
export type TicketPriority = 'Baixa' | 'Média' | 'Alta';

export interface Ticket {
  id: string;
  subject: string;
  requester: string;
  area: ArticleCategory;
  status: TicketStatus;
  priority: TicketPriority;
  createdAt: string;
  message: string;
  suggestedArticleId?: string;
}

export interface ChatMessage {
  id: string;
  author: 'user' | 'assistant';
  text: string;
  createdAt: string;
}
