"use client";

import React, { useEffect, useRef, useState } from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Award, Target, Users, Brain, TrendingUp, Globe } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

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
    description:
      "Extensive knowledge in Medical Devices, Healthcare & Banking",
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
        maxWidth:"1300px",
        margin: "0 auto",
        bgcolor: "#fff",
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
          background:
            "radial-gradient(circle, #dbeafe44, #f3e8ff11, transparent)",
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
          fontWeight={300}
          color="text.primary"
          gutterBottom
        >
          Why{" "}
          <Box
            component="span"
            sx={{
              background:
                " #EF4444",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Intellect
          </Box>
        </Typography>
        <Typography variant="h6" color="text.secondary">
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
                  border: `2px solid rgba(100,100,255,0.2)`,
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
                    background: ["#110652", "#5a96f8", "#ef4444", "#06b6d4"][i],
                    borderRadius: "50%",
                    boxShadow: "0 0 10px rgba(0,0,0,0.3)",
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
                backgroundColor: "#fff",
                border: "6px solid #f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              }}
            >
              <img
                src="/logo.jpg"
                alt="Intellect Logo"
                style={{ width: "70%", height: "70%", objectFit: "contain" }}
              />
            </Box>
          </Box>
          {/* Rotating Rings */}
          {/* {[0, 1, 2].map((_, i) => (
            <Box
              key={i}
              sx={{
                position: "absolute",
                top: i * 16,
                left: i * 16,
                right: i * 16,
                bottom: i * 16,
                borderRadius: "50%",
                border: `2px solid ${
                  ["#93c5fd55", "#c4b5fd55", "#fca5a555"][i]
                }`,
                animation: `${i % 2 === 0 ? "spin" : "spin-reverse"} ${
                  20 + i * 5
                }s linear infinite`,
              }}
            />
          ))} */}

          {/* Energy Lines */}
          {[...Array(6)].map((_, i) => (
            <Box
              key={i}
              sx={{
                position: "absolute",
                width: 2,
                height: 80,
                background:
                  "linear-gradient(to bottom, #3b82f655, transparent)",
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
                    backgroundColor: "#0199D3",
                    border: "1px solid #ffffff33",
                    boxShadow: 4,
                    transition: "all 0.4s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      backgroundColor: "#0199D3",
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
                        background:
                          "#0199D3",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: 3,
                      }}
                    >
                      <Icon color="#fff" size={24} />
                    </Box>
                  </Box>
                  <Typography
                    variant="subtitle1"
                    color="#fff!important"
                    textAlign="center"
                    fontWeight={600}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="#e5e7eb"
                    textAlign="center"
                    display="block"
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
                      backgroundColor: "#4369E3",
                      boxShadow: 2,
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
                          background:
                            "linear-gradient(to bottom right, #3b82f6, #9333ea)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Icon color="#fff" size={24} />
                      </Box>
                    </Box>
                    <Typography
                      variant="subtitle1"
                      color="#fff"
                      textAlign="center"
                      fontWeight={600}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="#e5e7eb"
                      textAlign="center"
                      display="block"
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
      <Grid
        container
        spacing={4}
        justifyContent="center"
        // sx={{ mt: 8 }}
        className="fade-in"
      >
        {[
          {
            number: "200+",
            label: "Solutions",
            gradient: "linear-gradient(to right, #3b82f6, #2563eb)",
          },
          {
            number: "1800+",
            label: "Engineers",
            gradient: "linear-gradient(to right, #0199D3, #0199D3)",
          },
          {
            number: "250+",
            label: "Architects",
            gradient: "linear-gradient(to right, #3b82f6, #2563eb)",
          },
          {
            number: "15",
            label: "Global Centers",
            gradient: "linear-gradient(to right, #0199D3, #0199D3)",
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
                // bgcolor: "#ffffffcc",
                backdropFilter: "blur(10px)",
                border: "1px solid #e0e0e066",
                "&:hover": {
                  transform: "scale(1.05)",
                  transition: "all 0.3s",
                },
              }}
            >
              <Typography
                variant="h5"
                fontWeight={300}
                sx={{
                 
                  WebkitBackgroundClip: "text",
                  color: "white!important",
                  mb: 1,
                }}
              >
                {stat.number}
              </Typography>
              <Typography variant="caption" sx={{ color: "#fff!important" }}>
                {stat.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Global styles moved to separate component */}
      <style>{`
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
