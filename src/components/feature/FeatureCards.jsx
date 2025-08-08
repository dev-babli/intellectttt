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

const industries = [
  {
    title: "Transform operations with intelligent AI-powered solutions.",
    description:
      "Harness the power of AI and GenAI to unlock new growth opportunities and drive innovation across all industries.",
    category: "AI & MACHINE LEARNING",
    image: "/herosectionimages/Agentic Ai.webp",
    features: [
      "Machine Learning & Deep Learning",
      "Natural Language Processing",
      "Computer Vision & Recognition",
      "Predictive Analytics",
      "AI-Powered Automation",
      "Generative AI Solutions",
    ],
    buttonLabel: "Explore AI Solutions",
    url: "/service/ai-and-gen-ai",
  },
  {
    title: "Accelerate growth with scalable, secure cloud platforms.",
    description:
      "Build robust, scalable applications with enterprise-grade cloud infrastructure and modern development practices.",
    category: "CLOUD & APPLICATION SERVICES",
    image: "/herosectionimages/Scalable Cloud and Application.webp",
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
    category: "CYBERSECURITY",
    image: "/herosectionimages/Cyber Security.webp",
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
    title: "Turn data into actionable insights for smarter decisions.",
    description:
      "Transform raw data into strategic insights that drive business growth and operational excellence.",
    category: "DATA & ANALYTICS",
    image: "/herosectionimages/Data & Analytics.webp",
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
    title: "Drive intelligent decision-making with data-driven solutions.",
    description:
      "Leverage advanced analytics and machine learning to extract meaningful insights from your business data.",
    category: "INTELLIGENCE SOLUTIONS",
    image: "/herosectionimages/Data Driven intelleigence solution.webp",
    features: [
      "Advanced Analytics",
      "Machine Learning Models",
      "Business Intelligence",
      "Data Mining",
      "Statistical Analysis",
      "Automated Reporting",
    ],
    buttonLabel: "Unlock Intelligence",
    url: "/service/business-intelligence",
  },
  {
    title: "Accelerate your digital transformation journey.",
    description:
      "Navigate the complex digital landscape with strategic guidance and innovative technology solutions.",
    category: "DIGITAL TRANSFORMATION",
    image: "/herosectionimages/Digital Journey.webp",
    features: [
      "Digital Strategy",
      "Process Automation",
      "Legacy Modernization",
      "Customer Experience",
      "Innovation Consulting",
      "Change Management",
    ],
    buttonLabel: "Start Journey",
    url: "/service/digital-transformation",
  },
  {
    title: "Build lasting partnerships for sustainable growth.",
    description:
      "Collaborate with trusted technology partners to drive innovation and achieve your business objectives.",
    category: "STRATEGIC PARTNERSHIPS",
    image: "/herosectionimages/Digital Partner.webp",
    features: [
      "Technology Partnerships",
      "Strategic Alliances",
      "Joint Solutions",
      "Partner Ecosystem",
      "Collaborative Innovation",
      "Shared Success Models",
    ],
    buttonLabel: "Partner With Us",
    url: "/partnerships",
  },
  {
    title: "Innovate with cutting-edge engineering solutions.",
    description:
      "Transform your engineering processes with AI-powered tools, collaborative platforms, and innovative methodologies.",
    category: "ENGINEERING INNOVATION",
    image: "/herosectionimages/engineers-brainstorming-ways-use-ai.jpg",
    features: [
      "AI-Assisted Engineering",
      "Collaborative Platforms",
      "Design Automation",
      "Simulation & Modeling",
      "Innovation Labs",
      "R&D Solutions",
    ],
    buttonLabel: "Innovate Engineering",
    url: "/service/engineering-innovation",
  },
];

function FeatureCards() {
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

  const handleCardClick = (url) => {
    // Scroll to top before navigation
    window.scrollTo(0, 0);
  };

  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)",
        minHeight: "100vh",
        py: 8,
        px: 2,
        position: "relative",
        overflow: "hidden",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 1s ease-out",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.03) 0%, transparent 50%)",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 1.5s ease-out 0.5s",
        },
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          textAlign: "center",
          mb: 10,
          maxWidth: "1200px",
          mx: "auto",
          px: 2,
          position: "relative",
        }}
      >
        {/* Decorative background element */}
        <Box
          sx={{
            position: "absolute",
            top: "-20px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "200px",
            height: "4px",
            background:
              "linear-gradient(90deg, transparent, #667eea, #764ba2, transparent)",
            borderRadius: "2px",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 1s ease-out 0.5s",
          }}
        />

        <Typography
          ref={titleRef}
          variant="h1"
          sx={{
            color: "#1a1a1a",
            fontWeight: 800,
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
            lineHeight: { xs: 1.1, md: 1.05 },
            mb: 4,
            letterSpacing: "-0.025em",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', sans-serif",
            background:
              "linear-gradient(135deg, #1a1a1a 0%, #2d3748 50%, #4a5568 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "none",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition:
              "opacity 1s cubic-bezier(0.4, 0, 0.2, 1), transform 1s cubic-bezier(0.4, 0, 0.2, 1)",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "-8px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "3px",
              background: "linear-gradient(90deg, #667eea, #764ba2)",
              borderRadius: "2px",
              opacity: isVisible ? 1 : 0,
              transition:
                "opacity 1s ease-out 0.3s, transform 0.5s ease-out 0.3s",
            },
          }}
        >
          Our Industries
        </Typography>

        <Typography
          ref={descRef}
          variant="h6"
          sx={{
            color: "#4a5568",
            fontWeight: 400,
            fontSize: { xs: "1.125rem", sm: "1.25rem", md: "1.375rem" },
            lineHeight: 1.6,
            maxWidth: "850px",
            mx: "auto",
            letterSpacing: "0.005em",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', sans-serif",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition:
              "opacity 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s, transform 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s",
            mt: 1,
            position: "relative",
          }}
        >
          Comprehensive technology solutions across diverse industries.
        </Typography>
      </Box>

      {/* Cards Grid */}
      <Box ref={cardsRef}>
        <Grid
          container
          spacing={3}
          sx={{
            maxWidth: "1400px",
            mx: "auto",
            px: 2,
          }}
        >
          {industries.map((industry, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Link
                to={industry.url}
                style={{ textDecoration: "none" }}
                onClick={() => handleCardClick(industry.url)}
              >
                <Card
                  className="dimensional-card"
                  sx={{
                    height: 360,
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
                      src={industry.image}
                      alt={industry.title}
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
                          "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)",
                      }}
                    />
                  </Box>

                  {/* Category Badge */}
                  <Typography
                    className="card-category"
                    sx={{
                      position: "absolute",
                      top: 20,
                      left: 20,
                      color: "#ffffff",
                      fontWeight: 700,
                      fontSize: "0.75rem",
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
                    {industry.category}
                  </Typography>

                  {/* Title */}
                  <Typography
                    className="card-title"
                    sx={{
                      position: "absolute",
                      bottom: 20,
                      left: 20,
                      right: 20,
                      color: "#ffffff",
                      fontWeight: 600,
                      lineHeight: 1.2,
                      fontSize: "1.2rem",
                      transition:
                        "opacity 0.3s ease-in-out, transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      zIndex: 2,
                      fontFamily:
                        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                      letterSpacing: "-0.01em",
                      textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                    }}
                  >
                    {industry.title}
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
                      padding: 3,
                      background:
                        "linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.7) 100%)",
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
                            fontSize: "0.95rem",
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
                          {industry.description}
                        </Typography>

                        <Box sx={{ mb: 2 }}>
                          {industry.features.slice(0, 2).map((feature, idx) => (
                            <Typography
                              key={idx}
                              variant="body2"
                              className={`content-feature-${idx}`}
                              sx={{
                                color: "#e2e8f0",
                                fontSize: "0.8rem",
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
                              fontSize: "0.75rem",
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
                              fontSize: "0.75rem",
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
                            {industry.category ===
                              "HEALTHCARE & LIFE SCIENCES" &&
                              "Enhance care delivery with secure, compliant digital solutions."}
                            {industry.category ===
                              "MANUFACTURING & AUTOMOTIVE" &&
                              "Optimize production with smart manufacturing and digital twins."}
                            {industry.category ===
                              "BANKING & FINANCIAL SERVICES" &&
                              "Secure financial operations with advanced digital banking platforms."}
                            {industry.category === "AEROSPACE & DEFENSE" &&
                              "Advance aerospace technology with precision engineering solutions."}
                            {industry.category === "RETAIL & E-COMMERCE" &&
                              "Revolutionize retail with omnichannel platforms and AI insights."}
                            {industry.category === "ENERGY & UTILITIES" &&
                              "Power energy systems with smart grid and renewable solutions."}
                            {industry.category === "EDUCATION & TRAINING" &&
                              "Transform education with innovative digital learning platforms."}
                            {industry.category ===
                              "LOGISTICS & TRANSPORTATION" &&
                              "Streamline operations with real-time tracking and predictive analytics."}
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
                        px: 2.5,
                        py: 1,
                        borderRadius: "6px",
                        borderColor: "#00ffff",
                        color: "#00ffff",
                        fontWeight: 600,
                        textTransform: "none",
                        fontSize: "0.85rem",
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
                      {industry.buttonLabel}
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

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2);
          }
        }
      `}</style>
    </Box>
  );
}

export default FeatureCards;
