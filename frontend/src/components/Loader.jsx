import React, { useEffect, useState } from 'react';

const Loading = () => {
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
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-dark text-white position-relative overflow-hidden">
      <div className="position-relative d-flex flex-column align-items-center p-4 rounded-3 bg-dark bg-opacity-75 backdrop-blur shadow-lg" style={{ width: '18rem' }}>
        <div className="position-relative my-4" style={{ height: '6rem', width: '6rem' }}>
          <div className="position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center">
            <div className="rounded-circle bg-primary bg-opacity-20 h-75 w-75 animate-pulse"></div>
          </div>
          
          {[3, 2, 4, 5].map((duration, idx) => (
            <div 
              key={idx}
              className="position-absolute top-0 start-0 end-0 bottom-0 animate-spin"
              style={{ 
                animationDuration: `${duration}s`,
                animationDirection: idx % 2 === 0 ? 'normal' : 'reverse'
              }}
            >
              <div 
                className={`position-absolute rounded-circle ${['bg-primary', 'bg-purple', 'bg-indigo', 'bg-pink'][idx]}`}
                style={{
                  ...(idx === 0 && { top: 0, left: '50%', transform: 'translateX(-50%)', height: '0.75rem', width: '0.75rem' }),
                  ...(idx === 1 && { bottom: 0, left: '50%', transform: 'translateX(-50%)', height: '0.5rem', width: '0.5rem' }),
                  ...(idx === 2 && { top: '50%', left: 0, transform: 'translateY(-50%)', height: '0.5rem', width: '0.5rem' }),
                  ...(idx === 3 && { top: '50%', right: 0, transform: 'translateY(-50%)', height: '0.75rem', width: '0.75rem' })
                }}
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mb-4">
          <h3 className="text-gradient fw-bold mb-1">
            {loadingText}
          </h3>
          <p className="text-muted small">A procura de dados do espaço</p>
        </div>
        
        <div className="w-100 mb-3">
          <div className="progress bg-secondary bg-opacity-25" style={{ height: '0.25rem' }}>
            <div 
              className="progress-bar progress-bar-striped progress-bar-animated bg-gradient"
              style={{ width: `${progress}%`, transition: 'width 0.3s ease-out' }}
            />
          </div>
          <p className="text-end text-muted small mt-1">{Math.round(progress)}%</p>
        </div>
      </div>
      
      {/* Estrelas de fundo */}
      {[...Array(20)].map((_, i) => (
        <div 
          key={i}
          className="position-absolute rounded-circle bg-primary bg-opacity-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            animation: `pulse ${Math.random() * 4 + 2}s infinite ease-in-out`,
          }}
        />
      ))}
    </div>
  );
};

export default Loading;