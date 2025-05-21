import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ApodCard = ({ title, explanation, imageUrl }) => {
  return (
    <Card className="mb-4 shadow-lg border-0 rounded-3">
      <Card.Img
        variant="top"
        src={imageUrl}
        alt={title}
        className="rounded-3"
        style={{
          objectFit: 'cover',
          height: '250px', // Ajuste a altura da imagem conforme necessário
        }}
      />
      <Card.Body className="bg-dark text-light rounded-3">
        <Card.Title className="fs-4 fw-bold mb-3">{title}</Card.Title>
        <Card.Text className="mb-4">{explanation}</Card.Text>
        <Button
          variant="primary"
          href={imageUrl}
          target="_blank"
          className="d-block mx-auto py-2 px-4 rounded-pill"
        >
          Ver imagem original
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ApodCard;
