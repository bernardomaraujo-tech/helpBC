import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

interface Props {
  title: string;
  description: string;
  icon: LucideIcon;
  tone: 'user' | 'agent';
  onClick: () => void;
}

export function EntryCard({ title, description, icon: Icon, tone, onClick }: Props) {
  return (
    <button className={`entry-card entry-card-${tone}`} onClick={onClick}>
      <div className="entry-icon">
        <Icon size={36} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="entry-button">
        Entrar como {title.toLowerCase()}
        <ArrowRight size={16} />
      </span>
    </button>
  );
}
