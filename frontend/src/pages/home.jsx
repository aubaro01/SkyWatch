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
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Imagem do Dia da NASA</h1>
      <ApodCard
        title={apodData.title}
        explanation={apodData.explanation}
        imageUrl={apodData.url}
      />
    </div>
  );
};

export default Home;
