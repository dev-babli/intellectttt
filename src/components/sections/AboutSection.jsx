import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  color: '#0f172a',
                  mb: 3,
                  fontSize: { xs: '2rem', md: '3rem' },
                }}
              >
                About Intellectt
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: '#334155',
                  mb: 4,
                  lineHeight: 1.6,
                }}
              >
                We are a global technology company delivering innovative solutions across specialized industries. 
                With 1,800+ professionals across 5 countries, we bring local expertise with global reach.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#64748b',
                  lineHeight: 1.8,
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
                  component="img"
                  src="/images/about-us.jpg"
                  alt="About Intellectt"
                  sx={{
                    width: '100%',
                    borderRadius: 3,
                    boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutSection; 