import React, { useState, useEffect } from 'react';
import { fetchApodData } from '../services/nasaApi';
import ApodCard from '../components/ApodCard';
import Loader from '../components/Loader';

const Home = () => {
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false); 

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchApodData();
        setApodData(data);
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar dados');
        setLoading(false);
      }
    };

    getData();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  return (
    <div
      className={`container mx-auto p-4 min-vh-100 ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}
    >
      <div className="d-flex justify-content-end">
        <button
          onClick={toggleDarkMode}
          className="btn btn-secondary mb-4"
        >
          {darkMode ? 'Modo Claro' : 'Modo Escuro'}
        </button>
      </div>

      <h1 className="text-center mb-4">Imagem do Dia da NASA</h1>

      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 mx-auto">
          <ApodCard
            title={apodData.title}
            explanation={apodData.explanation}
            imageUrl={apodData.url}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
