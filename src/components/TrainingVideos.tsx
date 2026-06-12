import { ExternalLink, PlayCircle, Video } from 'lucide-react';
import { useMemo, useState } from 'react';
import { trainingVideos, type TrainingVideo } from '../data/trainingVideos';

const categoryCopy: Record<TrainingVideo['category'], string> = {
  'Formação Inicial': 'Primeiros passos, navegação, pesquisa, filtros e produtividade no Business Central.',
  'Temas Específicos': 'Processos concretos por área, como clientes, produtos, fornecedores, compras e Continia.'
};

const orderedCategories: TrainingVideo['category'][] = ['Formação Inicial', 'Temas Específicos'];

function getVideoCountLabel(count: number) {
  return count === 1 ? '1 vídeo' : `${count} vídeos`;
}

export function TrainingVideos() {
  const [selectedCategory, setSelectedCategory] = useState<TrainingVideo['category']>('Formação Inicial');

  const categorySummaries = useMemo(
    () =>
      orderedCategories.map((category) => ({
        category,
        count: trainingVideos.filter((video: TrainingVideo) => video.category === category).length,
        description: categoryCopy[category]
      })),
    []
  );

  const visibleVideos = useMemo(
    () => trainingVideos.filter((video: TrainingVideo) => video.category === selectedCategory),
    [selectedCategory]
  );

  if (trainingVideos.length === 0) {
    return (
      <div className="empty-search-state full-width-state">
        <Video size={28} />
        <strong>Ainda não existem vídeos formativos configurados.</strong>
        <p>Os vídeos ficam disponíveis aqui assim que forem adicionados à lista.</p>
      </div>
    );
  }

  return (
    <section className="video-training-panel">
      <div className="section-header video-section-header">
        <div>
          <h2>Vídeos formativos</h2>
          <span>{trainingVideos.length} vídeos disponíveis · abertura direta no SharePoint</span>
        </div>
        <Video size={24} />
      </div>

      <div className="video-topic-grid" aria-label="Temas dos vídeos formativos">
        {categorySummaries.map((summary) => (
          <button
            key={summary.category}
            type="button"
            className={selectedCategory === summary.category ? 'video-topic-card active' : 'video-topic-card'}
            onClick={() => setSelectedCategory(summary.category)}
          >
            <span className="video-topic-icon" aria-hidden="true">
              <PlayCircle size={34} strokeWidth={2.2} />
            </span>
            <span className="video-topic-copy">
              <strong>{summary.category}</strong>
              <small>{getVideoCountLabel(summary.count)}</small>
              <em>{summary.description}</em>
            </span>
          </button>
        ))}
      </div>

      <div className="video-library-panel">
        <div className="video-list-heading">
          <div>
            <span className="eyebrow compact-eyebrow">{selectedCategory}</span>
            <h3>{getVideoCountLabel(visibleVideos.length)}</h3>
          </div>
          <span className="video-list-badge">Abre no SharePoint</span>
        </div>

        <p className="video-library-note">
          Os vídeos abrem numa nova janela para garantir a autenticação Microsoft e evitar bloqueios de visualização incorporada.
        </p>

        <div className="video-card-grid">
          {visibleVideos.map((video: TrainingVideo, index: number) => (
            <a key={video.id} href={video.url} target="_blank" rel="noreferrer" className="training-video-card">
              <span className="training-video-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="training-video-icon" aria-hidden="true">
                <PlayCircle size={30} />
              </span>
              <span className="training-video-copy">
                <strong>{video.title}</strong>
                <small>{video.category}</small>
              </span>
              <span className="training-video-action">
                Abrir vídeo
                <ExternalLink size={16} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
