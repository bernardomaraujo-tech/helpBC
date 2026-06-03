import { Search, UserRound } from 'lucide-react';
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
          <h1>Apoio Business Central</h1>
          <p>Pesquisa rápida e consulta estruturada da base de conhecimento.</p>
        </div>
      </section>

      <section className="entry-panel">
        <div className="panel-header">
          <div>
            <h2>Centro de conhecimento</h2>
            <p>Seleciona o perfil de acesso para veres a informação adequada.</p>
          </div>
        </div>

        <div className="entry-grid">
          <EntryCard
            title="Utilizador"
            tone="user"
            icon={UserRound}
            description="Pesquisa e consulta artigos disponíveis da base de conhecimento."
            onClick={() => onSelectRole('user')}
          />
          <EntryCard
            title="Agente"
            tone="agent"
            icon={Search}
            description="Pesquisa, consulta e mantém a base de conhecimento interna."
            onClick={() => onSelectRole('agent')}
          />
        </div>
      </section>
    </main>
  );
}
