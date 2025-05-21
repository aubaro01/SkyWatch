import React from 'react';

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-light">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden"> A carregar dados...</span>
      </div>
      <span className="ms-3 fs-4">Carregando...</span>
    </div>
  );
};

export default Loading;
