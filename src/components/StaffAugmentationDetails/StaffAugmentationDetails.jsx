import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { 
  ArrowForward, 
  CheckCircle, 
  Star, 
  TrendingUp, 
  People,
  Security,
  Speed,
  Verified,
  Work,
  Assignment,
  SwapHoriz,
  Receipt,
  Business
} from '@mui/icons-material';

const StaffAugmentationDetails = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <>


      {/* Modern About Section */}
      <section style={{
        background: 'white',
        padding: '6rem 0'
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <Fade direction="up" triggerOnce={false} duration={1000}>
                <div>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    background: 'rgba(59, 130, 246, 0.1)',
                    color: '#1d4ed8',
                    padding: '8px 16px',
                    borderRadius: '50px',
                    marginBottom: '1rem',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}>
                    Our Model
                  </div>
                  
                  <h2 style={{
                    fontSize: '3rem',
                    fontWeight: '800',
                    color: '#1e293b',
                    marginBottom: '1.5rem'
                  }}>
                    Staff Augmentation
                  </h2>
                  
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#64748b',
                    lineHeight: '1.7',
                    marginBottom: '1.5rem'
                  }}>
                    At Intellectt, we understand that organizations need flexibility and speed when building teams. Our Staff Augmentation services provide highly skilled professionals who integrate seamlessly into your in-house teams, giving you the agility to scale up or down as business needs evolve.
                  </p>
                  
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#64748b',
                    lineHeight: '1.7',
                    marginBottom: '2rem'
                  }}>
                    Unlike traditional outsourcing, our model ensures that you retain full control of your projects, while we take care of sourcing, screening, and onboarding the right talent.
                  </p>
                  
                  <button style={{
                    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '16px 32px',
                    borderRadius: '12px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 12px 35px rgba(59, 130, 246, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.3)';
                  }}>
                    Find Specialized Talent
                    <ArrowForward style={{ marginLeft: '8px', fontSize: '1.2rem' }} />
                  </button>
                </div>
              </Fade>
            </div>
            <div className="col-lg-6">
              <Fade direction="right" triggerOnce={false} duration={1400}>
                <div style={{ position: 'relative' }}>
                  <img 
                    src="/herosectionimages/engineers-brainstorming-ways-use-ai.jpg" 
                    alt="Team Collaboration" 
                    style={{ 
                      borderRadius: '20px', 
                      width: '100%',
                      height: '400px',
                      objectFit: 'cover',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
                    }} 
                  />
                  
                  <div style={{
                    position: 'absolute',
                    bottom: '-30px',
                    right: '-30px',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                    borderRadius: '20px',
                    padding: '2rem',
                    color: 'white',
                    boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)',
                    textAlign: 'center',
                    minWidth: '200px'
                  }}>
                    <h3 style={{
                      fontSize: '3rem',
                      fontWeight: '800',
                      marginBottom: '0.5rem'
                    }}>
                      100%
                    </h3>
                    <p style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      opacity: 0.9
                    }}>
                      Project Control Retained
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Process Section */}
      <section style={{
        background: 'white',
        padding: '6rem 0'
      }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 style={{
              fontSize: '3rem',
              fontWeight: '800',
              color: '#1e293b',
              marginBottom: '1rem'
            }}>
              Our Augmentation Model
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#64748b',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              We follow a clear, proven process to ensure efficiency and reliability
            </p>
          </div>
          
          <div className="row">
            {[
              {
                number: '1',
                title: 'Requirement Analysis',
                description: 'Understanding your project scope, skills, and timelines.',
                icon: <TrendingUp style={{ fontSize: '2rem' }} />
              },
              {
                number: '2',
                title: 'Talent Identification & Screening',
                description: 'Pre-vetted professionals shortlisted for technical and cultural fit.',
                icon: <People style={{ fontSize: '2rem' }} />
              },
              {
                number: '3',
                title: 'Onboarding & Integration',
                description: 'Quick onboarding to ensure minimal downtime.',
                icon: <Speed style={{ fontSize: '2rem' }} />
              },
              {
                number: '4',
                title: 'Ongoing Support & Flexibility',
                description: 'Continuous support with the ability to scale resources up or down.',
                icon: <Verified style={{ fontSize: '2rem' }} />
              }
            ].map((step, index) => (
              <div className="col-lg-3 col-md-6 mb-4" key={index}>
                <Fade direction="up" triggerOnce={false} duration={1000} delay={index * 100}>
                  <div style={{
                    background: 'white',
                    borderRadius: '20px',
                    padding: '2.5rem 2rem',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    textAlign: 'center',
                    height: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                  }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem',
                      color: 'white'
                    }}>
                      {step.icon}
                    </div>
                    
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1rem',
                      color: 'white',
                      fontSize: '1.2rem',
                      fontWeight: '800'
                    }}>
                      {step.number}
                    </div>
                    
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      color: '#1e293b',
                      marginBottom: '1rem'
                    }}>
                      {step.title}
                    </h3>
                    
                    <p style={{
                      color: '#64748b',
                      lineHeight: '1.6',
                      fontSize: '1rem'
                    }}>
                      {step.description}
                    </p>
                  </div>
                </Fade>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-5">
            <div style={{
              background: 'white',
              color: '#1e293b',
              padding: '2rem',
              borderRadius: '20px',
              display: 'inline-block',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              maxWidth: '600px'
            }}>
              <p style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                fontStyle: 'italic',
                margin: 0,
                color: '#64748b'
              }}>
                This approach reduces hiring time, optimizes costs, and ensures continuity in delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Types of Augmentation Section */}
      <section style={{
        background: 'white',
        padding: '6rem 0'
      }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 style={{
              fontSize: '3rem',
              fontWeight: '800',
              color: '#1e293b',
              marginBottom: '1rem'
            }}>
              Types of Augmentation
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#64748b',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Choose the model that best fits your business needs and requirements
            </p>
          </div>
          
          <div className="row">
                         {[
               {
                 title: 'Onshore Augmentation',
                 description: 'Resources placed within your region for real-time collaboration and compliance.',
                 image: '/meeting-mature-office-showing-presenter.jpg',
                 features: ['Real-time collaboration', 'Local compliance', 'Direct oversight'],
                 color: '#3b82f6'
               },
               {
                 title: 'Offshore Augmentation',
                 description: 'Skilled professionals from global locations for cost efficiency and round-the-clock delivery.',
                 image: '/global.jpg',
                 features: ['Cost efficiency', 'Round-the-clock delivery', 'Global talent pool'],
                 color: '#10b981'
               },
               {
                 title: 'Hybrid Model',
                 description: 'A blend of onshore and offshore teams, balancing cost, quality, and collaboration.',
                 image: '/aerial-view-business-team.jpg',
                 features: ['Cost optimization', 'Quality balance', 'Flexible collaboration'],
                 color: '#8b5cf6'
               }
             ].map((type, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <Fade direction="up" triggerOnce={false} duration={1000} delay={index * 100}>
                  <div style={{
                    background: 'white',
                    borderRadius: '20px',
                    padding: '0',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    height: '550px',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                  }}>
                    <img 
                      src={type.image} 
                      alt={type.title} 
                      style={{ 
                        width: '100%',
                        height: '250px',
                        objectFit: 'cover',
                        flexShrink: 0
                      }} 
                    />
                    
                    <div style={{ 
                      padding: '2rem',
                      display: 'flex',
                      flexDirection: 'column',
                      flex: 1,
                      justifyContent: 'space-between',
                      height: '100%'
                    }}>
                      <div style={{ flex: 1 }}>
                        <h3 style={{
                          fontSize: '1.5rem',
                          fontWeight: '700',
                          color: '#1e293b',
                          marginBottom: '1rem',
                          textAlign: 'center'
                        }}>
                          {type.title}
                        </h3>
                        
                        <p style={{
                          color: '#64748b',
                          lineHeight: '1.6',
                          marginBottom: '1.5rem',
                          textAlign: 'center',
                          fontSize: '1rem'
                        }}>
                          {type.description}
                        </p>
                      </div>
                      
                      <div style={{ flex: 1 }}>
                        {type.features.map((feature, featureIndex) => (
                          <div key={featureIndex} style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '0.75rem',
                            padding: '0.5rem',
                            borderRadius: '8px',
                            background: 'rgba(59, 130, 246, 0.05)'
                          }}>
                            <CheckCircle style={{
                              color: type.color,
                              fontSize: '1.2rem',
                              marginRight: '0.75rem',
                              flexShrink: 0
                            }} />
                            <span style={{
                              color: '#475569',
                              fontWeight: '500',
                              fontSize: '0.95rem'
                            }}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Engagement Models Section */}
      <section style={{
        background: 'white',
        padding: '6rem 0'
      }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 style={{
              fontSize: '3rem',
              fontWeight: '800',
              color: '#1e293b',
              marginBottom: '1rem'
            }}>
              Flexible Engagement Models
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#64748b',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              We provide flexible engagement models to suit your business needs
            </p>
          </div>
          
          <div className="row">
                         {[
               {
                 title: 'Full-Time (FTE)',
                 description: 'Long-term dedicated resources for sustained projects.',
                 icon: <Work style={{ fontSize: '2.5rem' }} />,
                 color: '#3b82f6'
               },
               {
                 title: 'Contract',
                 description: 'Short-term professionals for specific project requirements.',
                 icon: <Assignment style={{ fontSize: '2.5rem' }} />,
                 color: '#10b981'
               },
               {
                 title: 'Contract-to-Hire (C2H)',
                 description: 'Flexibility to evaluate performance before converting to full-time.',
                 icon: <SwapHoriz style={{ fontSize: '2.5rem' }} />,
                 color: '#f59e0b'
               },
               {
                 title: 'W2/1099 Models',
                 description: 'U.S.-compliant payroll and tax engagement structures.',
                 icon: <Receipt style={{ fontSize: '2.5rem' }} />,
                 color: '#8b5cf6'
               },
               {
                 title: 'Corp-to-Corp (C2C)',
                 description: 'Engagement with incorporated vendors/partners for resource deployment under corporate agreements.',
                 icon: <Business style={{ fontSize: '2.5rem' }} />,
                 color: '#ef4444'
               },
               {
                 title: 'Project-Based',
                 description: 'Fixed-scope engagements for specific project deliverables and milestones.',
                 icon: <Assignment style={{ fontSize: '2.5rem' }} />,
                 color: '#06b6d4'
               }
             ].map((model, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <Fade direction="up" triggerOnce={false} duration={1000} delay={index * 100}>
                  <div style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                    borderRadius: '25px',
                    padding: '3rem 2rem',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(0, 0, 0, 0.03)',
                    transition: 'all 0.4s ease',
                    cursor: 'pointer',
                    textAlign: 'center',
                    height: '350px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                  }}>
                    <div style={{
                      width: '100px',
                      height: '100px',
                      background: `linear-gradient(135deg, ${model.color} 0%, ${model.color}dd 100%)`,
                      borderRadius: '25px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 2rem',
                      color: 'white',
                      fontSize: '2.2rem',
                      fontWeight: '800',
                      boxShadow: `0 15px 35px ${model.color}40`,
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: '-50%',
                        left: '-50%',
                        width: '200%',
                        height: '200%',
                        background: `radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)`,
                        transform: 'rotate(45deg)'
                      }}></div>
                      {model.icon}
                    </div>
                    
                    <h3 style={{
                      fontSize: '1.4rem',
                      fontWeight: '700',
                      color: '#1e293b',
                      marginBottom: '1rem'
                    }}>
                      {model.title}
                    </h3>
                    
                    <p style={{
                      color: '#64748b',
                      lineHeight: '1.6',
                      fontSize: '1rem'
                    }}>
                      {model.description}
                    </p>
                  </div>
                </Fade>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Why Intellectt Section */}
      <section style={{
        background: `url("/herosectionimages/New ONES/8.webp")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '450px',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.6) 0%, rgba(30, 41, 59, 0.5) 100%)'
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-10">
              <Fade direction="left" triggerOnce={false} duration={1000}>
                <div>
                  <h2 style={{
                    fontSize: '2.8rem',
                    fontWeight: '800',
                    marginBottom: '1.5rem',
                    lineHeight: '1.2',
                    color: 'white',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                    letterSpacing: '-0.01em'
                  }}>
                    Why Intellectt
                  </h2>
                  
                  <p style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.6',
                    color: 'white',
                    maxWidth: '600px',
                    marginBottom: '2rem',
                    fontWeight: '400',
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
                    letterSpacing: '0.005em',
                    opacity: 0.95
                  }}>
                    With Intellectt, you gain the right talent at the right time—without the overhead of lengthy recruitment cycles. Whether you need onshore presence, offshore scalability, or a hybrid approach, our Staff Augmentation model ensures flexibility, cost-effectiveness, and direct control over outcomes.
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    gap: '0.75rem',
                    flexWrap: 'wrap',
                    marginBottom: '1.5rem'
                  }}>
                    {[
                      'Pre-vetted Professionals',
                      'Flexible Scaling',
                      'Cost-Effective',
                      'Global Expertise'
                    ].map((feature, index) => (
                                              <div key={index} style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          color: 'white',
                          padding: '10px 16px',
                          borderRadius: '20px',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          fontWeight: '600',
                          fontSize: '0.9rem',
                          display: 'flex',
                          alignItems: 'center'
                        }}>
                          <CheckCircle style={{ fontSize: '1rem', marginRight: '6px' }} />
                          {feature}
                        </div>
                    ))}
                  </div>
                  
                  <Link 
                    onClick={ClickHandler} 
                    to="/contact" 
                    style={{
                      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                      color: 'white',
                      padding: '16px 32px',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      fontWeight: '700',
                      fontSize: '1.1rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 12px 35px rgba(59, 130, 246, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.3)';
                    }}
                  >
                    Get Started Today
                    <ArrowForward style={{ marginLeft: '8px', fontSize: '1.2rem' }} />
                  </Link>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StaffAugmentationDetails;
