import { HelpCircle, Home, LogOut } from 'lucide-react';
import apoioBcLogo from '../assets/apoio-bc.png';
import type { Role } from '../types';

interface Props {
  role: Role;
  onNavigate: (role: Role) => void;
}

export function AppHeader({ role, onNavigate }: Props) {
  return (
    <header className="app-header">
      <div className="brand">
        <button className="brand-mark" onClick={() => onNavigate('entry')} aria-label="Voltar ao início">
          <img src={apoioBcLogo} alt="" />
        </button>
        <div>
          <strong>AUGMA Group</strong>
          <span>Apoio Business Central</span>
        </div>
      </div>

      <nav className="header-actions">
        {role !== 'entry' && (
          <button className="ghost-button" onClick={() => onNavigate('entry')}>
            <Home size={16} />
            Início
          </button>
        )}
        <button className="ghost-button">
          <HelpCircle size={16} />
          Ajuda
        </button>
        {role !== 'entry' && (
          <button className="ghost-button" onClick={() => onNavigate('entry')}>
            <LogOut size={16} />
            Sair
          </button>
        )}
      </nav>
    </header>
  );
}
