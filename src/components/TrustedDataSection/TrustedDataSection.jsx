import React from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const TrustedDataSection = ({
  title = "Trusted Data Engineering Over 20+ years",
  description = `With over 20 years of experience, innomax is a trusted leader in cybersecurity solutions, providing customized strategies to protect sensitive data. Our commitment to innovation and customer satisfaction makes us a reliable in safeguarding your digital assets.`,
  experts = "120+ Experts Onboard",
  image = "/images/Data-Engineering.jpg",
}) => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 8, backgroundColor: '#f0faff' }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Left Text Content */}
        <Grid item xs={12} md={6}>
          <MotionBox
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography variant="h4" fontWeight={700} sx={{ color: '#002147', mb: 2 }}>
              {title}
            </Typography>
            <Typography variant="body1" sx={{ color: '#333', maxWidth: 500 }}>
              {description}
            </Typography>
          </MotionBox>
        </Grid>

        {/* Right Image Content */}
        <Grid item xs={12} md={6}>
          <MotionBox
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            {/* Expert Stat Box */}
            <Box
              sx={{
                backgroundColor: '#002147',
                color: '#fff',
                borderRadius: 3,
                p: 3,
                textAlign: 'center',
                fontWeight: 600,
                fontSize: '1.25rem',
                boxShadow: theme.shadows[3],
              }}
            >
              {experts}
            </Box>

            {/* Image */}
            <Box
              component="img"
              src={image}
              alt="Data Engineering"
              sx={{
                width: '100%',
                maxWidth: 400,
                borderRadius: 3,
                boxShadow: theme.shadows[2],
              }}
            />
          </MotionBox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TrustedDataSection;
