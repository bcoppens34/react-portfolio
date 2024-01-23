import React from 'react';
import { Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Nav className="ml-auto">
      <Nav.Link href="#about">About Me</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
      <Nav.Link href="#projects">Projects</Nav.Link>
    </Nav>
  );
};

export default Navigation;