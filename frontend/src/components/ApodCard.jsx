import { useState } from "react";

const ApodCard = ({ title, explanation, imageUrl, date, copyright }) => {
  const [expanded, setExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="container my-4">
      <div className="card text-bg-dark shadow-lg">
        <div className="position-relative">
          {!imageLoaded && (
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50">
              <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}

          <img
            src={imageUrl}
            className="card-img-top"
            alt={title}
            onLoad={() => setImageLoaded(true)}
            style={{ opacity: imageLoaded ? 1 : 0 }}
          />

          {copyright && (
            <div className="position-absolute bottom-0 end-0 p-2 bg-dark bg-opacity-75 text-white small rounded-start">
              © {copyright}
            </div>
          )}
        </div>

        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h5 className="card-title mb-0">{title}</h5>
            <button
              className="btn btn-sm btn-outline-light"
              onClick={() => setExpanded(!expanded)}
              aria-label={expanded ? "Mostrar menos" : "Ler mais"}
            >
              <i className={`bi ${expanded ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
            </button>
          </div>

          <p className="card-subtitle mb-2 text-muted">
            <i className="bi bi-calendar3 me-2"></i>
            {new Date(date).toLocaleDateString("pt-BR", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>

          <div className={`card-text ${expanded ? "" : "text-truncate"}`}>
            <p className={expanded ? "" : "text-truncate"} style={expanded ? {} : {
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}>
              {explanation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApodCard;
