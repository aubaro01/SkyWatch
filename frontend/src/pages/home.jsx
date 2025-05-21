import React, { useState, useEffect } from 'react';
import { fetchApodData } from '../services/nasaApi';
import ApodCard from '../components/ApodCard';
import Loader from '../components/Loader';

const Home = () => {
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchApodData();
        setApodData(data);
        setLoading(false);
        setTimeout(() => setIsVisible(true), 100);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Não foi possível carregar a imagem do dia');
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-black">
        <div className="text-center p-8 rounded-xl bg-black bg-opacity-30 backdrop-blur-lg shadow-2xl">
          <div className="flex justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-red-400">{error}</h3>
          <p className="mt-2 text-gray-400">Por favor, tente novamente mais tarde</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-lg hover:from-red-600 hover:to-pink-700 transition-colors duration-300"
          >
            Tentar novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() < 0.1 ? 3 : 1}px`,
              height: `${Math.random() < 0.1 ? 3 : 1}px`,
              opacity: Math.random() * 0.7 + 0.3,
              animation: `${Math.random() < 0.3 ? 'pulse' : ''} ${Math.random() * 4 + 3}s infinite ease-in-out`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <header className="text-center mb-12">
          <div className="inline-block px-8 py-4 rounded-full bg-black bg-opacity-30 backdrop-blur-sm mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>
            <span className="text-xs uppercase tracking-widest text-gray-400">NASA APOD</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Imagem do espaço do Dia
          </h1>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
            Veja as maravilhas do espaço
          </p>
          <div className="flex justify-center mt-4">
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </div>
        </header>
        
        <div className="max-w-4xl mx-auto transform transition-all duration-700" style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
        }}>
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-30 blur-xl"></div>
            
            <div className="relative">
              <ApodCard
                title={apodData.title}
                explanation={apodData.explanation}
                imageUrl={apodData.url}
              />
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <div className="inline-block px-4 py-2 bg-black bg-opacity-50 backdrop-blur-sm rounded-full">
              <span className="text-sm text-gray-400">
                {new Date().toLocaleDateString('pt', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;