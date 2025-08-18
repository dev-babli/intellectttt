import React from "react";
import { Typography, Box } from "@mui/material";

export default function SectionHeading() {
  return (
    <Box textAlign="left" py={2}>
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: { xs: "1rem", md: "1.5rem" },
          color: "#0199D3 !important",
          fontWeight: 400,
          whiteSpace: 'normal',
          overflow: 'visible',
          textOverflow: 'unset',
        }}
      >
        Our Suite of
      </Typography>

      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          fontSize: { xs: "2.7rem", md: "4.5rem" },
          color: "#0199D3!important",
          mt: 1,
        }}
      >
        Consulting Services
      </Typography>
    </Box>
  );
}
