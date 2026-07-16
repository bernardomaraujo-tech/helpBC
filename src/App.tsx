import { useEffect, useState } from 'react';
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

function getHashRoute() {
  return window.location.hash.replace(/^#/, '');
}

function parseRole(value: string | null): Role {
  return value === 'agent' ? 'agent' : 'user';
}

function getViewFromUrl(): View {
  const route = getHashRoute();

  if (!route || route === '/' || route === '/entry') {
    return { name: 'entry' };
  }

  if (route === '/user') {
    return { name: 'user' };
  }

  if (route === '/agent') {
    return { name: 'agent' };
  }

  const [path, queryString = ''] = route.split('?');
  const articleMatch = path.match(/^\/artigo\/([^/]+)$/);

  if (articleMatch) {
    const params = new URLSearchParams(queryString);
    return {
      name: 'article',
      articleId: decodeURIComponent(articleMatch[1]),
      previous: parseRole(params.get('modo'))
    };
  }

  return { name: 'entry' };
}

function setUrlForView(view: View) {
  const nextHash = view.name === 'entry'
    ? '#/'
    : view.name === 'article'
      ? `#/artigo/${encodeURIComponent(view.articleId)}?modo=${view.previous}`
      : `#/${view.name}`;

  if (window.location.hash !== nextHash) {
    window.location.hash = nextHash;
  }
}

export default function App() {
  const [view, setView] = useState<View>(() => getViewFromUrl());

  useEffect(() => {
    function handleHashChange() {
      setView(getViewFromUrl());
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const currentRole: Role = view.name === 'article' ? view.previous : view.name;

  function openArticle(articleId: string) {
    const previous: Role = currentRole === 'agent' ? 'agent' : 'user';
    const nextView: View = { name: 'article', articleId, previous };
    setView(nextView);
    setUrlForView(nextView);
  }

  function navigateToRole(role: Role) {
    const nextView: View =
      role === 'entry' ? { name: 'entry' } : role === 'agent' ? { name: 'agent' } : { name: 'user' };

    setView(nextView);
    setUrlForView(nextView);
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
      {view.name === 'article' && (
        <ArticlePage
          articleId={view.articleId}
          audience={view.previous === 'agent' ? 'agent' : 'user'}
          onBack={backFromArticle}
        />
      )}
    </div>
  );
}
