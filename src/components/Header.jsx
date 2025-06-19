import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => (
  <Navbar bg="light" expand="lg" sticky="top">
    <Container>
      <Navbar.Brand href="#">Medicare</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ms-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#ServicesPage">Services</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#DoctorsPage">Doctors</Nav.Link>
          <Nav.Link href="#appointment">Appointment</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
