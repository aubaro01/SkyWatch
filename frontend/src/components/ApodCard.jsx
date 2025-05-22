import { useState } from "react";

const ApodCard = ({ title, explanation, imageUrl, date, copyright }) => {
  const [expanded, setExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="cosmic-container position-relative">
      <div className="cosmic-backdrop">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="cosmic-particle position-absolute rounded-circle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              opacity: Math.random() * 0.6 + 0.2
            }}
          />
        ))}
      </div>

      <div className="cosmic-content position-relative h-100 d-flex flex-column">
        <div className="cosmic-image-container">
          {!imageLoaded && (
            <div className="loading-overlay">
              <div className="cosmic-spinner"></div>
            </div>
          )}

          <div className="parallax-wrapper">
            <img
              src={imageUrl || "/placeholder.svg"}
              className="parallax-image"
              alt={title}
              onLoad={() => setImageLoaded(true)}
              style={{ opacity: imageLoaded ? 1 : 0 }}
            />
          </div>

          {copyright && (
            <div className="copyright-badge">
              <span>© {copyright}</span>
            </div>
          )}
        </div>

        <div className={`cosmic-text-content ${expanded ? 'expanded' : ''}`}>
          <div className="d-flex justify-content-between align-items-start mb-3">
            <h2 className="cosmic-title m-0">{title}</h2>
            <button
              className="expand-button"
              onClick={() => setExpanded(!expanded)}
              aria-label={expanded ? "Mostrar menos" : "Ler mais"}
            >
              <i className={`bi ${expanded ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
            </button>
          </div>

          <div className="cosmic-date">
            <i className="bi bi-calendar3 me-2"></i>
            {new Date(date).toLocaleDateString("pt-BR", {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </div>

          <div className={`cosmic-explanation ${expanded ? 'expanded' : 'collapsed'}`}>
            <p>{explanation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApodCard;
