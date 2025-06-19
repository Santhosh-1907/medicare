// src/components/Doctors/DoctorsPage.jsx
import React, { useState } from "react";
import { Container, Row, Col, Form, Modal, Button } from "react-bootstrap";
import doctors from "./doctorsData";
import DoctorCard from "./DoctorsCard";

const DoctorsPage = () => {
  const [filter, setFilter] = useState("All");
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const specializations = ["All", ...new Set(doctors.map(d => d.specialization))];

  const filteredDoctors = doctors.filter(
    (d) => filter === "All" || d.specialization === filter
  );

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Meet Our Specialists</h2>

      <Row className="mb-4 justify-content-center">
        <Col md={6}>
          <Form.Select value={filter} onChange={(e) => setFilter(e.target.value)}>
            {specializations.map((spec, i) => (
              <option key={i} value={spec}>{spec}</option>
            ))}
          </Form.Select>
        </Col>
      </Row>

      <Row>
        {filteredDoctors.map((doctor) => (
          <Col md={4} lg={3} sm={6} key={doctor.id} className="mb-4">
            <DoctorCard doctor={doctor} onShowDetails={setSelectedDoctor} />
          </Col>
        ))}
      </Row>

      {selectedDoctor && (
        <Modal show onHide={() => setSelectedDoctor(null)} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedDoctor.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
  <img src={selectedDoctor.image} alt={selectedDoctor.name} className="img-fluid rounded mb-3" />
  <h5>{selectedDoctor.specialization}</h5>
  <p>{selectedDoctor.bio}</p>

  <h6 className="mt-4">Career Timeline</h6>
  <ul className="timeline">
    {selectedDoctor.timeline.map((item, i) => (
      <li key={i} className="timeline-item">
        <div className="timeline-content">
          <span className="timeline-year">{item.year}</span>
          <p>{item.title}</p>
        </div>
      </li>
    ))}
  </ul>
</Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => setSelectedDoctor(null)}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default DoctorsPage;
