import { BookOpen, Database, FileSearch } from 'lucide-react';
import { useMemo, useState } from 'react';
import { KnowledgeBaseIndex } from '../components/KnowledgeBaseIndex';
import { KnowledgeSearch } from '../components/KnowledgeSearch';
import { KpiCard } from '../components/KpiCard';
import { Tabs } from '../components/Tabs';
import { TrainingVideos } from '../components/TrainingVideos';
import { articles } from '../data/articles';
import { getArticleGroups, getArticleGroupName, sortArticlesByGroupAndTitle } from '../utils/articleGroups';
import { KnowledgeBaseEditor } from './KnowledgeBaseEditor';

interface Props {
  onOpenArticle: (articleId: string) => void;
}

export function AgentPortal({ onOpenArticle }: Props) {
  const [tab, setTab] = useState('search');
  const [selectedGroup, setSelectedGroup] = useState('');

  const agentArticles = useMemo(
    () => articles.filter((article) => article.availableForAgent).sort(sortArticlesByGroupAndTitle),
    []
  );
  const userVisibleArticles = useMemo(() => articles.filter((article) => article.availableForUser), []);
  const categories = useMemo(() => new Set(articles.map((article) => article.category)).size, []);
  const articleGroups = useMemo(() => getArticleGroups(agentArticles), [agentArticles]);
  const visibleArticles = useMemo(
    () => agentArticles.filter((article) => !selectedGroup || getArticleGroupName(article) === selectedGroup),
    [agentArticles, selectedGroup]
  );

  return (
    <main className="page">
      <section className="portal-title portal-title-row">
        <div>
          <span className="eyebrow">Portal Agente</span>
          <h1>Centro de conhecimento</h1>
          <p>Pesquisa, consulta e gestão da base de conhecimento Business Central.</p>
        </div>
      </section>

      <section className="app-card">
        <div className="kpi-grid">
          <KpiCard label="Artigos disponíveis para agente" value={agentArticles.length} icon={FileSearch} tone="purple" />
          <KpiCard label="Artigos disponíveis para utilizador" value={userVisibleArticles.length} icon={BookOpen} tone="teal" />
          <KpiCard label="Categorias na KB" value={categories} icon={Database} tone="orange" />
        </div>

        <Tabs
          active={tab}
          onChange={setTab}
          tone="purple"
          tabs={[
            { key: 'search', label: 'Pesquisa' },
            { key: 'kb', label: 'Base de conhecimento' },
            { key: 'videos', label: 'Vídeos formativos' },
            { key: 'management', label: 'Gestão da KB' }
          ]}
        />

        {tab === 'search' ? (
          <KnowledgeSearch mode="agent" onOpenArticle={onOpenArticle} />
        ) : tab === 'kb' ? (
          <>
            <div className="section-header kb-section-header">
              <div>
                <h2>Base de conhecimento interna</h2>
                <span>
                  {selectedGroup
                    ? `${visibleArticles.length} de ${agentArticles.length} artigos disponíveis para agente · ${selectedGroup}`
                    : `${agentArticles.length} artigos disponíveis para agente`}
                </span>
              </div>
              <BookOpen size={22} />
            </div>

            <KnowledgeBaseIndex
              groups={articleGroups}
              totalArticles={agentArticles.length}
              selectedGroup={selectedGroup}
              tone="purple"
              onSelectGroup={setSelectedGroup}
            />

            <div className="kb-grid">
              {visibleArticles.map((article) => (
                <article key={article.id} className="kb-card" onClick={() => onOpenArticle(article.id)}>
                  <span>{getArticleGroupName(article)} / {article.category}</span>
                  <h2>{article.title}</h2>
                  <p>{article.problem}</p>
                  <div className="availability compact-availability">
                    <span className={article.availableForUser ? 'available' : 'not-available'}>
                      Utilizador: {article.availableForUser ? 'Sim' : 'Não'}
                    </span>
                    <span className={article.availableForAgent ? 'available' : 'not-available'}>
                      Agente: {article.availableForAgent ? 'Sim' : 'Não'}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </>
        ) : tab === 'videos' ? (
          <TrainingVideos />
        ) : (
          <KnowledgeBaseEditor />
        )}
      </section>
    </main>
  );
}
