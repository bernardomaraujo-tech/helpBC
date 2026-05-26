import { Headphones, ShieldCheck, UserRound } from 'lucide-react';
import { EntryCard } from '../components/EntryCard';
import type { Role } from '../types';

interface Props {
  onSelectRole: (role: Role) => void;
}

export function EntryPage({ onSelectRole }: Props) {
  return (
    <main className="page entry-page">
      <section className="hero">
        <div className="square-bullet" />
        <div>
          <h1>Agente de Apoio</h1>
          <p>Entrada separada para utilizador e agente.</p>
        </div>
      </section>

      <section className="entry-panel">
        <div className="panel-header">
          <div>
            <h2>Apoio Business Central</h2>
            <p>Seleciona como pretendes aceder.</p>
          </div>
        </div>

        <div className="entry-grid">
          <EntryCard
            title="Utilizador"
            tone="user"
            icon={UserRound}
            description="Coloca dúvidas, consulta artigos e acompanha os teus pedidos."
            onClick={() => onSelectRole('user')}
          />
          <EntryCard
            title="Agente"
            tone="agent"
            icon={Headphones}
            description="Gere tickets, valida respostas e mantém a base de conhecimento."
            onClick={() => onSelectRole('agent')}
          />
        </div>

        <div className="microsoft-strip">
          <ShieldCheck size={18} />
          <span>Acesso seguro com Microsoft</span>
          <span className="microsoft-logo" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
        </div>
      </section>
    </main>
  );
}
