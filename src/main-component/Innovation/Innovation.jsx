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
import { Lightbulb, Rocket, Brain, Cpu, Globe, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Innovation = () => {
  // Scroll to top when component mounts
  useScrollToTop();
  const navigate = useNavigate();
  const innovations = [
    {
      icon: <Lightbulb size={48} />,
      title: "AI & Machine Learning",
      description:
        "Cutting-edge AI solutions that learn, adapt, and evolve to solve complex business challenges.",
      color: "#059669",
    },
    {
      icon: <Rocket size={48} />,
      title: "Emerging Technologies",
      description:
        "Blockchain, IoT, and quantum computing solutions for next-generation applications.",
      color: "#7c3aed",
    },
    {
      icon: <Brain size={48} />,
      title: "Cognitive Computing",
      description:
        "Advanced cognitive systems that mimic human thought processes and decision-making.",
      color: "#0891b2",
    },
    {
      icon: <Cpu size={48} />,
      title: "Edge Computing",
      description:
        "Distributed computing architecture bringing processing closer to data sources.",
      color: "#ea580c",
    },
    {
      icon: <Globe size={48} />,
      title: "Digital Twins",
      description:
        "Virtual replicas of physical systems for simulation, monitoring, and optimization.",
      color: "#be185d",
    },
    {
      icon: <Zap size={48} />,
      title: "Rapid Prototyping",
      description:
        "Fast iteration and development of innovative solutions using modern methodologies.",
      color: "#dc2626",
    },
  ];

  const technologies = [
    "Artificial Intelligence & ML",
    "Internet of Things (IoT)",
    "Blockchain & DLT",
    "Quantum Computing",
    "Edge Computing",
    "Digital Twins",
    "Augmented Reality (AR)",
    "Virtual Reality (VR)",
    "5G & Advanced Networks",
    "Robotic Process Automation",
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
                Innovation at Scale
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
                Leverage emerging technologies to create sustainable competitive
                advantages for your organization. We help you stay ahead of the
                curve with cutting-edge innovation solutions.
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
                Innovate Today
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
                <Lightbulb size={200} color="#dc2626" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Innovation Areas Section */}
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
          Our Innovation Areas
        </Typography>

        <Grid container spacing={4}>
          {innovations.map((innovation, index) => (
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
                  <Box sx={{ color: innovation.color, mb: 2 }}>
                    {innovation.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: "#1e293b",
                    }}
                  >
                    {innovation.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#64748b",
                      lineHeight: 1.6,
                    }}
                  >
                    {innovation.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Technologies Section */}
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
            Emerging Technologies We Work With
          </Typography>

          <Grid container spacing={2}>
            {technologies.map((tech, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    p: 3,
                    border: "2px solid #e2e8f0",
                    borderRadius: "12px",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "#dc2626",
                      backgroundColor: "#fef2f2",
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: "#1e293b",
                    }}
                  >
                    {tech}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Innovation Process Section */}
      <Box sx={{ py: 8, backgroundColor: "#f1f5f9" }}>
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
            Our Innovation Process
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                step: "01",
                title: "Ideation & Research",
                description:
                  "Explore emerging trends and identify innovative opportunities",
              },
              {
                step: "02",
                title: "Proof of Concept",
                description:
                  "Develop and test innovative solutions with rapid prototyping",
              },
              {
                step: "03",
                title: "Pilot & Validation",
                description:
                  "Validate solutions in controlled environments with real data",
              },
              {
                step: "04",
                title: "Scale & Deploy",
                description:
                  "Deploy innovative solutions at scale across the organization",
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
              Ready to Innovate?
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
              Transform your business with cutting-edge innovation. Our experts
              will help you identify and implement the right technologies for
              your unique challenges.
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
              Start Innovating
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Innovation;
