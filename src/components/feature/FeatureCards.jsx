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
    title: "Transform healthcare delivery with cutting-edge digital solutions.",
    description:
      "Empower healthcare organizations with secure, compliant technology solutions that enhance patient care and operational efficiency.",
    category: "HEALTHCARE & LIFE SCIENCES",
    image: "/images/Healthcare-and-Lifesciences.webp",
    features: [
      "Electronic Health Records",
      "Telemedicine Platforms",
      "Medical Device Integration",
      "Clinical Decision Support",
      "Patient Engagement",
      "Healthcare Analytics",
    ],
    buttonLabel: "Explore Healthcare",
    url: "/industries/helthcare-and-life-sciences",
  },
  {
    title: "Optimize manufacturing processes with intelligent automation.",
    description:
      "Drive innovation in manufacturing with smart automation, digital twins, and Industry 4.0 solutions.",
    category: "MANUFACTURING & AUTOMOTIVE",
    image: "/images/Manufacutring-and-Automotive.webp",
    features: [
      "Smart Manufacturing",
      "Digital Twin Technology",
      "Quality Control Systems",
      "Supply Chain Optimization",
      "Predictive Maintenance",
      "Industry 4.0 Solutions",
    ],
    buttonLabel: "Optimize Production",
    url: "/industries/menufacturing-and-automotive",
  },
  {
    title:
      "Secure financial operations with advanced digital banking solutions.",
    description:
      "Transform banking and financial services with secure, scalable technology platforms and digital innovation.",
    category: "BANKING & FINANCIAL SERVICES",
    image: "/images/Banking-and-Finance.webp",
    features: [
      "Digital Banking Platforms",
      "Payment Processing Systems",
      "Risk Management",
      "Compliance & Security",
      "Blockchain Solutions",
      "Financial Analytics",
    ],
    buttonLabel: "Secure Finance",
    url: "/industries/banking-and-financial-services",
  },
  {
    title: "Advance aerospace technology with precision engineering solutions.",
    description:
      "Deliver cutting-edge aerospace and defense solutions with advanced engineering and secure systems.",
    category: "AEROSPACE & DEFENSE",
    image: "/images/Defence-and-aEROSPACE.webp",
    features: [
      "Aircraft Systems",
      "Defense Technology",
      "Satellite Communications",
      "Avionics Integration",
      "Cybersecurity",
      "Precision Engineering",
    ],
    buttonLabel: "Advance Aerospace",
    url: "/industries/aerospace-and-defense",
  },
  {
    title: "Accelerate retail transformation with digital commerce solutions.",
    description:
      "Revolutionize retail operations with omnichannel platforms, AI-powered insights, and seamless customer experiences.",
    category: "RETAIL & E-COMMERCE",
    image: "/images/Retail-and-Ecommerce.webp",
    features: [
      "E-commerce Platforms",
      "Omnichannel Solutions",
      "Inventory Management",
      "Customer Analytics",
      "Payment Systems",
      "Supply Chain",
    ],
    buttonLabel: "Transform Retail",
    url: "/service/retail-and-ecommerce",
  },
  {
    title: "Power energy systems with smart grid and renewable solutions.",
    description:
      "Drive energy innovation with smart grid technology, renewable energy systems, and sustainable solutions.",
    category: "ENERGY & UTILITIES",
    image: "/images/Industry.webp",
    features: [
      "Smart Grid Technology",
      "Renewable Energy",
      "Energy Management",
      "Grid Security",
      "Predictive Analytics",
      "Sustainability Solutions",
    ],
    buttonLabel: "Power Energy",
    url: "/service/energy-and-utilities",
  },
  {
    title: "Enhance education delivery with digital learning platforms.",
    description:
      "Transform education with innovative digital learning solutions, virtual classrooms, and personalized learning experiences.",
    category: "EDUCATION & TRAINING",
    image: "/images/EducationElearning.webp",
    features: [
      "Learning Management Systems",
      "Virtual Classrooms",
      "Student Analytics",
      "Content Management",
      "Assessment Tools",
      "Collaboration Platforms",
    ],
    buttonLabel: "Enhance Education",
    url: "/service/education-and-training",
  },
  {
    title: "Optimize logistics with intelligent supply chain solutions.",
    description:
      "Streamline logistics operations with real-time tracking, predictive analytics, and automated supply chain management.",
    category: "LOGISTICS & TRANSPORTATION",
    image: "/images/Transportation-andLogistics.webp",
    features: [
      "Supply Chain Management",
      "Real-time Tracking",
      "Route Optimization",
      "Fleet Management",
      "Warehouse Automation",
      "Predictive Analytics",
    ],
    buttonLabel: "Optimize Logistics",
    url: "/service/logistics-and-transportation",
  },
];

export default function FeatureCards() {
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
        background: "#ffffff",
        minHeight: "100vh",
        py: 12,
        px: 2,
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
          mb: 10,
          maxWidth: "1200px",
          mx: "auto",
          px: 2,
        }}
      >
        <Typography
          ref={titleRef}
          variant="h1"
          sx={{
            color: "#000000",
            fontWeight: 800,
            fontSize: { xs: "2.5rem", md: "4.5rem" },
            lineHeight: 1.1,
            mb: 4,
            letterSpacing: "-0.03em",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            background: "linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          Industries
        </Typography>
        <Typography
          ref={descRef}
          variant="h6"
          sx={{
            color: "#666666",
            fontWeight: 400,
            fontSize: { xs: "1.1rem", md: "1.5rem" },
            lineHeight: 1.6,
            maxWidth: "900px",
            mx: "auto",
            letterSpacing: "0.01em",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition:
              "opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s",
          }}
        >
          Serving diverse industries with comprehensive technology solutions
          that drive innovation and growth.
        </Typography>
      </Box>

      {/* Cards Grid */}
      <Box ref={cardsRef}>
        <Grid
          container
          spacing={4}
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
                  className="premium-card"
                  sx={{
                    height: 420,
                    background:
                      "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
                    borderRadius: "24px",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    border: "2px solid rgba(255, 255, 255, 0.08)",
                    boxShadow:
                      "0 25px 80px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                    transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: isVisible
                      ? "translate(0, 0) !important"
                      : "translate(0, 60px) !important",
                    opacity: isVisible ? 1 : 0,
                    animationDelay: `${0.3 + index * 0.1}s`,
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%)",
                      opacity: 0,
                      transition: "opacity 0.8s ease",
                      zIndex: 1,
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "radial-gradient(circle at 50% 0%, rgba(120, 119, 198, 0.3) 0%, transparent 70%)",
                      opacity: 0,
                      transition: "opacity 0.8s ease",
                      zIndex: 1,
                    },
                    "&:hover": {
                      transform: "translateY(-16px) scale(1.03) !important",
                      boxShadow:
                        "0 40px 120px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                      "&::before": {
                        opacity: 1,
                      },
                      "&::after": {
                        opacity: 1,
                      },
                      "& .card-image": {
                        transform: "scale(1.15)",
                      },
                      "& .card-overlay": {
                        opacity: 1,
                      },
                      "& .card-content": {
                        opacity: 1,
                        transform: "translateY(0)",
                      },
                      "& .card-title": {
                        opacity: 0,
                        transform: "translateY(-40px)",
                      },
                      "& .card-category": {
                        opacity: 0,
                        transform: "translateY(-40px)",
                      },
                      "& .card-glow": {
                        opacity: 1,
                      },
                    },
                  }}
                >
                  {/* Glow Effect */}
                  <Box
                    className="card-glow"
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: "100%",
                      height: "100%",
                      background:
                        "radial-gradient(circle, rgba(120, 119, 198, 0.2) 0%, transparent 70%)",
                      transform: "translate(-50%, -50%)",
                      opacity: 0,
                      transition: "opacity 0.8s ease",
                      zIndex: 0,
                    }}
                  />

                  {/* Card Image */}
                  <Box
                    className="card-image"
                    sx={{
                      height: "100%",
                      position: "relative",
                      transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
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
                      className="card-overlay"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                          "linear-gradient(135deg, rgba(15, 15, 35, 0.9) 0%, rgba(26, 26, 46, 0.8) 50%, rgba(22, 33, 62, 0.95) 100%)",
                        opacity: 0,
                        transition: "opacity 0.8s ease",
                      }}
                    />
                  </Box>

                  {/* Category Badge */}
                  <Typography
                    className="card-category"
                    sx={{
                      position: "absolute",
                      top: 28,
                      left: 28,
                      color: "#ffffff",
                      fontWeight: 700,
                      fontSize: "0.65rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                      zIndex: 3,
                      fontFamily:
                        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                      textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                      background:
                        "linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%)",
                      padding: "10px 20px",
                      borderRadius: "25px",
                      backdropFilter: "blur(15px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    {industry.category}
                  </Typography>

                  {/* Title */}
                  <Typography
                    className="card-title"
                    sx={{
                      position: "absolute",
                      bottom: 28,
                      left: 28,
                      right: 28,
                      color: "#ffffff",
                      fontWeight: 700,
                      lineHeight: 1.3,
                      fontSize: "1.1rem",
                      transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                      zIndex: 3,
                      fontFamily:
                        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                      letterSpacing: "-0.01em",
                      textShadow: "0 2px 12px rgba(0,0,0,0.9)",
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
                      padding: "36px",
                      background:
                        "linear-gradient(135deg, rgba(15, 15, 35, 0.98) 0%, rgba(26, 26, 46, 0.95) 50%, rgba(22, 33, 62, 0.98) 100%)",
                      backdropFilter: "blur(25px)",
                      opacity: 0,
                      transform: "translateY(40px)",
                      transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                      color: "#ffffff",
                      zIndex: 4,
                    }}
                  >
                    <Box
                      sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <Box>
                        <Typography
                          variant="body1"
                          className="content-description"
                          sx={{
                            color: "#ffffff",
                            mb: 4,
                            lineHeight: 1.7,
                            fontSize: "1.05rem",
                            fontWeight: 400,
                            letterSpacing: "0.01em",
                            fontFamily:
                              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                            opacity: 0,
                            transform: "translateY(25px)",
                            transition: "all 0.6s ease-out 0.1s",
                            ".card-content:hover &": {
                              opacity: 1,
                              transform: "translateY(0)",
                            },
                          }}
                        >
                          {industry.description}
                        </Typography>

                        <Box sx={{ mb: 4 }}>
                          {industry.features.slice(0, 3).map((feature, idx) => (
                            <Typography
                              key={idx}
                              variant="body2"
                              className={`content-feature-${idx}`}
                              sx={{
                                color: "#e8e8e8",
                                fontSize: "0.9rem",
                                mb: 1.5,
                                display: "flex",
                                alignItems: "center",
                                fontWeight: 400,
                                letterSpacing: "0.01em",
                                fontFamily:
                                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                                opacity: 0,
                                transform: "translateY(20px)",
                                transition: `all 0.6s ease-out ${
                                  0.2 + idx * 0.1
                                }s`,
                                ".card-content:hover &": {
                                  opacity: 1,
                                  transform: "translateY(0)",
                                },
                                "&::before": {
                                  content: '"✦"',
                                  color: "#7877c6",
                                  mr: 2.5,
                                  fontSize: "0.9rem",
                                  fontWeight: "bold",
                                  lineHeight: 1,
                                },
                              }}
                            >
                              {feature}
                            </Typography>
                          ))}
                        </Box>

                        {/* Key Benefits Section */}
                        <Box sx={{ mb: 4 }}>
                          <Typography
                            variant="body2"
                            className="content-benefits"
                            sx={{
                              color: "#7877c6",
                              fontSize: "0.75rem",
                              fontWeight: 700,
                              mb: 1.5,
                              textTransform: "uppercase",
                              letterSpacing: "0.15em",
                              opacity: 0,
                              transform: "translateY(20px)",
                              transition: "all 0.6s ease-out 0.7s",
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
                              color: "#b8b8b8",
                              fontSize: "0.85rem",
                              lineHeight: 1.6,
                              opacity: 0,
                              transform: "translateY(20px)",
                              transition: "all 0.6s ease-out 0.8s",
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
                      size="medium"
                      className="content-button"
                      sx={{
                        alignSelf: "flex-start",
                        px: 4,
                        py: 2,
                        borderRadius: "16px",
                        borderColor: "#7877c6",
                        color: "#7877c6",
                        fontWeight: 600,
                        textTransform: "none",
                        fontSize: "0.95rem",
                        letterSpacing: "0.02em",
                        fontFamily:
                          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                        opacity: 0,
                        transform: "translateY(25px)",
                        transition: "all 0.6s ease-out 0.9s",
                        ".card-content:hover &": {
                          opacity: 1,
                          transform: "translateY(0)",
                        },
                        "&:hover": {
                          backgroundColor: "rgba(120, 119, 198, 0.1)",
                          borderColor: "#7877c6",
                          transform: "scale(1.05)",
                          boxShadow: "0 10px 30px rgba(120, 119, 198, 0.3)",
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
    </Box>
  );
}
