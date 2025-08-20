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

const AtomicServiceOfferings = ({
  title = "Our Services",
  subtitle = "Comprehensive solutions designed to transform your business",
  services = [],
  variant = "default",
  theme = "light",
  showPricing = false
}) => {
  // Array of available images to ensure uniqueness
  const imagePool = [
    '/agentic-AI.webp',
    '/GenAI-LLM-Integration.webp',
    '/Data-Engineering.webp',
    '/Data-&-Analytics.webp',
    '/Smart-Factory.webp',
    '/Data-Analytics-Header.webp',
    '/cloud-computing.webp',
    '/dev.webp',
    '/azure.webp',
    '/modernisation.webp',
    '/Data-Governance-and-Securuty.webp',
    '/Business-Intelligence.webp',
    '/SAP.webp',
    '/sapmanagsprt.webp',
    '/Manufacturing-and-Automotive.webp',
    '/Industry-4.0.webp',
    '/PLM-CAD-CAE-Automation.webp',
    '/MES-Integration-IOT.webp',
    '/Healthcare-and-Life-sciences.webp',
    '/Clinical-Data-Platforms.webp',
    '/Compleance-and-Regulatory-IT.webp',
    '/HL7-FHIR-Integration.webp',
    '/IT-Staff-Augmentation.webp',
    '/Direct-Hire-and-Contact-Hiring.webp',
    '/Corp-to-Corp-W2.webp',
    '/Managed-IT-header.webp',
    '/Managed-Resources.webp',
    '/Banking-and-Finance.webp',
    '/Aerospace-and-Defense.webp',
    '/digital-transformation.webp'
  ];

  // Function to get responsive grid size based on screen size and service count
  const getResponsiveGridSize = (serviceCount) => {
    // Calculate optimal grid layout for complete rows
    let columns = 3; // Default to 3 columns
    
    if (serviceCount <= 3) {
      columns = 3; // 3x1 layout
    } else if (serviceCount <= 4) {
      columns = 4; // 4x1 layout
    } else if (serviceCount <= 6) {
      columns = 3; // 3x2 layout
    } else if (serviceCount <= 8) {
      columns = 4; // 4x2 layout
    } else if (serviceCount <= 10) {
      columns = 5; // 5x2 layout
    } else if (serviceCount <= 12) {
      columns = 4; // 4x3 layout
    } else {
      columns = 5; // 5x3+ layout
    }
    
    const gridSize = 12 / columns;
    
    return {
      xs: 12, // 1 item per row on mobile
      sm: 6,  // 2 items per row on small tablets
      md: 6,  // 2 items per row on tablets
      lg: gridSize,  // Dynamic columns on desktop
      xl: gridSize   // Dynamic columns on large desktop
    };
  };

  // Function to get default images based on service title
  const getDefaultImage = (serviceTitle) => {
    const title = serviceTitle.toLowerCase();
    
    // AI & GenAI related images
    if (title.includes('agentic') || title.includes('ai agent')) {
      return '/agentic-AI.webp';
    }
    if (title.includes('llm') || title.includes('gen ai') || title.includes('generative')) {
      return '/Gen-AI.webp';
    }
    if (title.includes('nlp') || title.includes('computer vision') || title.includes('vision')) {
      return '/GenAI-LLM-Integration.webp';
    }
    if (title.includes('ml') || title.includes('mlops') || title.includes('engineering')) {
      return '/Data-&-Analytics.webp';
    }
    if (title.includes('automation') || title.includes('rpa')) {
      return '/Smart-Factory.webp';
    }
    if (title.includes('responsible') || title.includes('advisory')) {
      return '/Data-Analytics-Header.webp';
    }
    
    // Default AI image
    return '/agentic-AI.webp';
  };

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
        py: { xs: 4, sm: 6, md: 8 },
        px: { xs: 3, sm: 4, md: 5, lg: 6 },
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
          mb: { xs: 4, sm: 6, md: 8 },
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 0, sm: 0, md: 0 },
          position: "relative",
        }}
      >
        <Typography
          ref={titleRef}
          variant="h2"
          sx={{
            color: "#1a1a1a",
            fontWeight: 600,
            fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem", lg: "2rem", xl: "2.25rem" },
            lineHeight: 1.2,
            mb: { xs: 2, sm: 3 },
            letterSpacing: "-0.01em",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', sans-serif",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition:
              "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            position: "relative",
            px: { xs: 0, sm: 0 },
            whiteSpace: "normal",
            wordWrap: "break-word",
            overflowWrap: "break-word",
          }}
        >
          {title}
        </Typography>

        <Typography
          ref={descRef}
          variant="body1"
          sx={{
            color: "#4a5568",
            fontWeight: 400,
            fontSize: { xs: "0.875rem", sm: "0.9rem", md: "0.95rem", lg: "1rem" },
            lineHeight: 1.4,
            maxWidth: { xs: "100%", sm: "400px", md: "450px", lg: "500px" },
            mx: "auto",
            letterSpacing: "0.01em",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', sans-serif",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition:
              "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s",
            position: "relative",
            whiteSpace: "normal",
            wordWrap: "break-word",
            overflowWrap: "break-word",
            px: { xs: 0, sm: 0 },
          }}
        >
          {subtitle}
        </Typography>
      </Box>

      {/* Cards Grid */}
      <Box ref={cardsRef}>
        <Grid
          container
          spacing={{ xs: 1.5, sm: 2, md: 3 }}
          sx={{
            maxWidth: "1400px",
            mx: "auto",
            px: { xs: 2, sm: 3, md: 4 },
            justifyContent: "center",
            alignItems: "stretch",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {services.map((service, index) => (
            <Grid 
              item 
              {...getResponsiveGridSize(services.length)}
              key={index} 
              sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                width: '100%',
                mb: { xs: 1.5, sm: 0 }
              }}
            >
              <Link
                to={service.link || "#"}
                style={{ textDecoration: "none", display: 'flex', width: '100%' }}
                onClick={() => handleCardClick(service.link)}
              >
                <Card
                  className="dimensional-card"
                  sx={{
                    height: { 
                      xs: 280, 
                      sm: 300, 
                      md: 320, 
                      lg: 340, 
                      xl: 360 
                    },
                    width: '100%',
                    maxWidth: { 
                      xs: '100%', 
                      sm: 280, 
                      md: 300, 
                      lg: 320, 
                      xl: 340 
                    },
                    minWidth: { xs: '100%', sm: 250 },
                    mx: 'auto',
                    background: "#0f0f0f",
                    borderRadius: "8px",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    border: "1px solid rgba(59, 130, 246, 0.2)",
                    boxShadow: "0 15px 30px -12px rgba(0, 0, 0, 0.5)",
                    transition:
                      "border-color 0.3s ease, box-shadow 0.3s ease, opacity 0.6s ease-out, transform 0.6s ease-out",
                    transform: isVisible
                      ? "translate(0, 0) !important"
                      : "translate(0, 50px) !important",
                    opacity: isVisible ? 1 : 0,
                    animationDelay: `${0.4 + index * 0.1}s`,
                    "&:hover": {
                      borderColor: "rgba(0, 255, 255, 0.6)",
                      boxShadow: "0 20px 40px -12px rgba(0, 255, 255, 0.3)",
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
                      src={service.image || imagePool[index % imagePool.length]}
                      alt={service.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      onError={(e) => {
                        e.target.src = "/Placeholder.webp";
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

                  {/* Badge */}
                  {service.badge && (
                    <Typography
                      className="card-category"
                      sx={{
                        position: "absolute",
                        top: { xs: 8, sm: 10, md: 12 },
                        left: { xs: 8, sm: 10, md: 12 },
                        color: "#ffffff",
                        fontWeight: 700,
                        fontSize: { xs: "0.5rem", sm: "0.625rem" },
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        transition:
                          "opacity 0.3s ease-in-out, transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        zIndex: 2,
                        fontFamily:
                          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                        textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                        backgroundColor: "#dc2626",
                        padding: { xs: "2px 6px", sm: "3px 8px" },
                        borderRadius: "8px",
                      }}
                    >
                      {service.badge}
                    </Typography>
                  )}

                  {/* Title */}
                  <Typography
                    className="card-title"
                    sx={{
                      position: "absolute",
                      bottom: { xs: 8, sm: 10, md: 12 },
                      left: { xs: 8, sm: 10, md: 12 },
                      right: { xs: 8, sm: 10, md: 12 },
                      color: "#ffffff",
                      fontWeight: 600,
                      lineHeight: 1.2,
                      fontSize: { 
                        xs: "0.85rem", 
                        sm: "0.9rem", 
                        md: "0.95rem", 
                        lg: "1rem", 
                        xl: "1.1rem" 
                      },
                      transition:
                        "opacity 0.3s ease-in-out, transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      zIndex: 2,
                      fontFamily:
                        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                      letterSpacing: "-0.01em",
                      textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                      wordWrap: "break-word",
                      overflowWrap: "break-word",
                      hyphens: "auto",
                      whiteSpace: "normal",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {service.title}
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
                      padding: { xs: 2.5, sm: 3, md: 3.5 },
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
                            mb: { xs: 1, sm: 1.5 },
                            lineHeight: 1.4,
                            fontSize: { xs: "0.7rem", sm: "0.75rem", md: "0.8rem", lg: "0.85rem" },
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
                            wordWrap: "break-word",
                            overflowWrap: "break-word",
                            hyphens: "auto",
                            whiteSpace: "normal",
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {service.description}
                        </Typography>

                        <Box sx={{ mb: { xs: 1, sm: 1.5 } }}>
                          {service.features && service.features.slice(0, 2).map((feature, idx) => (
                            <Typography
                              key={idx}
                              variant="body2"
                              className={`content-feature-${idx}`}
                              sx={{
                                color: "#e2e8f0",
                                fontSize: { xs: "0.65rem", sm: "0.7rem", md: "0.75rem" },
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
                        <Box sx={{ mb: { xs: 1, sm: 1.5 } }}>
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
                            Key Features
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
                            {service.features && service.features.slice(2, 4).join(" • ")}
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
                      {service.ctaText || "Learn More"}
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
};

export default AtomicServiceOfferings;
