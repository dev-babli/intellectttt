// src/components/FeatureBox.js
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const FeatureBox = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Box
        sx={{
          background: '#fff',
          borderRadius: 3,
          p: 3,
          boxShadow: '0px 4px 16px rgba(0,0,0,0.05)',
          display: 'flex',
          gap: 2,
          alignItems: 'flex-start',
          minHeight: 100,
        }}
      >
        <Box sx={{ fontSize: 40, width: 100 }}>{icon}</Box>
        <Box>
          <Typography variant="subtitle1" fontWeight={700} fontSize="1.1rem">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontSize={"1rem"}>
            {description}
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
};

export default FeatureBox;
