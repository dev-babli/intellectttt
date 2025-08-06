import React, { Fragment } from "react";
import { Box, Container, Typography, Grid, Button, Card, CardContent, Chip, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { LocationOn, People, Business, TrendingUp, Public, Phone, Email } from "@mui/icons-material";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Enhanced color palette
const BRAND_COLORS = {
  primary: "#1e40af",
  secondary: "#be123c",
  accent: "#3b82f6",
  success: "#10b981",
  warning: "#f59e0b",
  info: "#06b6d4",
  white: "#ffffff",
  lightGray: "#f8fafc",
  darkGray: "#0f172a",
  slate: "#334155",
};

// Global presence data
const globalData = {
  totalCountries: 5,
  totalOffices: 15,
  totalEmployees: 1800,
  totalProjects: 500,
  countries: [
    {
      name: "United States",
      flag: "/flags/usa.png",
      offices: 6,
      employees: 450,
      cities: ["New York", "San Francisco", "Austin", "Boston", "Seattle", "Chicago"],
      specialties: ["AI/ML", "Cloud Services", "Digital Transformation"],
      timezone: "EST/PST",
      established: "2010"
    },
    {
      name: "India",
      flag: "/flags/india.png",
      offices: 4,
      employees: 800,
      cities: ["Bangalore", "Hyderabad", "Mumbai", "Chennai"],
      specialties: ["Software Development", "Data Analytics", "DevOps"],
      timezone: "IST",
      established: "2008"
    },
    {
      name: "Canada",
      flag: "/flags/canada.png",
      offices: 2,
      employees: 200,
      cities: ["Toronto", "Vancouver"],
      specialties: ["Healthcare IT", "FinTech", "E-commerce"],
      timezone: "EST/PST",
      established: "2012"
    },
    {
      name: "Mexico",
      flag: "/flags/mexico.png",
      offices: 2,
      employees: 150,
      cities: ["Mexico City", "Guadalajara"],
      specialties: ["Nearshore Development", "QA Services", "Support"],
      timezone: "CST",
      established: "2015"
    },
    {
      name: "Ireland",
      flag: "/flags/ireland.png",
      offices: 1,
      employees: 200,
      cities: ["Dublin"],
      specialties: ["European Operations", "Compliance", "Research"],
      timezone: "GMT",
      established: "2018"
    }
  ]
};

const GlobalPresence = () => {
  return (
    <Fragment>
      <div className="body_wrap sco_agency">
        {/* Enhanced Hero Section */}
        <Box
          sx={{
            background: `linear-gradient(135deg, ${BRAND_COLORS.primary} 0%, ${BRAND_COLORS.accent} 100%)`,
            color: BRAND_COLORS.white,
            py: { xs: 8, md: 12 },
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background Pattern */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "url('/images/bg/pattern-dots.png')",
              opacity: 0.1,
            }}
          />
          
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ textAlign: "center", position: "relative", zIndex: 2 }}>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "2.5rem", md: "4rem" },
                    mb: 3,
                    lineHeight: 1.2,
                  }}
                >
                  Our Global Presence
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 400,
                    mb: 4,
                    maxWidth: "800px",
                    margin: "0 auto",
                    opacity: 0.9,
                    lineHeight: 1.6,
                  }}
                >
                  Spanning 5 countries with 15+ offices and 1,800+ professionals, 
                  we deliver world-class solutions with local expertise and global reach.
                </Typography>
                
                {/* Key Statistics */}
                <Grid container spacing={4} justifyContent="center" sx={{ mt: 6 }}>
                  {[
                    { number: "5", label: "Countries", icon: Public },
                    { number: "15+", label: "Offices", icon: Business },
                    { number: "1,800+", label: "Professionals", icon: People },
                    { number: "500+", label: "Projects", icon: TrendingUp },
                  ].map((stat, index) => (
                    <Grid item xs={6} md={3} key={index}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Box sx={{ textAlign: "center" }}>
                          <Box
                            sx={{
                              width: 80,
                              height: 80,
                              borderRadius: "50%",
                              background: "rgba(255,255,255,0.2)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              margin: "0 auto 1rem",
                            }}
                          >
                            <stat.icon sx={{ fontSize: 40, color: BRAND_COLORS.white }} />
                          </Box>
                          <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                            {stat.number}
                          </Typography>
                          <Typography variant="body1" sx={{ opacity: 0.9 }}>
                            {stat.label}
                          </Typography>
                        </Box>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </motion.div>
          </Container>
        </Box>

        {/* Interactive Global Map Section */}
        <Box sx={{ py: { xs: 6, md: 10 }, background: BRAND_COLORS.lightGray }}>
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box sx={{ textAlign: "center", mb: 6 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    color: BRAND_COLORS.darkGray,
                    mb: 2,
                    fontSize: { xs: "2rem", md: "3rem" },
                  }}
                >
                  Global Reach, Local Expertise
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: BRAND_COLORS.slate,
                    maxWidth: "600px",
                    margin: "0 auto",
                    lineHeight: 1.6,
                  }}
                >
                  Our strategic presence across multiple continents enables us to provide 
                  24/7 support and leverage diverse talent pools for optimal solutions.
                </Typography>
              </Box>

              {/* Map with Interactive Markers */}
              <Box
                sx={{
                  position: "relative",
                  background: "url('/Mapglobal.webp')",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  height: { xs: 300, md: 500 },
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                }}
              >
                {/* Interactive Markers */}
                {globalData.countries.map((country, index) => (
                  <motion.div
                    key={country.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        cursor: "pointer",
                        "&:hover": {
                          transform: "scale(1.1)",
                        },
                        transition: "all 0.3s ease",
                      }}
                      // Position markers based on country location
                      style={{
                        left: `${20 + (index * 15)}%`,
                        top: `${30 + (index * 10)}%`,
                      }}
                    >
                      <Box
                        sx={{
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          background: BRAND_COLORS.primary,
                          border: `3px solid ${BRAND_COLORS.white}`,
                          boxShadow: `0 0 20px ${BRAND_COLORS.primary}60`,
                          animation: "pulse 2s infinite",
                        }}
                      />
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Container>
        </Box>

        {/* Enhanced Country Cards */}
        <Box sx={{ py: { xs: 6, md: 10 } }}>
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
                  fontWeight: 700,
                  color: BRAND_COLORS.darkGray,
                  textAlign: "center",
                  mb: 6,
                  fontSize: { xs: "2rem", md: "3rem" },
                }}
              >
                Our Global Operations
              </Typography>

              <Grid container spacing={4}>
                {globalData.countries.map((country, index) => (
                  <Grid item xs={12} md={6} lg={4} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card
                        sx={{
                          height: "100%",
                          borderRadius: 3,
                          overflow: "hidden",
                          boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-8px)",
                            boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            height: 120,
                            background: `linear-gradient(135deg, ${BRAND_COLORS.primary} 0%, ${BRAND_COLORS.accent} 100%)`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                          }}
                        >
                          <Box
                            component="img"
                            src={country.flag}
                            alt={country.name}
                            sx={{
                              width: 60,
                              height: 60,
                              borderRadius: "50%",
                              border: `3px solid ${BRAND_COLORS.white}`,
                            }}
                          />
                        </Box>
                        
                        <CardContent sx={{ p: 3 }}>
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 700,
                              color: BRAND_COLORS.darkGray,
                              mb: 2,
                            }}
                          >
                            {country.name}
                          </Typography>

                          {/* Key Stats */}
                          <Grid container spacing={2} sx={{ mb: 3 }}>
                            <Grid item xs={6}>
                              <Box sx={{ textAlign: "center" }}>
                                <Typography variant="h4" sx={{ fontWeight: 700, color: BRAND_COLORS.primary }}>
                                  {country.offices}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  Offices
                                </Typography>
                              </Box>
                            </Grid>
                            <Grid item xs={6}>
                              <Box sx={{ textAlign: "center" }}>
                                <Typography variant="h4" sx={{ fontWeight: 700, color: BRAND_COLORS.primary }}>
                                  {country.employees}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  Employees
                                </Typography>
                              </Box>
                            </Grid>
                          </Grid>

                          {/* Cities */}
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                            Locations:
                          </Typography>
                          <Box sx={{ mb: 2 }}>
                            {country.cities.map((city, cityIndex) => (
                              <Chip
                                key={cityIndex}
                                label={city}
                                size="small"
                                sx={{
                                  mr: 1,
                                  mb: 1,
                                  background: BRAND_COLORS.lightGray,
                                  color: BRAND_COLORS.darkGray,
                                }}
                              />
                            ))}
                          </Box>

                          {/* Specialties */}
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                            Specialties:
                          </Typography>
                          <Box>
                            {country.specialties.map((specialty, specIndex) => (
                              <Chip
                                key={specIndex}
                                label={specialty}
                                size="small"
                                sx={{
                                  mr: 1,
                                  mb: 1,
                                  background: BRAND_COLORS.accent,
                                  color: BRAND_COLORS.white,
                                }}
                              />
                            ))}
                          </Box>

                          {/* Additional Info */}
                          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                            <Box>
                              <Typography variant="caption" color="text.secondary">
                                Timezone
                              </Typography>
                              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                {country.timezone}
                              </Typography>
                            </Box>
                            <Box>
                              <Typography variant="caption" color="text.secondary">
                                Since
                              </Typography>
                              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                {country.established}
                              </Typography>
                            </Box>
                          </Stack>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* Contact CTA Section */}
        <Box
          sx={{
            background: `linear-gradient(135deg, ${BRAND_COLORS.darkGray} 0%, ${BRAND_COLORS.slate} 100%)`,
            color: BRAND_COLORS.white,
            py: { xs: 6, md: 10 },
          }}
        >
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    fontSize: { xs: "2rem", md: "3rem" },
                  }}
                >
                  Ready to Go Global?
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 4,
                    opacity: 0.9,
                    maxWidth: "600px",
                    margin: "0 auto",
                    lineHeight: 1.6,
                  }}
                >
                  Connect with our global team to discuss how we can help 
                  your business scale across borders with our expertise.
                </Typography>

                <Stack
                  direction={{ xs: "column", md: "row" }}
                  spacing={3}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<Phone />}
                    sx={{
                      background: BRAND_COLORS.primary,
                      px: 4,
                      py: 1.5,
                      borderRadius: 3,
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      "&:hover": {
                        background: BRAND_COLORS.accent,
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    Call Us Now
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<Email />}
                    sx={{
                      borderColor: BRAND_COLORS.white,
                      color: BRAND_COLORS.white,
                      px: 4,
                      py: 1.5,
                      borderRadius: 3,
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      "&:hover": {
                        background: BRAND_COLORS.white,
                        color: BRAND_COLORS.darkGray,
                        borderColor: BRAND_COLORS.white,
                      },
                    }}
                  >
                    Send Email
                  </Button>
                </Stack>
              </Box>
            </motion.div>
          </Container>
        </Box>

        {/* Animation Styles */}
        <style jsx global>{`
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.2);
              opacity: 0.7;
            }
          }
        `}</style>
      </div>
    </Fragment>
  );
};

export default GlobalPresence;
