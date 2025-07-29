import React from "react";
import { Box, Grid, Card, CardMedia, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const VideoCard = ({ image, logo, logoWidth }) => {
  return (
    <Card
      sx={{
        marginTop: 10,
        borderRadius: 3,
        overflow: "hidden",
        position: "relative",
        width: "100%",
        height: "100%",
        bgcolor: "transparent",
        boxShadow: "none",
      }}
    >
      {/* Thumbnail with overlay and play icon */}
      <Box
        sx={{
          position: "relative",
          height: { xs: 300, sm: 340, md: 420 },
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        //   filter: "brightness(0.7)",
          border: "1px solid #ccc",
          borderRadius:"40px"
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "#1E88E5",
            borderRadius: "50%",
            width: 56,
            height: 56,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PlayArrowIcon sx={{ color: "#fff", fontSize: 32 }} />
        </Box>
      </Box>

      {/* Bottom white box */}
      <Box
        sx={{
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 4,
          py: 4,
          //   border : "1px solid #ccc",
          borderRadius: "16px 16px 16px 16px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          width: "90%",
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <a href="https://www.youtube.com/watch?v=syBfbjSKPfE" target="_blank">
          <Box
            component="img"
            src={logo}
            alt="logo"
            sx={{
              width: logoWidth,
              height: 70,
              marginRight: 1,
              objectFit: "contain",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          />
        </a>
      </Box>
    </Card>
  );
};

const VideoSection = ({ items }) => {
  return (
    <Grid container spacing={3} justifyContent="center" sx={{ py: 4, px: 2 }}>
      {items.map((item, index) => (
        <Grid item xs={12} sm={6} md={5} key={index}>
          <VideoCard {...item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default VideoSection;
