"use client";

import React, { useEffect, useRef, useState } from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Award, Target, Users, Brain, TrendingUp, Globe } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

// Enhanced modern color palette
const BRAND_COLORS = {
  primary: "#2563eb", // Modern blue
  secondary: "#dc2626", // Red
  accent: "#f59e0b", // Amber
  success: "#10b981", // Emerald
  purple: "#8b5cf6", // Violet
  indigo: "#6366f1", // Indigo
  white: "#ffffff",
  lightGray: "#f8fafc",
  darkGray: "#1e293b",
  slate: "#475569",
  gradient: {
    primary: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
    secondary: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)",
    accent: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    success: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    purple: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
    indigo: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
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
    color: BRAND_COLORS.gradient.primary,
    bgColor: "#dbeafe",
    iconColor: "#2563eb",
  },
  {
    id: "customer-centricity",
    title: "Customer Centricity",
    description: "Commitment to prioritizing customer needs and experiences",
    icon: Target,
    position: { top: "10%", right: "20%" },
    delay: 100,
    color: BRAND_COLORS.gradient.secondary,
    bgColor: "#fee2e2",
    iconColor: "#dc2626",
  },
  {
    id: "technical-workforce",
    title: "Technical Workforce",
    description: "1800+ engineers and 250+ Architects and SMEs",
    icon: Users,
    position: { top: "30%", left: "5%", transform: "translateY(-50%)" },
    delay: 200,
    color: BRAND_COLORS.gradient.success,
    bgColor: "#d1fae5",
    iconColor: "#10b981",
  },
  {
    id: "domain-expertise",
    title: "Deep Domain Expertise",
    description: "Extensive knowledge in Medical Devices, Healthcare & Banking",
    icon: Brain,
    position: { top: "30%", right: "5%", transform: "translateY(-50%)" },
    delay: 300,
    color: BRAND_COLORS.gradient.purple,
    bgColor: "#ede9fe",
    iconColor: "#8b5cf6",
  },
  {
    id: "operating-models",
    title: "Flexible Operating Models",
    description: "Adaptable operational models tailored to customer needs",
    icon: TrendingUp,
    position: { bottom: "10%", left: "20%" },
    delay: 400,
    color: BRAND_COLORS.gradient.accent,
    bgColor: "#fef3c7",
    iconColor: "#f59e0b",
  },
  {
    id: "global-presence",
    title: "Global Presence",
    description:
      "15 Global Delivery centers across US, India, Canada, Mexico and Europe",
    icon: Globe,
    position: { bottom: "10%", right: "20%" },
    delay: 500,
    color: BRAND_COLORS.gradient.indigo,
    bgColor: "#e0e7ff",
    iconColor: "#6366f1",
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
        gsap.fromTo(
          containerRef.current.querySelectorAll(".fade-in"),
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
              onEnter: () => setIsVisible(true),
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
        minHeight: "100vh",
        maxWidth: "1400px",
        margin: "0 auto",
        background: `linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)`,
        py: 12,
        px: 3,
        borderRadius: 4,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      }}
    >
      {/* Enhanced Background Effects */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 1000,
          height: 1000,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${BRAND_COLORS.primary}15, ${BRAND_COLORS.secondary}10, transparent)`,
          zIndex: 0,
          filter: "blur(80px)",
        }}
      />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            background: [
              BRAND_COLORS.primary,
              BRAND_COLORS.secondary,
              BRAND_COLORS.accent,
            ][i % 3],
            borderRadius: "50%",
            opacity: 0.3,
            animation: `float ${Math.random() * 10 + 10}s infinite linear`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            zIndex: 1,
          }}
        />
      ))}

      {/* Enhanced Heading */}
      <Box
        className="fade-in"
        sx={{ textAlign: "left", mb: 8, position: "relative", zIndex: 2 }}
      >
        <Typography
          variant="h2"
          fontWeight={800}
          sx={{
            color: BRAND_COLORS.darkGray,
            mb: 2,
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            lineHeight: 1.2,
          }}
        >
          The{" "}
          <Box
            component="span"
            sx={{
              background: BRAND_COLORS.gradient.primary,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Intelligence
          </Box>{" "}
          Core
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: BRAND_COLORS.slate,
            fontWeight: 400,
            maxWidth: "600px",
            lineHeight: 1.6,
          }}
        >
          Powering innovation through interconnected excellence and cutting-edge
          technology
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
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: 180,
                height: 180,
                transform: "translate(-50%, -50%)",
                borderRadius: "50%",
                background: BRAND_COLORS.white,
                border: `10px solid ${BRAND_COLORS.primary}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 20px 60px ${BRAND_COLORS.primary}30, inset 0 4px 20px rgba(255,255,255,0.3)`,
                zIndex: 5,
              }}
            >
              <img
                src="/logos/Intellectt-Logo.webp"
                alt="Intellect Logo"
                style={{
                  width: "75%",
                  height: "75%",
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
                    sx={{
                      position: "absolute",
                      top: -8,
                      left: "50%",
                      width: 14,
                      height: 14,
                      background: [
                        BRAND_COLORS.gradient.primary,
                        BRAND_COLORS.gradient.secondary,
                        BRAND_COLORS.gradient.accent,
                        BRAND_COLORS.gradient.success,
                      ][i],
                      borderRadius: "50%",
                      boxShadow: `0 0 15px ${BRAND_COLORS.primary}50`,
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
                  width: 3,
                  height: 120,
                  background: `linear-gradient(to bottom, ${BRAND_COLORS.primary}60, transparent)`,
                  top: "50%",
                  left: "50%",
                  transform: `translate(-50%, -50%) rotate(${
                    i * 30
                  }deg) translateY(-120px)`,
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
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  delay: feature.delay / 1000,
                  type: "spring",
                  stiffness: 100,
                }}
                style={{
                  position: "absolute",
                  width: 220,
                  ...feature.position,
                }}
              >
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    background: feature.color,
                    border: `2px solid ${BRAND_COLORS.white}40`,
                    boxShadow: `0 8px 32px ${feature.iconColor}30`,
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    backdropFilter: "blur(10px)",
                    "&:hover": {
                      transform: "scale(1.08) translateY(-8px)",
                      boxShadow: `0 16px 48px ${feature.iconColor}40`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mb: 2,
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 3,
                        background: BRAND_COLORS.white,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: `0 4px 16px ${feature.iconColor}20`,
                        position: "relative",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          inset: -2,
                          borderRadius: 3,
                          background: feature.color,
                          zIndex: -1,
                          opacity: 0.3,
                        },
                      }}
                    >
                      <Icon color={feature.iconColor} size={28} />
                    </Box>
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: BRAND_COLORS.white,
                      textAlign: "center",
                      fontWeight: 700,
                      mb: 1,
                      fontSize: "1.1rem",
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: BRAND_COLORS.white,
                      textAlign: "center",
                      opacity: 0.95,
                      lineHeight: 1.5,
                      fontSize: "0.875rem",
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
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.15 }}
                >
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 4,
                      background: feature.color,
                      boxShadow: `0 8px 32px ${feature.iconColor}30`,
                      transition: "all 0.3s",
                      "&:hover": {
                        transform: "scale(1.02)",
                        boxShadow: `0 12px 40px ${feature.iconColor}40`,
                      },
                    }}
                  >
                    <Box
                      sx={{ display: "flex", justifyContent: "center", mb: 2 }}
                    >
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: 3,
                          background: BRAND_COLORS.white,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: `0 4px 16px ${feature.iconColor}20`,
                        }}
                      >
                        <Icon color={feature.iconColor} size={28} />
                      </Box>
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: BRAND_COLORS.white,
                        textAlign: "center",
                        fontWeight: 700,
                        mb: 1,
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: BRAND_COLORS.white,
                        textAlign: "center",
                        opacity: 0.95,
                        lineHeight: 1.5,
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
      <Grid container spacing={4} justifyContent="center" className="fade-in">
        {[
          {
            number: "200+",
            label: "Solutions",
            gradient: BRAND_COLORS.gradient.primary,
            icon: "🚀",
          },
          {
            number: "1800+",
            label: "Engineers",
            gradient: BRAND_COLORS.gradient.secondary,
            icon: "👨‍💻",
          },
          {
            number: "250+",
            label: "Architects",
            gradient: BRAND_COLORS.gradient.accent,
            icon: "🏗️",
          },
          {
            number: "15",
            label: "Global Centers",
            gradient: BRAND_COLORS.gradient.success,
            icon: "🌍",
          },
        ].map((stat, idx) => (
          <Grid item xs={6} md={3} key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
            >
              <Box
                sx={{
                  p: 3,
                  borderRadius: 3,
                  background: stat.gradient,
                  textAlign: "center",
                  border: `2px solid ${BRAND_COLORS.white}30`,
                  transition: "all 0.3s",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)",
                    transform: "translateX(-100%)",
                    transition: "transform 0.6s",
                  },
                  "&:hover": {
                    transform: "scale(1.05) translateY(-4px)",
                    boxShadow: `0 12px 40px ${BRAND_COLORS.primary}40`,
                    "&::before": {
                      transform: "translateX(100%)",
                    },
                  },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    color: BRAND_COLORS.white,
                    mb: 1,
                    textShadow: "0 2px 4px rgba(0,0,0,0.2)",
                  }}
                >
                  {stat.number}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: BRAND_COLORS.white,
                    fontWeight: 600,
                    mb: 1,
                    fontSize: "1.1rem",
                  }}
                >
                  {stat.label}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: BRAND_COLORS.white,
                    opacity: 0.8,
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
            box-shadow: 0 0 20px rgba(37, 99, 235, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(37, 99, 235, 0.6);
          }
        }
      `}</style>
    </Box>
  );
}
