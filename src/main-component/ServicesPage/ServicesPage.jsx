import React, { Fragment } from "react";
import { Box, Container, Typography, Grid, Card, CardContent, Button, Chip } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const serviceCategories = [
    {
      title: "AI & Gen AI",
      description: "Transform your business with cutting-edge artificial intelligence and generative AI solutions",
      color: "#1e40af",
      gradient: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
      url: "/service/ai-and-gen-ai",
      features: ["LLM Integration", "Agentic AI", "NLP & Computer Vision", "ML Engineering"],
      count: "15+ Solutions",
      badge: "Hot"
    },
    {
      title: "Cloud & Application Services",
      description: "Modernize your infrastructure with cloud-native solutions and application development",
      color: "#10b981",
      gradient: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
      url: "/service/cloud-and-application-services",
      features: ["Cloud Engineering", "DevOps & DevSecOps", "App Modernization", "API Integration"],
      count: "20+ Services",
      badge: "Popular"
    },
    {
      title: "Data & Analytics",
      description: "Unlock actionable insights with advanced data engineering and analytics solutions",
      color: "#f59e0b",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
      url: "/service/data-and-analytics",
      features: ["Data Engineering", "Business Intelligence", "Data Governance", "Tools Integration"],
      count: "12+ Solutions",
      badge: "Trending"
    },
    {
      title: "Engineering & Manufacturing IT",
      description: "Drive innovation in manufacturing with Industry 4.0 and engineering solutions",
      color: "#be123c",
      gradient: "linear-gradient(135deg, #be123c 0%, #e11d48 100%)",
      url: "/service/engineering-and-manufacturing-it",
      features: ["PLM & CAD Automation", "MES Integration", "Digital Twins", "Industry 4.0"],
      count: "18+ Solutions",
      badge: "Premium"
    },
    {
      title: "Healthcare & Life Sciences IT",
      description: "Revolutionize healthcare with AI-powered solutions and compliance-ready systems",
      color: "#8b5cf6",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",
      url: "/service/healthcare-and-life-sciences-it",
      features: ["AI Imaging", "Clinical Data Platforms", "Compliance & Regulatory", "HL7 FHIR"],
      count: "25+ Solutions",
      badge: "Specialized"
    },
    {
      title: "Talent Solutions",
      description: "Access top-tier IT professionals and specialized talent for your projects",
      color: "#059669",
      gradient: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
      url: "/service/talent-solutions",
      features: ["Staff Augmentation", "Direct Hire", "Healthcare Staffing", "Corp-to-Corp"],
      count: "1000+ Professionals",
      badge: "Trusted"
    },
    {
      title: "Managed IT Services",
      description: "Comprehensive IT management and support for seamless operations",
      color: "#dc2626",
      gradient: "linear-gradient(135deg, #dc2626 0%, #ef4444 100%)",
      url: "/service/managed-it-services",
      features: ["Infrastructure Monitoring", "Application Support", "ITSM Service Desk", "Managed Resources"],
      count: "24/7 Support",
      badge: "Reliable"
    },
    {
      title: "SAP Services",
      description: "Expert SAP implementation, migration, and managed support services",
      color: "#0891b2",
      gradient: "linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)",
      url: "/service/sap-services",
      features: ["SAP Migration", "BTP Development", "Managed Support", "SAP Solutions"],
      count: "50+ Projects",
      badge: "Expert"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "50+", label: "Expert Consultants" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  const whyChooseUs = [
    {
      title: "Proven Expertise",
      description: "15+ years of experience delivering complex IT solutions across industries"
    },
    {
      title: "Global Delivery",
      description: "Round-the-clock development and support from our global team"
    },
    {
      title: "Innovation Focus",
      description: "Cutting-edge technologies and methodologies to stay ahead of the curve"
    },
    {
      title: "Client Success",
      description: "98% client satisfaction rate with long-term partnerships"
    }
  ];

  return (
    <Fragment>
      <div className="body_wrap sco_agency">
        {/* Hero Section */}
        <Box
          sx={{
            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
            color: "white",
            py: { xs: 12, md: 20 },
            position: "relative",
            overflow: "hidden",
          }}
        >
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
                    fontWeight: 900,
                    fontSize: { xs: "3rem", md: "5rem" },
                    mb: 4,
                    lineHeight: 1.1,
                    background: "linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Our Services
                </Typography>
                
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 400,
                    mb: 8,
                    maxWidth: "900px",
                    margin: "0 auto",
                    opacity: 0.9,
                    lineHeight: 1.6,
                    fontSize: { xs: "1.2rem", md: "1.5rem" },
                    letterSpacing: "0.01em",
                  }}
                >
                  Comprehensive IT solutions designed to transform your business and drive innovation 
                  across every industry and technology domain.
                </Typography>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <Grid container spacing={4} sx={{ mt: 8, justifyContent: "center" }}>
                    {stats.map((stat, index) => (
                      <Grid item xs={6} md={3} key={index}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                        >
                          <Box sx={{ textAlign: "center" }}>
                            <Typography
                              variant="h2"
                              sx={{
                                fontWeight: 800,
                                color: "#3b82f6",
                                mb: 1,
                                fontSize: { xs: "2rem", md: "3rem" },
                              }}
                            >
                              {stat.number}
                            </Typography>
                            <Typography
                              variant="body1"
                              sx={{
                                color: "#cbd5e1",
                                fontWeight: 500,
                                fontSize: { xs: "0.9rem", md: "1rem" },
                              }}
                            >
                              {stat.label}
                            </Typography>
                          </Box>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </motion.div>
              </Box>
            </motion.div>
          </Container>
        </Box>

        {/* Why Choose Us */}
        <Box sx={{ py: { xs: 10, md: 16 }, background: "#ffffff" }}>
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box sx={{ textAlign: "center", mb: 10 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    color: "#0f172a",
                    mb: 3,
                    fontSize: { xs: "2.5rem", md: "4rem" },
                    letterSpacing: "-0.02em",
                  }}
                >
                  Why Choose Us
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#64748b",
                    maxWidth: "600px",
                    margin: "0 auto",
                    lineHeight: 1.6,
                    fontSize: "1.1rem",
                  }}
                >
                  We deliver exceptional value through expertise, innovation, and unwavering commitment to your success
                </Typography>
              </Box>

              <Grid container spacing={4}>
                {whyChooseUs.map((item, index) => (
                  <Grid item xs={12} md={6} lg={3} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <Box sx={{ textAlign: "center", p: 3 }}>
                        <Box sx={{ mb: 3 }}>
                          <Typography
                            variant="h1"
                            sx={{
                              fontSize: "3rem",
                              color: "#3b82f6",
                              fontWeight: 700,
                            }}
                          >
                            {item.title.charAt(0)}
                          </Typography>
                        </Box>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 700,
                            color: "#0f172a",
                            mb: 2,
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "#64748b",
                            lineHeight: 1.6,
                          }}
                        >
                          {item.description}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* All Services */}
        <Box sx={{ py: { xs: 10, md: 16 }, background: "#f8fafc" }}>
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box sx={{ textAlign: "center", mb: 10 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    color: "#0f172a",
                    mb: 3,
                    fontSize: { xs: "2.5rem", md: "4rem" },
                    letterSpacing: "-0.02em",
                  }}
                >
                  All Our Services
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#64748b",
                    maxWidth: "600px",
                    margin: "0 auto",
                    lineHeight: 1.6,
                    fontSize: "1.1rem",
                  }}
                >
                  Explore our comprehensive range of IT services and solutions
                </Typography>
              </Box>

              <Grid container spacing={4}>
                {serviceCategories.map((category, index) => (
                  <Grid item xs={12} md={6} lg={4} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <Card
                        sx={{
                          height: "100%",
                          borderRadius: 4,
                          overflow: "hidden",
                          boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
                          transition: "all 0.4s ease",
                          position: "relative",
                          "&:hover": {
                            transform: "translateY(-12px)",
                            boxShadow: "0 30px 80px rgba(0,0,0,0.15)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            height: 160,
                            background: category.gradient,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                            overflow: "hidden",
                          }}
                        >
                          <Box
                            sx={{
                              position: "absolute",
                              top: -30,
                              right: -30,
                              width: 120,
                              height: 120,
                              borderRadius: "50%",
                              background: "rgba(255,255,255,0.1)",
                            }}
                          />
                          <Typography
                            variant="h1"
                            sx={{
                              color: "white",
                              fontSize: "3rem",
                              fontWeight: 700,
                              zIndex: 2,
                            }}
                          >
                            {category.title.charAt(0)}
                          </Typography>
                        </Box>
                        
                        <CardContent sx={{ p: 5 }}>
                          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 3 }}>
                            <Typography
                              variant="h4"
                              sx={{
                                fontWeight: 700,
                                color: "#0f172a",
                                flex: 1,
                              }}
                            >
                              {category.title}
                            </Typography>
                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 1 }}>
                              <Chip
                                label={category.count}
                                size="small"
                                sx={{
                                  background: category.color,
                                  color: "white",
                                  fontWeight: 600,
                                  fontSize: "0.75rem",
                                }}
                              />
                              <Chip
                                label={category.badge}
                                size="small"
                                sx={{
                                  background: "rgba(59, 130, 246, 0.1)",
                                  color: "#3b82f6",
                                  fontWeight: 600,
                                  fontSize: "0.7rem",
                                }}
                              />
                            </Box>
                          </Box>

                          <Typography
                            variant="body1"
                            sx={{
                              color: "#64748b",
                              mb: 4,
                              lineHeight: 1.6,
                              fontSize: "1.1rem",
                            }}
                          >
                            {category.description}
                          </Typography>

                          {/* Features */}
                          <Box sx={{ mb: 4 }}>
                            {category.features.map((feature, featureIndex) => (
                              <Chip
                                key={featureIndex}
                                label={feature}
                                size="small"
                                sx={{
                                  mr: 1,
                                  mb: 1,
                                  background: "#f1f5f9",
                                  color: "#334155",
                                  fontWeight: 500,
                                  fontSize: "0.8rem",
                                }}
                              />
                            ))}
                          </Box>

                          <Button
                            component={Link}
                            to={category.url}
                            variant="contained"
                            size="large"
                            sx={{
                              background: category.gradient,
                              px: 4,
                              py: 1.5,
                              borderRadius: 3,
                              fontWeight: 600,
                              fontSize: "1rem",
                              textTransform: "none",
                              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                              "&:hover": {
                                transform: "translateY(-2px)",
                                boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
                              },
                            }}
                          >
                            Explore {category.title}
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
            color: "white",
            py: { xs: 12, md: 16 },
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box sx={{ textAlign: "center", position: "relative", zIndex: 2 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    mb: 4,
                    fontSize: { xs: "2.5rem", md: "4rem" },
                    letterSpacing: "-0.02em",
                  }}
                >
                  Ready to Transform Your Business?
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 6,
                    opacity: 0.9,
                    maxWidth: "700px",
                    margin: "0 auto",
                    lineHeight: 1.6,
                    fontSize: "1.2rem",
                  }}
                >
                  Let's discuss how our services can help you achieve your goals and drive innovation.
                </Typography>

                <Button
                  component={Link}
                  to="/contact"
                  variant="contained"
                  size="large"
                  sx={{
                    background: "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)",
                    px: 6,
                    py: 2.5,
                    borderRadius: 3,
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    textTransform: "none",
                    boxShadow: "0 8px 30px rgba(59, 130, 246, 0.3)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 12px 40px rgba(59, 130, 246, 0.4)",
                    },
                  }}
                >
                  Get Started Today
                </Button>
              </Box>
            </motion.div>
          </Container>
        </Box>
      </div>
    </Fragment>
  );
};

export default ServicesPage; 