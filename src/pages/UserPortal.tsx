import { BookOpen } from 'lucide-react';
import { useMemo, useState } from 'react';
import { KnowledgeBaseIndex, ALL_ARTICLES_KEY } from '../components/KnowledgeBaseIndex';
import { KnowledgeSearch } from '../components/KnowledgeSearch';
import { Tabs } from '../components/Tabs';
import { TrainingVideos } from '../components/TrainingVideos';
import { articles } from '../data/articles';
import { getArticleGroups, getArticleGroupName, sortArticlesByGroupAndTitle } from '../utils/articleGroups';

interface Props {
  onOpenArticle: (articleId: string) => void;
}

export function UserPortal({ onOpenArticle }: Props) {
  const [tab, setTab] = useState('search');
  const [selectedGroup, setSelectedGroup] = useState('');

  const userArticles = useMemo(
    () => articles.filter((article) => article.availableForUser).sort(sortArticlesByGroupAndTitle),
    []
  );

  const articleGroups = useMemo(() => getArticleGroups(userArticles), [userArticles]);

  const visibleArticles = useMemo(
    () => userArticles.filter((article) => {
      if (!selectedGroup || selectedGroup === ALL_ARTICLES_KEY) return true;
      return getArticleGroupName(article) === selectedGroup;
    }),
    [selectedGroup, userArticles]
  );

  return (
    <main className="page">
      <section className="app-card">
        <Tabs
          active={tab}
          onChange={setTab}
          tone="teal"
          tabs={[
            { key: 'search', label: 'Pesquisa' },
            { key: 'kb', label: 'Base de conhecimento' },
            { key: 'videos', label: 'Vídeos formativos' }
          ]}
        />

        {tab === 'search' ? (
          <KnowledgeSearch mode="user" onOpenArticle={onOpenArticle} />
        ) : tab === 'kb' ? (
          <>
            <div className="section-header kb-section-header">
              <div>
                <h2>Base de conhecimento</h2>
                <span>
                  {selectedGroup && selectedGroup !== ALL_ARTICLES_KEY
                    ? `${visibleArticles.length} de ${userArticles.length} artigos disponíveis para utilizador · ${selectedGroup}`
                    : `${userArticles.length} artigos disponíveis para utilizador`}
                </span>
              </div>
              <BookOpen size={22} />
            </div>

            <KnowledgeBaseIndex
              groups={articleGroups}
              totalArticles={userArticles.length}
              selectedGroup={selectedGroup}
              tone="teal"
              onSelectGroup={setSelectedGroup}
            />

            {(selectedGroup || selectedGroup === ALL_ARTICLES_KEY) && (
              <div className="kb-grid">
                {visibleArticles.map((article) => (
                  <article key={article.id} className="kb-card" onClick={() => onOpenArticle(article.id)}>
                    <span>{getArticleGroupName(article)} / {article.category}</span>
                    <h2>{article.title}</h2>
                    <p>{article.procedure || article.notes.join(' ') || 'Artigo disponível na base de conhecimento.'}</p>
                  </article>
                ))}
              </div>
            )}
          </>
        ) : (
          <TrainingVideos />
        )}
      </section>
    </main>
  );
}
