const Loader = () => {
  return (
    <div className="min-vh-100 bg-black d-flex flex-column justify-content-center align-items-center">
      <div className="stars-container position-fixed top-0 start-0 end-0 bottom-0 overflow-hidden pe-none">
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className="star position-absolute rounded-circle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() < 0.1 ? "3px" : Math.random() < 0.3 ? "2px" : "1px"}`,
              height: `${Math.random() < 0.1 ? "3px" : Math.random() < 0.3 ? "2px" : "1px"}`,
              opacity: Math.random() * 0.8 + 0.2,
              animation: `${Math.random() < 0.3 ? "twinkle" : ""} ${Math.random() * 4 + 3}s infinite ease-in-out`,
            }}
          />
        ))}
      </div>

      <div className="cosmic-loader mb-4"></div>

      <h2 className="text-white mb-3 fw-light">Dados encontrados...</h2>

      <div className="text-center text-white text-muted">
        <p className="mb-0">Buscando a imagem astronômica do dia</p>
        <p className="small">NASA Astronomy Picture of the Day</p>
      </div>
    </div>
  )
}

export default Loader
