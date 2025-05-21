import React, { useEffect, useState } from 'react';

const ModernLoading = () => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Carregando');
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = Math.min(oldProgress + Math.random() * 2, 100);
        return newProgress;
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);
  
  useEffect(() => {
    const textTimer = setInterval(() => {
      setLoadingText(prev => {
        if (prev === 'Carregando...') return 'Carregando';
        return prev + '.';
      });
    }, 500);
    
    return () => {
      clearInterval(textTimer);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="relative flex flex-col items-center p-8 rounded-xl bg-black bg-opacity-30 backdrop-blur-lg shadow-2xl w-64">
        <div className="relative h-24 w-24 mb-6">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 animate-pulse"></div>
          </div>
          
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
            <div className="absolute top-0 left-1/2 h-3 w-3 rounded-full bg-blue-500 transform -translate-x-1/2"></div>
          </div>
          
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }}>
            <div className="absolute bottom-0 left-1/2 h-2 w-2 rounded-full bg-purple-500 transform -translate-x-1/2"></div>
          </div>
          
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '4s' }}>
            <div className="absolute top-1/2 left-0 h-2 w-2 rounded-full bg-indigo-500 transform -translate-y-1/2"></div>
          </div>
          
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '5s', animationDirection: 'reverse' }}>
            <div className="absolute top-1/2 right-0 h-3 w-3 rounded-full bg-pink-500 transform -translate-y-1/2"></div>
          </div>
        </div>
        
        <div className="text-center mb-5">
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            {loadingText}
          </h3>
          <p className="text-xs text-gray-400 mt-1">A procura de dados do espaço</p>
        </div>
        
        <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden mb-2">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
            style={{ width: `${progress}%`, transition: 'width 0.3s ease-out' }}
          ></div>
        </div>
        <p className="text-xs text-gray-500">{Math.round(progress)}%</p>
      </div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-500 opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animation: `pulse ${Math.random() * 4 + 2}s infinite ease-in-out`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ModernLoading;