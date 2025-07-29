import React, { useEffect, useRef } from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import gsap from "gsap";

// Replace these with real images or icons (for now using placeholders)
const industries = [
  {
    title: "Banking & Financial Services",
    image: "/images/Banking-and-Finance.webp",
  },
  {
    title: "Manufacturing",
    image: "/images/Manufacutring-and-Automotive.webp",
  },
  {
    title: "Healthcare & Life Sciences",
    image: "/images/Healthcare-and-Lifesciences.webp",
  },
  {
    title: "Technology & Software",
    image: "/images/Defence-and-aEROSPACE.webp",
  },
  {
    title: "Education & E-Learning",
    image: "/images/EducationElearning.webp",
  },
  {
    title: "Retail & E-Commerce",
    image: "/images/Retail-and-Ecommerce.webp",
  },
  {
    title: "Real Estate & Property",
    image: "/images/Realestate-and-property.webp",
  },
  {
    title: "Transportation & Logistics",
    image: "/images/Transportation-andLogistics.webp",
  },
];

const IndustriesSimple = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.from(".industry-card", {
      opacity: 0,
      y: 50,
      duration: 0.6,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, []);

  return (
    <Box
      sx={{ py: 8, px: { xs: 2, md: 4 } }}
      backgroundColor={"#ffffffff"}
      ref={containerRef}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="industries-title text-center"
        style={{ color: "#0199D3", fontSize: "3rem" }}
      >
        Industries We Work With
      </motion.h2>
      <Grid
        container
        spacing={4}
        maxWidth={"92%"}
        margin="0 auto"
        sx={{
          "& > .MuiGrid-item": {
            pl: { xs: 0, sm: "32px" }, // override padding-left only on xs
          },
        }}
      >
        {industries.map((industry, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="industry-card"
            >
              <Card
                sx={{
                  height: 206,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#ffffff", // white background
                  borderRadius: 2,
                  boxShadow: 3,
                  textAlign: "center",
                }}
              >
                <Box
                  component="img"
                  src={industry.image}
                  alt={industry.title}
                  sx={{
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    mb: 2,
                  }}
                />
                <CardContent sx={{ p: 0 }}>
                  <Typography variant="subtitle1" fontWeight={600}>
                    {industry.title}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default IndustriesSimple;
