
import { useState } from "react"

const ApodCard = ({ title, explanation, imageUrl, date, copyright }) => {
  const [expanded, setExpanded] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className="card bg-dark text-white border-0 overflow-hidden shadow-lg">
      <div className="position-relative">
        {!imageLoaded && (
          <div className="position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center bg-dark">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        <img
          src={imageUrl || "/placeholder.svg"}
          className="card-img-top"
          alt={title}
          style={{ opacity: imageLoaded ? 1 : 0, transition: "opacity 0.5s ease-in-out" }}
          onLoad={() => setImageLoaded(true)}
        />

        {copyright && (
          <div className="position-absolute bottom-0 end-0 p-2">
            <span className="badge bg-dark bg-opacity-75 text-light small">© {copyright}</span>
          </div>
        )}
      </div>

      <div className="card-body bg-dark bg-opacity-90 p-4">
        <h2 className="card-title fw-bold mb-3">{title}</h2>

        <div className={`card-text ${expanded ? "" : "text-truncate-container"}`}>
          <p className="text-muted mb-0">{explanation}</p>
        </div>

        <button className="btn btn-link text-primary p-0 mt-2" onClick={() => setExpanded(!expanded)}>
          {expanded ? (
            <>
              <i className="bi bi-chevron-up me-1"></i>
              Mostrar menos
            </>
          ) : (
            <>
              <i className="bi bi-chevron-down me-1"></i>
              Ler mais
            </>
          )}
        </button>
      </div>

      {date && (
        <div className="card-footer bg-dark bg-opacity-90 text-muted border-top border-secondary border-opacity-25 py-3">
          <div className="d-flex justify-content-between align-items-center">
            <small>
              <i className="bi bi-calendar3 me-2"></i>
              {new Date(date).toLocaleDateString("pt-BR")}
            </small>
            <a href={imageUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary">
              <i className="bi bi-download me-1"></i>
              Ver original
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default ApodCard
