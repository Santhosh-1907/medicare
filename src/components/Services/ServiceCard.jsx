// src/components/Services/ServiceCard.jsx
import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Services.css";

const ServiceCard = ({ service, onShow }) => (
  <Card className="service-card text-center shadow-sm">
    <div className="service-icon">
      <i className={`${service.icon} fa-3x text-primary`}></i>
    </div>
    <Card.Body>
      <Card.Title>{service.title}</Card.Title>
      <Card.Text>{service.description}</Card.Text>
      <Button variant="outline-primary" onClick={() => onShow(service)}>Learn More</Button>
    </Card.Body>
  </Card>
);

export default ServiceCard;
