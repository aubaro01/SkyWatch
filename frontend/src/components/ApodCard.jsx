import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ApodCard = ({ title, explanation, imageUrl }) => {
  return (
    <Card className="mb-4 shadow-lg">
      <Card.Img variant="top" src={imageUrl} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{explanation}</Card.Text>
        <Button variant="primary" href={imageUrl} target="_blank">
          Ver imagem original
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ApodCard;
