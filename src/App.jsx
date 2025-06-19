import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BlogPage from "./components/Blog/BlogPage";
import Services from "./components/Services";
import About from "./components/About";
import Doctors from "./components/Doctors";
import Appointment from "./components/Appointment";
import Footer from "./components/Footer";

import DoctorsPage from "./components/Doctors/DoctorsPage";
import ServicesPage from "./components/Services/ServicePage";
import FacilitiesPage from "./components/Facilities/FacilitiesPage";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ServicesPage/>
      {/* <Services /> */}
      <FacilitiesPage/>
      <About />
      <DoctorsPage/>
      <BlogPage/>
      <Appointment />
      <Footer />
      
    </>
  );
}

export default App;
