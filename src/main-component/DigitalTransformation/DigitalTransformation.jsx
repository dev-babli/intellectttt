import React from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import Footer from "../../components/footer/Footer";
import OptimizedBlogSection from "../../components/OptimizedBlogSection/OptimizedBlogSection";
import OptimizedCaseStudySection from "../../components/OptimizedCaseStudySection/OptimizedCaseStudySection";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { TrendingUp, Cloud, Users, Zap, Target, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DigitalTransformation = () => {
  // Scroll to top when component mounts
  useScrollToTop();
  const navigate = useNavigate();
  const services = [
    {
      icon: <TrendingUp size={48} />,
      title: "Strategy & Roadmap",
      description:
        "Comprehensive digital transformation strategy aligned with your business objectives and market demands.",
      color: "#059669",
    },
    {
      icon: <Cloud size={48} />,
      title: "Cloud Migration",
      description:
        "Seamless migration to cloud platforms with minimal disruption and maximum efficiency gains.",
      color: "#7c3aed",
    },
    {
      icon: <Users size={48} />,
      title: "Change Management",
      description:
        "Organizational change management to ensure smooth adoption of new digital processes and technologies.",
      color: "#0891b2",
    },
    {
      icon: <Zap size={48} />,
      title: "Process Automation",
      description:
        "Intelligent automation of business processes to improve efficiency and reduce manual errors.",
      color: "#ea580c",
    },
    {
      icon: <Target size={48} />,
      title: "Data Strategy",
      description:
        "Data-driven decision making with advanced analytics and business intelligence solutions.",
      color: "#be185d",
    },
    {
      icon: <Globe size={48} />,
      title: "Digital Innovation",
      description:
        "Cutting-edge digital solutions including AI, IoT, and emerging technologies for competitive advantage.",
      color: "#dc2626",
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f8fafc" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
          color: "white",
          py: 8,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
                  fontWeight: 700,
                  mb: 3,
                  lineHeight: 1.1,
                }}
              >
                Digital Transformation Partner
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  lineHeight: 1.6,
                  maxWidth: "600px",
                }}
              >
                Navigate the future with confidence through our comprehensive
                digital transformation services. We help organizations evolve,
                innovate, and thrive in the digital age.
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate("/contact")}
                sx={{
                  backgroundColor: "#dc2626",
                  color: "white",
                  px: 4,
                  py: 1.5,
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: "#b91c1c",
                  },
                }}
              >
                Transform Now
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "400px",
                }}
              >
                <TrendingUp size={200} color="#dc2626" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            mb: 6,
            fontSize: { xs: "2rem", md: "2.5rem" },
            fontWeight: 700,
            color: "#1e293b",
          }}
        >
          Our Digital Transformation Services
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <CardContent sx={{ p: 4, textAlign: "center" }}>
                  <Box sx={{ color: service.color, mb: 2 }}>{service.icon}</Box>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: "#1e293b",
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#64748b",
                      lineHeight: 1.6,
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Process Section */}
      <Box sx={{ py: 8, backgroundColor: "#ffffff" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              mb: 6,
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
              color: "#1e293b",
            }}
          >
            Our Transformation Process
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                step: "01",
                title: "Assessment & Strategy",
                description:
                  "Comprehensive analysis of current state and development of transformation roadmap",
              },
              {
                step: "02",
                title: "Design & Planning",
                description:
                  "Detailed design of digital solutions and implementation planning",
              },
              {
                step: "03",
                title: "Implementation",
                description:
                  "Phased implementation with continuous monitoring and optimization",
              },
              {
                step: "04",
                title: "Optimization",
                description:
                  "Continuous improvement and scaling of digital capabilities",
              },
            ].map((phase, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box sx={{ textAlign: "center" }}>
                  <Box
                    sx={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      backgroundColor: "#dc2626",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      mx: "auto",
                      mb: 2,
                    }}
                  >
                    {phase.step}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: "#1e293b",
                    }}
                  >
                    {phase.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#64748b",
                      lineHeight: 1.6,
                    }}
                  >
                    {phase.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)",
          color: "white",
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h3"
              sx={{
                mb: 3,
                fontWeight: 700,
              }}
            >
              Ready to Transform Your Business?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                opacity: 0.9,
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              Start your digital transformation journey today. Our experts will
              guide you through every step of the process to ensure successful
              outcomes.
            </Typography>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate("/contact")}
              sx={{
                borderColor: "white",
                color: "white",
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                fontWeight: 600,
                "&:hover": {
                  borderColor: "white",
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              Start Transformation
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default DigitalTransformation;
