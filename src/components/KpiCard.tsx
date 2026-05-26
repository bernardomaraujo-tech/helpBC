import type { LucideIcon } from 'lucide-react';

interface Props {
  label: string;
  value: string | number;
  icon: LucideIcon;
  tone: 'teal' | 'purple' | 'orange';
}

export function KpiCard({ label, value, icon: Icon, tone }: Props) {
  return (
    <div className={`kpi-card kpi-${tone}`}>
      <Icon size={26} />
      <div>
        <strong>{value}</strong>
        <span>{label}</span>
      </div>
    </div>
  );
}
