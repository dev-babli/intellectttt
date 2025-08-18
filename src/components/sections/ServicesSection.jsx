import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import { SERVICES_DATA, BRAND_COLORS } from '../../constants';

const ServicesSection = () => {
  return (
    <Box sx={{ 
      py: { xs: 4, sm: 5, md: 6 }, 
      px: { xs: 2, sm: 3, md: 4 },
      background: BRAND_COLORS.lightGray 
    }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
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
              color: BRAND_COLORS.darkGray,
              mb: { xs: 3, md: 4 },
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.125rem' },
              lineHeight: { xs: 1.2, md: 1.1 },
              letterSpacing: '-0.01em',
            }}
          >
            Our Services
          </Typography>

          <Grid container spacing={{ xs: 2, md: 3 }}>
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
                      borderRadius: 2,
                      overflow: 'hidden',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(0,0,0,0.05)',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                        borderColor: 'rgba(59, 130, 246, 0.2)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={service.image}
                      alt={service.title}
                      sx={{
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                    <CardContent sx={{ p: { xs: 1.5, md: 2 } }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: BRAND_COLORS.darkGray,
                          mb: { xs: 1, md: 1.5 },
                          fontSize: { xs: '0.8rem', md: '0.9rem' },
                          lineHeight: 1.3,
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ 
                          lineHeight: 1.5,
                          fontSize: { xs: '0.75rem', md: '0.8rem' },
                        }}
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