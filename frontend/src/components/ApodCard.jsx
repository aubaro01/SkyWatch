import React from 'react';

const ApodCard = ({ title, explanation, imageUrl }) => {
  return (
    <div className="apod-card">
      <h2>{title}</h2>
      <p>{explanation}</p>
      {imageUrl && <img src={imageUrl} alt={title} />}
    </div>
  );
};

export default ApodCard;
