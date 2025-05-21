import React, { useState } from 'react';

const ApodCard = ({ title, explanation, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
    <div 
      className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 transform hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
      }}
    >
      <div className="relative h-72 overflow-hidden">
        <div className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'opacity-30' : 'opacity-0'}`} 
          style={{
            background: 'linear-gradient(180deg, rgba(17, 24, 39, 0) 0%, rgba(17, 24, 39, 1) 100%)',
            zIndex: 10
          }}
        />
        
        <div className="absolute inset-0 transition-transform duration-700" 
            style={{
              transform: isHovered ? 'scale(1.1)' : 'scale(1)',
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
        />
        
        <div 
          className={`absolute right-4 top-4 bg-black bg-opacity-50 text-white p-2 rounded-full z-20 transition-all duration-300 ${isHovered ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-2'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      
      <div className="p-6 text-white">
        <h2 className="text-2xl font-bold mb-3 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          {title}
        </h2>
        
        <p className="text-gray-300 mb-6 text-sm leading-relaxed">
          {truncateText(explanation, 150)}
        </p>
        
        <div className="flex justify-between items-center">
          <a 
            href={imageUrl} 
            target="_blank"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium text-sm transition-all duration-300 hover:shadow-lg hover:from-blue-600 hover:to-purple-700"
          >
            Ver imagem 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          
          <button 
            className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 origin-left transition-transform duration-500" style={{ transform: isHovered ? 'scaleX(1)' : 'scaleX(0)' }} />
    </div>
  );
};

export default ApodCard;