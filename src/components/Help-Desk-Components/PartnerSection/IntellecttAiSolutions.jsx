"use client";

import { useEffect, useRef } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    id: 1,
    category: "AI & Gen AI",
    title:
      "Harness the power of AI and GenAI to unlock new growth opportunities.",
    imageName: "AI-and-Genn-AI.webp",
    categoryColor: "#0199D3",
    description: "Leverage Gen AI models for deep customer insights.",
    features: [
      "Automated Workflows",
      "Conversational AI",
      "Image Generation",
      "Secure Deployment",
    ],
    buttonLabel: "Explore",
    url: "/service/ai-and-gen-ai",
  },
  {
    id: 2,
    category: "Cloud & Application Services",
    title: "Accelerate growth with scalable, secure cloud platforms.",
    imageName: "Cloud.webp",
    categoryColor: "#0199D3",
    description: "Migrate and modernize your infrastructure effortlessly.",
    features: [
      "Cloud Migration",
      "App Modernization",
      "DevOps Integration",
      "24x7 Support",
    ],
    buttonLabel: "Explore",
    url: "/service/cloud-and-application-services",
  },
  {
    id: 3,
    category: "SAP Services",
    title: "Protect your digital assets with intelligent security frameworks.",
    imageName: "Data-andAnalytics.webp",
    categoryColor: "#0199D3",
    description: "Transform operations with intelligent SAP solutions.",
    features: [
      "SAP S/4HANA",
      "SAP Implementation",
      "System Integration",
      "Managed SAP Support",
    ],
    buttonLabel: "Explore",
    url: "/service/sap-services",
  },
  {
    id: 4,
    category: "Managed IT Services",
    title: "Connect devices and drive automation with next-gen IoT tech.",
    imageName: "Engineering.webp",
    categoryColor: "#0199D3",
    description: "Ensure uninterrupted performance with expert IT support.",
    features: [
      "Remote Monitoring",
      "IT Infrastructure",
      "Incident Management",
      "Helpdesk Services",
    ],
    buttonLabel: "Explore",
    url: "/service/managed-it-services",
  },
  {
    id: 5,
    category: "Data & Analytics",
    title: "Turn data into actionable insights for smarter decisions.",
    imageName: "Healthcare-and-Lifesciences.webp",
    categoryColor: "#0199D3",
    description: "Unlock business value with powerful data intelligence.",
    features: [
      "Data Warehousing",
      "Predictive Analytics",
      "BI Dashboards",
      "Big Data Solutions",
    ],
    buttonLabel: "Explore",
    url: "/service/data-and-analytics",
  },
  {
    id: 6,
    category: "Engineering & Manufacturing ",
    title: "Integrate smart devices to streamline production and processes.",
    imageName: "Managed.webp",
    categoryColor: "#0199D3",
    description: "Empower innovation through smart industrial IT.",
    features: [
      "CAD/CAM Services",
      "Digital Twins",
      "Smart Factory Tech",
      "IoT Integrations",
    ],
    buttonLabel: "Explore",
    url: "/service/engineering-and-manufacturing-it",
  },
  {
    id: 7,
    category: "Healthcare & Life Sciences ",
    title: "Empower care through digital innovation and secure systems.",
    imageName: "Healthcare-and-Lifesciences.webp",
    categoryColor: "#0199D3",
    description: "Enhance care delivery through digital health platforms.",
    features: [
      "EHR Integration",
      "Compliance Solutions",
      "AI in Diagnostics",
      "Patient Data Security",
    ],
    buttonLabel: "Explore",
    url: "/service/healthcare-and-life-sciences-it",
  },
  {
    id: 8,
    category: "Talent Solutions",
    title:
      "Bridge your talent gap with flexible, industry-aligned workforce solutions.",
    imageName: "Engineering.webp",
    categoryColor: "#0199D3",
    description: "Build agile teams with flexible, expert staffing models.",
    features: [
      "IT Staffing",
      "Project-based Hiring",
      "Executive Search",
      "Global Workforce",
    ],
    buttonLabel: "Explore",
    url: "/service/talent-solutions",
  },
];

export default function IntellecttAiSolutions() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
        },
      });

      gsap.from(descRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.5,
        delay: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: descRef.current,
          start: "top 90%",
        },
      });

      ScrollTrigger.batch(".gsap-card", {
        onEnter: (batch) => {
          gsap.fromTo(
            batch,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: "power3.out",
            }
          );
        },
        start: "top 90%",
        once: true,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "relative",
        px: { xs: 2, md: 6 },
        py: 10,
        overflow: "hidden",
      }}
    >
      {/* Animated Circles */}
      {[...Array(6)].map((_, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: "rgba(147,197,253,0.15)",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `floatCircle ${
              4 + Math.random() * 4
            }s ease-in-out infinite`,
            zIndex: 0,
          }}
        />
      ))}

      {/* Keyframes animation */}
      <style>
        {`
    @keyframes floatCircle {
      0% { transform: translateY(0); opacity: 0.4; }
      50% { transform: translateY(-20px); opacity: 0.7; }
      100% { transform: translateY(0); opacity: 0.4; }
    }
  `}
      </style>

      {/* Header */}
      <Box sx={{ textAlign: "center", zIndex: 1, position: "relative", mb: 6 }}>
        <Typography
          ref={titleRef}
          variant="h4"
          fontWeight={700}
          sx={{
            backdropFilter: "blur(8px)",
            display: "inline-block",
            px: 4,

            color: "#0199D3 !important",
            fontSize: { xs: "1.5rem", md: "3rem" },
          }}
        >
          Actionable AI Solutions
        </Typography>
        <Typography
          ref={descRef}
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 600, mx: "auto", mt: 3 }}
        >
          Improve your business's operational efficiency while keeping your
          sensitive data secure.
        </Typography>
      </Box>

      {/* Cards */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{
          "& > .MuiGrid-item": {
            pl: { xs: 0, sm: "32px" },
            pr: { xs: "30px", sm: 2, lg: 0 }, // override padding-left only on xs
          },
          maxWidth: 1500,
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {solutions.map((solution) => (
          <Grid
            item
            key={solution.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="gsap-card"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                perspective: 1000,
                width: "100%",
                maxWidth: 340,
                height: 360,
              }}
            >
              <Box
                className="flip-card-inner"
                sx={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.8s",
                  "&:hover": {
                    transform: "rotateY(180deg)",
                  },
                }}
              >
                {/* FRONT SIDE */}
                <Card
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 4,
                    overflow: "hidden",
                    boxShadow: 3,
                    p: { xs: 2, md: 3 },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={`/images/${solution.imageName}`}
                    alt={solution.title}
                    sx={{
                      width: "100%",
                      height: 160,
                      objectFit: "cover",
                      borderRadius: 2,
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="caption"
                      fontWeight={700}
                      sx={{
                        color: solution.categoryColor,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        mb: 1,
                      }}
                    >
                      {solution.category}
                    </Typography>
                    <Typography variant="body2">{solution.title}</Typography>
                  </CardContent>
                </Card>

                {/* BACK SIDE */}
                <Card
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 3,
                    boxShadow: 3,
                    borderRadius: 4,
                    backgroundColor: "#0199D3",
                    color: "white",
                    textAlign: "left",
                    overflow: "hidden",
                  }}
                >
                  {/* Floating circles inside card back */}
                  {[...Array(5)].map((_, i) => (
                    <Box
                      key={i}
                      sx={{
                        position: "absolute",
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        backgroundColor: "rgba(255,255,255,0.1)",
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `floatCircle ${
                          4 + Math.random() * 4
                        }s ease-in-out infinite`,
                        zIndex: 1,
                      }}
                    />
                  ))}

                  {/* Card content with higher z-index */}
                  <Box sx={{ zIndex: 2 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 1,
                        fontWeight: 700,
                        textAlign: "left",
                        color: "white !important",
                      }}
                    >
                      {solution.category}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ mb: 2, textAlign: "left" }}
                    >
                      {solution.description}
                    </Typography>
                    <ul
                      style={{
                        padding: 0,
                        margin: 0,
                        listStyle: "none",
                        textAlign: "left",
                      }}
                    >
                      {solution.features.map((item, index) => (
                        <li key={index}>✔ {item}</li>
                      ))}
                    </ul>
                    <Link to={solution.url}>
                      <Button
                        variant="contained"
                        size="small"
                        sx={{
                          mt: 2,
                          alignSelf: "flex-start",
                          px: 3,
                          py: 1,
                          borderRadius: "25px",
                          backgroundColor: "rgba(255, 255, 255, 0.2)",
                          backdropFilter: "blur(6px)",
                          color: "white",
                          fontWeight: 600,
                          textTransform: "none",
                          boxShadow: "none",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: "rgba(255, 255, 255, 0.3)",
                            transform: "scale(1.05)",
                            boxShadow: "0 2px 10px rgba(255,255,255,0.2)",
                          },
                        }}
                      >
                        {solution.buttonLabel || "Learn More"}
                      </Button>
                    </Link>
                  </Box>
                </Card>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
