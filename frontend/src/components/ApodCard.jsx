import { useState } from "react";

const ApodSection = ({ title, explanation, imageUrl, date, copyright }) => {
  const [expanded, setExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="my-5 px-3">
      {!imageLoaded && (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "300px" }}>
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      <img
        src={imageUrl}
        alt={title}
        onLoad={() => setImageLoaded(true)}
        className="img-fluid rounded mb-3"
        style={{ display: imageLoaded ? "block" : "none" }}
      />

      {copyright && (
        <div className="text-end text-muted small mb-2">© {copyright}</div>
      )}

      <h2 className="h4">{title}</h2>

      <p className="text-muted">
        <i className="bi bi-calendar3 me-2"></i>
        {new Date(date).toLocaleDateString("pt-BR", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>

      <div>
        <p style={expanded ? {} : {
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
        }}>
          {explanation}
        </p>

        <button
          className="btn btn-link p-0 text-primary"
          onClick={() => setExpanded(!expanded)}
          aria-label={expanded ? "Mostrar menos" : "Ler mais"}
        >
          {expanded ? "Mostrar menos ▲" : "Ler mais ▼"}
        </button>
      </div>
    </section>
  );
};

export default ApodSection;
