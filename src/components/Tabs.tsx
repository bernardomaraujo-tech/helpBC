interface Tab {
  key: string;
  label: string;
}

interface Props {
  tabs: Tab[];
  active: string;
  onChange: (key: string) => void;
  tone?: 'teal' | 'purple';
}

export function Tabs({ tabs, active, onChange, tone = 'teal' }: Props) {
  return (
    <div className={`tabs tabs-${tone}`}>
      {tabs.map((tab) => (
        <button
          key={tab.key}
          className={tab.key === active ? 'active' : ''}
          onClick={() => onChange(tab.key)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
