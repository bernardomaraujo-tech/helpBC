import type { Ticket } from '../types';

export const initialTickets: Ticket[] = [
  {
    id: 'TCK-001',
    subject: 'Anular fatura',
    requester: 'João Silva',
    area: 'Vendas',
    status: 'Aberto',
    priority: 'Alta',
    createdAt: '10:24',
    message: 'Como posso anular uma fatura de venda registada?',
    suggestedArticleId: 'sal-prepay-001'
  },
  {
    id: 'TCK-002',
    subject: 'Erro ao contabilizar',
    requester: 'Maria Costa',
    area: 'Compras',
    status: 'Aberto',
    priority: 'Média',
    createdAt: '09:58',
    message: 'Tenho erro ao tentar registar uma nota de crédito de compra.',
    suggestedArticleId: 'fin-rec-001'
  },
  {
    id: 'TCK-003',
    subject: 'Aprovação bloqueada',
    requester: 'Rui Pereira',
    area: 'Aprovações',
    status: 'Em espera',
    priority: 'Média',
    createdAt: '09:32',
    message: 'A encomenda está bloqueada em aprovação e o aprovador está ausente.',
    suggestedArticleId: 'sal-app-001'
  }
];
