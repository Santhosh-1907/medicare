import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const doctors = [
  {
    name: "Dr. Anjali Mehta",
    specialization: "Cardiologist",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Dr. Ramesh Rao",
    specialization: "Orthopedic",
    img: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "Dr. Neha Singh",
    specialization: "Pediatrician",
    img: "https://randomuser.me/api/portraits/women/74.jpg",
  },
];

const Doctors = () => (
  <section id="doctors" className="py-5 bg-light">
    <Container>
      <h2 className="text-center mb-4">Our Expert Doctors</h2>
      <Row>
        {doctors.map((doc, idx) => (
          <Col md={4} key={idx}>
            <Card className="mb-4 text-center shadow-sm">
              <Card.Img variant="top" src={doc.img} />
              <Card.Body>
                <Card.Title>{doc.name}</Card.Title>
                <Card.Text>{doc.specialization}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Doctors;
