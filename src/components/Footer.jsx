import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => (
  <footer className="bg-dark text-light py-4">
    <Container>
      <Row>
        <Col md={6}>
          <h5>Medicare</h5>
          <p>Chennai India</p>
          <p>Phone: +91 98765 43210</p>
        </Col>
        <Col md={6} className="text-md-end">
          <p>&copy; {new Date().getFullYear()} Medicare. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
