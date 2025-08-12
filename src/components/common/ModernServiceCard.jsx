import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, Chip, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward, Star, TrendingUp, CheckCircle } from '@mui/icons-material';
import '../../css/modern-components.css';

const ModernServiceCard = ({ cards, title = "Our Services", subtitle = "Explore our comprehensive solutions" }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
          <Box
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          background: 'radial-gradient(circle at 25% 25%, #667eea 0%, transparent 50%), radial-gradient(circle at 75% 75%, #764ba2 0%, transparent 50%)',
        }}
      />

      <Box sx={{ maxWidth: '1340px', mx: 'auto', px: { xs: 2, md: 4 }, position: 'relative', zIndex: 1 }}>
        {/* Section Header - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 800,
                color: '#1e293b',
                mb: 2,
                lineHeight: 1.2,
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#64748b',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6,
                fontWeight: 400,
              }}
            >
              {subtitle}
            </Typography>
          </Box>
        </motion.div>

        {/* Service Cards Grid */}
        <Grid container spacing={3}>
          {cards.map((card, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card
                  className="modern-service-card"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    overflow: 'hidden',
                    position: 'relative',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: hoveredIndex === index ? 'translateY(-12px) scale(1.03)' : 'translateY(0) scale(1)',
                    boxShadow: hoveredIndex === index 
                      ? '0 30px 60px rgba(0,0,0,0.2), 0 0 0 1px rgba(102, 126, 234, 0.15)'
                      : '0 8px 25px rgba(0,0,0,0.1)',
                    background: hoveredIndex === index
                      ? 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
                      : '#ffffff',
                    border: '1px solid rgba(0,0,0,0.05)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 5,
                      background: hoveredIndex === index
                        ? 'linear-gradient(90deg, #667eea 0%, #764ba2 50%, #f093fb 100%)'
                        : 'linear-gradient(90deg, #e2e8f0 0%, #cbd5e1 100%)',
                      transition: 'all 0.4s ease',
                    },
                  }}
                >
                  {/* Card Image - Enhanced */}
                  <Box
                    className="card-image-container"
                    sx={{
                      height: 180,
                      backgroundImage: `url(${card.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      position: 'relative',
                      borderRadius: '16px 16px 0 0',
                      overflow: 'hidden',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: hoveredIndex === index
                          ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.1) 100%)'
                          : 'linear-gradient(135deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 100%)',
                        transition: 'all 0.4s ease',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)',
                        zIndex: 1,
                      },
                    }}
                  />

                  {/* Card Content */}
                  <CardContent sx={{ p: 4, position: 'relative' }}>
                    {/* Service Icon - Removed for cleaner design */}
                    {false && (
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2,
                          transition: 'all 0.4s ease',
                          transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
                        }}
                      >
                        <TrendingUp 
                          className="service-icon"
                          sx={{ 
                            color: 'white',
                            fontSize: '1.2rem',
                          }} 
                        />
                      </Box>
                    )}

                    {/* Title */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: '#1e293b',
                        mb: 2,
                        fontSize: '1.2rem',
                        lineHeight: 1.3,
                        transition: 'color 0.4s ease',
                      }}
                    >
                      {card.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#64748b',
                        mb: 3,
                        lineHeight: 1.7,
                        fontSize: '0.95rem',
                      }}
                    >
                      {card.description}
                    </Typography>

                    {/* Features List */}
                    {card.features && card.features.length > 0 && (
                      <Box sx={{ mb: 3 }}>
                                                 {card.features.slice(0, 3).map((feature, featureIndex) => (
                           <Box key={featureIndex} className="feature-item" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                             <CheckCircle 
                               sx={{ 
                                 fontSize: '1rem', 
                                 color: '#10b981', 
                                 mr: 1,
                                 flexShrink: 0,
                               }} 
                             />
                             <Typography
                               sx={{
                                 fontSize: '0.8rem',
                                 color: '#64748b',
                                 fontWeight: 500,
                               }}
                             >
                               {feature}
                             </Typography>
                           </Box>
                         ))}
                      </Box>
                    )}

                    {/* CTA Button - Enhanced */}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                      <Button
                        variant="contained"
                        href={card.url}
                        sx={{
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          color: 'white',
                          fontWeight: 600,
                          fontSize: '0.9rem',
                          textTransform: 'none',
                          px: 3,
                          py: 1.5,
                          borderRadius: 3,
                          boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                          '&:hover': {
                            background: 'linear-gradient(135deg, #5b21b6 0%, #6b21a8 100%)',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                        endIcon={<ArrowForward sx={{ fontSize: '1rem' }} />}
                      >
                        {card.buttonText}
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Bottom CTA - Removed for minimal design */}
        {false && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: 'center', mt: 8 }}>
              <Button
                className="modern-button"
                variant="contained"
                size="large"
                href="/contact"
                sx={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  px: 6,
                  py: 2,
                  borderRadius: 3,
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #5b21b6 0%, #6b21a8 100%)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 35px rgba(102, 126, 234, 0.4)',
                  },
                  transition: 'all 0.3s ease',
                }}
                endIcon={<ArrowForward />}
              >
                Explore All Services
              </Button>
            </Box>
          </motion.div>
        )}
      </Box>
    </Box>
  );
};

export default ModernServiceCard;
