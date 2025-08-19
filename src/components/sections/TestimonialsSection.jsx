import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { TESTIMONIALS_DATA, BRAND_COLORS } from '../../constants';

const TestimonialsSection = () => {
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
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.5rem' },
              lineHeight: { xs: 1.2, md: 1.1 },
              letterSpacing: '-0.01em',
            }}
          >
            Client Testimonials
          </Typography>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {TESTIMONIALS_DATA.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
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
                    <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                      <Typography
                        variant="body1"
                        sx={{
                          mb: { xs: 2, md: 2.5 },
                          fontStyle: 'italic',
                          color: '#334155',
                          lineHeight: 1.6,
                          fontSize: { xs: '0.8rem', md: '0.9rem' },
                          fontWeight: 400,
                        }}
                      >
                        "{testimonial.content}"
                      </Typography>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar
                          src={testimonial.avatar}
                          sx={{ 
                            width: { xs: 40, md: 48 }, 
                            height: { xs: 40, md: 48 }, 
                            mr: 2,
                            border: '2px solid rgba(59, 130, 246, 0.1)',
                          }}
                        />
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 600,
                              color: BRAND_COLORS.darkGray,
                              fontSize: { xs: '0.8rem', md: '0.9rem' },
                              lineHeight: 1.3,
                            }}
                          >
                            {testimonial.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: BRAND_COLORS.slate,
                              fontSize: { xs: '0.7rem', md: '0.8rem' },
                              fontWeight: 500,
                            }}
                          >
                            {testimonial.role}
                          </Typography>
                        </Box>
                      </Box>
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

export default TestimonialsSection; 