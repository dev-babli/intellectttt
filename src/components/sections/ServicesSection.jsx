import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import { SERVICES_DATA, BRAND_COLORS } from '../../constants';

const ServicesSection = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, background: BRAND_COLORS.lightGray }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              fontWeight: 600,
              color: BRAND_COLORS.darkGray,
              mb: 6,
              fontSize: { xs: '1.25rem', md: '1.75rem' },
            }}
          >
            Our Services
          </Typography>

          <Grid container spacing={4}>
            {SERVICES_DATA.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 3,
                      overflow: 'hidden',
                      boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={service.image}
                      alt={service.title}
                    />
                    <CardContent sx={{ p: 3 }}>
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 600,
                          color: BRAND_COLORS.darkGray,
                          mb: 2,
                          fontSize: '0.875rem',
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ lineHeight: 1.6 }}
                      >
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ServicesSection; 