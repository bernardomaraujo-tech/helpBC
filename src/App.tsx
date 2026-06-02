import { useState } from 'react';
import { AppHeader } from './components/AppHeader';
import { BrandShapes } from './components/BrandShapes';
import { AgentPortal } from './pages/AgentPortal';
import { ArticlePage } from './pages/ArticlePage';
import { EntryPage } from './pages/EntryPage';
import { UserPortal } from './pages/UserPortal';
import type { Role } from './types';

type View =
  | { name: 'entry' }
  | { name: 'user' }
  | { name: 'agent' }
  | { name: 'article'; articleId: string; previous: Role };

export default function App() {
  const [view, setView] = useState<View>({ name: 'entry' });

  const currentRole: Role = view.name === 'article' ? view.previous : view.name;

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

  return (
    <div className="app-shell">
      <BrandShapes />
      <AppHeader role={currentRole} onNavigate={navigateToRole} />

      {view.name === 'entry' && <EntryPage onSelectRole={navigateToRole} />}
      {view.name === 'user' && <UserPortal onOpenArticle={openArticle} />}
      {view.name === 'agent' && <AgentPortal onOpenArticle={openArticle} />}
      {view.name === 'article' && <ArticlePage articleId={view.articleId} onBack={backFromArticle} />}
    </div>
  );
}
