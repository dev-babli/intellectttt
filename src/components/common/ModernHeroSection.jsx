import React from 'react';
import { Box, Container, Typography, Button, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward, PlayCircle } from '@mui/icons-material';
import '../../css/modern-components.css';

const ModernHeroSection = ({ 
  title, 
  subtitle, 
  description, 
  buttonText = "Get Started", 
  buttonLink = "/contact",
  backgroundImage,
  gradient = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  features = [],
  showVideo = false,
  videoId = null,
  textColor = "auto" // "auto", "white", or "black"
}) => {
  return (
    <Box
      className="modern-hero-section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: backgroundImage 
          ? `url(${backgroundImage})`
          : gradient,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlays and filters removed for clean design */}
      
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 3 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge - Hidden for minimal design */}
              {false && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <Chip
                    label={subtitle}
                    sx={{
                      backgroundColor: 'rgba(30, 41, 59, 0.1)',
                      color: '#1e293b',
                      border: '1px solid rgba(30, 41, 59, 0.2)',
                      backdropFilter: 'blur(10px)',
                      mb: 3,
                      px: 2,
                      py: 1,
                      fontSize: '0.875rem',
                      fontWeight: 500,
                    }}
                  />
                </motion.div>
              )}

              {/* Main Title */}
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem' },
                  fontWeight: 700,
                  color: textColor === "auto" || textColor === "white" ? '#ffffff' : '#1e293b',
                  mb: 2,
                  lineHeight: 1.2,
                  letterSpacing: '-0.01em',
                  textShadow: textColor === "auto" || textColor === "white" ? '0 2px 8px rgba(0,0,0,0.3)' : '0 1px 5px rgba(0,0,0,0.1)',
                }}
              >
                {title}
              </Typography>

              {/* Description - Hidden for minimal design */}
              {description && (
                <Typography
                  variant="body1"
                  sx={{
                    color: textColor === "auto" || textColor === "white" ? 'rgba(255, 255, 255, 0.9)' : 'rgba(30, 41, 59, 0.8)',
                    mb: 3,
                    lineHeight: 1.5,
                    fontWeight: 400,
                    maxWidth: '500px',
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                  }}
                >
                  {description}
                </Typography>
              )}

              {/* Features List - Hidden for minimal design */}
              {features.length > 0 && false && (
                <Box sx={{ mb: 4 }}>
                  <Grid container spacing={2}>
                    {features.map((feature, index) => (
                      <Grid item xs={12} sm={6} key={index}>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Box
                              sx={{
                                width: 8,
                                height: 8,
                                borderRadius: '50%',
                                backgroundColor: '#fbbf24',
                                mr: 2,
                              }}
                            />
                            <Typography
                              sx={{
                                color: 'rgba(255, 255, 255, 0.8)',
                                fontSize: '0.95rem',
                                fontWeight: 500,
                              }}
                            >
                              {feature}
                            </Typography>
                          </Box>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              )}

              {/* CTA Buttons */}
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <Button
                    className="modern-button"
                    variant="contained"
                    size="large"
                    href={buttonLink}
                    sx={{
                      backgroundColor: '#dc2626',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      fontWeight: 700,
                      fontSize: '1rem',
                      textTransform: 'none',
                      boxShadow: '0 8px 25px rgba(220, 38, 38, 0.3)',
                      '&:hover': {
                        backgroundColor: '#b91c1c',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 12px 35px rgba(220, 38, 38, 0.4)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                    endIcon={<ArrowForward />}
                  >
                    Let's Connect
                  </Button>
                </motion.div>

                {showVideo && videoId && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <Button
                      className="modern-button"
                      variant="outlined"
                      size="large"
                      startIcon={<PlayCircle />}
                      sx={{
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                        color: 'white',
                        px: 4,
                        py: 1.5,
                        borderRadius: 2,
                        fontWeight: 600,
                        fontSize: '1rem',
                        textTransform: 'none',
                        backdropFilter: 'blur(10px)',
                        '&:hover': {
                          borderColor: 'white',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        },
                      }}
                    >
                      Watch Demo
                    </Button>
                  </motion.div>
                )}
              </Box>
            </motion.div>
          </Grid>

          {/* Right Side - Visual Element */}
          <Grid item xs={12} lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: '300px', md: '500px' },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Floating Elements - Hidden for minimal design */}
                {false && (
                  <>
                    <motion.div
                      className="floating-element"
                      animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      style={{
                        position: 'absolute',
                        top: '20%',
                        left: '10%',
                      }}
                    >
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.3) 0%, rgba(251, 191, 36, 0.1) 100%)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(251, 191, 36, 0.2)',
                        }}
                      />
                    </motion.div>

                    <motion.div
                      className="floating-element"
                      animate={{
                        y: [0, 20, 0],
                        rotate: [0, -5, 0],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                      }}
                      style={{
                        position: 'absolute',
                        bottom: '30%',
                        right: '15%',
                      }}
                    >
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0.1) 100%)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(139, 92, 246, 0.2)',
                        }}
                      />
                    </motion.div>
                  </>
                )}

                {/* Main Visual Element - Removed for minimal design */}
                {false && (
                  <Box
                    sx={{
                      width: { xs: '200px', md: '300px' },
                      height: { xs: '200px', md: '300px' },
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                    }}
                  >
                    <Typography
                      sx={{
                        color: 'white',
                        fontSize: { xs: '1.5rem', md: '2rem' },
                        fontWeight: 700,
                        textAlign: 'center',
                      }}
                    >
                      {title.split(' ').slice(0, 2).join(' ')}
                    </Typography>
                  </Box>
                )}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Scroll Indicator - Hidden for minimal design */}
      {false && (
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          style={{
            position: 'absolute',
            bottom: 30,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              width: 2,
              height: 30,
              backgroundColor: 'rgba(30, 41, 59, 0.5)',
              borderRadius: 1,
            }}
          />
        </motion.div>
      )}
    </Box>
  );
};

export default ModernHeroSection;
