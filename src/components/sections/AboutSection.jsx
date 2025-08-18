import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <Box sx={{ 
      py: { xs: 4, sm: 5, md: 6 }, 
      px: { xs: 2, sm: 3, md: 4 },
      background: '#ffffff'
    }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  color: '#0f172a',
                  mb: { xs: 1.5, md: 2 },
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.5rem' },
                  lineHeight: { xs: 1.2, md: 1.1 },
                  letterSpacing: '-0.01em',
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                About Intellectt
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: '#334155',
                  mb: { xs: 2, md: 3 },
                  lineHeight: 1.5,
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  textAlign: { xs: 'center', md: 'left' },
                  fontWeight: 500,
                }}
              >
                We are a global technology company delivering innovative solutions across specialized industries. 
                With 1,800+ professionals across 5 countries, we bring local expertise with global reach.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#64748b',
                  lineHeight: 1.6,
                  fontSize: { xs: '0.8rem', md: '0.9rem' },
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                Our mission is to empower businesses with cutting-edge technology solutions that drive growth, 
                efficiency, and competitive advantage. We specialize in AI/ML, cloud services, data analytics, 
                and cybersecurity, serving clients across healthcare, finance, manufacturing, and more.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
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
                    src="/images/about-us.jpg"
                    alt="About Intellectt"
                    sx={{
                      width: '100%',
                      maxWidth: { xs: '280px', sm: '320px', md: '400px' },
                      height: 'auto',
                      borderRadius: 2,
                      boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.02)',
                        boxShadow: '0 12px 36px rgba(0,0,0,0.12)',
                      },
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutSection; 