import React from "react";
import "./Services.css";

const ServicePage = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">🛠️ Our Medical Services</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="service-card gradient-green">
            <div className="service-icon">🩺</div>
            <div className="service-title">General Consultation</div>
            <div className="service-desc">
              Expert diagnosis and care from experienced doctors.
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="service-card gradient-blue">
            <div className="service-icon">💉</div>
            <div className="service-title">Vaccination</div>
            <div className="service-desc">
              Safe and timely immunization for all age groups.
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="service-card gradient-pink">
            <div className="service-icon">🧪</div>
            <div className="service-title">Lab Tests</div>
            <div className="service-desc">
              Accurate lab diagnostics with same-day results.
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="service-card gradient-orange">
            <div className="service-icon">🦷</div>
            <div className="service-title">Dental Care</div>
            <div className="service-desc">
              Affordable oral checkups and cosmetic dentistry.
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="service-card gradient-purple">
            <div className="service-icon">👁️</div>
            <div className="service-title">Eye Checkup</div>
            <div className="service-desc">
              Regular vision exams and advanced eye care.
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="service-card gradient-sky">
            <div className="service-icon">🏥</div>
            <div className="service-title">Emergency Services</div>
            <div className="service-desc">
              24/7 emergency response with ambulance support.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;

