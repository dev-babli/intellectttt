import React from 'react';
import { Box, Container, Typography, Grid, Link } from '@mui/material';
import { BRAND_COLORS, COMPANY_INFO } from '../../constants';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: BRAND_COLORS.darkGray,
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              {COMPANY_INFO.name}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              {COMPANY_INFO.tagline}
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Services
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="/services" color="inherit" sx={{ textDecoration: 'none' }}>
                  AI & GenAI
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="/services" color="inherit" sx={{ textDecoration: 'none' }}>
                  Cloud & Application
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="/services" color="inherit" sx={{ textDecoration: 'none' }}>
                  Data & Analytics
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="/services" color="inherit" sx={{ textDecoration: 'none' }}>
                  Cybersecurity
                </Link>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Email: {COMPANY_INFO.contact.email}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Phone: {COMPANY_INFO.contact.phone}
            </Typography>
            <Typography variant="body2">
              {COMPANY_INFO.contact.address}
            </Typography>
          </Grid>
        </Grid>
        
        <Box sx={{ borderTop: 1, borderColor: 'rgba(255,255,255,0.1)', pt: 3, mt: 4 }}>
          <Typography variant="body2" align="center">
            © 2024 Intellectt. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 