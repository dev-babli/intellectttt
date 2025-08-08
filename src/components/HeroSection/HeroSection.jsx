import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "74% Faster Software Delivery: Agentic AI in the Wild",
    subtitle:
      "How one 'simple' change request shrank from seven weeks to ten days — and what that means for every enterprise SDLC.",
    ctaText: "Read More",
    ctaLink: "/service/ai-and-gen-ai",
    accent: "#667eea",
    backgroundImage: "/herosectionimages/Agentic Ai.webp",
  },
  {
    id: 2,
    title: "Unleash the Power of Agentic AI",
    subtitle:
      "Intelligent automation that learns, adapts, and grows with your business needs.",
    ctaText: "Discover Agentic AI",
    ctaLink: "/service/ai-and-gen-ai/agents",
    accent: "#4facfe",
    backgroundImage: "/herosectionimages/Agentic Ai.webp",
  },
  {
    id: 3,
    title: "Scalable Cloud & Application Services",
    subtitle:
      "Modern solutions built for the digital age with enterprise-grade reliability and performance.",
    ctaText: "View Cloud Services",
    ctaLink: "/service/cloud-and-application-services",
    accent: "#a8edea",
    backgroundImage: "/herosectionimages/Scalable Cloud and Application.webp",
  },
  {
    id: 4,
    title: "Accelerate Your Digital Journey",
    subtitle:
      "From vision to reality, faster than ever with our comprehensive solutions and expertise.",
    ctaText: "Start Your Journey",
    ctaLink: "/contact",
    accent: "#ff9a9e",
    backgroundImage: "/herosectionimages/Digital Journey.webp",
  },
  {
    id: 5,
    title: "Data-Driven Intelligence Solutions",
    subtitle:
      "Transform your business with advanced analytics and AI-powered insights that drive strategic decisions.",
    ctaText: "Explore Data Solutions",
    ctaLink: "/service/data-and-analytics",
    accent: "#667eea",
    backgroundImage:
      "/herosectionimages/Data Driven intelleigence solution.webp",
  },
  {
    id: 6,
    title: "Cybersecurity Excellence",
    subtitle:
      "Protect your digital assets with cutting-edge security solutions and proactive threat detection.",
    ctaText: "Secure Your Business",
    ctaLink: "/cybersecurity",
    accent: "#4facfe",
    backgroundImage: "/herosectionimages/Cyber Security.webp",
  },
  {
    id: 7,
    title: "Digital Transformation Partner",
    subtitle:
      "Navigate the future with confidence through our comprehensive digital transformation services.",
    ctaText: "Transform Now",
    ctaLink: "/digital-transformation",
    accent: "#a8edea",
    backgroundImage: "/herosectionimages/Digital Partner.webp",
  },
  {
    id: 8,
    title: "Innovation at Scale",
    subtitle:
      "Leverage emerging technologies to create sustainable competitive advantages for your organization.",
    ctaText: "Innovate Today",
    ctaLink: "/innovation",
    accent: "#ff9a9e",
    backgroundImage: "/herosectionimages/Data & Analytics.webp",
  },
];

const HeroSection = () => {
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        const nextSlide = (currentSlide + 1) % slides.length;
        setCurrentSlide(nextSlide);
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  // Animate slide transitions with parallax effects
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Animate text elements with parallax effect
    const currentSlideElement = container.querySelector(
      `[data-slide="${currentSlide}"]`
    );
    if (currentSlideElement) {
      const title = currentSlideElement.querySelector(".slide-title");
      const subtitle = currentSlideElement.querySelector(".slide-subtitle");
      const cta = currentSlideElement.querySelector(".slide-cta");
      const bgImage = currentSlideElement.querySelector(".bg-image");

      // Reset all text elements with enhanced parallax starting positions
      gsap.set([title, subtitle, cta], {
        opacity: 0,
        y: 100, // Increased starting position for more dramatic parallax
      });

      // Animate background image with enhanced parallax
      if (bgImage) {
        gsap.set(bgImage, {
          scale: 1.2,
          y: -40,
        });

        gsap.to(bgImage, {
          scale: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
        });
      }

      // Animate text in with enhanced staggered parallax effect
      gsap.to(title, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
      });

      gsap.to(subtitle, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.4,
      });

      gsap.to(cta, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.8,
      });
    }
  }, [currentSlide]);

  // Manual navigation
  const goToSlide = (index) => {
    if (!isAnimating && index !== currentSlide) {
      setCurrentSlide(index);
    }
  };

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
      {/* Slides Container */}
      <Box
        className="slides-container"
        sx={{
          position: "relative",
          height: "100vh",
          width: "100vw",
        }}
      >
        {slides.map((slide, index) => (
          <Box
            key={slide.id}
            data-slide={index}
            className="slide"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              opacity: currentSlide === index ? 1 : 0,
              visibility: currentSlide === index ? "visible" : "hidden",
              transition: "opacity 1s ease-out, visibility 1s ease-out",
            }}
          >
            {/* Background Image with Parallax */}
            <Box
              className="bg-image"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 1,
              }}
            >
              <img
                src={slide.backgroundImage}
                alt={slide.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(0.9) contrast(1.1) saturate(1.1)",
                }}
              />
              {/* Stronger gradient overlay for better text readability */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: `linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.7) 100%)`,
                  zIndex: 2,
                }}
              />
            </Box>

            {/* Content Container */}
            <Container
              maxWidth="xl"
              sx={{
                position: "relative",
                zIndex: 3,
                display: "flex",
                alignItems: "center",
                height: "100%",
                padding: "0 2rem",
              }}
            >
              {/* Left Side - Text Content */}
              <Box
                sx={{
                  flex: 1,
                  maxWidth: "800px",
                  color: "#ffffff",
                }}
              >
                <Typography
                  className="slide-title"
                  variant="h1"
                  sx={{
                    fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
                    fontWeight: 700,
                    lineHeight: 1.1,
                    marginBottom: "1.5rem",
                    fontFamily: "'SF Pro Display', 'Inter', sans-serif",
                    letterSpacing: "-0.02em",
                    color: "#ffffff !important",
                    textShadow: "0 4px 12px rgba(0,0,0,0.8)",
                  }}
                >
                  {slide.title}
                </Typography>

                <Typography
                  className="slide-subtitle"
                  variant="h5"
                  sx={{
                    fontSize: { xs: "1.1rem", md: "1.3rem", lg: "1.4rem" },
                    fontWeight: 400,
                    lineHeight: 1.5,
                    marginBottom: "3rem",
                    fontFamily: "'SF Pro Display', 'Inter', sans-serif",
                    letterSpacing: "-0.01em",
                    color: "#ffffff !important",
                    opacity: 0.9,
                    textShadow: "0 2px 8px rgba(0,0,0,0.7)",
                    maxWidth: "600px",
                  }}
                >
                  {slide.subtitle}
                </Typography>

                <Button
                  className="slide-cta"
                  variant="contained"
                  size="large"
                  onClick={() => navigate(slide.ctaLink)}
                  sx={{
                    backgroundColor: "#dc2626",
                    color: "#ffffff",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    padding: "1rem 2rem",
                    borderRadius: "8px",
                    textTransform: "none",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    "&:hover": {
                      backgroundColor: "#b91c1c",
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                    },
                  }}
                >
                  {slide.ctaText}
                  <span style={{ marginLeft: "0.5rem", fontSize: "1rem" }}>
                    →
                  </span>
                </Button>
              </Box>
            </Container>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HeroSection;
