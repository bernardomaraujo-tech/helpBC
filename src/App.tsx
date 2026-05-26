import { useState } from 'react';
import { AppHeader } from './components/AppHeader';
import { BrandShapes } from './components/BrandShapes';
import { initialTickets } from './data/tickets';
import { AgentPortal } from './pages/AgentPortal';
import { ArticlePage } from './pages/ArticlePage';
import { EntryPage } from './pages/EntryPage';
import { UserPortal } from './pages/UserPortal';
import type { Role, Ticket } from './types';
import { readStorage, writeStorage } from './utils/storage';

type View =
  | { name: 'entry' }
  | { name: 'user' }
  | { name: 'agent' }
  | { name: 'article'; articleId: string; previous: Role };

const STORAGE_KEY = 'apoio-bc-tickets';

export default function App() {
  const [view, setView] = useState<View>({ name: 'entry' });
  const [tickets, setTickets] = useState<Ticket[]>(() => readStorage(STORAGE_KEY, initialTickets));

  const currentRole: Role = view.name === 'article' ? view.previous : view.name;

  function updateTickets(nextTickets: Ticket[]) {
    setTickets(nextTickets);
    writeStorage(STORAGE_KEY, nextTickets);
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
    updateTickets([ticket, ...tickets]);
  }

  function closeTicket(ticketId: string) {
    updateTickets(
      tickets.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, status: 'Resolvido' } : ticket
      )
    );
  }

  return (
    <div className="app-shell">
      <BrandShapes />
      <AppHeader role={currentRole} onNavigate={navigateToRole} />

      {view.name === 'entry' && <EntryPage onSelectRole={navigateToRole} />}
      {view.name === 'user' && (
        <UserPortal tickets={tickets} onEscalate={addTicket} onOpenArticle={openArticle} />
      )}
      {view.name === 'agent' && (
        <AgentPortal tickets={tickets} onCloseTicket={closeTicket} onOpenArticle={openArticle} />
      )}
      {view.name === 'article' && (
        <ArticlePage articleId={view.articleId} onBack={backFromArticle} />
      )}
    </div>
  );
}
