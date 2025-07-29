import React from 'react';
import '../../css/GenAIHero.css'; // Assuming you have a CSS file for styling

const GenAIHero = () => {
  return (
    <section className="genai-hero d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 " style={{ marginTop: '100px' }}>
            <h1 className="fw-bold text-dark mb-3">
             AI & Gen AI <br /> Industrialization Consulting
            </h1>
            <p className="lead text-dark">Build. Evaluate. Generate.</p>
            <a href="#contact" className="btn btn-warning btn-lg mt-3 fw-semibold">
              TALK TO OUR EXPERTS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenAIHero;
