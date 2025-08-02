"use client";

import React, { useEffect, useRef, useState } from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Award, Target, Users, Brain, TrendingUp, Globe } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

// Brand color palette from Intellectt logo
const BRAND_COLORS = {
  primary: "#0199d3",
  secondary: "#dc2626",
  accent: "#fdb913",
  darkBlue: "#1438bc",
  navy: "#238fb9",
  white: "#ffffff",
  lightGray: "#f8fafc",
  darkGray: "#1a1a1a",
};

const features = [
  {
    id: "technical-competence",
    title: "Technical Competence",
    description: "200+ solutions and accelerators driving innovation forward",
    icon: Award,
    position: { top: "10%", left: "20%" },
    delay: 0,
  },
  {
    id: "customer-centricity",
    title: "Customer Centricity",
    description: "Commitment to prioritizing customer needs and experiences",
    icon: Target,
    position: { top: "10%", right: "20%" },
    delay: 100,
  },
  {
    id: "technical-workforce",
    title: "Technical Workforce",
    description: "1800+ engineers and 250+ Architects and SMEs",
    icon: Users,
    position: { top: "30%", left: "5%", transform: "translateY(-50%)" },
    delay: 200,
  },
  {
    id: "domain-expertise",
    title: "Deep Domain Expertise",
    description: "Extensive knowledge in Medical Devices, Healthcare & Banking",
    icon: Brain,
    position: { top: "30%", right: "5%", transform: "translateY(-50%)" },
    delay: 300,
  },
  {
    id: "operating-models",
    title: "Flexible Operating Models",
    description: "Adaptable operational models tailored to customer needs",
    icon: TrendingUp,
    position: { bottom: "10%", left: "20%" },
    delay: 400,
  },
  {
    id: "global-presence",
    title: "Global Presence",
    description:
      "15 Global Delivery centers across US, India, Canada, Mexico and Europe",
    icon: Globe,
    position: { bottom: "10%", right: "20%" },
    delay: 500,
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
        maxWidth: "1300px",
        margin: "0 auto",
        background: `linear-gradient(135deg, ${BRAND_COLORS.lightGray} 0%, #f1f5f9 50%, #e2e8f0 100%)`,
        py: 10,
        px: 2,
      }}
    >
      {/* Background Glow */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 800,
          height: 800,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${BRAND_COLORS.primary}22, ${BRAND_COLORS.secondary}11, transparent)`,
          zIndex: 0,
          filter: "blur(60px)",
        }}
      />

      {/* Heading */}
      <Box
        className="fade-in"
        sx={{ textAlign: "center", mb: 6, position: "relative", zIndex: 1 }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          color={BRAND_COLORS.darkGray}
          gutterBottom
        >
          Why{" "}
          <Box
            component="span"
            sx={{
              background: `linear-gradient(135deg, ${BRAND_COLORS.primary} 0%, ${BRAND_COLORS.secondary} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Intellect
          </Box>
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: BRAND_COLORS.darkGray,
            opacity: 0.8,
            fontWeight: 400,
          }}
        >
          Powering innovation through interconnected excellence
        </Typography>
      </Box>

      {/* Central Atom + Orbits (only desktop) */}
      {!isMobile && (
        <Box
          sx={{
            position: "relative",
            height: 600,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Core Atom */}
          <Box
            sx={{
              position: "relative",
              width: 400,
              height: 400,
              zIndex: 2,
            }}
          >
            {/* Orbit Rings */}
            {[180, 240, 300].map((size, i) => (
              <motion.div
                key={i}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30 + i * 5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.2,
                }}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: size,
                  height: size,
                  marginTop: -size / 2,
                  marginLeft: -size / 2,
                  border: `2px solid ${BRAND_COLORS.primary}33`,
                  borderRadius: "50%",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: -6,
                    left: "50%",
                    width: 12,
                    height: 12,
                    background: [
                      BRAND_COLORS.darkBlue,
                      BRAND_COLORS.primary,
                      BRAND_COLORS.secondary,
                      BRAND_COLORS.accent,
                    ][i],
                    borderRadius: "50%",
                    boxShadow: `0 0 10px ${BRAND_COLORS.primary}40`,
                    transform: "translateX(-50%)",
                  }}
                />
              </motion.div>
            ))}

            {/* Static center logo */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: 120,
                height: 120,
                transform: "translate(-50%, -50%)",
                borderRadius: "50%",
                backgroundColor: BRAND_COLORS.white,
                border: `6px solid ${BRAND_COLORS.primary}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 10px 30px ${BRAND_COLORS.primary}20`,
              }}
            >
              <img
                src="/logos/Intellectt-Logo.webp"
                alt="Intellect Logo"
                style={{ width: "70%", height: "70%", objectFit: "contain" }}
              />
            </Box>
          </Box>

          {/* Energy Lines */}
          {[...Array(6)].map((_, i) => (
            <Box
              key={i}
              sx={{
                position: "absolute",
                width: 2,
                height: 80,
                background: `linear-gradient(to bottom, ${BRAND_COLORS.primary}55, transparent)`,
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%) rotate(${
                  i * 60
                }deg) translateY(-100px)`,
                transformOrigin: "bottom center",
              }}
            />
          ))}

          {/* Feature Bubbles */}
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: feature.delay / 1000 }}
                style={{
                  position: "absolute",
                  width: 180,
                  ...feature.position,
                }}
              >
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 4,
                    backgroundColor: BRAND_COLORS.primary,
                    border: `1px solid ${BRAND_COLORS.white}33`,
                    boxShadow: `0 4px 20px ${BRAND_COLORS.primary}20`,
                    transition: "all 0.4s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      backgroundColor: BRAND_COLORS.secondary,
                      boxShadow: `0 8px 30px ${BRAND_COLORS.secondary}30`,
                    },
                  }}
                >
                  <Box
                    sx={{ display: "flex", justifyContent: "center", mb: 1 }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        background: BRAND_COLORS.white,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: 3,
                      }}
                    >
                      <Icon color={BRAND_COLORS.primary} size={24} />
                    </Box>
                  </Box>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: BRAND_COLORS.white,
                      textAlign: "center",
                      fontWeight: 600,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: BRAND_COLORS.white,
                      textAlign: "center",
                      display: "block",
                      opacity: 0.9,
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

      {/* Mobile Grid Stack */}
      {isMobile && (
        <Grid container spacing={3} justifyContent="center">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Grid item xs={10} key={feature.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                >
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 3,
                      backgroundColor: BRAND_COLORS.primary,
                      boxShadow: `0 4px 20px ${BRAND_COLORS.primary}20`,
                      transition: "all 0.3s",
                      "&:hover": {
                        backgroundColor: BRAND_COLORS.secondary,
                        transform: "scale(1.02)",
                      },
                    }}
                  >
                    <Box
                      sx={{ display: "flex", justifyContent: "center", mb: 1 }}
                    >
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 2,
                          background: BRAND_COLORS.white,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Icon color={BRAND_COLORS.primary} size={24} />
                      </Box>
                    </Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: BRAND_COLORS.white,
                        textAlign: "center",
                        fontWeight: 600,
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: BRAND_COLORS.white,
                        textAlign: "center",
                        display: "block",
                        opacity: 0.9,
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

      {/* Stats */}
      <Grid container spacing={4} justifyContent="center" className="fade-in">
        {[
          {
            number: "200+",
            label: "Solutions",
            gradient: `linear-gradient(135deg, ${BRAND_COLORS.primary} 0%, ${BRAND_COLORS.navy} 100%)`,
          },
          {
            number: "1800+",
            label: "Engineers",
            gradient: `linear-gradient(135deg, ${BRAND_COLORS.secondary} 0%, ${BRAND_COLORS.primary} 100%)`,
          },
          {
            number: "250+",
            label: "Architects",
            gradient: `linear-gradient(135deg, ${BRAND_COLORS.accent} 0%, ${BRAND_COLORS.primary} 100%)`,
          },
          {
            number: "15",
            label: "Global Centers",
            gradient: `linear-gradient(135deg, ${BRAND_COLORS.darkBlue} 0%, ${BRAND_COLORS.primary} 100%)`,
          },
        ].map((stat, idx) => (
          <Grid item xs={6} md={3} key={idx}>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                background: stat.gradient,
                textAlign: "center",
                marginBottom: 8,
                backdropFilter: "blur(10px)",
                border: `1px solid ${BRAND_COLORS.white}40`,
                transition: "all 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: `0 8px 30px ${BRAND_COLORS.primary}30`,
                },
              }}
            >
              <Typography
                variant="h5"
                fontWeight={700}
                sx={{
                  color: BRAND_COLORS.white,
                  mb: 1,
                }}
              >
                {stat.number}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: BRAND_COLORS.white,
                  fontWeight: 500,
                  opacity: 0.9,
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Animations */}
      <style jsx global>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.03);
          }
        }
      `}</style>
    </Box>
  );
}
