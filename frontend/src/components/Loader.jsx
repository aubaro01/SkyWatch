import React from 'react';

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Carregando...</span>
      </div>
      <span className="ms-3">Carregando...</span>
    </div>
  );
};

export default Loading;