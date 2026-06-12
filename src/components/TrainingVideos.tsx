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
  const [selectedVideoId, setSelectedVideoId] = useState(trainingVideos[0]?.id ?? '');

  const categorySummaries = useMemo(
    () =>
      orderedCategories.map((category) => ({
        category,
        count: trainingVideos.filter((video) => video.category === category).length,
        description: categoryCopy[category]
      })),
    []
  );

  const visibleVideos = useMemo(
    () => trainingVideos.filter((video) => video.category === selectedCategory),
    [selectedCategory]
  );

  const selectedVideo = visibleVideos.find((video) => video.id === selectedVideoId) ?? visibleVideos[0];

  function selectCategory(category: TrainingVideo['category']) {
    const firstVideo = trainingVideos.find((video) => video.category === category);
    setSelectedCategory(category);
    setSelectedVideoId(firstVideo?.id ?? '');
  }

  if (!selectedVideo) {
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
          <span>{trainingVideos.length} vídeos disponíveis · organizados por tema</span>
        </div>
        <Video size={24} />
      </div>

      <div className="video-topic-grid" aria-label="Temas dos vídeos formativos">
        {categorySummaries.map((summary) => (
          <button
            key={summary.category}
            type="button"
            className={selectedCategory === summary.category ? 'video-topic-card active' : 'video-topic-card'}
            onClick={() => selectCategory(summary.category)}
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

      <div className="video-training-layout">
        <div className="video-list-panel">
          <div className="video-list-heading">
            <div>
              <span className="eyebrow compact-eyebrow">{selectedCategory}</span>
              <h3>{getVideoCountLabel(visibleVideos.length)}</h3>
            </div>
            <span className="video-list-badge">Seleciona um vídeo</span>
          </div>

          <div className="video-card-grid">
            {visibleVideos.map((video, index) => (
              <button
                key={video.id}
                type="button"
                className={selectedVideo.id === video.id ? 'training-video-card active' : 'training-video-card'}
                onClick={() => setSelectedVideoId(video.id)}
              >
                <span className="training-video-number">{String(index + 1).padStart(2, '0')}</span>
                <span className="training-video-icon" aria-hidden="true">
                  <PlayCircle size={28} />
                </span>
                <span className="training-video-copy">
                  <strong>{video.title}</strong>
                  <small>{video.category}</small>
                </span>
                <span className="training-video-action">Ver vídeo</span>
              </button>
            ))}
          </div>
        </div>

        <aside className="video-preview-panel" aria-label="Pré-visualização do vídeo selecionado">
          <div className="video-preview-title">
            <span className="video-preview-icon" aria-hidden="true">
              <PlayCircle size={32} />
            </span>
            <div>
              <span>{selectedVideo.category}</span>
              <h3>{selectedVideo.title}</h3>
            </div>
          </div>

          <div className="video-preview-frame">
            <iframe
              key={selectedVideo.id}
              title={selectedVideo.title}
              src={selectedVideo.url}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            />
          </div>

          <div className="video-preview-footer">
            <p>
              O vídeo abre diretamente nesta área quando o SharePoint permitir visualização incorporada. Caso não carregue,
              usa a opção de nova janela.
            </p>
            <a href={selectedVideo.url} target="_blank" rel="noreferrer" className="video-open-link">
              Abrir em nova janela
              <ExternalLink size={17} />
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
