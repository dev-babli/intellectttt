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
import SectionHeading from "../SectionHeading/SectionHeading";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tabData = [
  {
    label: "AI & Gen AI",
    title: "AI & Gen AI Consulting",
    description:
      "Empower your business with next-generation AI and Generative AI solutions. Accelerate innovation, unlock new revenue streams, and drive intelligent automation across your organization.",
    image: "/video/Ai.mp4",
    href: "/service/ai-and-gen-ai",
    icon: "🤖",
  },
  {
    label: "Cloud & Application",
    title: "Cloud & Application Services",
    description:
      "Modernize your IT landscape with scalable cloud platforms, custom applications, seamless integrations, and agile delivery for faster business outcomes.",
    image: "/video/cld.mp4",
    href: "/service/cloud-and-application-services",
    icon: "☁️",
  },
  {
    label: "SAP",
    title: "Data Management Services",
    description:
      "Transform your enterprise with end-to-end SAP solutions, process optimization, intelligent automation, and accelerated digital transformation across your value chain.",
    image: "/video/shap.mp4",
    href: "/service/sap-services",
    icon: "📊",
  },
  {
    label: "Data &  Analytics",
    title: "Data & Analytics",
    description:
      "Unlock actionable insights with advanced data engineering, real-time analytics, intelligent dashboards, and AI-powered decision-making capabilities.",
    image: "/video/data.mp4",
    href: "/service/data-and-analytics",
    icon: "📈",
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
        <Box sx={{ textAlign: "center", marginBottom: "5rem" }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 800,
              color: "#1f2937",
              marginBottom: "1.5rem",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "-0.02em",
              background: "linear-gradient(135deg, #1f2937 0%, #0199D3 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Our Solutions
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1.2rem", md: "1.4rem" },
              fontWeight: 400,
              color: "#6b7280",
              maxWidth: "900px",
              mx: "auto",
              lineHeight: 1.6,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Comprehensive technology solutions designed to accelerate your
            digital transformation
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
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderRadius: "20px",
              padding: "0.5rem",
              border: "1px solid rgba(1, 153, 211, 0.2)",
              backdropFilter: "blur(10px)",
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
                      <span style={{ fontSize: "1.2rem" }}>{tab.icon}</span>
                      <span>{tab.label}</span>
                    </Box>
                  }
                  sx={{
                    backgroundColor:
                      value === index ? "#0199D3" : "transparent",
                    color: value === index ? "#ffffff" : "#6b7280",
                    borderRadius: "16px",
                    fontWeight: 600,
                    textTransform: "none",
                    minWidth: { xs: 140, sm: 160 },
                    mx: 0.5,
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                    flexShrink: 0,
                    transition: "all 0.3s ease",
                    padding: "12px 20px",
                    "&:hover": {
                      backgroundColor:
                        value === index ? "#0199D3" : "rgba(1, 153, 211, 0.1)",
                      color: value === index ? "#ffffff" : "#0199D3",
                      transform: "translateY(-2px)",
                      boxShadow:
                        value === index
                          ? "0 8px 25px rgba(1, 153, 211, 0.3)"
                          : "0 4px 12px rgba(1, 153, 211, 0.1)",
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
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderRadius: "24px",
            padding: { xs: "3rem", md: "4rem" },
            boxShadow:
              "0 20px 40px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              background: `linear-gradient(90deg, #0199D3 0%, #667eea 100%)`,
              borderRadius: "24px 24px 0 0",
            },
          }}
        >
          {/* Left Text */}
          <Box sx={{ flex: 1, textAlign: { xs: "center", lg: "left" } }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                marginBottom: "2rem",
                justifyContent: { xs: "center", lg: "flex-start" },
              }}
            >
              <Box
                sx={{
                  fontSize: "3rem",
                  filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))",
                }}
              >
                {activeTab.icon}
              </Box>
              <Typography
                variant={isMobile ? "h4" : "h3"}
                sx={{
                  fontWeight: 800,
                  color: "#1f2937",
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: "-0.02em",
                  background:
                    "linear-gradient(135deg, #1f2937 0%, #0199D3 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {activeTab.title}
              </Typography>
            </Box>
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
              href={activeTab.href}
              variant="contained"
              size="large"
              sx={{
                background: "linear-gradient(135deg, #0199D3 0%, #667eea 100%)",
                borderRadius: "50px",
                padding: "16px 40px",
                fontWeight: 600,
                textTransform: "none",
                fontSize: "1.1rem",
                boxShadow: "0 8px 25px rgba(1, 153, 211, 0.3)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #0178a8 0%, #5a67d8 100%)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 35px rgba(1, 153, 211, 0.4)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Learn More
            </Button>
          </Box>

          {/* Right Video */}
          <Box
            sx={{
              flex: 1,
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "linear-gradient(135deg, rgba(1, 153, 211, 0.1) 0%, transparent 100%)",
                zIndex: 1,
                pointerEvents: "none",
              },
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
                borderRadius: "20px",
                display: "block",
                position: "relative",
                zIndex: 2,
              }}
            />
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
