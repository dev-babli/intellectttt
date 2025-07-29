// src/components/AboutHeader.jsxx
import React from 'react';
import { Box, Typography, Breadcrumbs, Link, Container } from '@mui/material';

const AboutHeader = () => {
  return (
    <Box
      sx={{
        // ensures space below navbar
        position: 'relative',
        height: { xs: '86vh', md: '60vh' },
        top: { xs: 150, md: 140 },
        backgroundImage: 'url("/aerial-view-business-team.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: 'rgba(0, 0, 0, 0.5)',
          
        }}
      />

      

      {/* Content */}
   <Container sx={{ position: 'relative', zIndex: 2 }}>
  <Breadcrumbs sx={{ color: '#fff', mb: 1 }}>
    <Link href="/" underline="hover" color="inherit">
      Home
    </Link>
    <Typography color="white">About Us</Typography>
  </Breadcrumbs>

  <Typography
    variant="h3"
    sx={{
      fontWeight: 'bold',
      fontSize: { xs: '2rem', md: '3rem' },
      color: '#fff',
      position: 'relative',
      pl: 4, // padding-left for space before text
      '&::before': {
        content: '""',
        position: 'absolute',
        left: 0,
        top: '50%',
        transform: 'translateY(-50%) rotate(-20deg)',
        width: '30px',
        height: '4px',
        backgroundColor: '#f44336', // red color
        borderRadius: '2px',
      },
    }}
  >
    About Us
  </Typography>
</Container>

    </Box>
  );
};

export default AboutHeader;
