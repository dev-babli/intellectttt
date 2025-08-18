import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import blogs from "../../api/blogs";
import icon1 from "../../images/icons/icon_calendar.svg";

const OptimizedBlogSection = ({ title = "Our Expert Insights", subtitle = "Stay updated with our latest articles and industry insights" }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  // Use actual blog data from API
  const sampleBlogs = [
    {
      id: 1,
      title: "AI in Neuroimaging: IXICO's Cloud Transformation",
      author: "farugia",
      role: "Senior Consultant",
      image: "/images/blog/blog-1.jpeg",
      category: "Technology",
      date: "October 4, 2022",
      slug: "AI-in-Neuroimaging-IXICOs-Cloud-Transformation"
    },
    {
      id: 2,
      title: "Cutting Clinical Trial Costs with AI Biomarkers",
      author: "Andrew",
      role: "Creative Director",
      image: "/images/blog/blog-2.jpg",
      category: "Branding",
      date: "October 4, 2023",
      slug: "Cutting-Clinical-Trial-Costs-with-AI-Biomarkers"
    },
    {
      id: 3,
      title: "Scaling Medical Imaging with Microsoft Cloud",
      author: "Kurtz",
      role: "Art Director",
      image: "/images/blog/blog-3.jpg",
      category: "SEO",
      date: "October 4, 2024",
      slug: "Scaling-Medical-Imaging-with-Microsoft-Cloud"
    },
    {
      id: 4,
      title: "Faster Neuro Trials with AI-Powered Imaging",
      author: "Alex",
      role: "Art Director",
      image: "/images/blog/da-img04.jpg",
      category: "Branding",
      date: "October 5, 2023",
      slug: "Faster-Neuro-Trials-with-AI-Powered-Imaging"
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
    <section className="optimized-blog-section py-160" style={{ 
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
          className="row g-3" // Reduced from g-4
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {sampleBlogs.map((blog, index) => (
            <motion.div
              className="col-lg-3 col-md-6"
              key={blog.id}
              variants={itemVariants}
            >
              <motion.div
                className="blog-card h-100"
                style={{
                  background: '#ffffff',
                  borderRadius: '8px', // Reduced from 12px
                  overflow: 'hidden',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)', // Reduced shadow
                  border: '1px solid #f0f0f0',
                  position: 'relative',
                  height: '600px', // Reduced from 1200px
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                whileHover={{
                  y: -4, // Reduced from -6
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)', // Reduced shadow
                  transition: { duration: 0.3 }
                }}
              >
                {/* Top Half - Image Section */}
                <div className="blog-image-section" style={{
                  position: 'relative',
                  height: '35%', // Reduced from 40%
                  overflow: 'hidden'
                }}>
                  <motion.div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundImage: `url(${blog.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      zIndex: 1
                    }}
                    whileHover={{
                      scale: 1.05, // Reduced from 1.08
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

                  {/* Category Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '8px', // Reduced from 12px
                    left: '8px', // Reduced from 12px
                    background: 'rgba(30, 64, 175, 0.9)',
                    color: '#ffffff',
                    padding: '3px 6px', // Reduced from 4px 8px
                    borderRadius: '4px', // Reduced from 6px
                    fontSize: '0.6rem', // Reduced from 0.7rem
                    fontWeight: '600',
                    zIndex: 3,
                    backdropFilter: 'blur(10px)'
                  }}>
                    {blog.category}
                  </div>
                </div>

                {/* Bottom Half - Content Section */}
                <div className="blog-content-section" style={{
                  height: '65%', // Increased from 60%
                  padding: '20px', // Reduced from 40px
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  overflow: 'visible',
                  backgroundColor: '#ffffff'
                }}>
                  <div>
                    <h3
                      className="blog-title mb-3" // Reduced from mb-4
                      style={{
                        fontSize: '16px', // Reduced from 20px
                        fontWeight: '600',
                        lineHeight: '1.3',
                        color: '#1e293b',
                        margin: 0,
                        marginBottom: '16px', // Reduced from 24px
                        display: 'block',
                        overflow: 'visible',
                        wordWrap: 'break-word',
                        hyphens: 'auto',
                        letterSpacing: '-0.02em',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                        minHeight: '60px' // Reduced from 80px
                      }}
                    >
                      <Link
                        onClick={ClickHandler}
                        to={`/blog-single/${blog.slug}`}
                        style={{
                          textDecoration: 'none',
                          color: 'inherit',
                          transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#5b21b6'}
                        onMouseLeave={(e) => e.target.style.color = '#1e293b'}
                      >
                        {blog.title}
                      </Link>
                    </h3>
                  </div>

                  <div className="blog-bottom-row" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 'auto',
                    paddingTop: '16px', // Reduced from 20px
                  }}>
                    <div className="blog-author" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px' // Reduced from 10px
                    }}>
                      <div style={{
                        width: '28px', // Reduced from 32px
                        height: '28px', // Reduced from 32px
                        borderRadius: '50%',
                        background: '#f8f9fa',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#666666',
                        fontSize: '12px', // Reduced from 13px
                        fontWeight: '600',
                        border: '2px solid #e9ecef'
                      }}>
                        {blog.author.charAt(0)}
                      </div>
                      <div>
                        <div style={{
                          color: '#1a1a1a',
                          fontSize: '12px', // Reduced from 13px
                          fontWeight: '600'
                        }}>
                          {blog.author}
                        </div>
                        <div style={{
                          color: '#666666',
                          fontSize: '10px' // Reduced from 11px
                        }}>
                          {blog.role}
                        </div>
                      </div>
                    </div>

                    <div className="blog-date" style={{
                      color: '#666666',
                      fontSize: '11px', // Reduced from 12px
                      fontWeight: '500'
                    }}>
                      {blog.date}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OptimizedBlogSection;
