import React from 'react';
import '../../css/CloudAndApp.css'; // Assuming you have a CSS file for styling

const CloudAndApp = () => {
  return (
   <section className="genai-hero2 d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 " style={{ marginTop: '100px' }}>
            <h1 className="fw-bold text-dark mb-3">
             Cloud & Application <br /> Service
            </h1>
            <p className="lead text-dark">Accelerate your digital transformation with our end-to-end cloud and application solutions.</p>
            {/* <a href="#contact" className="btn btn-warning btn-lg mt-3 fw-semibold">
              TALK TO OUR EXPERTS
            </a> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CloudAndApp
