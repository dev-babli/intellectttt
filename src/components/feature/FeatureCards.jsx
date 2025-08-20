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
    image: "/Industry Card images/Healthcar and Lifesciences.webp",
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
    image: "/Industry Card images/Manufacturing and Automotive.webp",
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
    image: "/Industry Card images/Aerospace and Defense.webp",
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
    image: "/Industry Card images/Baking and Financial.webp",
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
    image: "/Industry Card images/Retail and Ecommerce.webp",
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
    image: "/Industry Card images/Energy and Utilities.webp",
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
    image: "/Industry Card images/Education and Training.webp",
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
    image: "/Industry Card images/Logotstic and Transportation.webp",
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
        background: "#ffffff",
        minHeight: "100vh",
        py: 8,
        px: { xs: 3, sm: 4, md: 6 },
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
          px: { xs: 1, sm: 2 },
          position: "relative",
        }}
      >

        <Typography
          ref={titleRef}
          variant="h1"
          sx={{
            color: "#1a1a1a",
            fontWeight: 800,
            fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.2rem", lg: "2.5rem" },
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
            /* Removed underline styling */
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
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
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
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          Innovative technology solutions for industry-specific challenges.
        </Typography>
      </Box>

      {/* Cards Grid */}
      <Box ref={cardsRef}>
        <Box
          sx={{
            maxWidth: "1400px",
            mx: "auto",
            px: { xs: 2, sm: 3, md: 4 },
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: { xs: "16px", sm: "24px", md: "32px" },
            justifyContent: "center",
          }}
        >
          {industries.map((industry, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link
                to={industry.url}
                style={{ textDecoration: "none", width: "100%" }}
                onClick={() => handleCardClick(industry.url)}
              >
                <Card
                  className="dimensional-card"
                  sx={{
                    width: "100%",
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

                  }}
                >


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
                          "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.5) 100%)",
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
                      fontSize: "0.9rem",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
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
                      fontSize: "1.4rem",
                      zIndex: 2,
                      fontFamily:
                        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                      letterSpacing: "-0.01em",
                      textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                    }}
                  >
                    {industry.title}
                  </Typography>


                </Card>
              </Link>
            </Box>
          ))}
        </Box>
      </Box>


    </Box>
  );
}

export default FeatureCards;
