import React from 'react';

const ApodCard = ({ title, explanation, imageUrl }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="mt-2 text-gray-600">{explanation}</p>
      {imageUrl && <img src={imageUrl} alt={title} className="mt-4 rounded-lg" />}
    </div>
  );
};

export default ApodCard;
