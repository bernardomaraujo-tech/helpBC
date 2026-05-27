import { useState } from 'react';
import { AppHeader } from './components/AppHeader';
import { BrandShapes } from './components/BrandShapes';
import { initialTickets } from './data/tickets';
import { AgentPortal } from './pages/AgentPortal';
import { ArticlePage } from './pages/ArticlePage';
import { EntryPage } from './pages/EntryPage';
import { UserPortal } from './pages/UserPortal';
import type { ConversationAuthor, Role, Ticket } from './types';
import { readStorage, writeStorage } from './utils/storage';

type View =
  | { name: 'entry' }
  | { name: 'user' }
  | { name: 'agent' }
  | { name: 'article'; articleId: string; previous: Role };

const STORAGE_KEY = 'apoio-bc-tickets';

function nowLabel() {
  return new Date().toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' });
}

function normaliseTicket(ticket: Ticket): Ticket {
  if (ticket.messages && ticket.messages.length > 0) return ticket;

  return {
    ...ticket,
    updatedAt: ticket.updatedAt ?? ticket.createdAt,
    messages: [
      {
        id: `${ticket.id}-M1`,
        author: 'user',
        text: ticket.message,
        createdAt: ticket.createdAt
      }
    ]
  };
}

export default function App() {
  const [view, setView] = useState<View>({ name: 'entry' });
  const [tickets, setTickets] = useState<Ticket[]>(() =>
    readStorage<Ticket[]>(STORAGE_KEY, initialTickets).map(normaliseTicket)
  );

  const currentRole: Role = view.name === 'article' ? view.previous : view.name;

  function updateTickets(nextTickets: Ticket[]) {
    const normalisedTickets = nextTickets.map(normaliseTicket);
    setTickets(normalisedTickets);
    writeStorage(STORAGE_KEY, normalisedTickets);
  }

  function openArticle(articleId: string) {
    const previous: Role = currentRole === 'agent' ? 'agent' : 'user';
    setView({ name: 'article', articleId, previous });
  }

  function navigateToRole(role: Role) {
    if (role === 'entry') setView({ name: 'entry' });
    if (role === 'user') setView({ name: 'user' });
    if (role === 'agent') setView({ name: 'agent' });
  }

  function backFromArticle() {
    if (view.name === 'article') {
      navigateToRole(view.previous);
    }
  }

  function addTicket(ticket: Ticket) {
    const normalisedTicket = normaliseTicket(ticket);
    updateTickets([normalisedTicket, ...tickets]);
  }

  function addTicketMessage(ticketId: string, author: ConversationAuthor, text: string) {
    const createdAt = nowLabel();

    updateTickets(
      tickets.map((ticket) => {
        if (ticket.id !== ticketId) return ticket;

        const nextStatus = author === 'agent' && ticket.status === 'Aberto' ? 'Em espera' : ticket.status;

        return {
          ...ticket,
          status: nextStatus,
          updatedAt: createdAt,
          messages: [
            ...(ticket.messages ?? []),
            {
              id: `${ticket.id}-${Date.now()}`,
              author,
              text,
              createdAt
            }
          ]
        };
      })
    );
  }

  function closeTicket(ticketId: string) {
    updateTickets(
      tickets.map((ticket) =>
        ticket.id === ticketId
          ? {
              ...ticket,
              status: 'Resolvido',
              updatedAt: nowLabel()
            }
          : ticket
      )
    );
  }

  return (
    <div className="app-shell">
      <BrandShapes />
      <AppHeader role={currentRole} onNavigate={navigateToRole} />

      {view.name === 'entry' && <EntryPage onSelectRole={navigateToRole} />}
      {view.name === 'user' && (
        <UserPortal
          tickets={tickets}
          onEscalate={addTicket}
          onOpenArticle={openArticle}
          onAddTicketMessage={(ticketId, text) => addTicketMessage(ticketId, 'user', text)}
        />
      )}
      {view.name === 'agent' && (
        <AgentPortal
          tickets={tickets}
          onCloseTicket={closeTicket}
          onOpenArticle={openArticle}
          onSendReply={(ticketId, text) => addTicketMessage(ticketId, 'agent', text)}
        />
      )}
      {view.name === 'article' && (
        <ArticlePage articleId={view.articleId} onBack={backFromArticle} />
      )}
    </div>
  );
}
