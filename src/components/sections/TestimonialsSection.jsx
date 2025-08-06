import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { TESTIMONIALS_DATA, BRAND_COLORS } from '../../constants';

const TestimonialsSection = () => {
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
            variant="h2"
            sx={{
              textAlign: 'center',
              fontWeight: 700,
              color: BRAND_COLORS.darkGray,
              mb: 6,
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            What Our Clients Say
          </Typography>

          <Grid container spacing={4}>
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
                      borderRadius: 3,
                      boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Typography
                        variant="body1"
                        sx={{
                          mb: 3,
                          fontStyle: 'italic',
                          color: '#334155',
                          lineHeight: 1.8,
                        }}
                      >
                        "{testimonial.content}"
                      </Typography>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar
                          src={testimonial.avatar}
                          sx={{ width: 56, height: 56, mr: 2 }}
                        />
                        <Box>
                                                  <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            color: BRAND_COLORS.darkGray,
                          }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: BRAND_COLORS.slate,
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