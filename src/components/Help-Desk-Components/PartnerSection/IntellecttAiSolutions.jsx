"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const solutions = [
  {
    title:
      "Harness the power of AI and GenAI to unlock new growth opportunities.",
    description:
      "Transform your business with cutting-edge AI solutions that drive innovation and accelerate growth across all industries.",
    category: "AI & GEN AI",
    image: "/Service Cards images/AI Gen AI.webp",
    features: [
      "Machine Learning & Deep Learning",
      "Natural Language Processing",
      "Computer Vision & Image Recognition",
      "Predictive Analytics & Forecasting",
      "AI-Powered Automation",
      "Generative AI Solutions",
    ],
    buttonLabel: "Explore AI Solutions",
    url: "/service/ai-and-gen-ai",
  },
  {
    title: "Comprehensive engineering services for medical device development and manufacturing.",
    description:
      "We lead in R&D and new product development, specializing in design, prototyping, and testing for medical devices.",
    category: "ENGINEERING SERVICES",
    image: "/Service Cards images/Engineering and Manufacturing.webp",
    features: [
      "R&D & Product Development",
      "Manufacturing Setup",
      "Quality Management",
      "Regulatory Affairs",
      "Process Development",
      "Audit Preparation",
    ],
    buttonLabel: "Engineering Services",
    url: "/service/engineering-services",
  },
  {
    title: "Accelerate growth with scalable, secure cloud platforms.",
    description:
      "Build robust, scalable applications with enterprise-grade cloud infrastructure and modern development practices.",
    category: "CLOUD & APPLICATION SERVICES",
    image: "/Service Cards images/Cloud and Application Service.webp",
    features: [
      "Cloud Migration & Strategy",
      "Microservices Architecture",
      "DevOps & CI/CD Pipelines",
      "Container Orchestration",
      "Serverless Computing",
      "Multi-Cloud Solutions",
    ],
    buttonLabel: "Discover Cloud Services",
    url: "/service/cloud-and-application-services",
  },
  {
    title: "Protect your digital assets with intelligent security frameworks.",
    description:
      "Safeguard your organization with advanced cybersecurity solutions and proactive threat detection systems.",
    category: "DIGITAL SECURITY",
    image: "/Service Cards images/Digital Security.webp",
    features: [
      "Zero Trust Architecture",
      "Threat Detection & Response",
      "Identity & Access Management",
      "Data Protection & Encryption",
      "Security Compliance",
      "Incident Response",
    ],
    buttonLabel: "Secure Your Business",
    url: "/cybersecurity",
  },
  {
    title: "Connect devices and drive automation with next-gen IoT tech.",
    description:
      "Build intelligent connected systems that collect, analyze, and act on data in real-time.",
    category: "IoT TECH",
    image: "/Service Cards images/IOT Tech.webp",
    features: [
      "IoT Platform Development",
      "Sensor Integration",
      "Real-time Data Analytics",
      "Edge Computing",
      "Smart City Solutions",
      "Industrial IoT",
    ],
    buttonLabel: "Connect Everything",
    url: "/service/engineering-services",
  },
  {
    title: "Turn data into actionable insights for smarter decisions.",
    description:
      "Transform raw data into strategic insights that drive business growth and operational excellence.",
    category: "DATA & ANALYTICS",
    image: "/Service Cards images/Data Analytics.webp",
    features: [
      "Big Data Processing",
      "Business Intelligence",
      "Data Visualization",
      "Predictive Analytics",
      "Real-time Dashboards",
      "Data Governance",
    ],
    buttonLabel: "Analyze Data",
    url: "/service/data-and-analytics",
  },
  {
    title: "Empower care through digital innovation and secure systems.",
    description:
      "Transform healthcare delivery with cutting-edge technology solutions and secure patient data management.",
    category: "HEALTHCARE & LIFE SCIENCES",
    image: "/Service Cards images/Healthcare and Lifesciences.webp",
    features: [
      "Electronic Health Records",
      "Telemedicine Platforms",
      "Medical Device Integration",
      "Clinical Decision Support",
      "Patient Engagement",
      "Healthcare Analytics",
    ],
    buttonLabel: "Transform Healthcare",
    url: "/service/healthcare-and-life-sciences-it",
  },
  {
    title:
      "Bridge your talent gap with flexible, industry-aligned workforce solutions.",
    description:
      "Access specialized talent and build high-performing teams with our comprehensive workforce solutions.",
    category: "TALENT SOLUTIONS",
    image: "/Service Cards images/Talent Solution.webp",
    features: [
      "Staff Augmentation",
      "Project-Based Teams",
      "Specialized Expertise",
      "Remote Workforce",
      "Skill Development",
      "Talent Management",
    ],
    buttonLabel: "Find Talent",
    url: "/service/talent-solutions",
  },
];

export default function IntellecttAiSolutions() {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const cardsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animations
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        background: "#ffffff",
        minHeight: "100vh",
        py: 8,
        px: { xs: 3, sm: 4, md: 6 },
        position: "relative",
        overflow: "hidden",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 1s ease-out",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          textAlign: "center",
          mb: 8,
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 1, sm: 2 },
        }}
      >
        <Typography
          ref={titleRef}
          variant="h2"
          sx={{
            color: "#000000",
            fontWeight: 600,
            fontSize: { xs: "1.75rem", md: "2.75rem" },
            lineHeight: 1.1,
            mb: 3,
            letterSpacing: "-0.02em",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            textShadow: "0 2px 4px rgba(0,0,0,0.1)",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          Capabilities
        </Typography>
      </Box>

      {/* Cards Grid */}
      <Box ref={cardsRef}>
        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 4 }}
          sx={{
            maxWidth: "1400px",
            mx: "auto",
            px: 0,
            justifyContent: "center",
          }}
        >
          {solutions.map((solution, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Link to={solution.url} style={{ textDecoration: "none" }}>
                <Card
                  className="dimensional-card"
                  sx={{
                    height: { xs: 280, sm: 320, md: 360 },
                    background: "#0f0f0f",
                    borderRadius: "8px",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    border: "1px solid rgba(59, 130, 246, 0.2)",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                    transition:
                      "border-color 0.3s ease, box-shadow 0.3s ease, opacity 0.6s ease-out, transform 0.6s ease-out",
                    transform: isVisible
                      ? "translate(0, 0) !important"
                      : "translate(0, 50px) !important",
                    opacity: isVisible ? 1 : 0,
                    animationDelay: `${0.4 + index * 0.1}s`,
                    "&:hover": {
                      borderColor: "rgba(0, 255, 255, 0.6)",
                      boxShadow: "0 35px 70px -12px rgba(0, 255, 255, 0.3)",
                      transform: "translate(0, 0) scale(1.02) !important",
                      "& .dimensional-overlay": {
                        opacity: 1,
                      },
                      "& .card-content": {
                        opacity: 1,
                        transform: "translateY(0)",
                      },
                      "& .card-title": {
                        opacity: 0,
                        transform: "translateY(-20px)",
                      },
                      "& .card-category": {
                        opacity: 0,
                        transform: "translateY(-20px)",
                      },
                    },
                  }}
                >
                  {/* Dimensional Overlay */}
                  <Box
                    className="dimensional-overlay"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      opacity: 0,
                      transition: "opacity 0.5s ease-in-out",
                      background: `
                      radial-gradient(circle at 30% 30%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 70% 70%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)
                    `,
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `
                        conic-gradient(from 0deg at 50% 50%, 
                          transparent 0deg, 
                          rgba(0, 255, 255, 0.1) 90deg, 
                          transparent 180deg, 
                          rgba(147, 51, 234, 0.1) 270deg, 
                          transparent 360deg)
                      `,
                        animation: "rotate 4s linear infinite",
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        top: "50%",
                        left: "0%",
                        width: "100%",
                        height: "2px",
                        background:
                          "linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.6), transparent)",
                        transform: "translateY(-50%)",
                        animation: "sweep 2s ease-in-out infinite",
                      },
                    }}
                  />

                  {/* Card Image */}
                  <Box sx={{ height: "100%", position: "relative" }}>
                    <img
                      src={solution.image}
                      alt={solution.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                          "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.5) 100%)",
                      }}
                    />
                  </Box>

                  {/* Category Badge */}
                  <Typography
                    className="card-category"
                    sx={{
                      position: "absolute",
                      top: { xs: 15, sm: 20 },
                      left: { xs: 15, sm: 20 },
                      color: "#ffffff",
                      fontWeight: 700,
                      fontSize: { xs: "0.65rem", sm: "0.75rem" },
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      transition:
                        "opacity 0.3s ease-in-out, transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      zIndex: 2,
                      fontFamily:
                        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                      textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                    }}
                  >
                    {solution.category}
                  </Typography>

                  {/* Title */}
                  <Typography
                    className="card-title"
                    sx={{
                      position: "absolute",
                      bottom: { xs: 15, sm: 20 },
                      left: { xs: 15, sm: 20 },
                      right: { xs: 15, sm: 20 },
                      color: "#ffffff",
                      fontWeight: 600,
                      lineHeight: 1.2,
                      fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                      transition:
                        "opacity 0.3s ease-in-out, transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      zIndex: 2,
                      fontFamily:
                        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                      letterSpacing: "-0.01em",
                      textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                    }}
                  >
                    {solution.title}
                  </Typography>

                  {/* Hover Content */}
                  <CardContent
                    className="card-content"
                    sx={{
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      padding: { xs: 2, sm: 2.5, md: 3 },
                      background:
                        "linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.5) 100%)",
                      backdropFilter: "blur(15px)",
                      opacity: 0,
                      transform: "translateY(20px)",
                      transition:
                        "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                      color: "#ffffff",
                      zIndex: 3,
                    }}
                  >
                    <Box
                      sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box>
                        <Typography
                          variant="body1"
                          className="content-description"
                          sx={{
                            color: "#ffffff",
                            mb: 2,
                            lineHeight: 1.4,
                            fontSize: { xs: "0.85rem", sm: "0.9rem", md: "0.95rem" },
                            fontWeight: 500,
                            letterSpacing: "0.01em",
                            fontFamily:
                              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                            opacity: 0,
                            transform: "translateY(15px)",
                            transition:
                              "opacity 0.4s ease-out 0.1s, transform 0.4s ease-out 0.1s",
                            ".card-content:hover &": {
                              opacity: 1,
                              transform: "translateY(0)",
                            },
                          }}
                        >
                          {solution.description}
                        </Typography>

                        <Box sx={{ mb: 2 }}>
                          {solution.features.slice(0, 2).map((feature, idx) => (
                            <Typography
                              key={idx}
                              variant="body2"
                              className={`content-feature-${idx}`}
                              sx={{
                                color: "#e2e8f0",
                                fontSize: { xs: "0.7rem", sm: "0.75rem", md: "0.8rem" },
                                mb: 0.4,
                                display: "flex",
                                alignItems: "center",
                                fontWeight: 400,
                                letterSpacing: "0.01em",
                                fontFamily:
                                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                                opacity: 0,
                                transform: "translateY(10px)",
                                transition: `opacity 0.4s ease-out ${
                                  0.2 + idx * 0.1
                                }s, transform 0.4s ease-out ${
                                  0.2 + idx * 0.1
                                }s`,
                                ".card-content:hover &": {
                                  opacity: 1,
                                  transform: "translateY(0)",
                                },
                                "&::before": {
                                  content: '"•"',
                                  color: "#00ffff",
                                  mr: 1.5,
                                  fontSize: "1.2rem",
                                  fontWeight: "bold",
                                  lineHeight: 1,
                                },
                              }}
                            >
                              {feature}
                            </Typography>
                          ))}
                        </Box>

                        {/* Additional Info Section */}
                        <Box sx={{ mb: 2 }}>
                          <Typography
                            variant="body2"
                            className="content-benefits"
                            sx={{
                              color: "#00ffff",
                              fontSize: { xs: "0.65rem", sm: "0.7rem", md: "0.75rem" },
                              fontWeight: 600,
                              mb: 0.5,
                              textTransform: "uppercase",
                              letterSpacing: "0.05em",
                              opacity: 0,
                              transform: "translateY(10px)",
                              transition:
                                "opacity 0.4s ease-out 0.5s, transform 0.4s ease-out 0.5s",
                              ".card-content:hover &": {
                                opacity: 1,
                                transform: "translateY(0)",
                              },
                            }}
                          >
                            Key Benefits
                          </Typography>
                          <Typography
                            variant="body2"
                            className="content-benefit-text"
                            sx={{
                              color: "#b8c5d6",
                              fontSize: { xs: "0.65rem", sm: "0.7rem", md: "0.75rem" },
                              lineHeight: 1.3,
                              opacity: 0,
                              transform: "translateY(10px)",
                              transition:
                                "opacity 0.4s ease-out 0.6s, transform 0.4s ease-out 0.6s",
                              ".card-content:hover &": {
                                opacity: 1,
                                transform: "translateY(0)",
                              },
                            }}
                          >
                            {solution.category === "AI & GEN AI" &&
                              "Transform operations with intelligent automation and predictive insights."}
                            {solution.category ===
                              "CLOUD & APPLICATION SERVICES" &&
                              "Scale seamlessly with enterprise-grade infrastructure and modern architectures."}
                            {solution.category === "DIGITAL SECURITY" &&
                              "Protect assets with advanced threat detection and zero-trust frameworks."}
                            {solution.category === "IoT TECH" &&
                              "Connect and automate with real-time data collection and edge computing."}
                            {solution.category === "DATA & ANALYTICS" &&
                              "Drive decisions with comprehensive analytics and business intelligence."}
                            {solution.category ===
                              "ENGINEERING & MANUFACTURING" &&
                              "Optimize production with smart manufacturing and digital twins."}
                            {solution.category ===
                              "HEALTHCARE & LIFE SCIENCES" &&
                              "Enhance care delivery with secure, compliant digital solutions."}
                            {solution.category === "TALENT SOLUTIONS" &&
                              "Access specialized expertise and build high-performing teams."}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Button
                      variant="outlined"
                      size="small"
                      className="content-button"
                      sx={{
                        alignSelf: "flex-start",
                        px: { xs: 2, sm: 2.5 },
                        py: { xs: 0.75, sm: 1 },
                        borderRadius: "6px",
                        borderColor: "#00ffff",
                        color: "#00ffff",
                        fontWeight: 600,
                        textTransform: "none",
                        fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.85rem" },
                        letterSpacing: "0.02em",
                        fontFamily:
                          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                        opacity: 0,
                        transform: "translateY(10px)",
                        transition:
                          "opacity 0.4s ease-out 0.7s, transform 0.4s ease-out 0.7s, all 0.3s ease-in-out",
                        ".card-content:hover &": {
                          opacity: 1,
                          transform: "translateY(0)",
                        },
                        "&:hover": {
                          backgroundColor: "rgba(0, 255, 255, 0.1)",
                          borderColor: "#00ffff",
                          transform: "scale(1.05)",
                          boxShadow: "0 4px 16px rgba(0, 255, 255, 0.3)",
                        },
                      }}
                    >
                      {solution.buttonLabel}
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>

      <style jsx>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes sweep {
          0% {
            transform: translateX(-100%) translateY(-50%);
          }
          50% {
            transform: translateX(0%) translateY(-50%);
          }
          100% {
            transform: translateX(100%) translateY(-50%);
          }
        }
      `}</style>
    </Box>
  );
}
