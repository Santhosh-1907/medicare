import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => (
  <section id="about" className="py-5">
    <Container>
      <Row className="align-items-center">
        <Col md={6}>
          <img
            src="https://img.freepik.com/free-photo/healthcare-workers-collaborating-hospital-corridor_1098-19253.jpg"
            alt="About Hospital"
            className="img-fluid rounded shadow"
          />
        </Col>
        <Col md={6}>
          <h2>About Medicare</h2>
          <p>
            Medicare is a trusted hospital offering top-tier health services with qualified doctors and cutting-edge equipment.
          </p>

          {/* YouTube Embed */}
          <div className="ratio ratio-16x9 mt-3">
            <iframe
  src="https://www.youtube.com/embed/7Pq-S557XQU"
  title="Medical Clinic Tour"
  allowFullScreen
></iframe>

          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;
