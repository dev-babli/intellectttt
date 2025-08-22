import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const StaffAugmentationDetails = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <>
      {/* Hero Tagline Section */}
      <section className="hero-section pt-120 pb-80" style={{ 
        background: 'linear-gradient(135deg, #fafbfc 0%, #f1f5f9 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle Deep Blue Accent Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.05) 0%, rgba(59, 130, 246, 0.02) 100%)',
          pointerEvents: 'none'
        }}></div>
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("/images/bg/pattern-dots.png")',
          opacity: 0.03,
          backgroundSize: '20px 20px'
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <Fade direction="up" triggerOnce={false} duration={1000}>
                <div className="sec-title--two">
                  <h2 className="title" style={{ 
                    fontSize: '3.5rem', 
                    fontWeight: '800', 
                    color: '#0f172a',
                    lineHeight: '1.1',
                    marginBottom: '1.5rem',
                    textShadow: '0 2px 4px rgba(0,0,0,0.05)'
                  }}>
                    Build Smarter, Faster, Stronger Teams
                  </h2>
                  <p className="content" style={{ 
                    fontSize: '1.3rem', 
                    color: '#475569',
                    lineHeight: '1.6',
                    fontWeight: '500',
                    marginBottom: '2rem'
                  }}>
                    with Intellectt's Global Staff Augmentation Model
                  </p>
                  <div style={{
                    display: 'flex',
                    gap: '20px',
                    flexWrap: 'wrap'
                  }}>
                    <div style={{
                      background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%)',
                      color: '#374151',
                      padding: '15px 25px',
                      borderRadius: '12px',
                      boxShadow: '0 4px 15px rgba(30, 58, 138, 0.1)',
                      fontWeight: '600',
                      border: '1px solid rgba(30, 58, 138, 0.2)'
                    }}>
                      ✓ Pre-vetted Talent
                    </div>
                    <div style={{
                      background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%)',
                      color: '#374151',
                      padding: '15px 25px',
                      borderRadius: '12px',
                      boxShadow: '0 4px 15px rgba(30, 58, 138, 0.1)',
                      fontWeight: '600',
                      border: '1px solid rgba(30, 58, 138, 0.2)'
                    }}>
                      ✓ Flexible Scaling
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="col-lg-6">
              <Fade direction="right" triggerOnce={false} duration={1400}>
                <div style={{ textAlign: 'center' }}>
                  <img 
                    src="/herosectionimages/New ONES/7.webp" 
                    alt="Team Collaboration" 
                    style={{ 
                      borderRadius: '25px', 
                      boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                      width: '100%',
                      maxWidth: '500px',
                      height: 'auto'
                    }} 
                  />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Staff Augmentation Model */}
      <section className="about pt-60 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <Fade direction="up" triggerOnce={false} duration={1000}>
                <div className="sec-title--two sec-title--three">
                  <div className="sub-title">
                    <span>Our Model</span>
                  </div>
                  <h2 className="title">Staff Augmentation</h2>
                  <p className="content">
                    At Intellectt, we understand that organizations need flexibility and speed when building teams. Our Staff Augmentation services provide highly skilled professionals who integrate seamlessly into your in-house teams, giving you the agility to scale up or down as business needs evolve.
                  </p>
                  <p className="content">
                    Unlike traditional outsourcing, our model ensures that you retain full control of your projects, while we take care of sourcing, screening, and onboarding the right talent.
                  </p>
                </div>
              </Fade>
            </div>
            <div className="col-lg-6">
              <Fade direction="right" triggerOnce={false} duration={1400}>
                <div className="about-right">
                  <div className="xb-img">
                    <img src="/herosectionimages/engineers-brainstorming-ways-use-ai.jpg" alt="Team Collaboration" style={{ 
                      borderRadius: '20px', 
                      boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
                      width: '100%',
                      height: '400px',
                      objectFit: 'cover'
                    }} />
                  </div>
                  <div className="xb-content" style={{ 
                    background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%)', 
                    borderRadius: '20px', 
                    padding: '30px', 
                    boxShadow: '0 8px 25px rgba(30, 58, 138, 0.15)', 
                    border: '1px solid rgba(30, 58, 138, 0.2)',
                    marginTop: '-60px',
                    marginLeft: '30px',
                    position: 'relative',
                    zIndex: 2,
                    backdropFilter: 'blur(10px)'
                  }}>
                    <div className="xb-item--inner">
                      <h3 className="xb-item--number" style={{ color: '#1e3a8a', fontSize: '3.5rem', fontWeight: '800', marginBottom: '10px', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>100%</h3>
                      <span className="xb-item--content" style={{ color: '#64748b', fontWeight: '600', fontSize: '1.2rem' }}>Project Control Retained</span>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="feature pt-150 pb-150" style={{ 
        background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.02) 0%, rgba(59, 130, 246, 0.01) 100%)'
      }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <Fade direction="up" triggerOnce={false} duration={1000}>
                <div className="sec-title--two text-center mb-70">
                  <h2 className="title">Our Augmentation Model</h2>
                  <p className="content">We follow a clear, proven process to ensure efficiency and reliability:</p>
                </div>
              </Fade>
            </div>
          </div>
          
          <div className="row mt-none-30">
            <div className="col-lg-3 col-md-6 mt-30">
              <Fade direction="up" triggerOnce={false} duration={1000} delay={100}>
                <div className="feature-item text-center" style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                  borderRadius: '20px',
                  padding: '30px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  border: '1px solid rgba(30, 58, 138, 0.1)',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(30, 58, 138, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                }}>
                  <div className="xb-item--icon" style={{ 
                    width: '90px', 
                    height: '90px', 
                    background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%)', 
                    borderRadius: '22px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 25px',
                    boxShadow: '0 8px 25px rgba(30, 58, 138, 0.15)',
                    position: 'relative',
                    border: '1px solid rgba(30, 58, 138, 0.2)'
                  }}>
                    <span style={{ color: '#1e3a8a', fontSize: '2.5rem', fontWeight: '800' }}>1</span>
                  </div>
                  <h3 className="xb-item--title" style={{ 
                    color: '#374151', 
                    fontSize: '1.3rem', 
                    fontWeight: '700', 
                    marginBottom: '15px'
                  }}>Requirement Analysis</h3>
                  <p className="xb-item--content" style={{ 
                    color: '#64748b', 
                    lineHeight: '1.6',
                    fontSize: '1rem'
                  }}>Understanding your project scope, skills, and timelines.</p>
                </div>
              </Fade>
            </div>
            
            <div className="col-lg-3 col-md-6 mt-30">
              <Fade direction="up" triggerOnce={false} duration={1000} delay={200}>
                <div className="feature-item text-center" style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                  borderRadius: '20px',
                  padding: '30px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  border: '1px solid rgba(100, 116, 139, 0.1)',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(30, 58, 138, 0.15)';
                  e.currentTarget.style.border = '1px solid rgba(30, 58, 138, 0.2)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(30, 58, 138, 0.05) 0%, rgba(59, 130, 246, 0.02) 100%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                  e.currentTarget.style.border = '1px solid rgba(100, 116, 139, 0.1)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)';
                }}>
                  <div className="xb-item--icon" style={{ 
                    width: '90px', 
                    height: '90px', 
                    background: 'linear-gradient(135deg, #64748b 0%, #475569 100%)', 
                    borderRadius: '22px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 25px',
                    boxShadow: '0 12px 35px rgba(100, 116, 139, 0.2)',
                    position: 'relative'
                  }}>
                    <span style={{ color: 'white', fontSize: '2.5rem', fontWeight: '800' }}>2</span>
                  </div>
                  <h3 className="xb-item--title" style={{ 
                    color: '#374151', 
                    fontSize: '1.3rem', 
                    fontWeight: '700', 
                    marginBottom: '15px'
                  }}>Talent Identification & Screening</h3>
                  <p className="xb-item--content" style={{ 
                    color: '#64748b', 
                    lineHeight: '1.6',
                    fontSize: '1rem'
                  }}>Pre-vetted professionals shortlisted for technical and cultural fit.</p>
                </div>
              </Fade>
            </div>
            
            <div className="col-lg-3 col-md-6 mt-30">
              <Fade direction="up" triggerOnce={false} duration={1000} delay={300}>
                <div className="feature-item text-center" style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                  borderRadius: '20px',
                  padding: '30px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  border: '1px solid rgba(33, 40, 119, 0.1)',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(33, 40, 119, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                }}>
                  <div className="xb-item--icon" style={{ 
                    width: '90px', 
                    height: '90px', 
                    background: 'linear-gradient(135deg, #64748b 0%, #475569 100%)', 
                    borderRadius: '22px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 25px',
                    boxShadow: '0 12px 35px rgba(100, 116, 139, 0.2)',
                    position: 'relative'
                  }}>
                    <span style={{ color: 'white', fontSize: '2.5rem', fontWeight: '800' }}>3</span>
                  </div>
                  <h3 className="xb-item--title" style={{ 
                    color: '#374151', 
                    fontSize: '1.3rem', 
                    fontWeight: '700', 
                    marginBottom: '15px'
                  }}>Onboarding & Integration</h3>
                  <p className="xb-item--content" style={{ 
                    color: '#64748b', 
                    lineHeight: '1.6',
                    fontSize: '1rem'
                  }}>Quick onboarding to ensure minimal downtime.</p>
                </div>
              </Fade>
            </div>
            
            <div className="col-lg-3 col-md-6 mt-30">
              <Fade direction="up" triggerOnce={false} duration={1000} delay={400}>
                <div className="feature-item text-center" style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                  borderRadius: '20px',
                  padding: '30px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  border: '1px solid rgba(33, 40, 119, 0.1)',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(33, 40, 119, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                }}>
                  <div className="xb-item--icon" style={{ 
                    width: '90px', 
                    height: '90px', 
                    background: 'linear-gradient(135deg, #64748b 0%, #475569 100%)', 
                    borderRadius: '22px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 25px',
                    boxShadow: '0 12px 35px rgba(100, 116, 139, 0.2)',
                    position: 'relative'
                  }}>
                    <span style={{ color: 'white', fontSize: '2.5rem', fontWeight: '800' }}>4</span>
                  </div>
                  <h3 className="xb-item--title" style={{ 
                    color: '#374151', 
                    fontSize: '1.3rem', 
                    fontWeight: '700', 
                    marginBottom: '15px'
                  }}>Ongoing Support & Flexibility</h3>
                  <p className="xb-item--content" style={{ 
                    color: '#64748b', 
                    lineHeight: '1.6',
                    fontSize: '1rem'
                  }}>Continuous support with the ability to scale resources up or down.</p>
                </div>
              </Fade>
            </div>
          </div>
          
          <div className="row justify-content-center mt-70">
            <div className="col-lg-8">
              <Fade direction="up" triggerOnce={false} duration={1000} delay={500}>
                <div className="text-center">
                  <div style={{ 
                    background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%)', 
                    color: '#374151',
                    padding: '30px',
                    borderRadius: '15px',
                    display: 'inline-block',
                    boxShadow: '0 8px 25px rgba(30, 58, 138, 0.15)',
                    border: '1px solid rgba(30, 58, 138, 0.2)'
                  }}>
                    <p style={{ fontSize: '1.1rem', fontWeight: '600', fontStyle: 'italic', margin: 0 }}>
                      This approach reduces hiring time, optimizes costs, and ensures continuity in delivery.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Augmentation Section */}
      <section className="about pt-60 pb-100" style={{ 
        background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.02) 0%, rgba(59, 130, 246, 0.01) 100%)'
      }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <Fade direction="up" triggerOnce={false} duration={1000}>
                <div className="sec-title--two text-center mb-70">
                  <h2 className="title">Types of Augmentation</h2>
                </div>
              </Fade>
            </div>
          </div>
          
          <div className="row mt-none-30">
            <div className="col-lg-4 col-md-6 mt-30">
              <Fade direction="up" triggerOnce={false} duration={1000} delay={100}>
                <div className="augmentation-card" style={{ 
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                  borderRadius: '20px',
                  padding: '30px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  border: '1px solid rgba(33, 40, 119, 0.1)',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(33, 40, 119, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                }}>
                  <div className="card-image" style={{ marginBottom: '25px', position: 'relative' }}>
                    <img src="/herosectionimages/New ONES/1.webp" alt="Onshore Augmentation" style={{ 
                      borderRadius: '15px', 
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      display: 'block'
                    }} />
                  </div>
                  <div className="card-content">
                                      <h3 style={{ 
                    color: '#374151', 
                    fontSize: '1.5rem', 
                    fontWeight: '700', 
                    marginBottom: '15px',
                    textAlign: 'center',
                    lineHeight: '1.2'
                  }}>Onshore Augmentation</h3>
                  <p style={{ 
                    color: '#64748b', 
                    lineHeight: '1.6', 
                    marginBottom: '20px',
                    textAlign: 'center',
                    fontSize: '1rem'
                  }}>Resources placed within your region for real-time collaboration and compliance.</p>
                  <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
                    <li style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      marginBottom: '12px',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.05) 0%, rgba(59, 130, 246, 0.02) 100%)',
                      border: '1px solid rgba(30, 58, 138, 0.1)'
                    }}>
                      <span style={{ color: '#1e3a8a', marginRight: '12px', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                      <span style={{ color: '#475569', fontWeight: '500' }}>Real-time collaboration</span>
                    </li>
                    <li style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      marginBottom: '12px',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      background: 'rgba(100, 116, 139, 0.05)',
                      border: '1px solid rgba(100, 116, 139, 0.1)'
                    }}>
                      <span style={{ color: '#64748b', marginRight: '12px', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                      <span style={{ color: '#475569', fontWeight: '500' }}>Local compliance</span>
                    </li>
                    <li style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      marginBottom: '12px',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      background: 'rgba(100, 116, 139, 0.05)',
                      border: '1px solid rgba(100, 116, 139, 0.1)'
                    }}>
                      <span style={{ color: '#64748b', marginRight: '12px', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                      <span style={{ color: '#475569', fontWeight: '500' }}>Direct oversight</span>
                    </li>
                  </ul>
                  </div>
                </div>
              </Fade>
            </div>
            
            <div className="col-lg-4 col-md-6 mt-30">
              <Fade direction="up" triggerOnce={false} duration={1000} delay={200}>
                <div className="augmentation-card" style={{ 
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                  borderRadius: '20px',
                  padding: '30px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  border: '1px solid rgba(33, 40, 119, 0.1)',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(33, 40, 119, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                }}>
                  <div className="card-image" style={{ marginBottom: '25px', position: 'relative' }}>
                    <img src="/herosectionimages/New ONES/2.webp" alt="Offshore Augmentation" style={{ 
                      borderRadius: '15px', 
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      display: 'block'
                    }} />
                  </div>
                  <div className="card-content">
                                      <h3 style={{ 
                    color: '#374151', 
                    fontSize: '1.5rem', 
                    fontWeight: '700', 
                    marginBottom: '15px',
                    textAlign: 'center',
                    lineHeight: '1.2'
                  }}>Offshore Augmentation</h3>
                  <p style={{ 
                    color: '#64748b', 
                    lineHeight: '1.6', 
                    marginBottom: '20px',
                    textAlign: 'center',
                    fontSize: '1rem'
                  }}>Skilled professionals from global locations for cost efficiency and round-the-clock delivery.</p>
                  <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
                    <li style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      marginBottom: '12px',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      background: 'rgba(100, 116, 139, 0.05)',
                      border: '1px solid rgba(100, 116, 139, 0.1)'
                    }}>
                      <span style={{ color: '#64748b', marginRight: '12px', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                      <span style={{ color: '#475569', fontWeight: '500' }}>Cost efficiency</span>
                    </li>
                    <li style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      marginBottom: '12px',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      background: 'rgba(100, 116, 139, 0.05)',
                      border: '1px solid rgba(100, 116, 139, 0.1)'
                    }}>
                      <span style={{ color: '#64748b', marginRight: '12px', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                      <span style={{ color: '#475569', fontWeight: '500' }}>Round-the-clock delivery</span>
                    </li>
                    <li style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      marginBottom: '12px',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      background: 'rgba(100, 116, 139, 0.05)',
                      border: '1px solid rgba(100, 116, 139, 0.1)'
                    }}>
                      <span style={{ color: '#64748b', marginRight: '12px', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                      <span style={{ color: '#475569', fontWeight: '500' }}>Global talent pool</span>
                    </li>
                  </ul>
                  </div>
                </div>
              </Fade>
            </div>
            
            <div className="col-lg-4 col-md-6 mt-30">
              <Fade direction="up" triggerOnce={false} duration={1000} delay={300}>
                <div className="augmentation-card" style={{ 
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                  borderRadius: '20px',
                  padding: '30px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  border: '1px solid rgba(33, 40, 119, 0.1)',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(33, 40, 119, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                }}>
                  <div className="card-image" style={{ marginBottom: '25px', position: 'relative' }}>
                    <img src="/herosectionimages/New ONES/3.webp" alt="Hybrid Model" style={{ 
                      borderRadius: '15px', 
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      display: 'block'
                    }} />
                  </div>
                  <div className="card-content">
                                      <h3 style={{ 
                    color: '#374151', 
                    fontSize: '1.5rem', 
                    fontWeight: '700', 
                    marginBottom: '15px',
                    textAlign: 'center',
                    lineHeight: '1.2'
                  }}>Hybrid Model</h3>
                  <p style={{ 
                    color: '#64748b', 
                    lineHeight: '1.6', 
                    marginBottom: '20px',
                    textAlign: 'center',
                    fontSize: '1rem'
                  }}>A blend of onshore and offshore teams, balancing cost, quality, and collaboration.</p>
                  <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
                    <li style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      marginBottom: '12px',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      background: 'rgba(100, 116, 139, 0.05)',
                      border: '1px solid rgba(100, 116, 139, 0.1)'
                    }}>
                      <span style={{ color: '#64748b', marginRight: '12px', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                      <span style={{ color: '#475569', fontWeight: '500' }}>Cost optimization</span>
                    </li>
                    <li style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      marginBottom: '12px',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      background: 'rgba(100, 116, 139, 0.05)',
                      border: '1px solid rgba(100, 116, 139, 0.1)'
                    }}>
                      <span style={{ color: '#64748b', marginRight: '12px', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                      <span style={{ color: '#475569', fontWeight: '500' }}>Quality balance</span>
                    </li>
                    <li style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      marginBottom: '12px',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      background: 'rgba(100, 116, 139, 0.05)',
                      border: '1px solid rgba(100, 116, 139, 0.1)'
                    }}>
                      <span style={{ color: '#64748b', marginRight: '12px', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                      <span style={{ color: '#475569', fontWeight: '500' }}>Flexible collaboration</span>
                    </li>
                  </ul>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="feature pt-150 pb-150" style={{ 
        background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.02) 0%, rgba(59, 130, 246, 0.01) 100%)'
      }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <Fade direction="up" triggerOnce={false} duration={1000}>
                <div className="sec-title--two text-center mb-70">
                  <h2 className="title">Flexible Engagement Models</h2>
                  <p className="content">We provide flexible engagement models to suit your business needs:</p>
                </div>
              </Fade>
            </div>
          </div>
          
          <div className="row mt-none-30">
            <div className="col-lg-4 col-md-6 mt-30">
              <Fade direction="up" triggerOnce={false} duration={1000} delay={100}>
                <div className="feature-item text-center" style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                  borderRadius: '20px',
                  padding: '30px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  border: '1px solid rgba(30, 58, 138, 0.1)',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(30, 58, 138, 0.15)';
                  e.currentTarget.style.border = '1px solid rgba(30, 58, 138, 0.2)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(30, 58, 138, 0.05) 0%, rgba(59, 130, 246, 0.02) 100%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                  e.currentTarget.style.border = '1px solid rgba(30, 58, 138, 0.1)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)';
                }}>
                  <div className="xb-item--icon" style={{ 
                    width: '70px', 
                    height: '70px', 
                    background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%)', 
                    borderRadius: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 25px',
                    boxShadow: '0 8px 25px rgba(30, 58, 138, 0.15)',
                    position: 'relative',
                    border: '1px solid rgba(30, 58, 138, 0.2)'
                  }}>
                    <span style={{ color: '#1e3a8a', fontSize: '1.8rem', fontWeight: '800' }}>FTE</span>
                  </div>
                  <h3 className="xb-item--title" style={{ 
                    color: '#374151', 
                    fontSize: '1.4rem', 
                    fontWeight: '700', 
                    marginBottom: '15px'
                  }}>Full-Time (FTE)</h3>
                  <p className="xb-item--content" style={{ 
                    color: '#64748b', 
                    lineHeight: '1.6',
                    fontSize: '1rem'
                  }}>Long-term dedicated resources for sustained projects.</p>
                </div>
              </Fade>
            </div>
            
            <div className="col-lg-4 col-md-6 mt-30">
              <Fade direction="up" triggerOnce={false} duration={1000} delay={200}>
                <div className="feature-item text-center" style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                  borderRadius: '20px',
                  padding: '30px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  border: '1px solid rgba(33, 40, 119, 0.1)',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(33, 40, 119, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                }}>
                  <div className="xb-item--icon" style={{ 
                    width: '70px', 
                    height: '70px', 
                    background: 'linear-gradient(135deg, #64748b 0%, #475569 100%)', 
                    borderRadius: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 25px',
                    boxShadow: '0 10px 30px rgba(100, 116, 139, 0.2)',
                    position: 'relative'
                  }}>
                    <span style={{ color: 'white', fontSize: '1.8rem', fontWeight: '800' }}>C</span>
                  </div>
                  <h3 className="xb-item--title" style={{ 
                    color: '#374151', 
                    fontSize: '1.4rem', 
                    fontWeight: '700', 
                    marginBottom: '15px'
                  }}>Contract</h3>
                  <p className="xb-item--content" style={{ 
                    color: '#64748b', 
                    lineHeight: '1.6',
                    fontSize: '1rem'
                  }}>Short-term professionals for specific project requirements.</p>
                </div>
              </Fade>
            </div>
            
            <div className="col-lg-4 col-md-6 mt-30">
              <Fade direction="up" triggerOnce={false} duration={1000} delay={300}>
                <div className="feature-item text-center" style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                  borderRadius: '20px',
                  padding: '30px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  border: '1px solid rgba(33, 40, 119, 0.1)',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(33, 40, 119, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                }}>
                  <div className="xb-item--icon" style={{ 
                    width: '70px', 
                    height: '70px', 
                    background: 'linear-gradient(135deg, #64748b 0%, #475569 100%)', 
                    borderRadius: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 25px',
                    boxShadow: '0 10px 30px rgba(100, 116, 139, 0.2)',
                    position: 'relative'
                  }}>
                    <span style={{ color: 'white', fontSize: '1.8rem', fontWeight: '800' }}>C2H</span>
                  </div>
                  <h3 className="xb-item--title" style={{ 
                    color: '#374151', 
                    fontSize: '1.4rem', 
                    fontWeight: '700', 
                    marginBottom: '15px'
                  }}>Contract-to-Hire (C2H)</h3>
                  <p className="xb-item--content" style={{ 
                    color: '#64748b', 
                    lineHeight: '1.6',
                    fontSize: '1rem'
                  }}>Flexibility to evaluate performance before converting to full-time.</p>
                </div>
              </Fade>
            </div>
            
            <div className="col-lg-4 col-md-6 mt-30">
              <Fade direction="up" triggerOnce={false} duration={1000} delay={400}>
                <div className="feature-item text-center" style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                  borderRadius: '20px',
                  padding: '30px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  border: '1px solid rgba(33, 40, 119, 0.1)',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(33, 40, 119, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                }}>
                  <div className="xb-item--icon" style={{ 
                    width: '70px', 
                    height: '70px', 
                    background: 'linear-gradient(135deg, #64748b 0%, #475569 100%)', 
                    borderRadius: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 25px',
                    boxShadow: '0 10px 30px rgba(100, 116, 139, 0.2)',
                    position: 'relative'
                  }}>
                    <span style={{ color: 'white', fontSize: '1.8rem', fontWeight: '800' }}>W2</span>
                  </div>
                  <h3 className="xb-item--title" style={{ 
                    color: '#374151', 
                    fontSize: '1.4rem', 
                    fontWeight: '700', 
                    marginBottom: '15px'
                  }}>W2/1099 Models</h3>
                  <p className="xb-item--content" style={{ 
                    color: '#64748b', 
                    lineHeight: '1.6',
                    fontSize: '1rem'
                  }}>U.S.-compliant payroll and tax engagement structures.</p>
                </div>
              </Fade>
            </div>
            
            <div className="col-lg-4 col-md-6 mt-30">
              <Fade direction="up" triggerOnce={false} duration={1000} delay={500}>
                <div className="feature-item text-center" style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                  borderRadius: '20px',
                  padding: '30px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  border: '1px solid rgba(33, 40, 119, 0.1)',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(33, 40, 119, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                }}>
                  <div className="xb-item--icon" style={{ 
                    width: '70px', 
                    height: '70px', 
                    background: 'linear-gradient(135deg, #64748b 0%, #475569 100%)', 
                    borderRadius: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 25px',
                    boxShadow: '0 10px 30px rgba(100, 116, 139, 0.2)',
                    position: 'relative'
                  }}>
                    <span style={{ color: 'white', fontSize: '1.8rem', fontWeight: '800' }}>C2C</span>
                  </div>
                  <h3 className="xb-item--title" style={{ 
                    color: '#374151', 
                    fontSize: '1.4rem', 
                    fontWeight: '700', 
                    marginBottom: '15px'
                  }}>Corp-to-Corp (C2C)</h3>
                  <p className="xb-item--content" style={{ 
                    color: '#64748b', 
                    lineHeight: '1.6',
                    fontSize: '1rem'
                  }}>Engagement with incorporated vendors/partners for resource deployment under corporate agreements.</p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>

      {/* Why Intellectt Section with Parallax */}
      <section className="cta-section pt-120 pb-120" style={{ 
        background: `url("/herosectionimages/New ONES/8.webp")`,
        backgroundSize: 'auto',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Overlay Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("/images/bg/pattern-dots.png")',
          opacity: 0.1,
          backgroundSize: '20px 20px',
          pointerEvents: 'none'
        }}></div>
        
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '200px',
          height: '200px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite',
          pointerEvents: 'none'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: '150px',
          height: '150px',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite reverse',
          pointerEvents: 'none'
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-10">
              <Fade direction="left" triggerOnce={false} duration={1000}>
                <div style={{ textAlign: 'left' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '2rem',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                  }}>
                    <span style={{ color: 'white', fontSize: '2.5rem', fontWeight: '700' }}>↑</span>
                  </div>
                  
                  <h2 style={{ 
                    fontSize: '3.5rem', 
                    fontWeight: '800', 
                    marginBottom: '2rem',
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                    lineHeight: '1.1',
                    color: 'white'
                  }}>
                    Why Intellectt
                  </h2>
                  
                  <p style={{ 
                    fontSize: '1.3rem', 
                    lineHeight: '1.8', 
                    opacity: 0.95,
                    maxWidth: '700px',
                    marginBottom: '2.5rem',
                    fontWeight: '500',
                    textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                  }}>
                    With Intellectt, you gain the right talent at the right time—without the overhead of lengthy recruitment cycles. Whether you need onshore presence, offshore scalability, or a hybrid approach, our Staff Augmentation model ensures flexibility, cost-effectiveness, and direct control over outcomes.
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    gap: '20px',
                    flexWrap: 'wrap',
                    marginBottom: '2rem'
                  }}>
                    <div style={{
                      background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%)',
                      color: 'white',
                      padding: '12px 20px',
                      borderRadius: '25px',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(30, 58, 138, 0.2)',
                      fontWeight: '600',
                      fontSize: '0.95rem',
                      boxShadow: '0 4px 15px rgba(30, 58, 138, 0.1)'
                    }}>
                      ✓ Pre-vetted Professionals
                    </div>
                    <div style={{
                      background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%)',
                      color: 'white',
                      padding: '12px 20px',
                      borderRadius: '25px',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(30, 58, 138, 0.2)',
                      fontWeight: '600',
                      fontSize: '0.95rem',
                      boxShadow: '0 4px 15px rgba(30, 58, 138, 0.1)'
                    }}>
                      ✓ Flexible Scaling
                    </div>
                    <div style={{
                      background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%)',
                      color: 'white',
                      padding: '12px 20px',
                      borderRadius: '25px',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(30, 58, 138, 0.2)',
                      fontWeight: '600',
                      fontSize: '0.95rem',
                      boxShadow: '0 4px 15px rgba(30, 58, 138, 0.1)'
                    }}>
                      ✓ Cost-Effective
                    </div>
                    <div style={{
                      background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%)',
                      color: 'white',
                      padding: '12px 20px',
                      borderRadius: '25px',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(30, 58, 138, 0.2)',
                      fontWeight: '600',
                      fontSize: '0.95rem',
                      boxShadow: '0 4px 15px rgba(30, 58, 138, 0.1)'
                    }}>
                      ✓ Global Expertise
                    </div>
                  </div>
                  
                  <div>
                                          <Link 
                        onClick={ClickHandler} 
                        to="/contact" 
                        className="thm-btn thm-btn--aso"
                        style={{
                          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                          color: '#64748b',
                          padding: '15px 35px',
                          borderRadius: '30px',
                          textDecoration: 'none',
                          fontWeight: '700',
                          fontSize: '1.1rem',
                          display: 'inline-block',
                          boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                          transition: 'all 0.3s ease',
                          border: 'none'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'translateY(-2px)';
                          e.target.style.boxShadow = '0 8px 25px rgba(30, 58, 138, 0.15)';
                          e.target.style.background = 'linear-gradient(135deg, rgba(30, 58, 138, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%)';
                          e.target.style.color = '#1e3a8a';
                          e.target.style.border = '1px solid rgba(30, 58, 138, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
                          e.target.style.background = 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)';
                          e.target.style.color = '#64748b';
                          e.target.style.border = 'none';
                        }}
                      >
                        Get Started Today →
                      </Link>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        
        {/* CSS Animation for floating elements */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}</style>
      </section>
    </>
  );
};

export default StaffAugmentationDetails;
