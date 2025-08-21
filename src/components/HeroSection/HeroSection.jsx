import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "AI & GenAI Solutions",
    subtitle: "Harness the power of AI and GenAI to unlock new growth opportunities. Transform your business with cutting-edge AI solutions that drive innovation and accelerate growth across all industries.",
    ctaText: "Explore AI Solutions",
    ctaLink: "/service/ai-and-gen-ai",
    accent: "#667eea",
    backgroundImage: "/herosectionimages/Intellectt SE Sliders/Agentic AI.webp",
    hasLightBackground: false,
  },
  {
    id: 2,
    title: "Engineering Excellence",
    subtitle: "Comprehensive engineering services for product development and manufacturing. We lead in R&D and new product development, specializing in design, prototyping, and testing across industries.",
    ctaText: "Engineering Services",
    ctaLink: "/service/engineering-services",
    accent: "#4facfe",
    backgroundImage: "/herosectionimages/Intellectt SE Sliders/1 eng.webp",
    hasLightBackground: true,
  },

  {
    id: 3,
    title: "Generative AI Innovation",
    subtitle: "Unlock creative potential with generative AI technologies. From content creation to product design, our GenAI solutions revolutionize how businesses approach innovation and creativity.",
    ctaText: "Explore GenAI",
    ctaLink: "/service/ai-and-gen-ai",
    accent: "#ff9a9e",
    backgroundImage: "/herosectionimages/Intellectt SE Sliders/Agentic Ai-3.webp",
    hasLightBackground: false,
  },
  {
    id: 4,
    title: "Advanced Manufacturing",
    subtitle: "Revolutionize manufacturing with cutting-edge engineering solutions. From precision engineering to smart manufacturing systems, we deliver innovative solutions that optimize production and quality.",
    ctaText: "Manufacturing Solutions",
    ctaLink: "/service/engineering-services",
    accent: "#ff9a9e",
    backgroundImage: "/herosectionimages/Intellectt SE Sliders/2 eng.webp",
    hasLightBackground: true,
  },
  {
    id: 5,
    title: "AI-Powered Analytics",
    subtitle: "Transform data into actionable intelligence with AI-driven analytics. Our advanced algorithms provide deep insights, predictive modeling, and automated reporting for informed decision-making.",
    ctaText: "Analyze with AI",
    ctaLink: "/service/ai-and-gen-ai",
    accent: "#a8edea",
    backgroundImage: "/herosectionimages/Intellectt SE Sliders/Agentic Ai-4.webp",
    hasLightBackground: false,
  },
  {
    id: 6,
    title: "Engineering Excellence",
    subtitle: "Pioneering engineering solutions that drive technological advancement. Our multidisciplinary approach combines mechanical, electrical, and software engineering to create breakthrough innovations.",
    ctaText: "Engineer with Us",
    ctaLink: "/service/engineering-services",
    accent: "#667eea",
    backgroundImage: "/herosectionimages/Intellectt SE Sliders/innovation.webp",
    hasLightBackground: false,
  },
  {
    id: 7,
    title: "Intelligent Automation",
    subtitle: "Streamline operations with intelligent automation solutions. From robotic process automation to cognitive automation, we help businesses achieve unprecedented efficiency and accuracy.",
    ctaText: "Automate Now",
    ctaLink: "/service/ai-and-gen-ai",
    accent: "#667eea",
    backgroundImage: "/herosectionimages/Intellectt SE Sliders/Agentic Ai-5.webp",
    hasLightBackground: false,
  },
  {
    id: 8,
    title: "Cloud & Application Services",
    subtitle: "Accelerate growth with scalable, secure cloud platforms. Build robust, scalable applications with enterprise-grade cloud infrastructure and modern development practices.",
    ctaText: "Discover Cloud Services",
    ctaLink: "/service/cloud-and-application-services",
    accent: "#4facfe",
    backgroundImage: "/herosectionimages/Intellectt SE Sliders/Cloud Application.webp",
    hasLightBackground: false,
  },
  {
    id: 9,
    title: "Cybersecurity",
    subtitle: "Protect your digital assets with intelligent security frameworks. Safeguard your organization with advanced cybersecurity solutions and proactive threat detection systems.",
    ctaText: "Secure Your Business",
    ctaLink: "/cybersecurity",
    accent: "#ff9a9e",
    backgroundImage: "/herosectionimages/Intellectt SE Sliders/Cyber security.webp",
    hasLightBackground: false,
  },
  {
    id: 10,
    title: "Data & Analytics",
    subtitle: "Turn data into actionable insights for smarter decisions. Transform raw data into strategic insights that drive business growth and operational excellence.",
    ctaText: "Analyze Data",
    ctaLink: "/service/data-and-analytics",
    accent: "#667eea",
    backgroundImage: "/herosectionimages/Data Driven intelleigence solution.webp",
    hasLightBackground: false,
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
        height: { xs: "70vh", sm: "80vh", md: "90vh", lg: "100vh" },
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
          height: { xs: "70vh", sm: "80vh", md: "90vh", lg: "100vh" },
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
              height: { xs: "70vh", sm: "80vh", md: "90vh", lg: "100vh" },
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
                padding: { xs: "0 1rem", sm: "0 1.5rem", md: "0 2rem" },
              }}
            >
              {/* Left Side - Text Content */}
              <Box
                sx={{
                  flex: 1,
                  maxWidth: { xs: "100%", sm: "600px", md: "800px" },
                  color: slide.hasLightBackground ? "#1a1a1a" : "#ffffff",
                  position: "relative",
                  padding: { xs: "1rem", sm: "1.5rem", md: "2rem" },
                }}
              >
                <Typography
                  className="slide-title"
                  variant="h1"
                  sx={{
                    fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.5rem", lg: "3rem" },
                    fontWeight: 700,
                    lineHeight: { xs: 1.1, sm: 1.2 },
                    marginBottom: { xs: "1rem", sm: "1.5rem" },
                    fontFamily: "'SF Pro Display', 'Inter', sans-serif",
                    letterSpacing: "-0.02em",
                    color: slide.hasLightBackground ? "#1a1a1a !important" : "#ffffff !important",
                    textShadow: slide.hasLightBackground 
                      ? "0 2px 8px rgba(255,255,255,0.8)" 
                      : "0 2px 8px rgba(0,0,0,0.3)",
                    whiteSpace: 'normal',
                    overflow: 'visible',
                    textOverflow: 'unset',
                    maxWidth: { xs: "100%", sm: "600px" }
                  }}
                >
                  {slide.title}
                </Typography>

                <Typography
                  className="slide-subtitle"
                  variant="h5"
                  sx={{
                    fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem", lg: "1.1rem" },
                    fontWeight: 400,
                    lineHeight: { xs: 1.3, sm: 1.4 },
                    marginBottom: { xs: "2rem", sm: "3rem" },
                    fontFamily: "'SF Pro Display', 'Inter', sans-serif",
                    letterSpacing: "-0.01em",
                    color: slide.hasLightBackground ? "#333333 !important" : "#ffffff !important",
                    opacity: slide.hasLightBackground ? 0.8 : 0.9,
                    textShadow: slide.hasLightBackground 
                      ? "0 1px 4px rgba(255,255,255,0.6)" 
                      : "0 1px 4px rgba(0,0,0,0.2)",
                    maxWidth: { xs: "100%", sm: "500px" },
                    whiteSpace: 'normal',
                    overflow: 'visible',
                    textOverflow: 'unset'
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
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                    fontWeight: 600,
                    padding: { xs: "0.75rem 1.5rem", sm: "0.875rem 1.75rem", md: "1rem 2rem" },
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
                  <span style={{ marginLeft: "0.5rem", fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" } }}>
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
