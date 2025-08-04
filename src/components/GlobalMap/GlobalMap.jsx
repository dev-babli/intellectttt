// frontend/src/components/GlobalMap.jsx

import React, { useEffect, useRef } from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GlobalMap = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        width: "100%",
        backgroundColor: "#ffffffff",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: 4,
            }}
          >
            {/* Left Content */}
            <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  color: "#1a237e",
                  mb: 2,
                  fontSize: { xs: "1.5rem", md: "2rem" },
                }}
              >
                Global Reach. Local Expertise
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{
                  color: "#555",
                  maxWidth: { md: "90%" },
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  margin: { xs: "0 auto", md: 0 },
                }}
              >
                At <b>Intellectt</b>, we don't just work across borders — we
                build strong, sustainable connections that empower businesses
                and talent around the globe. Our presence spans multiple
                continents, enabling us to respond swiftly to evolving market
                demands while delivering solutions grounded in local insights.
              </Typography>
            </Box>

            {/* Right Image */}
            <Box
              component="img"
              src="/Mapglobal.webp"
              alt="Global Map"
              sx={{
                flex: 1,
                width: "100%",
                maxWidth: "500px",
                height: "auto",
                transition: "transform 0.5s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            />
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default GlobalMap;
