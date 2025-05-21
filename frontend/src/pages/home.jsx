import React, { useState, useEffect } from 'react';
import { fetchApodData } from '../services/nasaApi';
import ApodCard from '../components/ApodCard';
import Loader from '../components/Loader';

const Home = () => {
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  return (
    <div className="container min-vh-100 d-flex flex-column justify-content-center align-items-center bg-dark text-light">
      <h1 className="text-center mb-5 fw-bold fs-1 text-shadow">
        Imagem do Dia da NASA
      </h1>
      <div className="card bg-secondary border-0 shadow-lg" style={{ width: '18rem' }}>
        <img
          src={apodData.url}
          alt="Imagem do Dia"
          className="card-img-top rounded-3"
          style={{ objectFit: 'cover', height: '250px' }}
        />
        <div className="card-body">
          <h5 className="card-title text-center mb-3">{apodData.title}</h5>
          <p className="card-text">{apodData.explanation}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
