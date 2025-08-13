import React from 'react';
import { Box, Container, Typography, Button, Grid, Chip, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward, PlayCircle, Star, TrendingUp } from '@mui/icons-material';

const AtomicHero = ({
  title,
  subtitle,
  description,
  primaryCta = "Get Started",
  primaryCtaLink = "/contact",
  secondaryCta = "Watch Demo",
  secondaryCtaLink = "#demo",
  backgroundImage,
  gradient = "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
  features = [],
  showVideo = false,
  videoId = null,
  variant = "default", // "default", "minimal", "featured", "campaign"
  theme = "light" // "light", "dark"
}) => {
  const isDark = theme === "dark";
  const textColor = isDark ? "#ffffff" : "#1e293b";
  const textColorSecondary = isDark ? "rgba(255,255,255,0.8)" : "#64748b";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: backgroundImage
          ? `linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 41, 59, 0.75) 50%, rgba(51, 65, 85, 0.65) 100%), url(${backgroundImage})`
          : 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(90deg, rgba(0,0,0,0.3) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)',
          zIndex: 1,
        },
      }}
    >
      {/* Enhanced Animated Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.15,
          background: `
            radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(220, 38, 38, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 70%)
          `,
          animation: 'gradientShift 12s ease-in-out infinite',
        }}
      />
      
      {/* Additional floating elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          animation: 'float 6s ease-in-out infinite',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.1) 0%, transparent 70%)',
          animation: 'float 8s ease-in-out infinite reverse',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 3 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} lg={6}>
              <motion.div variants={itemVariants}>
                {/* Badge */}
                {subtitle && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <Chip
                      label={subtitle}
                      icon={<TrendingUp />}
                      sx={{
                        backgroundColor: 'rgba(59, 130, 246, 0.2)',
                        color: '#ffffff',
                        border: '1px solid rgba(59, 130, 246, 0.3)',
                        backdropFilter: 'blur(10px)',
                        mb: 4,
                        px: 3,
                        py: 1.5,
                        fontSize: '1rem',
                        fontWeight: 600,
                        '& .MuiChip-icon': {
                          color: 'inherit',
                        }
                      }}
                    />
                  </motion.div>
                )}

                {/* Main Title */}
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' },
                    fontWeight: 900,
                    color: '#ffffff',
                    mb: 4,
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 4px 20px rgba(0,0,0,0.2)',
                  }}
                >
                  {title}
                </Typography>

                {/* Description - Only show if provided and not minimal variant */}
                {description && variant !== "minimal" && (
                  <Typography
                    variant="h4"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      mb: 6,
                      lineHeight: 1.6,
                      fontWeight: 400,
                      maxWidth: '600px',
                      fontSize: { xs: '1.1rem', md: '1.3rem' },
                      letterSpacing: '0.01em',
                    }}
                  >
                    {description}
                  </Typography>
                )}

                {/* CTA Buttons */}
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      href={primaryCtaLink}
                      endIcon={<ArrowForward />}
                      sx={{
                        background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
                        color: '#ffffff',
                        px: 6,
                        py: 2,
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        borderRadius: 4,
                        boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)',
                        textTransform: 'none',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
                          boxShadow: '0 12px 35px rgba(59, 130, 246, 0.4)',
                          transform: 'translateY(-2px)',
                        }
                      }}
                    >
                      {primaryCta}
                    </Button>
                  </motion.div>

                  {secondaryCta && variant !== "minimal" && (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outlined"
                        size="large"
                        href={secondaryCtaLink}
                        startIcon={<PlayCircle />}
                        sx={{
                          borderColor: 'rgba(255,255,255,0.3)',
                          color: '#ffffff',
                          px: 6,
                          py: 2,
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          borderRadius: 4,
                          textTransform: 'none',
                          '&:hover': {
                            borderColor: 'rgba(255,255,255,0.5)',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            transform: 'translateY(-2px)',
                          }
                        }}
                      >
                        {secondaryCta}
                      </Button>
                    </motion.div>
                  )}
                </Box>
              </motion.div>
            </Grid>

            {/* Features Grid - Only show if features provided and not minimal variant */}
            {features.length > 0 && variant !== "minimal" && (
              <Grid item xs={12} lg={6}>
                <motion.div variants={itemVariants}>
                  <Grid container spacing={2}>
                    {features.map((feature, index) => (
                      <Grid item xs={12} sm={6} key={index}>
                        <motion.div
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                        >
                          <Box
                            sx={{
                              p: 4,
                              borderRadius: 4,
                              backgroundColor: 'rgba(255,255,255,0.1)',
                              backdropFilter: 'blur(20px)',
                              border: '1px solid rgba(255,255,255,0.2)',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0 12px 25px rgba(0,0,0,0.15)',
                              }
                            }}
                          >
                            {feature.icon && (
                              <Box sx={{ mb: 2, color: '#dc2626' }}>
                                {feature.icon}
                              </Box>
                            )}
                            <Typography
                              variant="h6"
                              sx={{
                                color: textColor,
                                fontWeight: 600,
                                mb: 1,
                              }}
                            >
                              {feature.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: textColorSecondary,
                                lineHeight: 1.5,
                              }}
                            >
                              {feature.description}
                            </Typography>
                          </Box>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </motion.div>
              </Grid>
            )}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AtomicHero;

// Add CSS animations for floating elements
const style = document.createElement('style');
style.textContent = `
  @keyframes gradientShift {
    0%, 100% { opacity: 0.15; }
    50% { opacity: 0.25; }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }
`;

if (typeof document !== 'undefined') {
  document.head.appendChild(style);
}
