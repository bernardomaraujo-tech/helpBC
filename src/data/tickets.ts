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
    updatedAt: '10:24',
    message: 'Como posso anular uma fatura de venda registada?',
    suggestedArticleId: 'sal-prepay-001',
    messages: [
      {
        id: 'TCK-001-M1',
        author: 'user',
        text: 'Como posso anular uma fatura de venda registada?',
        createdAt: '10:24'
      }
    ]
  },
  {
    id: 'TCK-002',
    subject: 'Erro ao contabilizar',
    requester: 'Maria Costa',
    area: 'Compras',
    status: 'Aberto',
    priority: 'Média',
    createdAt: '09:58',
    updatedAt: '09:58',
    message: 'Tenho erro ao tentar registar uma nota de crédito de compra.',
    suggestedArticleId: 'fin-rec-001',
    messages: [
      {
        id: 'TCK-002-M1',
        author: 'user',
        text: 'Tenho erro ao tentar registar uma nota de crédito de compra.',
        createdAt: '09:58'
      }
    ]
  },
  {
    id: 'TCK-003',
    subject: 'Aprovação bloqueada',
    requester: 'Rui Pereira',
    area: 'Aprovações',
    status: 'Em espera',
    priority: 'Média',
    createdAt: '09:32',
    updatedAt: '09:32',
    message: 'A encomenda está bloqueada em aprovação e o aprovador está ausente.',
    suggestedArticleId: 'sal-app-001',
    messages: [
      {
        id: 'TCK-003-M1',
        author: 'user',
        text: 'A encomenda está bloqueada em aprovação e o aprovador está ausente.',
        createdAt: '09:32'
      },
      {
        id: 'TCK-003-M2',
        author: 'agent',
        text: 'Estou a validar a configuração de aprovação e o gestor comercial associado ao documento.',
        createdAt: '09:40'
      }
    ]
  }
];
