import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const slides = [
  {
    id: 1,
    title: "Generative AI That Redefines Possibility",
    accent: "#667eea",
    backgroundImage:
      "/herosectionimages/engineers-brainstorming-ways-use-ai.jpg",
  },
  {
    id: 2,
    title: "Unleash the Power of Agentic AI",
    accent: "#4facfe",
    backgroundImage: "/herosectionimages/woman-scrolling-laptop.jpg",
  },
  {
    id: 3,
    title: "Scalable Cloud & Application Services",
    accent: "#a8edea",
    backgroundImage: "/herosectionimages/saas-concept-collage.jpg",
  },
  {
    id: 4,
    title: "Accelerate Your Digital Journey",
    accent: "#ff9a9e",
    backgroundImage: "/modernisation.webp",
  },
];

const HeroSection = () => {
  const smootherRef = useRef(null);
  const pinWrapRef = useRef(null);
  const slidesRowRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!pinWrapRef.current || !slidesRowRef.current) return;

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // Create smooth scrolling for the entire page
    const smoother = ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });

    // Store smoother reference
    smootherRef.current = smoother;

    // Create the main timeline for horizontal slide movement
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pinWrapRef.current,
        start: "top top",
        end: "+=400vh",
        pin: true,
        scrub: 2,
        onUpdate: (self) => {
          const progress = self.progress;
          const slideIndex = Math.floor(progress * (slides.length - 1));
          setCurrentSlide(slideIndex);
        },
      },
    });

    // Animate the slides row horizontally with more cinematic timing
    tl.to(slidesRowRef.current, {
      x: `-${100 * (slides.length - 1)}vw`,
      ease: "power3.out",
      duration: 6,
    });

    // Add parallax effect to background images
    slides.forEach((_, index) => {
      const slideElement = slidesRowRef.current?.children[index];
      if (slideElement) {
        const bgImage = slideElement.querySelector(".parallax-bg");
        if (bgImage) {
          gsap.to(bgImage, {
            y: -80,
            ease: "power2.out",
            scrollTrigger: {
              trigger: slideElement,
              start: "top bottom",
              end: "bottom top",
              scrub: 3,
            },
          });
        }
      }
    });

    // Add entrance animations for each slide with more cinematic timing
    slides.forEach((_, index) => {
      const slideElement = slidesRowRef.current?.children[index];
      if (slideElement) {
        const title = slideElement.querySelector(".slide-title");
        const content = slideElement.querySelector(".slide-content");

        if (title && content) {
          // Initial state
          gsap.set([title, content], {
            opacity: 0,
            y: 120,
            scale: 0.8,
          });

          // Animate in when slide becomes active with more dramatic timing
          ScrollTrigger.create({
            trigger: slideElement,
            start: "top center",
            onEnter: () => {
              gsap.to(content, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 3,
                ease: "power3.out",
                delay: 0.8,
              });
              gsap.to(title, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 3.5,
                ease: "power3.out",
                delay: 1.5,
              });
            },
            onLeave: () => {
              gsap.to([title, content], {
                opacity: 0,
                y: -60,
                scale: 0.9,
                duration: 2,
                ease: "power3.in",
              });
            },
            onEnterBack: () => {
              gsap.to(content, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 3,
                ease: "power3.out",
                delay: 0.8,
              });
              gsap.to(title, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 3.5,
                ease: "power3.out",
                delay: 1.5,
              });
            },
            onLeaveBack: () => {
              gsap.to([title, content], {
                opacity: 0,
                y: 60,
                scale: 0.9,
                duration: 2,
                ease: "power3.in",
              });
            },
          });
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      if (smoother) smoother.kill();
    };
  }, [slides.length]);

  const handleNavigationClick = (index) => {
    if (smootherRef.current) {
      // Scroll to the correct vertical position for the slide
      const y = index * window.innerHeight;
      smootherRef.current.scrollTo(y, true, "top top");
    }
  };

  return (
    <>
      {/* Pinning wrapper with NO extra space below. Height is exactly 100vh for zero white space. */}
      <Box
        ref={pinWrapRef}
        sx={{
          position: "relative",
          height: "100vh", // Exactly 1 * 100vh for zero white space
          width: "100vw",
          overflow: "hidden",
          margin: 0,
          padding: 0,
          border: 0,
          boxSizing: "border-box",
        }}
      >
        {/* Horizontally sliding row */}
        <Box
          ref={slidesRowRef}
          sx={{
            display: "flex",
            flexDirection: "row",
            width: `${slides.length * 100}vw`,
            height: "100vh",
            position: "sticky",
            top: 0,
            left: 0,
            zIndex: 2,
            margin: 0,
            padding: 0,
            border: 0,
          }}
        >
          {slides.map((slide, idx) => (
            <Box
              key={slide.id}
              sx={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
                margin: 0,
                padding: 0,
                border: 0,
              }}
            >
              {/* Background Image with Enhanced Parallax Effect */}
              {slide.backgroundImage && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 1,
                    transform: "scale(1.2)",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.8) 100%)`,
                      zIndex: 2,
                    },
                  }}
                >
                  <img
                    src={slide.backgroundImage}
                    alt={slide.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: "brightness(0.8) contrast(1.2) blur(3px)",
                      transform: "translateY(0px)",
                      transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                    className="parallax-bg"
                  />
                </Box>
              )}

              {/* Content */}
              <Container
                maxWidth="xl"
                sx={{ position: "relative", zIndex: 3, margin: 0, padding: 0 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100vh",
                    padding: { xs: "0 1.5rem", md: "0 3rem" },
                    margin: 0,
                    padding: 0,
                  }}
                >
                  {/* Centered Content with Enhanced Animation */}
                  <Box
                    sx={{
                      maxWidth: "900px",
                      zIndex: 4,
                      position: "relative",
                      margin: 0,
                      padding: 0,
                      textAlign: "center",
                    }}
                    className="slide-content"
                  >
                    {/* Main Title with Enhanced Animation */}
                    <Typography
                      className="slide-title"
                      variant="h1"
                      sx={{
                        color: "#FFFFFF !important",
                        fontSize: {
                          xs: "2.5rem",
                          sm: "3.5rem",
                          md: "4.5rem",
                          lg: "5.5rem",
                        },
                        fontWeight: 700,
                        lineHeight: { xs: 1.1, md: 1.05 },
                        margin: 0,
                        padding: 0,
                        letterSpacing: "-0.02em",
                        fontFamily: "'Inter', sans-serif",
                        transform: "translateY(0px)",
                        transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                        textShadow:
                          "0 4px 12px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)",
                        filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4))",
                      }}
                    >
                      {slide.title}
                    </Typography>
                  </Box>
                </Box>
              </Container>
            </Box>
          ))}
        </Box>
      </Box>
      {/* Navigation Dots */}
      <Box
        sx={{
          position: "fixed",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 1,
          zIndex: 20,
          margin: 0,
          padding: 0,
        }}
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            onClick={() => handleNavigationClick(index)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background:
                index === currentSlide ? "#FFD700" : "rgba(255, 215, 0, 0.3)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                background:
                  index === currentSlide ? "#FFA500" : "rgba(255, 215, 0, 0.5)",
                transform: "scale(1.3)",
              },
              margin: 0,
              padding: 0,
            }}
          />
        ))}
      </Box>
      {/* Scroll Indicator */}
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          right: 30,
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "#FFD700",
          opacity: 0.8,
          zIndex: 20,
          margin: 0,
          padding: 0,
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            mb: 2,
            margin: 0,
            padding: 0,
            color: "#FFD700",
          }}
        >
          Scroll
        </Typography>
        <Box
          sx={{
            width: 2,
            height: 80,
            background: "rgba(255, 215, 0, 0.2)",
            borderRadius: 1,
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: `${(currentSlide / (slides.length - 1)) * 100}%`,
              background: "#FFD700",
              borderRadius: 1,
              transition: "height 0.3s ease",
            },
            margin: 0,
            padding: 0,
          }}
        />
      </Box>
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slideInFromRight {
          0% {
            opacity: 0;
            transform: translateX(60px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes slideInFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-60px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes zoomIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes parallaxMove {
          0% {
            transform: translateY(0px) scale(1.2);
          }
          100% {
            transform: translateY(-20px) scale(1.2);
          }
        }

        .slide-content {
          animation: fadeInUp 4s cubic-bezier(0.4, 0, 0.2, 1) 1s both;
        }

        .slide-title {
          animation: slideInFromRight 4.5s cubic-bezier(0.4, 0, 0.2, 1) 2s both;
        }

        .parallax-bg {
          animation: parallaxMove 60s ease-in-out infinite alternate;
        }

        /* Slide transition effects */
        .slide-enter {
          opacity: 0;
          transform: translateX(100%);
        }

        .slide-enter-active {
          opacity: 1;
          transform: translateX(0%);
          transition: all 2.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .slide-exit {
          opacity: 1;
          transform: translateX(0%);
        }

        .slide-exit-active {
          opacity: 0;
          transform: translateX(-100%);
          transition: all 2.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Hover effects */
        .slide-title:hover {
          transform: scale(1.02);
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Responsive parallax */
        @media (max-width: 768px) {
          .parallax-bg {
            animation: parallaxMove 35s ease-in-out infinite alternate;
          }
        }
      `}</style>
    </>
  );
};

export default HeroSection;
