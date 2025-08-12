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
    backgroundImage: "/herosectionimages/New ONES/2.webp",
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
    backgroundImage: "/herosectionimages/Data Driven intelleigence solution.webp",
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
    backgroundImage: "/herosectionimages/New ONES/1.webp",
  },
  {
    id: 9,
    title: "Digital Technology Solutions",
    subtitle:
      "Embrace the future with cutting-edge digital technology that transforms your business operations.",
    ctaText: "Explore Digital Tech",
    ctaLink: "/digital-technology",
    accent: "#667eea",
    backgroundImage: "/herosectionimages/Digital Technology.webp",
  },
  {
    id: 10,
    title: "Cloud Computing Excellence",
    subtitle:
      "Scalable cloud solutions that drive innovation and accelerate your digital transformation journey.",
    ctaText: "Cloud Solutions",
    ctaLink: "/cloud-solutions",
    accent: "#4facfe",
    backgroundImage: "/herosectionimages/cloud.webp",
  },
  {
    id: 11,
    title: "Digital Journey Transformation",
    subtitle:
      "Navigate your digital transformation with expert guidance and proven methodologies.",
    ctaText: "Start Transformation",
    ctaLink: "/digital-journey",
    accent: "#a8edea",
    backgroundImage: "/herosectionimages/New ONES/3.webp",
  },
  {
    id: 12,
    title: "Digital Partnership Excellence",
    subtitle:
      "Partner with us to build lasting digital solutions that drive growth and innovation.",
    ctaText: "Partner With Us",
    ctaLink: "/partnership",
    accent: "#ff9a9e",
    backgroundImage: "/herosectionimages/New ONES/4.webp",
  },
  {
    id: 13,
    title: "Scalable Cloud & Application Services",
    subtitle:
      "Enterprise-grade cloud and application services designed for scale and performance.",
    ctaText: "Cloud Services",
    ctaLink: "/cloud-services",
    accent: "#667eea",
    backgroundImage: "/herosectionimages/Sliders/cloud.webp",
  },
  {
    id: 14,
    title: "Agentic AI Solutions",
    subtitle:
      "Intelligent AI agents that automate complex tasks and drive business efficiency.",
    ctaText: "AI Solutions",
    ctaLink: "/ai-solutions",
    accent: "#4facfe",
    backgroundImage: "/herosectionimages/New ONES/5.webp",
  },
  {
    id: 15,
    title: "Cybersecurity Excellence",
    subtitle:
      "Advanced security solutions that protect your digital assets and ensure business continuity.",
    ctaText: "Security Solutions",
    ctaLink: "/security",
    accent: "#a8edea",
    backgroundImage: "/herosectionimages/New ONES/6.webp",
  },
  {
    id: 16,
    title: "Data & Analytics Intelligence",
    subtitle:
      "Transform raw data into actionable insights that drive strategic business decisions.",
    ctaText: "Data Solutions",
    ctaLink: "/data-analytics",
    accent: "#ff9a9e",
    backgroundImage: "/herosectionimages/Data & Analytics.webp",
  },
  {
    id: 17,
    title: "Data-Driven Intelligence Solutions",
    subtitle:
      "Leverage the power of data to create intelligent solutions that drive business growth.",
    ctaText: "Intelligence Solutions",
    ctaLink: "/intelligence-solutions",
    accent: "#667eea",
    backgroundImage: "/herosectionimages/New ONES/7.webp",
  },
  {
    id: 18,
    title: "Advanced Technology Solutions",
    subtitle:
      "Cutting-edge technology solutions that keep you ahead of the competition.",
    ctaText: "Tech Solutions",
    ctaLink: "/technology-solutions",
    accent: "#4facfe",
    backgroundImage: "/herosectionimages/New ONES/8.webp",
  },
  {
    id: 19,
    title: "Innovation & Growth",
    subtitle:
      "Drive innovation and accelerate growth with our comprehensive technology solutions.",
    ctaText: "Innovate Now",
    ctaLink: "/innovation",
    accent: "#a8edea",
    backgroundImage: "/herosectionimages/3.webp",
  },
  {
    id: 20,
    title: "Digital Excellence",
    subtitle:
      "Achieve digital excellence with our comprehensive suite of technology solutions.",
    ctaText: "Achieve Excellence",
    ctaLink: "/excellence",
    accent: "#ff9a9e",
    backgroundImage: "/herosectionimages/4.webp",
  },
  {
    id: 21,
    title: "Cloud Innovation Hub",
    subtitle:
      "Your hub for cloud innovation and digital transformation excellence.",
    ctaText: "Cloud Innovation",
    ctaLink: "/cloud-innovation",
    accent: "#667eea",
    backgroundImage: "/herosectionimages/Sliders/3.webp",
  },
  {
    id: 22,
    title: "Advanced Digital Solutions",
    subtitle:
      "Next-generation digital solutions that transform your business landscape.",
    ctaText: "Digital Solutions",
    ctaLink: "/digital-solutions",
    accent: "#4facfe",
    backgroundImage: "/herosectionimages/Sliders/4.webp",
  },
  {
    id: 23,
    title: "Technology Leadership",
    subtitle:
      "Lead the way with innovative technology solutions that drive business success.",
    ctaText: "Lead with Tech",
    ctaLink: "/technology-leadership",
    accent: "#a8edea",
    backgroundImage: "/herosectionimages/Sliders/5.webp",
  },
  {
    id: 24,
    title: "Digital Technology Excellence",
    subtitle:
      "Excellence in digital technology solutions that power your business future.",
    ctaText: "Digital Excellence",
    ctaLink: "/digital-excellence",
    accent: "#ff9a9e",
    backgroundImage: "/herosectionimages/Sliders/Digital Technology.webp",
  },
  {
    id: 25,
    title: "Cloud Computing Solutions",
    subtitle:
      "Comprehensive cloud computing solutions that scale with your business needs.",
    ctaText: "Cloud Computing",
    ctaLink: "/cloud-computing",
    accent: "#667eea",
    backgroundImage: "/herosectionimages/5.webp",
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
                  position: "relative",
                  padding: "2rem",
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
                    textShadow: "0 2px 8px rgba(0,0,0,0.3)",
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
                    textShadow: "0 1px 4px rgba(0,0,0,0.2)",
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
