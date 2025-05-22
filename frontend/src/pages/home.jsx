import { useState, useEffect } from "react"
import { fetchApodData } from "../services/nasaApi"
import ApodCard from "../components/ApodCard"
import Loader from "../components/Loader"

const Home = () => {
  const [apodData, setApodData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchApodData()
        setApodData(data)
        setLoading(false)
        setTimeout(() => setIsVisible(true), 100)
      } catch (err) {
        console.error("Error fetching data:", err)
        setError("Não foi possível carregar a imagem do dia")
        setLoading(false)
      }
    }

    getData()
  }, [])

  if (loading) {
    return <Loader />
  }

  if (error) {
    return (
      <div className="d-flex align-items-center justify-content-center vh-100 bg-dark">
        <div className="text-center p-4 rounded-3 bg-dark bg-opacity-75 backdrop-blur shadow-lg">
          <div className="d-flex justify-content-center mb-4">
            <i className="bi bi-exclamation-triangle-fill text-danger" style={{ fontSize: "4rem" }}></i>
          </div>
          <h3 className="text-danger fw-bold mb-3">{error}</h3>
          <p className="text-muted">Por favor, tente novamente mais tarde</p>
          <button onClick={() => window.location.reload()} className="btn btn-gradient mt-3">
            Tentar novamente
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-vh-100 bg-dark text-white transition-opacity ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <div className="position-absolute top-0 start-0 end-0 bottom-0 overflow-hidden pe-none">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="position-absolute rounded-circle bg-white bg-opacity-50"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() < 0.1 ? "0.2rem" : "0.1rem"}`,
              height: `${Math.random() < 0.1 ? "0.2rem" : "0.1rem"}`,
              animation: `${Math.random() < 0.3 ? "pulse" : ""} ${Math.random() * 4 + 3}s infinite ease-in-out`,
            }}
          />
        ))}
      </div>

      <div className="container py-5 position-relative">
        <header className="text-center mb-5">
          <div className="d-inline-block px-4 py-2 rounded-pill bg-dark bg-opacity-50 mb-3">
            <i className="bi bi-stars text-primary me-2"></i>
            <span className="text-uppercase small text-muted">NASA APOD</span>
          </div><br />
          <h1 className="display-4 fw-bold text-gradient mb-3">Imagem do espaço do Dia</h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "36rem" }}>
            Veja as maravilhas do universo através da NASA
          </p>
          <div className="d-flex justify-content-center mt-3">
            <div className="cosmic-divider"></div>
          </div>
        </header>

        <div className="d-flex align-items-center justify-content-center min-vh-100 bg-black">
          <div
            className={`w-100 px-3 transition-all ${isVisible ? "translate-y-0" : "translate-y-3"}`}
            style={{ maxWidth: "32rem" }}
          >
            <div className="position-relative">
              <div className="position-absolute top-0 start-0 end-0 bottom-0 cosmic-glow rounded-3"></div>

              <div className="position-relative">
                <ApodCard
                  title={apodData.title}
                  explanation={apodData.explanation}
                  imageUrl={apodData.url}
                  date={apodData.date}
                  copyright={apodData.copyright}
                />
              </div>
            </div>

            <div className="text-center mt-4">
              <div className="d-inline-block px-3 py-1 bg-dark bg-opacity-50 rounded-pill">
                <span className="small text-muted">
                  {new Date().toLocaleDateString("pt-BR", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
