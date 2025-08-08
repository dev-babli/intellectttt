"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@mui/material";

const slideData = [
  {
    id: 1,
    title: "Data & AI",
    subtitle: "Transform your business with intelligent data solutions",
    background: "/images/hero/ai-brain-network.jpg",
    tabLabel: "Data&AI",
    tabColor: "#10b981",
    services: ["Business Intelligence", "Machine Learning", "Data Strategy"],
  },
  {
    id: 2,
    title: "Healthcare",
    subtitle: "Innovative technology for better patient care",
    background: "/images/Healthcare-and-Lifesciences.webp",
    tabLabel: "Healthcare",
    tabColor: "#6366f1",
    services: ["EHR Systems", "Telemedicine", "Medical Devices"],
  },
  {
    id: 3,
    title: "Manufacturing",
    subtitle: "Smart automation and Industry 4.0 solutions",
    background: "/images/Manufacutring-and-Automotive.webp",
    tabLabel: "Manufacturing",
    tabColor: "#f59e0b",
    services: ["Smart Manufacturing", "Digital Twins", "Quality Control"],
  },
  {
    id: 4,
    title: "Fintech",
    subtitle: "Secure, scalable financial technology platforms",
    background: "/images/Banking-and-Finance.webp",
    tabLabel: "Fintech",
    tabColor: "#10b981",
    services: ["Digital Banking", "Payment Systems", "Risk Management"],
  },
  {
    id: 5,
    title: "Aerospace",
    subtitle: "Cutting-edge aerospace and defense solutions",
    background: "/images/Defence-and-aEROSPACE.webp",
    tabLabel: "Aerospace",
    tabColor: "#ef4444",
    services: ["Aircraft Systems", "Defense Tech", "Satellite Comm"],
  },
  {
    id: 6,
    title: "Energy",
    subtitle: "Smart grid and renewable energy innovation",
    background: "/images/Industry.webp",
    tabLabel: "Energy",
    tabColor: "#06b6d4",
    services: ["Smart Grid", "Renewable Energy", "Grid Security"],
  },
];

export default function FeatureCards() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [expandedBox, setExpandedBox] = useState(null);
  const isMobile = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleNextSlide = () => {
    if (expandedBox !== null) {
      setExpandedBox(null);
      setTimeout(() => {
        const nextSlide = (currentSlide + 1) % slideData.length;
        setCurrentSlide(nextSlide);
        setExpandedBox(nextSlide);
      }, 300);
    } else {
      const nextSlide = (currentSlide + 1) % slideData.length;
      setCurrentSlide(nextSlide);
      setExpandedBox(nextSlide);
    }
  };

  const handlePrevSlide = () => {
    if (expandedBox !== null) {
      setExpandedBox(null);
      setTimeout(() => {
        const prevSlide =
          currentSlide === 0 ? slideData.length - 1 : currentSlide - 1;
        setCurrentSlide(prevSlide);
        setExpandedBox(prevSlide);
      }, 300);
    } else {
      const prevSlide =
        currentSlide === 0 ? slideData.length - 1 : currentSlide - 1;
      setCurrentSlide(prevSlide);
      setExpandedBox(prevSlide);
    }
  };

  const handleTabClick = (index) => {
    if (expandedBox !== null) {
      setExpandedBox(null);
      setTimeout(() => {
        setCurrentSlide(index);
        setExpandedBox(index);
      }, 300);
    } else {
      setCurrentSlide(index);
      setExpandedBox(index);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      handlePrevSlide();
    } else if (e.key === "ArrowRight") {
      handleNextSlide();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const currentSlideData = slideData[currentSlide];

  return (
    <Box
      sx={{
        minHeight: "70vh",
        background: "#ffffff",
        position: "relative",
        overflow: "hidden",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 1s ease-out",
      }}
    >
      {/* Component Heading */}
      <Box
        sx={{
          textAlign: "center",
          py: 4,
          px: 2,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#1e293b",
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "2.5rem" },
            mb: 1,
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          }}
        >
          Our Industries
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "#64748b",
            fontWeight: 400,
            fontSize: { xs: "1rem", md: "1.125rem" },
            maxWidth: "600px",
            mx: "auto",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            whiteSpace: "nowrap",
          }}
        >
          Transforming businesses with cutting-edge technology
        </Typography>
      </Box>

      {/* Main Container */}
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          height: "60vh",
          display: "flex",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Central Content Area */}
        <Box
          sx={{
            flex: 1,
            background: "rgba(255, 255, 255, 0.95)",
            borderRadius: "16px",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            p: { xs: 3, md: 4 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            overflow: "hidden",
            m: 2,
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Background Image with Gradient Overlay */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${currentSlideData.background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.4,
              zIndex: -2,
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
                "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.5) 100%)",
              zIndex: -1,
            }}
          />

          {/* Main Content */}
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    color: "#1e293b",
                    fontWeight: 700,
                    fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
                    lineHeight: 1.1,
                    mb: 2,
                    letterSpacing: "-0.02em",
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)",
                  }}
                >
                  {currentSlideData.title}
                </Typography>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "#374151",
                    fontWeight: 400,
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    lineHeight: 1.5,
                    maxWidth: "500px",
                    mb: 3,
                    letterSpacing: "0.01em",
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    textShadow: "0 1px 2px rgba(255, 255, 255, 0.6)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {currentSlideData.subtitle}
                </Typography>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Button
                  variant="contained"
                  size="medium"
                  sx={{
                    background: "#6366f1",
                    color: "#ffffff",
                    borderRadius: "12px",
                    px: 3,
                    py: 1.5,
                    fontWeight: 500,
                    textTransform: "none",
                    fontSize: "0.875rem",
                    letterSpacing: "0.02em",
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    boxShadow: "0 4px 12px rgba(99, 102, 241, 0.3)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "#4f46e5",
                      transform: "translateY(-1px)",
                      boxShadow: "0 8px 24px rgba(99, 102, 241, 0.4)",
                    },
                  }}
                >
                  Learn More →
                </Button>
              </motion.div>
            </AnimatePresence>
          </Box>

          {/* Services Section */}
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Typography
                  sx={{
                    color: "#374151",
                    fontWeight: 500,
                    fontSize: "0.75rem",
                    mb: 2,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    textShadow: "0 1px 2px rgba(255, 255, 255, 0.6)",
                  }}
                >
                  Services
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    flexWrap: "wrap",
                  }}
                >
                  {currentSlideData.services.map((service, index) => (
                    <Typography
                      key={index}
                      sx={{
                        color: "#374151",
                        fontSize: "0.75rem",
                        fontFamily:
                          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                        background: "rgba(255, 255, 255, 0.9)",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: "6px",
                        border: "1px solid rgba(255, 255, 255, 0.8)",
                        backdropFilter: "blur(10px)",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      {service}
                    </Typography>
                  ))}
                </Box>
              </motion.div>
            </AnimatePresence>
          </Box>

          {/* Navigation Controls */}
          <Box
            sx={{
              display: "flex",
              gap: 1,
              justifyContent: "flex-end",
              mt: 2,
              position: "relative",
              zIndex: 1,
            }}
          >
            <Box
              onClick={handlePrevSlide}
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.9)",
                border: "1px solid rgba(255, 255, 255, 0.8)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                backdropFilter: "blur(10px)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  background: "rgba(255, 255, 255, 1)",
                  transform: "translateY(-1px)",
                },
              }}
              role="button"
              aria-label="Previous slide"
            >
              <Typography sx={{ color: "#374151", fontSize: "1rem" }}>
                ←
              </Typography>
            </Box>
            <Box
              onClick={handleNextSlide}
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.9)",
                border: "1px solid rgba(255, 255, 255, 0.8)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                backdropFilter: "blur(10px)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  background: "rgba(255, 255, 255, 1)",
                  transform: "translateY(-1px)",
                },
              }}
              role="button"
              aria-label="Next slide"
            >
              <Typography sx={{ color: "#374151", fontSize: "1rem" }}>
                →
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Right Sidebar - Compact Industry Boxes */}
        <Box
          sx={{
            width: { xs: "100%", md: "200px" },
            height: { xs: "auto", md: "100%" },
            display: "flex",
            flexDirection: "column",
            gap: 2,
            p: { xs: 2, md: 2 },
            position: { xs: "absolute", md: "static" },
            bottom: { xs: 0, md: "auto" },
            left: { xs: 0, md: "auto" },
            right: { xs: 0, md: "auto" },
            zIndex: { xs: 10, md: 1 },
            background: { xs: "rgba(255, 255, 255, 0.95)", md: "transparent" },
            backdropFilter: { xs: "blur(10px)", md: "none" },
          }}
        >
          {/* Industry Tabs */}
          {slideData.map((slide, index) => (
            <AnimatePresence mode="wait" key={slide.id}>
              <motion.div
                key={`${slide.id}-${expandedBox === index}`}
                initial={{
                  height: expandedBox === index ? "60px" : "60px",
                }}
                animate={{
                  height: expandedBox === index ? "200px" : "60px",
                }}
                exit={{ height: "60px" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Box
                  sx={{
                    height: "100%",
                    background: `linear-gradient(135deg, ${slide.tabColor}20 0%, ${slide.tabColor}30 100%)`,
                    borderRadius: "12px",
                    border: `1px solid ${slide.tabColor}40`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    overflow: "hidden",
                    "&:hover": {
                      background: `${slide.tabColor}30`,
                      transform: "translateY(-2px)",
                      boxShadow: `0 8px 24px ${slide.tabColor}30`,
                    },
                  }}
                  onClick={() => handleTabClick(index)}
                  role="button"
                  aria-label={`${slide.tabLabel} services`}
                >
                  {/* Background Image with Gradient Overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundImage: `url(${slide.background})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      opacity: 0.3,
                      zIndex: -2,
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(135deg, ${slide.tabColor}40 0%, ${slide.tabColor}60 50%, ${slide.tabColor}80 100%)`,
                      zIndex: -1,
                    }}
                  />

                  <Typography
                    sx={{
                      color: "#ffffff",
                      fontWeight: 600,
                      fontSize: { xs: "0.7rem", md: "0.8rem" },
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      fontFamily:
                        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                      mb: expandedBox === index ? 1.5 : 0,
                      textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
                      zIndex: 1,
                    }}
                  >
                    {slide.tabLabel}
                  </Typography>

                  {expandedBox === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      style={{
                        textAlign: "center",
                        padding: "12px",
                        zIndex: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#ffffff",
                          fontSize: "0.7rem",
                          lineHeight: 1.4,
                          fontFamily:
                            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                          textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
                        }}
                      >
                        {slide.subtitle}
                      </Typography>
                    </motion.div>
                  )}

                  <Box
                    sx={{
                      position: "absolute",
                      top: { xs: "8px", md: "10px" },
                      right: { xs: "8px", md: "10px" },
                      width: { xs: "4px", md: "5px" },
                      height: { xs: "4px", md: "5px" },
                      borderRadius: "50%",
                      background:
                        expandedBox === index
                          ? "#ffffff"
                          : "rgba(255, 255, 255, 0.7)",
                      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
                      zIndex: 1,
                    }}
                  />
                </Box>
              </motion.div>
            </AnimatePresence>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
