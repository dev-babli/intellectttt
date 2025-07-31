import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    id: 1,
    title: "Generative AI That Redefines Possibility",
    subtitle:
      "Transform your business with cutting-edge AI solutions that adapt and evolve",
    accent: "#667eea",
    backgroundImage:
      "/herosectionimages/engineers-brainstorming-ways-use-ai.jpg",
    ctaText: "Explore AI Solutions",
    ctaLink: "/ai-solutions",
  },
  {
    id: 2,
    title: "Unleash the Power of Agentic AI",
    subtitle:
      "Intelligent automation that learns, adapts, and grows with your business",
    accent: "#4facfe",
    backgroundImage: "/herosectionimages/woman-scrolling-laptop.jpg",
    ctaText: "Discover Agentic AI",
    ctaLink: "/agentic-ai",
  },
  {
    id: 3,
    title: "Scalable Cloud & Application Services",
    subtitle:
      "Modern solutions built for the digital age with enterprise-grade reliability",
    accent: "#a8edea",
    backgroundImage: "/herosectionimages/saas-concept-collage.jpg",
    ctaText: "View Cloud Services",
    ctaLink: "/cloud-services",
  },
  {
    id: 4,
    title: "Accelerate Your Digital Journey",
    subtitle:
      "From vision to reality, faster than ever with our comprehensive solutions",
    accent: "#ff9a9e",
    backgroundImage: "/images/ai-interface-laptop.jpg",
    ctaText: "Start Your Journey",
    ctaLink: "/contact",
  },
];

const HeroSection = () => {
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    // Kill any existing ScrollTriggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Create a simple horizontal scroll animation
    const container = containerRef.current;
    const slidesContainer = container.querySelector(".slides-container");
    const slideElements = container.querySelectorAll(".slide");

    // Set initial positions
    gsap.set(slidesContainer, {
      x: 0,
      display: "flex",
      width: `${slides.length * 100}vw`,
    });

    gsap.set(slideElements, {
      width: "100vw",
      height: "100vh",
    });

    // Enhanced initial animation for first slide
    const firstSlide = slideElements[0];
    const firstTitle = firstSlide?.querySelector(".slide-title");
    const firstSubtitle = firstSlide?.querySelector(".slide-subtitle");
    const firstCta = firstSlide?.querySelector(".slide-cta");

    if (firstTitle && firstSubtitle && firstCta) {
      // Set initial state for first slide
      gsap.set([firstTitle, firstSubtitle, firstCta], {
        opacity: 0,
        y: 120,
        scale: 0.9,
        rotationX: 15,
      });

      // Create enhanced entrance animation
      const firstSlideTl = gsap.timeline({
        delay: 0.3,
      });

      // Animate background image with enhanced effects
      const firstBgImage = firstSlide?.querySelector(".bg-image");
      if (firstBgImage) {
        gsap.set(firstBgImage, {
          scale: 1.2,
          filter: "brightness(0.4) saturate(0.7)",
        });

        firstSlideTl.to(firstBgImage, {
          scale: 1,
          filter: "brightness(0.8) saturate(1.2)",
          duration: 2,
          ease: "power2.out",
        });
      }

      // Enhanced staggered text animation with 3D effects
      firstSlideTl.to(
        firstTitle,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 1.5,
          ease: "power3.out",
        },
        "-=1.5"
      );

      firstSlideTl.to(
        firstSubtitle,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 1.3,
          ease: "power3.out",
        },
        "-=1"
      );

      firstSlideTl.to(
        firstCta,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8"
      );
    }

    // Create the main scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: `+=${(slides.length - 1) * 100}vh`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const slideIndex = Math.floor(progress * (slides.length - 1));
          setCurrentSlide(slideIndex);
        },
      },
    });

    // Animate the slides container horizontally
    tl.to(slidesContainer, {
      x: `-${(slides.length - 1) * 100}vw`,
      ease: "none",
    });

    // Enhanced parallax effect to background images
    slideElements.forEach((slide, index) => {
      const bgImage = slide.querySelector(".bg-image");
        if (bgImage) {
          gsap.to(bgImage, {
          y: -60,
          scale: 1.05,
          ease: "none",
            scrollTrigger: {
            trigger: slide,
              start: "top bottom",
              end: "bottom top",
            scrub: 1,
            },
          });
      }
    });

    // Enhanced animations for all slides (including first slide for re-entry)
    slideElements.forEach((slide, index) => {
      const title = slide.querySelector(".slide-title");
      const subtitle = slide.querySelector(".slide-subtitle");
      const cta = slide.querySelector(".slide-cta");

      if (title && subtitle && cta) {
        // Set initial state for all slides
        gsap.set([title, subtitle, cta], {
            opacity: 0,
          y: 100,
          scale: 0.95,
          rotationX: 10,
          });

        // Create enhanced ScrollTrigger for each slide
          ScrollTrigger.create({
          trigger: slide,
          start: "center center",
            onEnter: () => {
            // Enhanced staggered animation with 3D effects
            gsap.to(title, {
              opacity: 1,
              y: 0,
              scale: 1,
              rotationX: 0,
              duration: 1.2,
              ease: "power3.out",
            });

            gsap.to(subtitle, {
                opacity: 1,
                y: 0,
                scale: 1,
              rotationX: 0,
              duration: 1.2,
                ease: "power3.out",
              delay: 0.3,
              });

            gsap.to(cta, {
                opacity: 1,
                y: 0,
                scale: 1,
              rotationX: 0,
              duration: 1,
                ease: "power3.out",
              delay: 0.6,
              });
            },
            onLeave: () => {
            // Enhanced fade out with 3D effects
            gsap.to([title, subtitle, cta], {
                opacity: 0,
              y: -50,
                scale: 0.9,
              rotationX: -10,
              duration: 0.8,
              ease: "power2.in",
              });
            },
            onEnterBack: () => {
            // Enhanced re-entry animation
            gsap.to(title, {
              opacity: 1,
              y: 0,
              scale: 1,
              rotationX: 0,
              duration: 1.2,
              ease: "power3.out",
            });

            gsap.to(subtitle, {
                opacity: 1,
                y: 0,
                scale: 1,
              rotationX: 0,
              duration: 1.2,
                ease: "power3.out",
              delay: 0.3,
              });

            gsap.to(cta, {
                opacity: 1,
                y: 0,
                scale: 1,
              rotationX: 0,
              duration: 1,
                ease: "power3.out",
              delay: 0.6,
              });
            },
            onLeaveBack: () => {
            // Enhanced fade out
            gsap.to([title, subtitle, cta], {
                opacity: 0,
              y: 50,
                scale: 0.9,
              rotationX: 10,
              duration: 0.8,
              ease: "power2.in",
              });
            },
          });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [slides.length]);

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
          display: "flex",
          height: "100vh",
          position: "relative",
        }}
      >
        {slides.map((slide, index) => (
            <Box
              key={slide.id}
            className="slide"
              sx={{
              position: "relative",
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
              justifyContent: "center",
                overflow: "hidden",
              }}
            >
            {/* Background Image */}
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
                  filter: "brightness(0.8) contrast(1.2) saturate(1.2)",
                }}
              />
              {/* Enhanced gradient overlay */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: `linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.8) 100%)`,
                  zIndex: 2,
                }}
                  />
                </Box>

              {/* Content */}
              <Container
                maxWidth="xl"
                    sx={{
                      position: "relative",
                zIndex: 3,
                      textAlign: "center",
                color: "#ffffff !important",
                    }}
                  >
              <Box className="slide-content">
                    <Typography
                      className="slide-title"
                      variant="h1"
                      sx={{
                    fontSize: { xs: "2.5rem", md: "4rem", lg: "5.5rem" },
                    fontWeight: 700,
                    lineHeight: 1.1,
                    marginBottom: "1.5rem",
                    fontFamily: "'SF Pro Display', 'Inter', sans-serif",
                    letterSpacing: "-0.03em",
                    color: "#ffffff !important",
                    textShadow: "0 4px 12px rgba(0,0,0,0.4)",
                    // Enhanced typography
                    "@media (min-width: 768px)": {
                      fontSize: "4.5rem",
                      fontWeight: 600,
                      letterSpacing: "-0.04em",
                      color: "#ffffff !important",
                    },
                    "@media (min-width: 1024px)": {
                      fontSize: "6rem",
                      fontWeight: 600,
                      letterSpacing: "-0.05em",
                      color: "#ffffff !important",
                    },
                      }}
                    >
                      {slide.title}
                    </Typography>

                <Typography
                  className="slide-subtitle"
                  variant="h5"
                  sx={{
                    fontSize: { xs: "1.1rem", md: "1.3rem", lg: "1.5rem" },
                    fontWeight: 400,
                    lineHeight: 1.4,
                    marginBottom: "3rem",
                    fontFamily: "'SF Pro Display', 'Inter', sans-serif",
                    letterSpacing: "-0.01em",
                    color: "#ffffff !important",
                    opacity: 0.9,
                    textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                    maxWidth: "800px",
                    margin: "0 auto 3rem auto",
                  }}
                >
                  {slide.subtitle}
                </Typography>

                <Button
                  className="slide-cta"
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "#ffffff",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    padding: "1rem 2.5rem",
                    borderRadius: "50px",
                    textTransform: "none",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.25)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
                    },
                  }}
                >
                  {slide.ctaText}
                </Button>
                </Box>
              </Container>
            </Box>
          ))}
      </Box>

      {/* Enhanced Progress Indicator */}
      <Box
        sx={{
          position: "fixed",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "0.5rem",
          zIndex: 10,
        }}
      >
        {slides.map((_, index) => (
          <Box
            key={index}
          sx={{
              width: currentSlide === index ? "3rem" : "1rem",
              height: "4px",
              backgroundColor:
                currentSlide === index ? "#ffffff" : "rgba(255, 255, 255, 0.3)",
              borderRadius: "2px",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default HeroSection;
