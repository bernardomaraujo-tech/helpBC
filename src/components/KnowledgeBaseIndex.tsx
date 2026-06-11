import { Layers3 } from 'lucide-react';
import type { ArticleGroupSummary } from '../utils/articleGroups';

interface Props {
  groups: ArticleGroupSummary[];
  totalArticles: number;
  selectedGroup: string;
  tone: 'teal' | 'purple';
  onSelectGroup: (group: string) => void;
}

function getArticleCountLabel(count: number) {
  return count === 1 ? '1 artigo' : `${count} artigos`;
}

export function KnowledgeBaseIndex({ groups, totalArticles, selectedGroup, tone, onSelectGroup }: Props) {
  const hasSelectedGroup = Boolean(selectedGroup);

  return (
    <section className={`kb-index-panel kb-index-${tone}`}>
      <div className="section-header kb-index-header">
        <div>
          <h2>Índice por grupo</h2>
          <span>{groups.length} grupos disponíveis · ordenado de A a Z</span>
        </div>
        <Layers3 size={22} />
      </div>

      <div className="kb-index-toolbar">
        <button
          type="button"
          className={hasSelectedGroup ? 'kb-index-all' : 'kb-index-all active'}
          onClick={() => onSelectGroup('')}
        >
          Todos os artigos
          <strong>{totalArticles}</strong>
        </button>

        {hasSelectedGroup && (
          <span className="kb-index-active-filter">
            Grupo selecionado: <strong>{selectedGroup}</strong>
          </span>
        )}
      </div>

      <div className="kb-index-grid" aria-label="Índice de grupos da base de conhecimento">
        {groups.map((group) => (
          <button
            key={group.name}
            type="button"
            className={selectedGroup === group.name ? 'kb-index-card active' : 'kb-index-card'}
            onClick={() => onSelectGroup(group.name)}
          >
            <span>{group.name}</span>
            <strong>{getArticleCountLabel(group.count)}</strong>
          </button>
        ))}
      </div>
    </section>
  );
}
