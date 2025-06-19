// src/components/Facilities/FacilitiesPage.jsx
import React from "react";
import { Container, Row, Col, Card, Carousel, Ratio } from "react-bootstrap";
import { facilityImages, testimonials } from "./facilitiesData";
import "./Facilities.css";

const FacilitiesPage = () => {
  return (
    <Container className="py-5 facilities-page">
      <h2 className="text-center mb-4">🏥 Our Hospital Facilities</h2>

      {/* 🖼️ Image Gallery */}
      <section className="mb-5">
        <h4 className="mb-3">🖼️ Infrastructure Gallery</h4>
        <Row>
          {facilityImages.map((img, idx) => (
            <Col key={idx} md={4} className="mb-4">
              <Card className="img-card shadow-sm">
                <Card.Img src={img} loading="lazy" alt={`Facility ${idx + 1}`} />


              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* 🎥 Video Tour */}
      <section className="mb-5">
        <h4 className="mb-3">🎥 Facility Tour Video</h4>
        <Ratio aspectRatio="16x9">
          <iframe
            src="https://www.youtube.com/embed/2lAe1cqCOXo"
            title="Facility Tour"
            allowFullScreen
          ></iframe>
        </Ratio>
      </section>

      {/* ✅ Testimonials */}
      <section>
        <h4 className="mb-3">✅ What Our Patients Say</h4>
        <Carousel>
          {testimonials.map((t, i) => (
            <Carousel.Item key={i} interval={1000}>
              <div className="testimonial text-center p-4">
                <img src={t.img} className="testimonial-img mb-3" alt={t.name} />
                <p className="lead">"{t.feedback}"</p>
                <h6 className="mt-2">{t.name}</h6>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
    </Container>
  );
};

export default FacilitiesPage;
