import React, { useState } from 'react';

const ApodCard = ({ title, explanation, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="card border-0 rounded-3 overflow-hidden shadow-lg hover-scale"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
        maxWidth: '42rem'
      }}
    >
      <div className="position-relative" style={{ height: '32rem', overflow: 'hidden' }}>
        <img
          src={imageUrl}
          alt={title}
          className="w-100 h-100 object-cover"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.5s ease'
          }}
        />
        
        <div 
          className={`position-absolute top-0 end-0 bg-dark bg-opacity-50 text-white p-2 rounded-circle m-3 z-20 transition-all ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          <i className="bi bi-stars"></i>
        </div>
      </div>
      
      <div className="card-body p-4 text-white">
        <h2 className="card-title fw-bold mb-3 text-gradient">
          {title}
        </h2>
        
        <p className="card-text text-white text-muted mb-4" style={{ whiteSpace: 'pre-line' }}>
          {explanation}
        </p>

        <div 
          className="position-absolute bottom-0 start-0 end-0 h-1 bg-gradient transition-all"
          style={{ 
            transform: isHovered ? 'scaleX(1)' : 'scaleX(0)', 
            transformOrigin: 'left',
            transition: 'transform 0.5s ease'
          }}
        />
      </div>
    </div>
  );
};

export default ApodCard;