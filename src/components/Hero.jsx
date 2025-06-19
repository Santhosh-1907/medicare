import React from 'react';
import { Carousel } from 'react-bootstrap';

const Hero = () => {
  return (
    <Carousel fade interval={4000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/doctor-explaining-diagnosis-female-patient_107420-84859.jpg"
          alt="Medical Slide 1"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Expert Care for Every Patient</h3>
          <p>We provide world-class treatment and compassionate care.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/female-doctor-talking-with-patient-hospital_1303-17842.jpg"
          alt="Medical Slide 2"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Your Health is Our Priority</h3>
          <p>Book appointments anytime, anywhere.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/medical-team-performing-surgery-operation-modern-operating-room_613910-6470.jpg"
          alt="Medical Slide 3"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Advanced Surgery & ICU Facilities</h3>
          <p>Equipped with modern technology and expert teams.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/nurse-checking-patient-temperature-clinic_23-2148740089.jpg"
          alt="Medical Slide 4"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Friendly and Caring Staff</h3>
          <p>We treat you like family — with empathy and attention.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
