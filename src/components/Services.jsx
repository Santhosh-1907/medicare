import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const services = [
  { icon: "💉", title: "Vaccination", desc: "Protective immunization services." },
  { icon: "🩺", title: "Checkup", desc: "General health examination." },
  { icon: "🧬", title: "Lab Test", desc: "Fast and accurate lab diagnostics." },
];

const Services = () => (
  <section id="services" className="py-5 bg-light">
    <Container>
      <h2 className="text-center mb-4">Our Services</h2>
      <Row>
        {services.map((service, idx) => (
          <Col md={4} key={idx}>
            <Card className="text-center mb-4 shadow-sm">
              <Card.Body>
                <div style={{ fontSize: "3rem" }}>{service.icon}</div>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Services;
