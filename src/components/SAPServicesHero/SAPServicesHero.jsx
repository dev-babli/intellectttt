import React from 'react';
import '../../css/sasService.css'; // Assuming you have a CSS file for styling

const SAPServicesHero = () => {
  return (
    <section className="genai-hero3 d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 " style={{ marginTop: '100px' }}>
            <h1 className="fw-bold text-dark mb-3">
             SAP  Services
            </h1>
            <p className="lead text-dark">Transform your enterprise with intelligent, scalable, and future-ready SAP solutions.</p>
            {/* <a href="#contact" className="btn btn-warning btn-lg mt-3 fw-semibold">
              TALK TO OUR EXPERTS
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SAPServicesHero;
