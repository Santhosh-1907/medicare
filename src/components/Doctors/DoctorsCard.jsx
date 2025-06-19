// src/components/Doctors/DoctorCard.jsx
import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Doctors.css";

const DoctorCard = ({ doctor, onShowDetails }) => (
  <Card className="doctor-card text-center shadow-sm">
    <Card.Img variant="top" src={doctor.image} className="doctor-img" />
    <Card.Body>
      <Card.Title>{doctor.name}</Card.Title>
      <Card.Text className="text-muted">{doctor.specialization}</Card.Text>
      <Button variant="info" onClick={() => onShowDetails(doctor)}>View Profile</Button>
    </Card.Body>
  </Card>
);

export default DoctorCard;
