import React, { useState } from 'react';

const ApodCard = ({ title, explanation, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
    <div 
      className="card border-0 rounded-3 overflow-hidden shadow-lg hover-scale"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
        maxWidth: '28rem'
      }}
    >
      <div className="card-img-top position-relative" style={{ height: '18rem', overflow: 'hidden' }}>
        <div 
          className={`position-absolute w-100 h-100 transition-opacity ${isHovered ? 'opacity-30' : 'opacity-0'}`}
          style={{
            background: 'linear-gradient(180deg, rgba(17, 24, 39, 0) 0%, rgba(17, 24, 39, 1) 100%)',
            zIndex: 10
          }}
        />
        
        <div 
          className="position-absolute w-100 h-100 transition-all"
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div 
          className={`position-absolute top-0 end-0 bg-dark bg-opacity-50 text-white p-2 rounded-circle m-3 z-20 transition-all ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          <i className="bi bi-eye-fill"></i>
        </div>
      </div>
      
      <div className="card-body p-4 text-white">
        <h2 className="card-title fw-bold mb-3 text-gradient">
          {title}
        </h2>
        
        <p className="card-text text-muted mb-4">
          {truncateText(explanation, 150)}
        </p>
        
        <div className="d-flex justify-content-between align-items-center">
          <a 
            href={imageUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gradient"
          >
            Ver imagem <i className="bi bi-box-arrow-up-right ms-2"></i>
          </a>
          
          <button className="btn btn-dark rounded-circle p-0" style={{ width: '2.5rem', height: '2.5rem' }}>
            <i className="bi bi-three-dots"></i>
          </button>
        </div>
      </div>
      
      <div 
        className="position-absolute bottom-0 start-0 end-0 h-1 bg-gradient transition-all"
        style={{ 
          transform: isHovered ? 'scaleX(1)' : 'scaleX(0)', 
          transformOrigin: 'left',
          transition: 'transform 0.5s ease'
        }}
      />
    </div>
  );
};

export default ApodCard;