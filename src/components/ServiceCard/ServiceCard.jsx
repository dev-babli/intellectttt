import React, { useRef, useState } from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const MotionBox = motion(Box);

const ServiceCard = ({ cards }) => {
  const containerRef = useRef();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Box
      ref={containerRef}
      sx={{
        maxWidth: "1340px",
        mx: "auto",
        px: { xs: 2, md: 4 },
        py: 4,
      }}
    >
      <Grid container spacing={2}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <MotionBox
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              sx={{
                height: 300,
                borderRadius: 3,
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
                boxShadow: 3,
                transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                transition: "all 0.3s ease",
                filter:
                  hoveredIndex !== null && hoveredIndex !== index
                    ? "grayscale(100%) blur(1px) brightness(0.7)"
                    : "none",
                backgroundImage: `url(${card.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  p: 2,
                  width: "100%",
                  height: hoveredIndex === index ? "100%" : "50%",
                  background: "rgba(0,0,0,0.6)",
                  color: "#fff",
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    color: "#fff !important",
                    fontWeight: 700,
                    fontSize: ".9rem",
                  }}
                >
                  {card.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {card.description}
                </Typography>
                <a href={card.url}>
                  <IconButton
                    sx={{
                      mt: 1,
                      backgroundColor: "#fff",
                      color: "primary.main",
                      borderRadius: "50%",
                      width: 40,
                      height: 40,
                      "&:hover": {
                        backgroundColor: "primary.main",
                        color: "#fff",
                      },
                    }}
                  >
                    <ArrowForwardIcon />
                  </IconButton>
                </a>
              </Box>
            </MotionBox>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServiceCard;
