import { useState } from "react";

const ApodSection = ({ title, explanation, imageUrl, date, copyright }) => {
  const [expanded, setExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="my-5 px-3">
      <div className="bg-dark bg-opacity-50 text-white rounded-4 shadow-lg p-4 position-relative overflow-hidden">

        {!imageLoaded && (
          <div className="d-flex justify-content-center align-items-center" style={{ height: "300px" }}>
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        <img
          src={imageUrl}
          alt={title}
          onLoad={() => setImageLoaded(true)}
          className="img-fluid rounded-3 mb-4 w-100 text-center"
          style={{
            display: imageLoaded ? "block" : "none",
            boxShadow: "0 0 12px rgba(255, 255, 255, 0.2)",
          }}
        />

        <div className="d-flex justify-content-between align-items-center mb-2">
          <h2 className="h4 mb-0 text-gradient">{title}</h2>
          {copyright && (
            <span className="small text-muted">©{copyright}</span>
          )}
        </div>

        <p className="text-muted mb-3">
          <i className="bi bi-calendar3 me-2"></i>
          {new Date(date).toLocaleDateString("pt-BR", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>

        <div>
          <p
            className="mb-3"
            style={
              expanded
                ? {}
                : {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: "vertical",
                  }
            }
          >
            {explanation}
          </p>

          <button
            className="btn btn-sm text-dark btn-outline-light"
            onClick={() => setExpanded(!expanded)}
            aria-label={expanded ? "Mostrar menos" : "Ler mais"}
          >
            {expanded ? "Mostrar menos ▲" : "Ler mais ▼"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ApodSection;
