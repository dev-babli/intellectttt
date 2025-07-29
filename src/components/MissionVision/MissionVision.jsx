import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import TargetIcon from "@mui/icons-material/Adjust"; // Closest to target icon
import LightbulbIcon from "@mui/icons-material/EmojiObjects"; // Lightbulb icon

const MotionBox = motion(Box);

const cards = [
  {
    title: "Mission",
    icon: <TargetIcon sx={{ fontSize: 50, color: "#f6c21a" }} />,
    description:
      "Our mission is to provide an exceptional customer experience by harnessing our expertise, innovative solutions, and comprehensive AI-driven data services.",
  },
  {
    title: "Vision",
    icon: <LightbulbIcon sx={{ fontSize: 50, color: "#f6c21a" }} />,
    description:
      "To be a trusted partner in data services for customers seeking reliable and innovative solutions that drive value for their businesses.",
  },
];

const MissionVision = () => {
  return (
    <Box sx={{ px: 4, py: 6, maxWidth: "91%", margin: "0 auto" }}>
      <Grid container spacing={4} justifyContent="center">
        {cards.map((card, index) => (
          <Grid key={index} item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              sx={{
                backgroundColor: "#1f2a4d",
                borderRadius: 3,
                p: 4,
                height: "100%",
                color: "white",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Decorative Circles */}
              <Box
                sx={{
                  position: "absolute",
                  top: -40,
                  right: -40,
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  backgroundColor: "#294175",
                  opacity: 0.5,
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: -20,
                  right: -10,
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  backgroundColor: "#396ea5",
                  opacity: 0.3,
                }}
              />

              <Box sx={{ mb: 2 }}>{card.icon}</Box>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }} color={"#f6c21a"}>
                {card.title}
              </Typography>
              <Typography variant="body1">{card.description}</Typography>
            </MotionBox>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MissionVision;
