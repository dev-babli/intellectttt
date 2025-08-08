import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
        color: 'white',
        py: { xs: 8, md: 12 },
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
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
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  mb: 3,
                  lineHeight: 1.2,
                }}
              >
                Welcome to Intellectt
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  lineHeight: 1.6,
                }}
              >
                Delivering innovative solutions across specialized industries with expertise and precision.
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  background: 'white',
                  color: '#1e40af',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  '&:hover': {
                    background: '#f8fafc',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Get Started
              </Button>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box
                component="img"
                src="/images/cloud-computing-hero.webp"
                alt="Cloud Computing Technology Illustration"
                sx={{
                  width: '100%',
                  maxWidth: 450,
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
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection; 