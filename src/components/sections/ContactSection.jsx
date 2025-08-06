import React from 'react';
import { Box, Container, Typography, Grid, Button, TextField } from '@mui/material';
import { motion } from 'framer-motion';
import { Phone, Email, LocationOn } from '@mui/icons-material';

const ContactSection = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              fontWeight: 700,
              color: '#0f172a',
              mb: 6,
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Get In Touch
          </Typography>

          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  color: '#0f172a',
                  mb: 4,
                }}
              >
                Let's Start a Conversation
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#64748b',
                  mb: 4,
                  lineHeight: 1.8,
                }}
              >
                Ready to transform your business with cutting-edge technology solutions? 
                Our team is here to help you achieve your goals.
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Phone sx={{ color: '#1e40af', mr: 2 }} />
                    <Typography variant="body1">
                      +1 (555) 123-4567
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Email sx={{ color: '#1e40af', mr: 2 }} />
                    <Typography variant="body1">
                      info@intellectt.com
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LocationOn sx={{ color: '#1e40af', mr: 2 }} />
                    <Typography variant="body1">
                      Global Presence: 5 Countries
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { mb: 3 },
                }}
              >
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  type="email"
                  required
                />
                <TextField
                  fullWidth
                  label="Company"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  required
                />
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{
                    background: '#1e40af',
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    '&:hover': {
                      background: '#1e3a8a',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ContactSection; 