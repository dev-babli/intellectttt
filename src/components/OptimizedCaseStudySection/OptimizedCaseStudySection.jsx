import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Project from "../../api/project";
import icon from "../../images/icon/eye-icon.svg";

const OptimizedCaseStudySection = ({ title = "Success Stories", subtitle = "Discover how we've helped businesses achieve their digital transformation goals" }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  // Sample case study data with hero section images
  const sampleCaseStudies = [
    {
      id: 1,
      title: "Digital Transformation Success: Manufacturing Automation",
      client: "TechCorp Industries",
      category: "Manufacturing",
      image: "/herosectionimages/engineers-brainstorming-ways-use-ai.jpg",
      description: "Implemented Industry 4.0 solutions for 40% efficiency improvement"
    },
    {
      id: 2,
      title: "Cloud Migration Excellence: Financial Services Platform",
      client: "FinServe Solutions",
      category: "Financial Services",
      image: "/herosectionimages/cloud-computing-illustration.jpg",
      description: "Migrated legacy systems to cloud with 99.9% uptime"
    },
    {
      id: 3,
      title: "AI-Powered Healthcare Analytics Platform",
      client: "HealthTech Innovations",
      category: "Healthcare",
      image: "/herosectionimages/ai-human-collaboration.jpg",
      description: "Developed AI-driven diagnostic tools improving accuracy by 35%"
    },
    {
      id: 4,
      title: "SAP S/4HANA Implementation & Optimization",
      client: "Global Manufacturing Co.",
      category: "SAP Services",
      image: "/herosectionimages/generative-ai-interface.jpg",
      description: "Streamlined operations with integrated ERP solution"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="optimized-case-study-section py-120" style={{ 
      background: '#ffffff',
      position: 'relative'
    }}>
      <div className="container">
        <motion.div
          className="text-center mb-100"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="section-title mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: '700',
              color: '#1a1a1a',
              lineHeight: '1.2',
              margin: 0,
              letterSpacing: '-0.02em'
            }}
          >
            {title}
          </motion.h2>
          
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
              color: '#666666',
              lineHeight: '1.6',
              maxWidth: '600px',
              margin: '0 auto',
              fontWeight: '400'
            }}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {sampleCaseStudies.map((caseStudy, index) => (
            <motion.div
              className="col-lg-3 col-md-6"
              key={caseStudy.id}
              variants={itemVariants}
            >
              <motion.div
                className="case-study-card h-100"
                style={{
                  background: '#ffffff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 6px 24px rgba(0, 0, 0, 0.08)',
                  border: '1px solid #f0f0f0',
                  position: 'relative',
                  height: '520px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                whileHover={{
                  y: -6,
                  boxShadow: '0 16px 48px rgba(0, 0, 0, 0.15)',
                  transition: { duration: 0.3 }
                }}
              >
                {/* Top Half - Image Section */}
                <div className="case-study-image-section" style={{
                  position: 'relative',
                  height: '65%',
                  overflow: 'hidden'
                }}>
                  <motion.div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundImage: `url(${caseStudy.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      zIndex: 1
                    }}
                    whileHover={{
                      scale: 1.08,
                      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
                    }}
                  />

                  {/* Enhanced gradient overlay */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.2) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)',
                    zIndex: 2
                  }}></div>

                  {/* Improved category badge */}
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    color: '#1a1a1a',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.8px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    zIndex: 3
                  }}>
                    {caseStudy.category}
                  </div>
                </div>

                {/* Bottom Half - Content Section */}
                <div className="case-study-content-section" style={{
                  height: '35%',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <h3
                      className="case-study-title mb-4"
                      style={{
                        fontSize: '18px',
                        fontWeight: '600',
                        lineHeight: '1.4',
                        color: '#1a1a1a',
                        margin: 0,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      <Link
                        onClick={ClickHandler}
                        to={`/portfolio-single/${caseStudy.id}`}
                        style={{
                          textDecoration: 'none',
                          color: 'inherit',
                          transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#007bff'}
                        onMouseLeave={(e) => e.target.style.color = '#1a1a1a'}
                      >
                        {caseStudy.title}
                      </Link>
                    </h3>
                  </div>

                  <div className="case-study-bottom-row" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <Link
                      onClick={ClickHandler}
                      to={`/portfolio-single/${caseStudy.id}`}
                      className="view-case-btn"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        textDecoration: 'none',
                        color: '#007bff',
                        fontWeight: '600',
                        fontSize: '13px',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateX(3px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateX(0)';
                      }}
                    >
                      View case study
                      <img 
                        src="/images/right.png" 
                        alt="arrow" 
                        style={{ 
                          width: '10px', 
                          height: '10px', 
                          marginLeft: '6px',
                          filter: 'invert(40%) sepia(100%) saturate(1000%) hue-rotate(200deg) brightness(1) contrast(1)'
                        }} 
                      />
                    </Link>

                    <div className="case-study-client" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: '#f8f9fa',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#666666',
                        fontSize: '13px',
                        fontWeight: '600',
                        border: '2px solid #e9ecef'
                      }}>
                        {caseStudy.client.charAt(0)}
                      </div>
                      <div>
                        <div style={{
                          color: '#1a1a1a',
                          fontSize: '13px',
                          fontWeight: '600'
                        }}>
                          {caseStudy.client}
                        </div>
                        <div style={{
                          color: '#666666',
                          fontSize: '11px'
                        }}>
                          {caseStudy.description}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay - Full Image Coverage */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${caseStudy.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 10,
                    opacity: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '24px'
                  }}
                  whileHover={{
                    opacity: 1,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Enhanced dark overlay */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.7) 100%)',
                    zIndex: 11
                  }}></div>

                  {/* Hover Content */}
                  <div style={{ position: 'relative', zIndex: 12 }}>
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.95)',
                      color: '#1a1a1a',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.8px',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      display: 'inline-block'
                    }}>
                      {caseStudy.category}
                    </div>
                  </div>

                  <div style={{ position: 'relative', zIndex: 12 }}>
                    <h3
                      className="case-study-title mb-4"
                      style={{
                        fontSize: '20px',
                        fontWeight: '600',
                        lineHeight: '1.3',
                        color: '#ffffff',
                        margin: 0,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {caseStudy.title}
                    </h3>

                    <div className="case-study-client" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '16px'
                    }}>
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        fontSize: '14px',
                        fontWeight: '600',
                        border: '2px solid rgba(255, 255, 255, 0.3)'
                      }}>
                        {caseStudy.client.charAt(0)}
                      </div>
                      <div>
                        <div style={{
                          color: '#ffffff',
                          fontSize: '14px',
                          fontWeight: '600'
                        }}>
                          {caseStudy.client}
                        </div>
                        <div style={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          fontSize: '12px'
                        }}>
                          {caseStudy.description}
                        </div>
                      </div>
                    </div>

                    <Link
                      onClick={ClickHandler}
                      to={`/portfolio-single/${caseStudy.id}`}
                      className="view-case-btn"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        textDecoration: 'none',
                        color: '#ffffff',
                        fontWeight: '600',
                        fontSize: '13px',
                        transition: 'all 0.3s ease',
                        padding: '6px 0',
                        borderBottom: '2px solid transparent'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.borderBottomColor = '#ffffff';
                        e.target.style.transform = 'translateX(3px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.borderBottomColor = 'transparent';
                        e.target.style.transform = 'translateX(0)';
                      }}
                    >
                      View case study
                      <img 
                        src="/images/right.png" 
                        alt="arrow" 
                        style={{ 
                          width: '10px', 
                          height: '10px', 
                          marginLeft: '6px',
                          filter: 'invert(1)'
                        }} 
                      />
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            onClick={ClickHandler}
            to="/casestudy"
            className="view-all-cases-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '16px 36px',
              background: '#1a1a1a',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '16px',
              transition: 'all 0.3s ease',
              border: 'none'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(26, 26, 26, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            View All Case Studies
            <img 
              src="/images/right.png" 
              alt="arrow" 
              style={{ 
                width: '14px', 
                height: '14px', 
                marginLeft: '12px',
                filter: 'invert(1)'
              }} 
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OptimizedCaseStudySection;
