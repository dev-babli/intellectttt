import React, { useEffect, useRef } from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const featureData = [
  {
    id: 1,
    title: "AI-Powered Analytics",
    description:
      "Transform raw data into actionable insights with advanced machine learning algorithms and real-time processing capabilities.",
    icon: "📊",
    color: "#3b82f6",
  },
  {
    id: 2,
    title: "Cloud Infrastructure",
    description:
      "Scalable, secure, and high-performance cloud solutions that adapt to your business needs and growth requirements.",
    icon: "☁️",
    color: "#10b981",
  },
  {
    id: 3,
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions with threat detection, encryption, and compliance management for enterprise protection.",
    icon: "🔒",
    color: "#f59e0b",
  },
  {
    id: 4,
    title: "Digital Transformation",
    description:
      "End-to-end digital solutions that modernize legacy systems and accelerate your organization's digital journey.",
    icon: "🚀",
    color: "#8b5cf6",
  },
  {
    id: 5,
    title: "Data Engineering",
    description:
      "Robust data pipelines, ETL processes, and data warehousing solutions for enterprise-scale data management.",
    icon: "⚙️",
    color: "#ef4444",
  },
  {
    id: 6,
    title: "DevOps Automation",
    description:
      "Streamlined development workflows with CI/CD pipelines, containerization, and automated deployment strategies.",
    icon: "🔄",
    color: "#06b6d4",
  },
];

const FeatureCards = () => {
  const componentRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (!componentRef.current) return;

    // Main component animation
    gsap.fromTo(
      componentRef.current,
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
        ease: "power2.out",
        scrollTrigger: {
          trigger: componentRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Staggered card animations
    const cards = cardsRef.current;
    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 80,
          scale: 0.8,
          rotationX: 15,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power2.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: componentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleCardHover = (index, isEntering) => {
    const card = cardsRef.current[index];
    if (!card) return;

    if (isEntering) {
      gsap.to(card, {
        y: -12,
        scale: 1.02,
        rotationY: 2,
        duration: 0.4,
        ease: "power2.out",
      });
    } else {
      gsap.to(card, {
        y: 0,
        scale: 1,
        rotationY: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  };

  return (
    <Box
      ref={componentRef}
      sx={{
        background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)",
        padding: { xs: "5rem 0", md: "8rem 0" },
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
            "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.03) 0%, transparent 50%)",
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", marginBottom: "5rem" }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 700,
              color: "#1e293b",
              marginBottom: "1.5rem",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "-0.025em",
            }}
          >
            Our Capabilities
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1.1rem", md: "1.3rem" },
              fontWeight: 400,
              color: "#64748b",
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.7,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Comprehensive technology solutions designed to accelerate your
            digital transformation and drive business growth
          </Typography>
        </Box>

        {/* Feature Cards Grid */}
        <Grid container spacing={4}>
          {featureData.map((feature, index) => (
            <Grid item xs={12} sm={6} lg={4} key={feature.id}>
              <Paper
                ref={(el) => (cardsRef.current[index] = el)}
                elevation={0}
                sx={{
                  height: "100%",
                  background: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "20px",
                  padding: "2.5rem",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, ${feature.color}15 0%, transparent 100%)`,
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, ${feature.color}08 0%, transparent 50%)`,
                    borderRadius: "20px",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  },
                  "&:hover": {
                    "&::before": {
                      opacity: 1,
                    },
                    "&::after": {
                      opacity: 1,
                    },
                    boxShadow: `0 20px 40px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.05), 0 0 0 1px ${feature.color}20`,
                  },
                }}
                onMouseEnter={() => handleCardHover(index, true)}
                onMouseLeave={() => handleCardHover(index, false)}
              >
                {/* Icon */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "60px",
                    height: "60px",
                    borderRadius: "16px",
                    background: `linear-gradient(135deg, ${feature.color} 0%, ${feature.color}dd 100%)`,
                    marginBottom: "1.5rem",
                    fontSize: "1.5rem",
                    boxShadow: `0 8px 20px ${feature.color}30`,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.1) rotate(5deg)",
                      boxShadow: `0 12px 30px ${feature.color}40`,
                    },
                  }}
                >
                  {feature.icon}
                </Box>

                {/* Title */}
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: "#1e293b",
                    marginBottom: "1rem",
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: "-0.02em",
                    fontSize: "1.25rem",
                  }}
                >
                  {feature.title}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body1"
                  sx={{
                    color: "#64748b",
                    lineHeight: 1.6,
                    fontSize: "0.95rem",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {feature.description}
                </Typography>

                {/* Bottom accent line */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: `linear-gradient(90deg, ${feature.color} 0%, ${feature.color}dd 100%)`,
                    borderRadius: "0 0 20px 20px",
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  className="card-accent"
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <style jsx>{`
        .card-accent {
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .MuiPaper-root:hover .card-accent {
          transform: scaleX(1);
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .MuiPaper-root:hover {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </Box>
  );
};

export default FeatureCards;
