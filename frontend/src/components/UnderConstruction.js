// src/components/UnderConstruction.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function UnderConstruction() {
  return (
    <Container className="text-center mt-5">
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Site Under Construction</Card.Title>
          <Card.Text>
            We are working hard to bring you the best experience. Please check back soon!
          </Card.Text>
          <Button variant="primary">Contact Us</Button>
        </Card.Body>
      </Card>
      <Row className="mt-5">
        <Col>
          <img
            src="https://i.etsystatic.com/isla/fbb946/67999264/isla_500x500.67999264_5u6h369i.jpg?version=0"
            alt="Under Construction"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default UnderConstruction;

