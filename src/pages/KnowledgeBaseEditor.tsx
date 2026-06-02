import { CheckCircle2, Download, FileText, Info, Upload } from 'lucide-react';
import { useMemo, useRef, useState, type ChangeEvent } from 'react';
import { articles } from '../data/articles';

function formatBytes(size: number) {
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

function buildMarkdownExport() {
  return articles.map((article) => article.rawMarkdown.trim()).join('\n\n---\n\n');
}

export function KnowledgeBaseEditor() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<{ name: string; size: number; articleMarkers: number } | null>(null);

  const stats = useMemo(
    () => ({
      total: articles.length,
      user: articles.filter((article) => article.availableForUser).length,
      agent: articles.filter((article) => article.availableForAgent).length,
      categories: new Set(articles.map((article) => article.category)).size
    }),
    []
  );

  function downloadKnowledgeBase() {
    const blob = new Blob([buildMarkdownExport()], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = 'Base_Conhecimento_BC_export.md';
    link.click();

    URL.revokeObjectURL(url);
  }

  async function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    const content = await file.text();
    const articleMarkers = (content.match(/^BC-KB-|^#\s|^##\s/gm) ?? []).length;

    setSelectedFile({
      name: file.name,
      size: file.size,
      articleMarkers
    });
  }

  return (
    <section className="app-card editor-card">
      <div className="section-header kb-section-header">
        <div>
          <h2>Gestão da base de conhecimento</h2>
          <span>Área de apoio à manutenção dos artigos usados na pesquisa.</span>
        </div>
        <FileText size={22} />
      </div>

      <div className="kpi-grid">
        <article className="kpi-card teal">
          <span>Total de artigos</span>
          <strong>{stats.total}</strong>
        </article>
        <article className="kpi-card orange">
          <span>Disponíveis para utilizador</span>
          <strong>{stats.user}</strong>
        </article>
        <article className="kpi-card purple">
          <span>Disponíveis para agente</span>
          <strong>{stats.agent}</strong>
        </article>
        <article className="kpi-card teal">
          <span>Categorias</span>
          <strong>{stats.categories}</strong>
        </article>
      </div>

      <div className="kb-grid">
        <article className="kb-card">
          <span>Download</span>
          <h2>Exportar KB atual</h2>
          <p>Descarrega os artigos atualmente carregados na aplicação em formato Markdown.</p>
          <div className="button-row">
            <button className="primary purple" type="button" onClick={downloadKnowledgeBase}>
              <Download size={16} />
              Download da KB
            </button>
          </div>
        </article>

        <article className="kb-card">
          <span>Upload</span>
          <h2>Validar ficheiro local</h2>
          <p>Seleciona um ficheiro Markdown para confirmar se está pronto para ser importado no projeto.</p>
          <input
            ref={fileInputRef}
            type="file"
            accept=".md,.markdown,text/markdown,text/plain"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          <div className="button-row">
            <button className="secondary" type="button" onClick={() => fileInputRef.current?.click()}>
              <Upload size={16} />
              Selecionar ficheiro
            </button>
          </div>
          {selectedFile && (
            <div className="response-box">
              <p>
                <CheckCircle2 size={16} /> {selectedFile.name} · {formatBytes(selectedFile.size)}
              </p>
              <p className="muted">Referências/artigos detetados: {selectedFile.articleMarkers}</p>
            </div>
          )}
        </article>
      </div>

      <div className="markdown-block">
        <p>
          <Info size={16} /> Nesta versão sem backend, o upload valida o ficheiro localmente, mas não altera o GitHub automaticamente.
        </p>
        <p>Para atualizar a KB em produção:</p>
        <ol>
          <li>Substituir o ficheiro Markdown em <strong>content/knowledge-base</strong>.</li>
          <li>Executar <strong>npm run import:kb</strong> para regenerar <strong>src/data/articles.ts</strong>.</li>
          <li>Fazer commit e publicar no GitHub Pages.</li>
        </ol>
      </div>
    </section>
  );
}
