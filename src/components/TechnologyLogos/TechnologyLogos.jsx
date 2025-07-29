// src/components/TechnologyLogos.js
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

// Sample logos — Replace with your actual local images or URLs
const logos = [
  {
    name: 'ChatGPT',
    src: '/logos/chatgpt.png',
  },
  {
    name: 'Copilot',
    src: '/logos/DeepSeek_logo.svg.png',
  },
  {
    name: 'Azure',
    src: '/logos/Microsoft_Azure_Logo.svg.png',
  },
  {
    name: 'Deepseek',
    src: '/logos/msft-copilot-logo-big.avif',
  },
];

const TechnologyLogos = () => {
  return (
    <Box sx={{ py: 8, textAlign: 'center', backgroundColor: '#fff',maxWidth: '89% !important', width: '89%', margin: '0 auto' }}>
      <Typography variant="h5" fontWeight={700} gutterBottom>
        Technology We use
      </Typography>

      <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ mt: 3 }}>
        {logos.map((logo, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <Box
                component="img"
                src={logo.src}
                alt={logo.name}
                sx={{ maxWidth: '100%', height: 70, objectFit: 'cover',  p: 2 }}
              />
              {/* <Typography variant="subtitle2" sx={{ mt: 1 }}>
                {logo.name}
              </Typography> */}
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TechnologyLogos;
