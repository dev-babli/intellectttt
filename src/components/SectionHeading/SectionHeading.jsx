import React from 'react';
import { Typography, Box } from '@mui/material';

export default function SectionHeading() {
  return (
    <Box textAlign="center" py={2}>
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: { xs: '1rem', md: '1.5rem' },
          color: '#0199D3 !important',
          fontWeight: 400,
        }}
      >
        Our Suite of
      </Typography>

      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold !important",
          fontSize: { xs: '1.8rem', md: '3rem' },
          color: '#0199D3!important',
          mt: 1,
        }}
      >
        Consulting Services
      </Typography>
    </Box>
  );
}
