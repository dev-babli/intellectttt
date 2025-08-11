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
import { Shield, Lock, Eye, AlertTriangle, Users, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CyberSecurity = () => {
  // Scroll to top when component mounts
  useScrollToTop();
  const navigate = useNavigate();
  const services = [
    {
      icon: <Shield size={48} />,
      title: "Threat Detection & Response",
      description:
        "Advanced security monitoring and rapid incident response to protect your digital assets.",
      color: "#dc2626",
    },
    {
      icon: <Lock size={48} />,
      title: "Identity & Access Management",
      description:
        "Comprehensive IAM solutions to secure user access and prevent unauthorized entry.",
      color: "#059669",
    },
    {
      icon: <Eye size={48} />,
      title: "Security Monitoring",
      description:
        "24/7 security monitoring with real-time alerts and proactive threat prevention.",
      color: "#7c3aed",
    },
    {
      icon: <AlertTriangle size={48} />,
      title: "Vulnerability Assessment",
      description:
        "Regular security audits and penetration testing to identify and fix vulnerabilities.",
      color: "#ea580c",
    },
    {
      icon: <Users size={48} />,
      title: "Security Training",
      description:
        "Employee security awareness training to build a security-first culture.",
      color: "#0891b2",
    },
    {
      icon: <Zap size={48} />,
      title: "Incident Response",
      description:
        "Rapid response protocols and recovery strategies for security incidents.",
      color: "#be185d",
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
                Cybersecurity Excellence
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
                Protect your digital assets with cutting-edge security solutions
                and proactive threat detection. Our comprehensive cybersecurity
                services ensure your business stays secure in an evolving threat
                landscape.
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
                Secure Your Business
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
                <Shield size={200} color="#dc2626" />
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
          Our Cybersecurity Services
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
              Ready to Secure Your Business?
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
              Don't wait until it's too late. Contact our cybersecurity experts
              today to assess your security posture and implement robust
              protection measures.
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
              Get Security Assessment
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default CyberSecurity;
