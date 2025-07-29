import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { motion, transform } from "framer-motion";

const imageData = [
  {
    src: "/images/Lumin-INC-GIF.gif",
    alt: "Image 1",
    link: "https://lumininc.com/",
  },
  {
    src: "/images/Lumin-innovation.gif",
    alt: "Image 2",
    link: "https://lumin-innovations.com/",
  },
];

const ImageLinkSection = () => {
  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 4 }, bgcolor: "#fafafa" }}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          textAlign: "center",
          fontSize: "clamp(1.8rem, 5vw, 2.5rem)", // Responsive font size
          fontWeight: 700,
          marginBottom: "3rem",
          color: "#DF1B20",
          textTransform: "uppercase",
        }}
      >
        Intellectt
      </motion.h2>

      <Box sx={{ maxWidth: "1400px", mx: "auto", width: "100%" }}>
        <Grid container spacing={8} justifyContent="center">
          {imageData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                style={{
                  cursor: "pointer",
                  overflow: "hidden",
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "center",
                }}
                onClick={() => window.open(item.link, "_blank")}
              >
                <Box
                  component="img"
                  src={item.src}
                  alt={item.alt}
                  sx={{
                    width: {
                      xs: "100%", 
                      sm: "90%", 
                      md: "100%", 
                      lg: "100%",
                    },
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ImageLinkSection;
