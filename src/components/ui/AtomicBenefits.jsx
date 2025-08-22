import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const AtomicBenefits = ({
  title,
  subtitle,
  benefits = [],
  variant = "default", // "default", "stats"
  theme = "light"
}) => {
  const isDark = theme === "dark";
  const isMinimal = theme === "minimal";
  const textColor = isDark ? "#ffffff" : isMinimal ? "#374151" : "#1e293b";
  const textColorSecondary = isDark ? "rgba(255,255,255,0.8)" : isMinimal ? "#64748b" : "#64748b";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  if (variant === "stats") {
    return (
      <Box
        component="section"
        sx={{
          py: 4,
          backgroundColor: isDark ? '#0f172a' : isMinimal ? '#fafbfc' : '#f8fafc',
        }}
      >
        <Container maxWidth="xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Stats Grid */}
            <Grid container spacing={2}>
              {benefits.map((benefit, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div
                    variants={itemVariants}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  >
                    <Card
                      sx={{
                        p: 1.5,
                        textAlign: 'center',
                        backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : '#ffffff',
                        border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : '#e2e8f0'}`,
                        borderRadius: 1.5,
                        boxShadow: '0 2px 3px rgba(0,0,0,0.05)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                        }
                      }}
                    >
                      <CardContent sx={{ p: 0 }}>
                        {/* Icon */}
                        {benefit.icon && (
                          <Box sx={{ mb: 1, color: '#dc2626' }}>
                            {benefit.icon}
                          </Box>
                        )}

                        {/* Metric */}
                        {benefit.metric && (
                          <Typography
                            variant="h2"
                            sx={{
                              fontSize: { xs: '1.25rem', md: '1.5rem' },
                              fontWeight: 800,
                              color: '#dc2626',
                              mb: 0.5,
                            }}
                          >
                            {benefit.metric.value}
                          </Typography>
                        )}

                        {/* Label */}
                        <Typography
                          variant="h6"
                          sx={{
                            color: textColor,
                            fontWeight: 600,
                            mb: 1,
                            fontSize: '0.875rem',
                          }}
                        >
                          {benefit.metric ? benefit.metric.label : benefit.title}
                        </Typography>

                        {/* Description */}
                        <Typography
                          variant="body2"
                          sx={{
                            color: textColorSecondary,
                            lineHeight: 1.5,
                            fontSize: '0.75rem',
                          }}
                        >
                          {benefit.description}
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
  }

  // Default variant
  return (
    <Box
      component="section"
      sx={{
        py: 4,
        backgroundColor: isDark ? '#0f172a' : '#ffffff',
        overflow: 'visible',
      }}
    >
      <Container maxWidth="xl" sx={{ overflow: 'visible' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <motion.div variants={itemVariants}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                  fontWeight: 600,
                  color: textColor,
                  mb: 2,
                  letterSpacing: '-0.01em',
                }}
              >
                {title}
              </Typography>
              {subtitle && (
                <Typography
                  variant="body1"
                  sx={{
                    color: textColorSecondary,
                    maxWidth: '350px',
                    mx: 'auto',
                    lineHeight: 1.4,
                    fontSize: { xs: '0.9rem', sm: '0.95rem' },
                    whiteSpace: 'normal',
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                  }}
                >
                  {subtitle}
                </Typography>
              )}
            </motion.div>
          </Box>

          {/* Benefits Grid */}
          <Grid container spacing={4} justifyContent="center" sx={{ overflow: 'visible' }}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  variants={itemVariants}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                >
                  <Card
                    sx={{
                      height: 'auto',
                      minHeight: { xs: 'auto', sm: '280px', md: '300px' },
                      p: 3,
                      backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : '#ffffff',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : '#e2e8f0'}`,
                      borderRadius: 3,
                      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      overflow: 'visible',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 25px rgba(0,0,0,0.1)',
                      }
                    }}
                  >
                    <CardContent sx={{ p: 0, height: '100%', display: 'flex', flexDirection: 'column', overflow: 'visible' }}>
                      {/* Icon */}
                      {benefit.icon && (
                        <Box sx={{ mb: 3, color: '#dc2626' }}>
                          {benefit.icon}
                        </Box>
                      )}

                      {/* Title */}
                      <Typography
                        variant="h5"
                        sx={{
                          color: textColor,
                          fontWeight: 600,
                          mb: 2,
                        }}
                      >
                        {benefit.title}
                      </Typography>

                      {/* Description */}
                      <Typography
                        variant="body1"
                        sx={{
                          color: textColorSecondary,
                          lineHeight: 1.6,
                          mb: 3,
                          flex: 1,
                        }}
                      >
                        {benefit.description}
                      </Typography>

                      {/* Features */}
                      {benefit.features && benefit.features.length > 0 && (
                        <Box>
                          {benefit.features.map((feature, featureIndex) => (
                            <Box
                              key={featureIndex}
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: 1,
                              }}
                            >
                              <Box
                                sx={{
                                  width: 6,
                                  height: 6,
                                  borderRadius: '50%',
                                  backgroundColor: '#dc2626',
                                  mr: 2,
                                  flexShrink: 0,
                                }}
                              />
                              <Typography
                                variant="body2"
                                sx={{
                                  color: textColorSecondary,
                                  fontSize: '0.875rem',
                                }}
                              >
                                {feature}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      )}

                      {/* Metric */}
                      {benefit.metric && (
                        <Box sx={{ mt: 3, textAlign: 'center' }}>
                          <Typography
                            variant="h3"
                            sx={{
                              fontSize: '2rem',
                              fontWeight: 800,
                              color: '#dc2626',
                              mb: 0.5,
                            }}
                          >
                            {benefit.metric.value}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: textColorSecondary,
                              fontWeight: 600,
                            }}
                          >
                            {benefit.metric.label}
                          </Typography>
                        </Box>
                      )}
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

export default AtomicBenefits;
