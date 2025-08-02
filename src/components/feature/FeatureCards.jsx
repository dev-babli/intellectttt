import React, { useEffect, useRef } from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import sIcon1 from "../../images/industrie/img01.png";
import sIcon2 from "../../images/industrie/img02.png";
import sIcon3 from "../../images/industrie/img03.png";
import sIcon4 from "../../images/industrie/img04.png";
import sIcon5 from "../../images/industrie/img05.png";
import sIcon6 from "../../images/industrie/img06.png";
import sIcon7 from "../../images/industrie/img07.png";
import sIcon8 from "../../images/industrie/img08.png";
import sIcon9 from "../../images/industrie/img09.png";
import sIcon10 from "../../images/industrie/img10.png";

gsap.registerPlugin(ScrollTrigger);

const industryData = [
  {
    id: 1,
    title: "SaaS",
    description:
      "Innovative software-as-a-service solutions for modern businesses",
    icon: sIcon1,
    color: "#3b82f6",
    route: "/service/cloud-and-application-services",
  },
  {
    id: 2,
    title: "Lawyers",
    description:
      "Legal technology solutions for law firms and legal professionals",
    icon: sIcon2,
    color: "#10b981",
    route: "/service/digital-transformation",
  },
  {
    id: 3,
    title: "Real Estate",
    description: "Digital transformation solutions for real estate industry",
    icon: sIcon3,
    color: "#f59e0b",
    route: "/service/digital-transformation",
  },
  {
    id: 4,
    title: "Insurance",
    description: "Advanced technology solutions for insurance companies",
    icon: sIcon4,
    color: "#8b5cf6",
    route: "/service/digital-transformation",
  },
  {
    id: 5,
    title: "Crypto",
    description: "Blockchain and cryptocurrency technology solutions",
    icon: sIcon5,
    color: "#ef4444",
    route: "/service/ai-and-gen-ai",
  },
  {
    id: 6,
    title: "Private Equity",
    description: "Technology solutions for private equity firms",
    icon: sIcon6,
    color: "#06b6d4",
    route: "/service/data-and-analytics",
  },
  {
    id: 7,
    title: "Education",
    description: "EdTech solutions for educational institutions",
    icon: sIcon7,
    color: "#84cc16",
    route: "/service/ai-and-gen-ai",
  },
  {
    id: 8,
    title: "Finance",
    description: "Financial technology and digital banking solutions",
    icon: sIcon8,
    color: "#f97316",
    route: "/industries/banking-and-financial-services",
  },
  {
    id: 9,
    title: "Healthcare",
    description: "Healthcare technology and digital health solutions",
    icon: sIcon9,
    color: "#ec4899",
    route: "/industries/helthcare-and-life-sciences",
  },
  {
    id: 10,
    title: "Automotive",
    description: "Automotive technology and connected vehicle solutions",
    icon: sIcon10,
    color: "#6366f1",
    route: "/industries/menufacturing-and-automotive",
  },
];

const FeatureCards = () => {
  const componentRef = useRef(null);
  const cardsRef = useRef([]);
  const navigate = useNavigate();

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
        scale: 1.02,
        rotationY: 2,
        duration: 0.4,
        ease: "power2.out",
      });
    } else {
      gsap.to(card, {
        scale: 1,
        rotationY: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  };

  const handleCardClick = (route) => {
    navigate(route);
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
            Industries We Work
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
            Serving diverse industries with comprehensive technology solutions
          </Typography>
        </Box>

        {/* Industry Cards Grid */}
        <Grid container spacing={4}>
          {industryData.map((industry, index) => (
            <Grid item xs={12} sm={6} lg={4} key={industry.id}>
              <Paper
                ref={(el) => (cardsRef.current[index] = el)}
                elevation={0}
                onClick={() => handleCardClick(industry.route)}
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
                    background: `linear-gradient(135deg, ${industry.color}15 0%, transparent 100%)`,
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
                    background: `linear-gradient(135deg, ${industry.color}08 0%, transparent 50%)`,
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
                    boxShadow: `0 20px 40px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.05), 0 0 0 1px ${industry.color}20`,
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
                    background: `linear-gradient(135deg, ${industry.color} 0%, ${industry.color}dd 100%)`,
                    marginBottom: "1.5rem",
                    fontSize: "1.5rem",
                    boxShadow: `0 8px 20px ${industry.color}30`,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.1) rotate(5deg)",
                      boxShadow: `0 12px 30px ${industry.color}40`,
                    },
                  }}
                >
                  <img
                    src={industry.icon}
                    alt={industry.title}
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "contain",
                    }}
                  />
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
                  {industry.title}
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
                  {industry.description}
                </Typography>

                {/* Bottom accent line */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: `linear-gradient(90deg, ${industry.color} 0%, ${industry.color}dd 100%)`,
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
      `}</style>
    </Box>
  );
};

export default FeatureCards;
