import { Save } from 'lucide-react';
import { useState } from 'react';

export function KnowledgeBaseEditor() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [problem, setProblem] = useState('');
  const [procedure, setProcedure] = useState('');

  return (
    <section className="app-card editor-card">
      <h2>Novo artigo KB</h2>
      <p className="muted">
        Protótipo de formulário para futura criação de artigos diretamente pela aplicação.
        No MVP atual, os artigos continuam a ser carregados por ficheiro/base de dados.
      </p>

      <label>
        Título
        <input value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>

      <label>
        Categoria
        <input value={category} onChange={(event) => setCategory(event.target.value)} />
      </label>

      <label>
        Problema
        <textarea value={problem} onChange={(event) => setProblem(event.target.value)} />
      </label>

      <label>
        Como proceder
        <textarea value={procedure} onChange={(event) => setProcedure(event.target.value)} />
      </label>

      <button className="primary purple" type="button">
        <Save size={16} />
        Guardar rascunho
      </button>
    </section>
  );
}
