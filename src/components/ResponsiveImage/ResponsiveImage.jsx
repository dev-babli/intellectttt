
import React from "react";
import { Box, CardMedia } from "@mui/material";

const ResponsiveImage = ({ src, alt = "image", borderRadius = 2, height = "auto", maxWidth = "100%",  }) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth,
        borderRadius,
        overflow: "hidden",
     
        margin: "0 auto",
      }}
    >
      <CardMedia
        component="img"
        image={src}
        alt={alt}
        sx={{
          width: "100%",
          height,
          objectFit: "cover",
          
        }}
      />
    </Box>
  );
};

export default ResponsiveImage;
