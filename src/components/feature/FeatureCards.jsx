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
    title: "Healthcare & Life Sciences",
    description:
      "Digital health solutions, medical device technology, and life sciences innovation for improved patient care and research outcomes.",
    category: "HEALTHCARE & LIFE SCIENCES",
    image: "/herosectionimages/3.webp",
    features: [
      "Digital Health Platforms",
      "Medical Device Technology",
      "Clinical Trial Management",
      "Healthcare Compliance",
      "Telemedicine Solutions",
      "Life Sciences R&D",
    ],
    buttonLabel: "Explore Healthcare",
    url: "/industries/helthcare-and-life-sciences",
  },
  {
    title: "Manufacturing & Automotive",
    description:
      "Smart manufacturing solutions, automotive innovation, and Industry 4.0 technologies to optimize production and drive efficiency.",
    category: "MANUFACTURING & AUTOMOTIVE",
    image: "/herosectionimages/4.webp",
    features: [
      "Smart Factory Solutions",
      "Predictive Maintenance",
      "Digital Twin Technology",
      "Automotive Software",
      "Supply Chain Optimization",
      "Quality Control Automation",
    ],
    buttonLabel: "Discover Manufacturing",
    url: "/industries/menufacturing-and-automotive",
  },
  {
    title: "Aerospace & Defense",
    description:
      "Mission-critical aerospace software, defense technology solutions, and precision engineering for advanced aerospace systems.",
    category: "AEROSPACE & DEFENSE",
    image: "/herosectionimages/Digital Technology.webp",
    features: [
      "Mission-Critical Software",
      "Embedded Systems",
      "Aerospace Simulation",
      "Defense Networks",
      "Supply Chain Intelligence",
      "Compliance Automation",
    ],
    buttonLabel: "Explore Aerospace",
    url: "/industries/aerospace-and-defense",
  },
  {
    title: "Banking & Financial Services",
    description:
      "Digital banking platforms, fintech solutions, and secure financial technology to transform banking operations and customer experiences.",
    category: "BANKING & FINANCIAL SERVICES",
    image: "/herosectionimages/Data & Analytics.webp",
    features: [
      "Core Banking Modernization",
      "Digital Wallet Integration",
      "AI-Powered Fraud Detection",
      "Robo-Advisory Platforms",
      "RegTech Solutions",
      "Blockchain Applications",
    ],
    buttonLabel: "Discover Banking",
    url: "/industries/banking-and-financial-services",
  },
  {
    title: "Retail & E-Commerce",
    description:
      "Omnichannel retail platforms, e-commerce solutions, and AI-powered personalization to revolutionize customer shopping experiences.",
    category: "RETAIL & E-COMMERCE",
    image: "/herosectionimages/Agentic Ai.webp",
    features: [
      "E-commerce Platforms",
      "Omnichannel Solutions",
      "AI Personalization",
      "Supply Chain Management",
      "Mobile Commerce",
      "Analytics & BI",
    ],
    buttonLabel: "Explore Retail",
    url: "/industries/retail-and-ecommerce",
  },
  {
    title: "Energy & Utilities",
    description:
      "Smart grid solutions, renewable energy management, and utility technology to power sustainable energy systems and infrastructure.",
    category: "ENERGY & UTILITIES",
    image: "/herosectionimages/Scalable Cloud and Application.webp",
    features: [
      "Smart Grid Solutions",
      "Renewable Energy Management",
      "Energy Analytics",
      "Customer Energy Management",
      "Grid Security",
      "Asset Management",
    ],
    buttonLabel: "Discover Energy",
    url: "/industries/energy-and-utilities",
  },
  {
    title: "Education & Training",
    description:
      "Digital learning platforms, virtual classrooms, and adaptive learning solutions to transform education and corporate training.",
    category: "EDUCATION & TRAINING",
    image: "/herosectionimages/Digital Journey.webp",
    features: [
      "Learning Management Systems",
      "Virtual Classrooms",
      "Adaptive Learning",
      "Assessment Platforms",
      "Mobile Learning",
      "Corporate Training",
    ],
    buttonLabel: "Explore Education",
    url: "/industries/education-and-training",
  },
  {
    title: "Logistics & Transportation",
    description:
      "Intelligent supply chain solutions, fleet management systems, and transportation technology to optimize logistics operations.",
    category: "LOGISTICS & TRANSPORTATION",
    image: "/herosectionimages/Digital Partner.webp",
    features: [
      "Fleet Management",
      "Supply Chain Visibility",
      "Warehouse Management",
      "Last-Mile Delivery",
      "Transportation Management",
      "IoT & Smart Logistics",
    ],
    buttonLabel: "Discover Logistics",
    url: "/industries/logistics-and-transportation",
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
          Industries We Work With
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
          Delivering innovative technology solutions tailored to industry-specific challenges and opportunities.
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
                            {industry.category === "HEALTHCARE & LIFE SCIENCES" &&
                              "Enhance patient care with secure, compliant digital health solutions."}
                            {industry.category === "MANUFACTURING & AUTOMOTIVE" &&
                              "Optimize production efficiency with smart manufacturing and Industry 4.0."}
                            {industry.category === "AEROSPACE & DEFENSE" &&
                              "Advance aerospace technology with mission-critical software solutions."}
                            {industry.category === "BANKING & FINANCIAL SERVICES" &&
                              "Transform banking with secure, innovative fintech solutions."}
                            {industry.category === "RETAIL & E-COMMERCE" &&
                              "Revolutionize customer experiences with omnichannel retail platforms."}
                            {industry.category === "ENERGY & UTILITIES" &&
                              "Power sustainable energy systems with smart grid technology."}
                            {industry.category === "EDUCATION & TRAINING" &&
                              "Transform learning with innovative digital education platforms."}
                            {industry.category === "LOGISTICS & TRANSPORTATION" &&
                              "Streamline operations with intelligent supply chain solutions."}
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
