import { BookOpen, Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { KnowledgeSearch } from '../components/KnowledgeSearch';
import { Tabs } from '../components/Tabs';
import { articles } from '../data/articles';

interface Props {
  onOpenArticle: (articleId: string) => void;
}

export function UserPortal({ onOpenArticle }: Props) {
  const [tab, setTab] = useState('search');

  const userArticles = useMemo(() => articles.filter((article) => article.availableForUser), []);

  return (
    <main className="page">
      <section className="portal-title portal-title-row">
        <div>
          <span className="eyebrow">Portal Utilizador</span>
          <h1>Como podemos ajudar?</h1>
          <p>Pesquisa e consulta artigos disponíveis para utilizadores.</p>
        </div>
      </section>

      <section className="app-card">
        <Tabs
          active={tab}
          onChange={setTab}
          tone="teal"
          tabs={[
            { key: 'search', label: 'Pesquisa' },
            { key: 'kb', label: 'Base de conhecimento' }
          ]}
        />

        {tab === 'search' ? (
          <KnowledgeSearch mode="user" onOpenArticle={onOpenArticle} />
        ) : (
          <>
            <div className="section-header kb-section-header">
              <div>
                <h2>Base de conhecimento</h2>
                <span>{userArticles.length} artigos disponíveis para utilizador</span>
              </div>
              <BookOpen size={22} />
            </div>

            <div className="kb-grid">
              {userArticles.map((article) => (
                <article key={article.id} className="kb-card" onClick={() => onOpenArticle(article.id)}>
                  <span>{article.category}</span>
                  <h2>{article.title}</h2>
                  <p>{article.problem}</p>
                </article>
              ))}

              {userArticles.length === 0 && (
                <div className="empty-search-state full-width-state">
                  <Search size={28} />
                  <strong>Ainda não existem artigos disponíveis para utilizador.</strong>
                  <p>Os artigos ficam visíveis aqui quando estiverem marcados como disponíveis para utilizador.</p>
                </div>
              )}
            </div>
          </>
        )}
      </section>
    </main>
  );
}
