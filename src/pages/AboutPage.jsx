import React from 'react';
import Layout from '../components/layout/Layout';
import { Box, Container, Typography } from '@mui/material';

const AboutPage = () => {
  return (
    <Layout>
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ textAlign: 'center', mb: 4 }}>
            About Intellectt
          </Typography>
          <Typography variant="h5" sx={{ textAlign: 'center', color: 'text.secondary' }}>
            Coming Soon...
          </Typography>
        </Container>
      </Box>
    </Layout>
  );
};

export default AboutPage; 