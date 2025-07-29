// src/components/FeatureCard.js
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          p: 2,
          borderRadius: 2,
          backgroundColor: '#fff',
          boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
          minHeight: 150,
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Box
          sx={{
            width: 60,
            height: 60,
            borderRadius: '50%',
            background: 'linear-gradient(145deg, #ffe1d1, #fff0e1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {icon}
        </Box>
        <Box>
          <Typography variant="subtitle1" fontSize={{ xs: '1rem', md: '1.2rem' }} fontWeight={700}>
            {title}
          </Typography>
          <Typography variant="body2" fontSize={{ xs: '0.8rem', md: '1rem' }} color="text.secondary">
            {description}
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
};

export default FeatureCard;
