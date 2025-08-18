"use client";

import React, { useEffect, useRef, useState } from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Award, Target, Users, Brain, TrendingUp, Globe } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import CountUp from "react-countup";

gsap.registerPlugin(ScrollTrigger);

// Apple-inspired modern color palette with sophisticated gradients
const BRAND_COLORS = {
  primary: "#007AFF", // Apple Blue
  secondary: "#FF3B30", // Apple Red
  tertiary: "#FF3B30", // Red
  accent: "#007AFF", // Blue
  neutral: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
  },
  white: "#FFFFFF",
  black: "#000000",
  gradient: {
    primary: "linear-gradient(135deg, #007AFF 0%, #0056CC 100%)", // Subtle blue
    secondary: "linear-gradient(135deg, #FF3B30 0%, #CC2E24 100%)", // Subtle red
    tertiary: "linear-gradient(135deg, #FF3B30 0%, #CC2E24 100%)", // Subtle red
    accent: "linear-gradient(135deg, #007AFF 0%, #0056CC 100%)", // Subtle blue
    glass:
      "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
    dark: "linear-gradient(135deg, #1F2937 0%, #374151 50%, #4B5563 100%)",
    light: "linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 50%, #E5E7EB 100%)",
  },
  shadow: {
    soft: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    medium: "0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)",
    large: "0 10px 25px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.1)",
    xl: "0 20px 40px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.05)",
    glow: {
      primary: "0 0 10px rgba(0, 122, 255, 0.2)", // Reduced glow
      secondary: "0 0 10px rgba(255, 59, 48, 0.2)", // Reduced glow
      tertiary: "0 0 10px rgba(255, 59, 48, 0.2)", // Reduced glow
      accent: "0 0 10px rgba(0, 122, 255, 0.2)", // Reduced glow
    },
  },
};

const features = [
  {
    id: "technical-competence",
    title: "Technical Competence",
    description: "200+ solutions and accelerators driving innovation forward",
    icon: Award,
    position: { top: "10%", left: "20%" },
    delay: 0,
    gradient: BRAND_COLORS.gradient.primary,
    bgColor: "rgba(0, 122, 255, 0.1)",
    iconColor: "#007AFF",
    borderColor: "rgba(0, 122, 255, 0.2)",
  },
  {
    id: "customer-centricity",
    title: "Customer Centricity",
    description: "Commitment to prioritizing customer needs and experiences",
    icon: Target,
    position: { top: "10%", right: "20%" },
    delay: 100,
    gradient: BRAND_COLORS.gradient.secondary,
    bgColor: "rgba(255, 59, 48, 0.1)",
    iconColor: "#FF3B30",
    borderColor: "rgba(255, 59, 48, 0.2)",
  },
  {
    id: "technical-workforce",
    title: "Technical Workforce",
    description: "1800+ engineers and 250+ Architects and SMEs",
    icon: Users,
    position: { top: "30%", left: "5%", transform: "translateY(-50%)" },
    delay: 200,
    gradient: BRAND_COLORS.gradient.secondary,
    bgColor: "rgba(255, 59, 48, 0.1)",
    iconColor: "#FF3B30",
    borderColor: "rgba(255, 59, 48, 0.2)",
  },
  {
    id: "domain-expertise",
    title: "Deep Domain Expertise",
    description: "Extensive knowledge in Medical Devices, Healthcare & Banking",
    icon: Brain,
    position: { top: "30%", right: "5%", transform: "translateY(-50%)" },
    delay: 300,
    gradient: BRAND_COLORS.gradient.primary,
    bgColor: "rgba(0, 122, 255, 0.1)",
    iconColor: "#007AFF",
    borderColor: "rgba(0, 122, 255, 0.2)",
  },
  {
    id: "operating-models",
    title: "Flexible Operating Models",
    description: "Adaptable operational models tailored to customer needs",
    icon: TrendingUp,
    position: { bottom: "10%", left: "20%" },
    delay: 400,
    gradient: BRAND_COLORS.gradient.primary,
    bgColor: "rgba(0, 122, 255, 0.1)",
    iconColor: "#007AFF",
    borderColor: "rgba(0, 122, 255, 0.2)",
  },
  {
    id: "global-presence",
    title: "Global Presence",
    description:
      "15 Global Delivery centers across US, India, Canada, Mexico and Europe",
    icon: Globe,
    position: { bottom: "10%", right: "20%" },
    delay: 500,
    gradient: BRAND_COLORS.gradient.secondary,
    bgColor: "rgba(255, 59, 48, 0.1)",
    iconColor: "#FF3B30",
    borderColor: "rgba(255, 59, 48, 0.2)",
  },
];

export default function IntelligenceCore() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (containerRef.current) {
        // Apple-style entrance animation
        gsap.fromTo(
          containerRef.current.querySelectorAll(".fade-in"),
          {
            opacity: 0,
            y: 60,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
              onEnter: () => setIsVisible(true),
            },
          }
        );

        // Apple-style core animation
        gsap.fromTo(
          containerRef.current.querySelector(".core-logo"),
          {
            opacity: 0,
            scale: 0.8,
            rotation: -10,
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1.5,
            ease: "back.out(1.7)",
            delay: 0.3,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
            },
          }
        );

        // Apple-style orbiting dots animation
        gsap.fromTo(
          containerRef.current.querySelectorAll(".orbit-dot"),
          {
            opacity: 0,
            scale: 0,
            rotation: -180,
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1.2,
            stagger: 0.1,
            ease: "back.out(1.4)",
            delay: 0.8,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
            },
          }
        );

        // Apple-style feature cards animation
        gsap.fromTo(
          containerRef.current.querySelectorAll(".feature-card"),
          {
            opacity: 0,
            y: 40,
            scale: 0.9,
            rotationY: -15,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationY: 0,
            duration: 1.1,
            stagger: 0.2,
            ease: "power3.out",
            delay: 1.2,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
            },
          }
        );

        // Apple-style stats animation
        gsap.fromTo(
          containerRef.current.querySelectorAll(".stat-card"),
          {
            opacity: 0,
            y: 30,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            delay: 1.8,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: "60vh",
        maxWidth: "1400px",
        margin: "0 auto",
        background: BRAND_COLORS.white, // Simple white background
        py: 6,
        px: 3,
        borderRadius: 0, // Remove border radius to merge with website
        boxShadow: "none", // Remove shadow to merge with website
        backdropFilter: "none", // Remove backdrop filter
        border: "none", // Remove border
        "&::before, &::after": {
          display: "none", // Remove any pseudo-elements that might create the semicircle
        },
        "& *::before, & *::after": {
          display: "none", // Remove any pseudo-elements from child elements
        },
        // Remove any background elements that might create semicircles
        "& [style*='border-radius']": {
          display: "none",
        },
        "& [class*='circle'], & [class*='semi']": {
          display: "none",
        },
        // Target any elements positioned in top-left corner
        "& > *:first-child": {
          "&::before, &::after": {
            display: "none !important",
          },
        },
      }}
    >
      {/* Clean white background - no effects */}

      {/* Enhanced Heading */}
      <Box
        className="fade-in"
        sx={{ textAlign: "center", mb: 4, position: "relative", zIndex: 2 }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{
            color: BRAND_COLORS.neutral[900],
            mb: 1,
            fontSize: { xs: "1.25rem", md: "1.5rem" },
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Why{" "}
          <Box
            component="span"
            sx={{
              background: BRAND_COLORS.gradient.primary,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 800,
            }}
          >
            Intellectt
          </Box>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: BRAND_COLORS.neutral[600],
            fontSize: { xs: "0.875rem", md: "1rem" },
            fontWeight: 400,
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: 1.6,
            whiteSpace: "nowrap",
          }}
        >
          Discover the core strengths that make us your trusted technology partner
        </Typography>
      </Box>

      {/* Central Core (only desktop) */}
      {!isMobile && (
        <Box
          sx={{
            position: "relative",
            height: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 8,
          }}
        >
          {/* Enhanced Core Atom */}
          <Box
            sx={{
              position: "relative",
              width: 500,
              height: 500,
              zIndex: 2,
            }}
          >
            {/* Center Logo - The True Center */}
            <Box
              className="core-logo"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: 200,
                height: 200,
                transform: "translate(-50%, -50%)",
                borderRadius: "50%",
                background: BRAND_COLORS.white, // Clean white background
                border: "none", // Remove border
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: BRAND_COLORS.shadow.medium, // Simple shadow
                zIndex: 5,
                backdropFilter: "none", // Remove blur
                "&::before": {
                  display: "none", // Remove gradient overlay
                },
              }}
            >
              <img
                src="/logos/Intellectt-Logo.webp"
                alt="Intellectt Logo"
                style={{
                  width: "80%",
                  height: "80%",
                  objectFit: "contain",
                }}
              />
            </Box>

            {/* Orbiting Dots Around the Logo */}
            {[120, 180, 240, 300].map((radius, i) => (
              <motion.div
                key={i}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30 + i * 10,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.5,
                }}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: radius * 2,
                  height: radius * 2,
                  marginTop: -radius,
                  marginLeft: -radius,
                  zIndex: 4,
                }}
              >
                {/* Multiple dots per orbit */}
                {[...Array(4)].map((_, j) => (
                  <Box
                    key={j}
                    className="orbit-dot"
                    sx={{
                      position: "absolute",
                      top: -8,
                      left: "50%",
                      width: 16,
                      height: 16,
                      background: [
                        BRAND_COLORS.gradient.primary, // Blue
                        BRAND_COLORS.gradient.secondary, // Red
                        BRAND_COLORS.gradient.primary, // Blue
                        BRAND_COLORS.gradient.secondary, // Red
                      ][i],
                      borderRadius: "50%",
                      boxShadow: `${BRAND_COLORS.shadow.glow.primary}`,
                      transform: `translateX(-50%) rotate(${
                        j * 90
                      }deg) translateY(-${radius}px)`,
                      zIndex: 4,
                    }}
                  />
                ))}
              </motion.div>
            ))}

            {/* Subtle Orbit Rings */}
            {[140, 200, 260, 320].map((size, i) => (
              <Box
                key={i}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: size,
                  height: size,
                  marginTop: -size / 2,
                  marginLeft: -size / 2,
                  border: `2px solid ${BRAND_COLORS.primary}15`,
                  borderRadius: "50%",
                  zIndex: 3,
                }}
              />
            ))}

            {/* Enhanced Energy Lines */}
            {[...Array(12)].map((_, i) => (
              <Box
                key={i}
                sx={{
                  position: "absolute",
                  width: 2,
                  height: 120,
                  background: `linear-gradient(to bottom, ${BRAND_COLORS.primary}40, transparent)`,
                  top: "50%",
                  left: "50%",
                  transform: `translate(-50%, -50%) rotate(${
                    i * 30
                  }deg) translateY(-140px)`,
                  transformOrigin: "bottom center",
                  borderRadius: "2px",
                }}
              />
            ))}
          </Box>

          {/* Enhanced Feature Cards */}
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                className="feature-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  delay: feature.delay / 1000,
                  type: "spring",
                  stiffness: 100,
                }}
                style={{
                  position: "absolute",
                  width: 220, // Reduced width to prevent overlap
                  ...feature.position,
                  zIndex: 10, // Ensure boxes are above other elements
                }}
              >
                <Box
                  sx={{
                    p: 3, // Reduced padding
                    borderRadius: "20px",
                    background: "rgba(255, 255, 255, 0.98)", // More opaque white
                    border: `1px solid ${feature.borderColor}`, // Thinner border
                    boxShadow: BRAND_COLORS.shadow.medium, // Lighter shadow
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    backdropFilter: "blur(20px)",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: feature.gradient,
                      opacity: 0.08, // Much reduced opacity
                      zIndex: -1,
                    },
                    "&:hover": {
                      transform: "scale(1.02) translateY(-4px)", // Reduced hover effect
                      boxShadow: BRAND_COLORS.shadow.large,
                      border: `1px solid ${feature.iconColor}30`, // Reduced border opacity
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mb: 2, // Reduced margin
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        width: 56, // Reduced size
                        height: 56, // Reduced size
                        borderRadius: "16px",
                        background: BRAND_COLORS.white,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: BRAND_COLORS.shadow.medium,
                        position: "relative",
                        border: `2px solid ${feature.iconColor}20`,
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          inset: -2,
                          borderRadius: "18px",
                          background: feature.gradient,
                          zIndex: -1,
                          opacity: 0.4, // Increased opacity
                        },
                      }}
                    >
                      <Icon color={feature.iconColor} size={28} />{" "}
                      {/* Reduced icon size */}
                    </Box>
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: BRAND_COLORS.neutral[900],
                      textAlign: "center",
                      fontWeight: 700,
                      mb: 1, // Reduced margin
                      fontSize: "1.1rem", // Reduced font size
                      lineHeight: 1.3,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: BRAND_COLORS.neutral[600],
                      textAlign: "center",
                      lineHeight: 1.5, // Reduced line height
                      fontSize: "0.875rem", // Reduced font size
                      fontWeight: 400,
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      )}

      {/* Enhanced Mobile Grid */}
      {isMobile && (
        <Grid container spacing={3} justifyContent="center" sx={{ mb: 6 }}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Grid item xs={11} key={feature.id}>
                <motion.div
                  className="feature-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.15 }}
                >
                  <Box
                    sx={{
                      p: 4,
                      borderRadius: "20px",
                      background: "rgba(255, 255, 255, 0.98)", // More opaque white
                      border: `1px solid ${feature.borderColor}`, // Thinner border
                      boxShadow: BRAND_COLORS.shadow.large,
                      transition: "all 0.3s",
                      backdropFilter: "blur(20px)",
                      position: "relative",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: feature.gradient,
                        opacity: 0.08, // Much reduced opacity
                        zIndex: -1,
                      },
                      "&:hover": {
                        transform: "scale(1.02)",
                        boxShadow: BRAND_COLORS.shadow.xl,
                        border: `1px solid ${feature.iconColor}30`, // Reduced border opacity
                      },
                    }}
                  >
                    <Box
                      sx={{ display: "flex", justifyContent: "center", mb: 3 }}
                    >
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          borderRadius: "16px",
                          background: BRAND_COLORS.white,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: BRAND_COLORS.shadow.medium,
                          position: "relative",
                          border: `2px solid ${feature.iconColor}20`,
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            inset: -2,
                            borderRadius: "18px",
                            background: feature.gradient,
                            zIndex: -1,
                            opacity: 0.4, // Increased opacity
                          },
                        }}
                      >
                        <Icon color={feature.iconColor} size={32} />
                      </Box>
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: BRAND_COLORS.neutral[900],
                        textAlign: "center",
                        fontWeight: 700,
                        mb: 2,
                        fontSize: "1.25rem",
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: BRAND_COLORS.neutral[600],
                        textAlign: "center",
                        lineHeight: 1.6,
                        fontSize: "0.95rem",
                        fontWeight: 400,
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      )}

      {/* Enhanced Stats Section */}
      <Grid container spacing={2} justifyContent="center" className="fade-in">
        {[
          {
            number: 200,
            suffix: "+",
            label: "Solutions",
            gradient: BRAND_COLORS.gradient.primary, // Blue
            icon: "🚀",
            color: BRAND_COLORS.primary, // Blue
          },
          {
            number: 1800,
            suffix: "+",
            label: "Engineers",
            gradient: BRAND_COLORS.gradient.secondary, // Red
            icon: "👨‍💻",
            color: BRAND_COLORS.secondary, // Red
          },
          {
            number: 250,
            suffix: "+",
            label: "Architects",
            gradient: BRAND_COLORS.gradient.primary, // Blue
            icon: "🏗️",
            color: BRAND_COLORS.primary, // Blue
          },
          {
            number: 15,
            suffix: "",
            label: "Global Centers",
            gradient: BRAND_COLORS.gradient.secondary, // Red
            icon: "🌍",
            color: BRAND_COLORS.secondary, // Red
          },
        ].map((stat, idx) => (
          <Grid item xs={6} md={3} key={idx}>
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
            >
              <Box
                sx={{
                  p: 2,
                  borderRadius: "12px",
                  background: "rgba(255, 255, 255, 0.98)",
                  textAlign: "center",
                  border: `1px solid ${stat.color}20`,
                  transition: "all 0.3s",
                  position: "relative",
                  overflow: "hidden",
                  backdropFilter: "blur(20px)",
                  boxShadow: BRAND_COLORS.shadow.medium,
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: stat.gradient,
                    opacity: 0.05,
                    zIndex: -1,
                  },
                  "&:hover": {
                    transform: "scale(1.02) translateY(-1px)",
                    boxShadow: BRAND_COLORS.shadow.large,
                    border: `1px solid ${stat.color}30`,
                  },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: "1.5rem", md: "1.8rem" },
                    fontWeight: 800,
                    color: BRAND_COLORS.neutral[900],
                    mb: 0.5,
                    textShadow: "none",
                  }}
                >
                  <CountUp
                    end={stat.number}
                    duration={2.5}
                    delay={0.5 + idx * 0.2}
                    separator=","
                  />
                  {stat.suffix}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: BRAND_COLORS.neutral[700],
                    fontWeight: 600,
                    mb: 1,
                    fontSize: { xs: "0.8rem", md: "0.9rem" },
                  }}
                >
                  {stat.label}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: stat.color,
                    opacity: 0.8,
                    fontSize: { xs: "1.2rem", md: "1.4rem" },
                  }}
                >
                  {stat.icon}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Enhanced Animations */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 10px rgba(0, 122, 255, 0.2);
          }
          50% {
            box-shadow: 0 0 20px rgba(0, 122, 255, 0.4);
          }
        }
      `}</style>
    </Box>
  );
}
