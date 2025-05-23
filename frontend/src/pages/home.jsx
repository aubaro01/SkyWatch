import { useState, useEffect } from "react"
import { fetchApodData } from "../services/nasaApi"
import ApodSection from "../components/ApodCard"
import Loader from "../components/Loader"

const Home = () => {
  const [apodData, setApodData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "false" ? false : true
    }
    return true
  })

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

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const newMode = !prev
      localStorage.setItem("darkMode", newMode)
      return newMode
    })
  }

  if (loading) {
    return <Loader />
  }

  if (error) {
    return (
      <div className={`d-flex align-items-center justify-content-center vh-100 ${darkMode ? "bg-dark" : "bg-light"}`}>
        <div className={`text-center p-4 rounded-3 ${darkMode ? "bg-dark bg-opacity-75 text-white" : "bg-light text-dark"} backdrop-blur shadow-lg`}>
          <div className="d-flex justify-content-center mb-4">
            <i className="bi bi-exclamation-triangle-fill text-danger" style={{ fontSize: "4rem" }}></i>
          </div>
          <h3 className="text-danger fw-bold mb-3">{error}</h3>
          <p className={darkMode ? "text-muted" : "text-secondary"}>Por favor, tente novamente mais tarde</p>
          <button
            onClick={() => window.location.reload()}
            className={darkMode ? "btn btn-outline-light mt-3" : "btn btn-outline-dark mt-3"}
          >
            Tentar novamente
          </button>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`min-vh-100 transition-opacity ${darkMode ? "bg-dark text-white" : "bg-light text-dark"} ${isVisible ? "opacity-100" : "opacity-0"}`}
      style={{ minHeight: "100vh", transition: "background-color 0.3s, color 0.3s" }}
    >
      {darkMode && (
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
      )}

      <div className="container py-5 position-relative">
        <div className="text-end mb-3">
          <button
            className={`btn btn-sm ${darkMode ? "btn-outline-light" : "btn-outline-dark"}`}
            onClick={toggleTheme}
            aria-label={darkMode ? "Mudar para modo claro" : "Mudar para modo escuro"}
          >
            {darkMode ? "Modo Claro ☀️" : "Modo Escuro 🌙"}
          </button>
        </div>

        <ApodSection
          title={apodData.title}
          explanation={apodData.explanation}
          imageUrl={apodData.url}
          date={apodData.date}
          copyright={apodData.copyright}
          darkMode={darkMode}
        />

        <div className="text-center mt-4">
          <div className={`d-inline-block px-3 py-1 rounded-pill ${darkMode ? "bg-dark bg-opacity-50 text-muted" : "bg-light text-secondary"}`}>
            <span className="small">
              {new Date().toLocaleDateString("pt-PT", {
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
  )
}

export default Home
