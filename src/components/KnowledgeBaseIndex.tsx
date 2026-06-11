import {
  ArrowRightLeft,
  BarChart3,
  BookOpen,
  Box,
  BriefcaseBusiness,
  CheckCircle2,
  FileSpreadsheet,
  KeyRound,
  Layers3,
  LockKeyhole,
  LogIn,
  MapPin,
  Monitor,
  Package,
  ShoppingCart,
  Smartphone,
  Target,
  Truck,
  User,
  Users,
  type LucideIcon
} from 'lucide-react';
import type { ArticleGroupSummary } from '../utils/articleGroups';

interface Props {
  groups: ArticleGroupSummary[];
  totalArticles: number;
  selectedGroup: string;
  tone: 'teal' | 'purple';
  onSelectGroup: (group: string) => void;
}

const ALL_ARTICLES_KEY = '__ALL__';

function getArticleCountLabel(count: number) {
  return count === 1 ? '1 artigo' : `${count} artigos`;
}

function normalize(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLowerCase();
}

const groupIcons: Record<string, LucideIcon> = {
  acesso: LogIn,
  aprovacoes: CheckCircle2,
  'business central': BriefcaseBusiness,
  clientes: Users,
  compras: ShoppingCart,
  excel: FileSpreadsheet,
  financeiro: BarChart3,
  fornecedores: Truck,
  inventario: Box,
  logistica: MapPin,
  mobilidade: Smartphone,
  oportunidades: Target,
  'portal cliente': Monitor,
  pricing: KeyRound,
  produtos: Package,
  stock: BarChart3,
  transferencias: ArrowRightLeft,
  utilizadores: User,
  'centro de perfil': User
};

function getGroupIcon(groupName: string) {
  return groupIcons[normalize(groupName)] ?? BookOpen;
}

function getSelectedGroupLabel(selectedGroup: string) {
  if (selectedGroup === ALL_ARTICLES_KEY) {
    return 'Todos os artigos';
  }

  return selectedGroup;
}

export { ALL_ARTICLES_KEY };

export function KnowledgeBaseIndex({ groups, totalArticles, selectedGroup, tone, onSelectGroup }: Props) {
  const hasSelectedGroup = Boolean(selectedGroup);
  const selectedGroupLabel = getSelectedGroupLabel(selectedGroup);

  return (
    <section className={`kb-index-panel kb-index-${tone}`}>
      <div className="section-header kb-index-header">
        <div>
          <h2>Índice por grupo</h2>
          <span>{groups.length} grupos disponíveis · ordenado de A a Z</span>
        </div>
        <Layers3 size={22} />
      </div>

      <div className="kb-index-grid" aria-label="Índice de grupos da base de conhecimento">
        {groups.map((group) => {
          const Icon = getGroupIcon(group.name);

          return (
            <button
              key={group.name}
              type="button"
              className={selectedGroup === group.name ? 'kb-index-card active' : 'kb-index-card'}
              onClick={() => onSelectGroup(group.name)}
            >
              <span className="kb-index-icon" aria-hidden="true">
                <Icon size={24} strokeWidth={2.2} />
              </span>
              <span className="kb-index-card-copy">
                <strong>{group.name}</strong>
                <small>{getArticleCountLabel(group.count)}</small>
              </span>
            </button>
          );
        })}
      </div>

      <div className="kb-index-results-row">
        {hasSelectedGroup ? (
          <div className="kb-index-selected">
            <span className="kb-index-selected-icon" aria-hidden="true">
              {selectedGroup === ALL_ARTICLES_KEY ? <BookOpen size={22} /> : <LogIn size={22} />}
            </span>
            <span>
              Grupo selecionado: <strong>{selectedGroupLabel}</strong>
            </span>
          </div>
        ) : (
          <div className="kb-index-selected kb-index-selected-muted">
            <span className="kb-index-selected-icon" aria-hidden="true">
              <BookOpen size={22} />
            </span>
            <span>Seleciona um grupo para consultar os respetivos artigos.</span>
          </div>
        )}

        <button type="button" className="kb-index-link" onClick={() => onSelectGroup(ALL_ARTICLES_KEY)}>
          Ver todos os artigos
          <ArrowRightLeft size={17} />
          <strong>{totalArticles}</strong>
        </button>
      </div>
    </section>
  );
}
