import { useState } from "react";

const ApodSection = ({
  title,
  explanation,
  imageUrl,
  date,
  copyright,
  darkMode = true, 
}) => {
  const [expanded, setExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

 
  const bgClass = darkMode ? "bg-dark bg-opacity-75 text-white" : "bg-light text-dark";
  const shadowColor = darkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)";
  const buttonClass = darkMode
    ? "btn btn-sm btn-outline-light text-white"
    : "btn btn-sm btn-outline-dark text-dark";
  const titleColor = darkMode ? "text-info" : "text-primary";
  const textMutedClass = darkMode ? "text-muted" : "text-secondary";
  const copyrightClass = darkMode ? "text-muted" : "text-secondary";

  return (
    <section className="my-5 px-3">
      <div
        className={`rounded-4 shadow-lg p-4 position-relative overflow-hidden ${bgClass}`}
      >
        {!imageLoaded && (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "300px" }}
          >
            <div className={`spinner-border ${darkMode ? "text-light" : "text-secondary"}`} role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        <img
          src={imageUrl}
          alt={title}
          onLoad={() => setImageLoaded(true)}
          className="img-fluid rounded-3 mb-4 w-100"
          style={{
            display: imageLoaded ? "block" : "none",
            boxShadow: `0 0 12px ${shadowColor}`,
          }}
        />

        <div className="d-flex justify-content-between align-items-center mb-2">
          <h2 className={`h4 mb-0 ${titleColor}`}>{title}</h2>
          {copyright && (
            <span className={`small ${copyrightClass}`}>©{copyright}</span>
          )}
        </div>

        <p className={`${textMutedClass} mb-3`}>
          <i className="bi bi-calendar3 me-2"></i>
          {new Date(date).toLocaleDateString("pt-PT", {
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
            className={buttonClass}
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
