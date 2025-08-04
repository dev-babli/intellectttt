import React, { useState, useEffect, useRef } from "react";
import {
  Tabs,
  Tab,
  Box,
  Typography,
  Button,
  useMediaQuery,
  Container,
  Paper,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const tabData = [
  {
    label: "Data Collection",
    title: "Data Collection & Processing",
    description:
      "Gather and process structured and unstructured data from multiple sources including databases, APIs, documents, and real-time streams for AI analysis.",
    image: "/video/Ai.mp4",
    href: "/service/data-and-analytics",
    gradient: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L2 7L12 12L22 7L12 2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 17L12 22L22 17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 12L12 17L22 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Model Development",
    title: "AI Model Development",
    description:
      "Train machine learning models and fine-tune LLMs using advanced algorithms and neural network architectures for intelligent automation.",
    image: "/video/cld.mp4",
    href: "/service/ai-and-gen-ai",
    gradient: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 12L11 14L15 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M12 7V12L15 15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "System Integration",
    title: "System Integration & Deployment",
    description:
      "Integrate AI solutions with existing enterprise systems and deploy scalable cloud infrastructure for seamless operations.",
    image: "/video/shap.mp4",
    href: "/service/cloud-and-application-services",
    gradient: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 13A5 5 0 0 0 7.355 14.645L5.5 16.5A1.5 1.5 0 0 0 5.5 19.5L7.355 21.355A5 5 0 0 0 10 23"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 13A5 5 0 0 1 16.645 14.645L18.5 16.5A1.5 1.5 0 0 1 18.5 19.5L16.645 21.355A5 5 0 0 1 14 23"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 7V13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 3V7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Analytics & Insights",
    title: "Analytics & Business Insights",
    description:
      "Generate actionable insights through advanced data analytics, real-time dashboards, and AI-powered decision-making capabilities.",
    image: "/video/data.mp4",
    href: "/service/data-and-analytics",
    gradient: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 3V21H21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 9L12 6L16 10L21 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 5V9H17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function TabsComponent() {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const activeTab = tabData[value];
  const componentRef = useRef(null);
  const tabsRef = useRef(null);
  const contentRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!componentRef.current) return;

    // Creative component animation
    gsap.fromTo(
      componentRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: componentRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Creative tabs animation
    const tabs = tabsRef.current?.querySelectorAll('[role="tab"]');
    if (tabs) {
      gsap.fromTo(
        tabs,
        {
          opacity: 0,
          y: 30,
          scale: 0.8,
          rotation: -5,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.3,
        }
      );
    }

    // Creative content animation
    gsap.fromTo(
      contentRef.current,
      {
        opacity: 0,
        y: 40,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.5,
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    // Creative content change animation
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          x: 20,
          scale: 0.95,
          rotationY: 10,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          rotationY: 0,
          duration: 0.6,
          ease: "power3.out",
        }
      );
    }
  };

  const handleLearnMoreClick = () => {
    // Scroll to top before navigation
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Navigate to the page
    navigate(activeTab.href);
  };

  return (
    <Box
      ref={componentRef}
      sx={{
        background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
        padding: { xs: "5rem 0", md: "7rem 0" },
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
            "radial-gradient(circle at 30% 70%, rgba(1, 153, 211, 0.05) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(102, 126, 234, 0.05) 0%, transparent 50%)",
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        <Box sx={{ textAlign: "center", marginBottom: "6rem" }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
              fontWeight: 700,
              color: "#1e40af",
              marginBottom: "1.5rem",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              position: "relative",
              transition: "all 0.3s ease",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: "-0.5rem",
                left: "50%",
                transform: "translateX(-50%)",
                width: "60px",
                height: "3px",
                background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
                borderRadius: "2px",
                transition: "all 0.3s ease",
              },
            }}
          >
            Technology Processes
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1.2rem", md: "1.4rem" },
              fontWeight: 400,
              color: "#475569",
              maxWidth: "700px",
              mx: "auto",
              lineHeight: 1.5,
              fontFamily: "'Inter', sans-serif",
              transition: "all 0.3s ease",
            }}
          >
            Streamlined processes for AI development, cloud infrastructure,
            enterprise solutions, and data analytics
          </Typography>
        </Box>

        {/* Enhanced Tabs */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "4rem",
          }}
        >
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              padding: "0.5rem",
              border: "1px solid rgba(229, 231, 235, 0.8)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
            }}
          >
            <Tabs
              ref={tabsRef}
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              sx={{
                "& .MuiTabs-indicator": {
                  display: "none",
                },
              }}
            >
              {tabData.map((tab, index) => (
                <Tab
                  key={index}
                  label={
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "inherit",
                        }}
                      >
                        {tab.icon}
                      </Box>
                      <span>{tab.label}</span>
                    </Box>
                  }
                  sx={{
                    background: value === index ? tab.gradient : "transparent",
                    color: value === index ? "#ffffff" : "#1e40af",
                    borderRadius: "16px",
                    fontWeight: 600,
                    textTransform: "none",
                    minWidth: { xs: 160, sm: 180 },
                    mx: 0.5,
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                    flexShrink: 0,
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    padding: "14px 28px",
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: "-0.01em",
                    border:
                      value === index
                        ? "none"
                        : "1px solid rgba(30, 64, 175, 0.2)",
                    "&:hover": {
                      background:
                        value === index
                          ? tab.gradient
                          : "rgba(30, 64, 175, 0.08)",
                      color: value === index ? "#ffffff" : "#1e40af",
                      transform: "translateY(-3px) scale(1.02)",
                      boxShadow:
                        value === index
                          ? "0 16px 40px rgba(30, 64, 175, 0.4)"
                          : "0 12px 32px rgba(30, 64, 175, 0.2)",
                    },
                    "&.Mui-selected": {
                      background: tab.gradient,
                      color: "#ffffff",
                      boxShadow: "0 16px 40px rgba(30, 64, 175, 0.4)",
                      transform: "translateY(-2px)",
                    },
                  }}
                />
              ))}
            </Tabs>
          </Paper>
        </Box>

        {/* Enhanced Content */}
        <Paper
          ref={contentRef}
          elevation={0}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            alignItems: "center",
            gap: { xs: "3rem", lg: "5rem" },
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            padding: { xs: "3rem", md: "4rem" },
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(229, 231, 235, 0.8)",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "3px",
              background: "#0199D3",
              borderRadius: "20px 20px 0 0",
            },
          }}
        >
          {/* Left Text */}
          <Box sx={{ flex: 1, textAlign: { xs: "center", lg: "left" } }}>
            <Typography
              variant={isMobile ? "h4" : "h3"}
              sx={{
                fontWeight: 700,
                color: "#111827",
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "-0.02em",
                marginBottom: "1.5rem",
                lineHeight: 1.2,
              }}
            >
              {activeTab.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#6b7280",
                fontSize: "1.2rem",
                lineHeight: 1.8,
                marginBottom: "3rem",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {activeTab.description}
            </Typography>
            <Button
              onClick={handleLearnMoreClick}
              variant="contained"
              size="large"
              sx={{
                background: "linear-gradient(135deg, #dc2626 0%, #ef4444 100%)",
                borderRadius: "12px",
                padding: "16px 36px",
                fontWeight: 600,
                textTransform: "none",
                fontSize: "1.1rem",
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "-0.01em",
                boxShadow: "0 8px 24px rgba(220, 38, 38, 0.25)",
                color: "#ffffff",
                textDecoration: "none",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #b91c1c 0%, #dc2626 100%)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 32px rgba(220, 38, 38, 0.35)",
                  textDecoration: "none",
                },
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              Learn More
            </Button>
          </Box>

          {/* Right Video */}
          <Box
            sx={{
              flex: 1,
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
              position: "relative",
              border: "1px solid rgba(229, 231, 235, 0.8)",
            }}
          >
            <video
              src={activeTab.image}
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "16px",
                display: "block",
              }}
            />
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
