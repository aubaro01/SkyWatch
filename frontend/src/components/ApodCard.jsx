import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ApodCard = ({ title, explanation, imageUrl }) => {
  return (
    <Card className="mb-4 shadow border-0 rounded-3 overflow-hidden">
      <Card.Img
        variant="top"
        src={imageUrl}
        alt={title}
        className="img-fluid"
        style={{
          objectFit: 'cover',
          height: '250px',
        }}
      />
      <Card.Body className="bg-dark text-white p-4">
        <Card.Title className="h4 mb-3 text-center">{title}</Card.Title>
        <Card.Text className="text-muted">
          {explanation.length > 150 ? explanation.slice(0, 150) + '...' : explanation}
        </Card.Text>
        <div className="d-flex justify-content-center">
          <Button
            variant="outline-light"
            href={imageUrl}
            target="_blank"
            className="px-4 py-2 rounded-pill"
          >
            Ver imagem original
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ApodCard;
