import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
        color: 'white',
        py: { xs: 6, sm: 8, md: 10, lg: 12 },
        px: { xs: 2, sm: 3, md: 4 },
        minHeight: { xs: '70vh', md: '60vh' },
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("/images/bg/pattern-dots.png")',
          opacity: 0.1,
          backgroundSize: '20px 20px',
        }
      }}
    >
      <Container 
        maxWidth="lg" 
        sx={{ 
          position: 'relative', 
          zIndex: 2,
          px: { xs: 2, sm: 3, md: 4 }
        }}
      >
        <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem', lg: '4rem' },
                  mb: { xs: 2, md: 3 },
                  lineHeight: { xs: 1.1, md: 1.2 },
                  letterSpacing: '-0.02em',
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                Welcome to Intellectt
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: { xs: 3, md: 4 },
                  opacity: 0.9,
                  lineHeight: 1.6,
                  fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                  textAlign: { xs: 'center', md: 'left' },
                  maxWidth: { md: '500px' },
                }}
              >
                Delivering innovative solutions across specialized industries with expertise and precision.
              </Typography>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background: 'white',
                    color: '#1e40af',
                    px: { xs: 3, md: 4 },
                    py: { xs: 1.25, md: 1.5 },
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    fontWeight: 600,
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: '#f8fafc',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
                    },
                  }}
                >
                  Get Started
                </Button>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: { xs: 'center', md: 'flex-end' },
                  alignItems: 'center',
                }}
              >
                <Box
                  component="img"
                  src="/images/cloud-computing-hero.webp"
                  alt="Cloud Computing Technology Illustration"
                  sx={{
                    width: '100%',
                    maxWidth: { xs: '350px', sm: '400px', md: '450px' },
                    height: 'auto',
                    borderRadius: '16px',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
                    filter: 'brightness(1.05) contrast(1.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      boxShadow: '0 16px 48px rgba(0, 0, 0, 0.25)',
                    },
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection; 