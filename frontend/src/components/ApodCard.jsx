import { useState } from "react";

const ApodCard = ({ title, explanation, imageUrl, date, copyright }) => {
  const [expanded, setExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="position-relative overflow-hidden rounded-4 cosmic-card">
      {/* Fundo estelar */}
      <div className="position-absolute top-0 start-0 end-0 bottom-0 cosmic-backdrop">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="position-absolute rounded-circle cosmic-particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              opacity: Math.random() * 0.6 + 0.2,
              animation: `pulse ${Math.random() * 8 + 4}s infinite ease-in-out`,
            }}
          />
        ))}
      </div>

      {/* Conteúdo principal */}
      <div className="position-relative d-flex flex-column h-100 z-2">
        <div className="position-relative overflow-hidden cosmic-image-container">
          {!imageLoaded && (
            <div className="position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center bg-dark bg-opacity-75">
              <div className="cosmic-spinner"></div>
            </div>
          )}
          <div className="h-100 overflow-hidden position-relative">
            <img
              src={imageUrl || "/placeholder.svg"}
              className={`w-100 h-100 object-fit-cover parallax-image ${imageLoaded ? "loaded" : ""}`}
              alt={title}
              onLoad={() => setImageLoaded(true)}
            />
          </div>

          {copyright && (
            <div className="position-absolute bottom-0 end-0 m-3">
              <span className="bg-dark bg-opacity-75 text-light px-2 py-1 rounded-pill small">
                © {copyright}
              </span>
            </div>
          )}
        </div>

        <div className={`p-4 text-light cosmic-text-content ${expanded ? "expanded" : ""}`}>
          <div className="d-flex justify-content-between align-items-start mb-3">
            <h2 className="m-0 cosmic-title">{title}</h2>
            <button
              className="btn btn-sm btn-link text-primary p-0"
              onClick={() => setExpanded(!expanded)}
              aria-label={expanded ? "Mostrar menos" : "Ler mais"}
            >
              <i className={`bi ${expanded ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
            </button>
          </div>

          <div className="text-primary small mb-3">
            <i className="bi bi-calendar3 me-2"></i>
            {new Date(date).toLocaleDateString("pt-BR", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>

          <div className={`cosmic-explanation ${expanded ? "expanded" : "collapsed"}`}>
            <p>{explanation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApodCard;
