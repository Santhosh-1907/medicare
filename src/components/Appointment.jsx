import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Appointment = () => (
  <section id="appointment" className="py-5">
    <Container>
      <h2 className="text-center mb-4">Book an Appointment</h2>
      <Row className="justify-content-center">
        <Col md={8}>
          <Form className="shadow p-4 rounded bg-light">
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="tel" placeholder="Enter your phone number" required />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formDepartment">
                  <Form.Label>Department</Form.Label>
                  <Form.Select required>
                    <option>Select Department</option>
                    <option>Cardiology</option>
                    <option>Orthopedic</option>
                    <option>Pediatrics</option>
                    <option>Dermatology</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3 mt-4 bg-white p-4 rounded shadow-sm" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Write a message..." />
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit">
                Book Now
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Appointment;
