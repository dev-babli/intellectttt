// src/components/ImageCardGrid.js
import React, { useEffect, useRef } from 'react';
import { Grid, Card, Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const cardData = [
  {
    title: "AI & Gen AI Practice",
    description: "Harness the power of AI and Gen AI to unlock new growth opportunities",
    image: "/images/ai-and-gen-ai.png",
  },
  {
    title: "Cloud Transformation",
    description: "Accelerate business agility with scalable cloud solutions",
    image: "/images/cloud-and-application.png",
  },
  {
    title: "Cybersecurity",
    description: "Protect your digital assets with intelligent security frameworks",
    image: "/images/SAP.png",
  },
  {
    title: "IoT & Edge",
    description: "Connect devices and drive automation with next-gen IoT tech",
    image: "/images/Managed-IT-Services.png",
  },
  {
    title: "Data & Analytics",
    description: "Turn data into decisions with advanced analytics tools",
    image: "/images/Data-Analytics.png",
  },
  {
    title: "Automation & RPA",
    description: "Streamline operations using AI-powered robotic automation",
    image: "/images/Engineering-anufacturing-IT.png",
  },
  {
    title: "Blockchain Solutions",
    description: "Build trust and transparency using secure blockchain systems",
    image: "/images/Healthcare-Life-Sciences.png",
  },
  {
    title: "AR/VR Experience",
    description: "Enhance engagement through immersive AR & VR technologies",
    image: "/images/talent-solution.png",
  },
];

const ImageCardGrid = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.from(cardRefs.current, {
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  const handleMouseEnter = (index) => {
    gsap.to(cardRefs.current[index], {
      zIndex: 10,
      y: -10,
      boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.25)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(cardRefs.current[index], {
      zIndex: 1,
      y: 0,
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
      duration: 0.3,
      ease: "power2.inOut",
    });
  };

  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 4 }, maxWidth: "1320px", margin: "0 auto" }}>
      <Grid container spacing={4}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                ref={(el) => (cardRefs.current[index] = el)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                sx={{
                  minHeight: 360,
                  borderRadius: 4,
                  background: "#0197D4",
                  color: "#ffffff",
                  textAlign: "center",
                  px: 3,
                  py: 4,
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  zIndex: 1,
                  transition: "box-shadow 0.3s ease",
                }}
              >
                <Typography variant="h6" fontWeight={600} color={"#ffffff!important"}>
                  {card.title}
                </Typography>

                <Box
                  component="img"
                  src={card.image}
                  alt={card.title}
                  sx={{
                    width: 80,
                    height: 80,
                    objectFit: "contain",
                    my: 3,
                    mx: "auto",
                  }}
                />

                <Typography variant="body2" sx={{ mb: 3 }}>
                  {card.description}
                </Typography>

                <Button
                  variant="outlined"
                  sx={{
                    color: "#ffffff",
                    borderColor: "#ffffff",
                    borderRadius: 20,
                    textTransform: "none",
                    fontWeight: 500,
                    maxWidth: 150,
                    mx: "auto",
                    px: 3,
                    "&:hover": {
                      borderColor: "#ffffff",
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  Know more
                </Button>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ImageCardGrid;
