import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Project from "../../api/project";
import icon from "../../images/icon/eye-icon.svg";

const OptimizedCaseStudySection = ({ title = "Success Stories", subtitle = "Discover how we've helped businesses achieve their digital transformation goals" }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  // Sample case study data with rich content and slugs
  const sampleCaseStudies = [
    {
      id: 1,
      title: "AI-Powered Manufacturing Revolution",
      client: "TechCorp Industries",
      category: "Manufacturing",
      image: "/herosectionimages/engineers-brainstorming-ways-use-ai.jpg",
      description: "40% efficiency improvement",
      details: "Implemented Industry 4.0 solutions with predictive maintenance and real-time monitoring systems. Reduced downtime by 60% and increased production capacity by 40%.",
      slug: "ai-powered-manufacturing-revolution"
    },
    {
      id: 2,
      title: "Enterprise Cloud Transformation",
      client: "FinServe Solutions",
      category: "Financial Services",
      image: "/herosectionimages/cloud-computing-illustration.jpg",
      description: "99.9% uptime achieved",
      details: "Migrated legacy systems to AWS with zero downtime. Enhanced security compliance and reduced infrastructure costs by 45% while achieving 99.9% uptime.",
      slug: "enterprise-cloud-transformation"
    },
    {
      id: 3,
      title: "Healthcare AI Diagnostics Platform",
      client: "HealthTech Innovations",
      category: "Healthcare",
      image: "/herosectionimages/ai-human-collaboration.jpg",
      description: "35% accuracy improvement",
      details: "Developed AI-driven diagnostic tools using machine learning algorithms. Improved diagnostic accuracy by 35% and reduced patient wait times by 50%.",
      slug: "healthcare-ai-diagnostics-platform"
    },
    {
      id: 4,
      title: "SAP S/4HANA Digital Core",
      client: "Global Manufacturing Co.",
      category: "SAP Services",
      image: "/herosectionimages/generative-ai-interface.jpg",
      description: "Streamlined operations",
      details: "Implemented SAP S/4HANA with integrated ERP solutions. Streamlined operations across 15 global locations and improved data visibility by 80%.",
      slug: "sap-s4hana-digital-core"
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
    <section className="optimized-case-study-section py-160" style={{ 
      background: '#ffffff',
      position: 'relative',
      padding: '40px 0' // Reduced from 80px 0
    }}>
      <div className="container">
        <motion.div
          className="text-center mb-60" // Reduced from mb-120
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="section-title mb-4" // Reduced from mb-6
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', // Reduced from 2.5rem, 5vw, 3.5rem
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
              fontSize: 'clamp(1rem, 1.5vw, 1.125rem)', // Reduced from 1.125rem, 2vw, 1.25rem
              color: '#666666',
              lineHeight: '1.5', // Reduced from 1.6
              maxWidth: '500px', // Reduced from 600px
              margin: '0 auto',
              fontWeight: '400'
            }}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          className="case-studies-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', // Reduced from 320px
            gap: '24px', // Reduced from 32px
            maxWidth: '1200px', // Reduced from 1400px
            margin: '0 auto'
          }}
        >
          {sampleCaseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              variants={itemVariants}
              className="case-study-card"
              style={{
                background: '#ffffff',
                borderRadius: '12px', // Reduced from 16px
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', // Reduced shadow
                border: '1px solid rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s ease',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
              whileHover={{
                y: -4, // Reduced from -6
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)', // Reduced shadow
                transition: { duration: 0.3 }
              }}
            >
              {/* Image Section */}
              <div className="case-study-image" style={{
                position: 'relative',
                height: '180px', // Reduced from 220px
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
                    scale: 1.05, // Reduced from 1.08
                    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
                  }}
                />

                {/* Category Badge */}
                <div style={{
                  position: 'absolute',
                  top: '12px', // Reduced from 16px
                  left: '12px', // Reduced from 16px
                  background: 'rgba(30, 64, 175, 0.9)',
                  color: '#ffffff',
                  padding: '4px 8px', // Reduced from 6px 12px
                  borderRadius: '6px', // Reduced from 8px
                  fontSize: '0.7rem', // Reduced from 0.75rem
                  fontWeight: '600',
                  zIndex: 2,
                  backdropFilter: 'blur(10px)'
                }}>
                  {caseStudy.category}
                </div>

                {/* Gradient Overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '60%', // Reduced from 70%
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
                  zIndex: 2
                }}></div>
              </div>

              {/* Content Section */}
              <div className="case-study-content" style={{
                padding: '20px', // Reduced from 24px
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <h3 style={{
                    fontSize: '1.1rem', // Reduced from 1.25rem
                    fontWeight: '700',
                    color: '#1a1a1a',
                    margin: '0 0 8px 0', // Reduced from 12px
                    lineHeight: '1.3'
                  }}>
                    {caseStudy.title}
                  </h3>
                  
                  <p style={{
                    fontSize: '0.875rem', // Reduced from 1rem
                    color: '#666666',
                    margin: '0 0 12px 0', // Reduced from 16px
                    lineHeight: '1.5'
                  }}>
                    {caseStudy.details}
                  </p>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px', // Reduced from 12px
                    marginBottom: '16px' // Reduced from 20px
                  }}>
                    <div style={{
                      width: '32px', // Reduced from 40px
                      height: '32px', // Reduced from 40px
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontSize: '0.875rem', // Reduced from 1rem
                      fontWeight: '600'
                    }}>
                      {caseStudy.client.charAt(0)}
                    </div>
                    <div>
                      <p style={{
                        fontSize: '0.8rem', // Reduced from 0.875rem
                        fontWeight: '600',
                        color: '#1a1a1a',
                        margin: '0 0 2px 0'
                      }}>
                        {caseStudy.client}
                      </p>
                      <p style={{
                        fontSize: '0.75rem', // Reduced from 0.8rem
                        color: '#666666',
                        margin: '0'
                      }}>
                        {caseStudy.description}
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  onClick={ClickHandler}
                  to={`/case-studies/${caseStudy.slug}`}
                  style={{
                    textDecoration: 'none',
                    color: '#1e40af',
                    fontSize: '0.875rem', // Reduced from 1rem
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px', // Reduced from 8px
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#1e3a8a'}
                  onMouseLeave={(e) => e.target.style.color = '#1e40af'}
                >
                  View Case Study
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="cta-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            marginTop: '40px' // Reduced from 60px
          }}
        >
          <Link
            onClick={ClickHandler}
            to="/case-studies"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
              color: '#ffffff',
              padding: '12px 24px', // Reduced from 16px 32px
              borderRadius: '8px', // Reduced from 12px
              textDecoration: 'none',
              fontSize: '0.875rem', // Reduced from 1rem
              fontWeight: '600',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 16px rgba(30, 64, 175, 0.3)' // Reduced shadow
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)'; // Reduced from -3px
              e.target.style.boxShadow = '0 6px 24px rgba(30, 64, 175, 0.4)'; // Reduced shadow
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 16px rgba(30, 64, 175, 0.3)'; // Reduced shadow
            }}
          >
            View All Case Studies
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OptimizedCaseStudySection;
