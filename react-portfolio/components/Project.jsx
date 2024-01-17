import React from 'react';
import { Card } from 'react-bootstrap';

const Project = ({ title, description, link }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit Project</a>
      </Card.Body>
    </Card>
  );
};

export default Project;