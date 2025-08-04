import React from "react";
import { Box, Typography } from "@mui/material";

const Flag = () => {
  return (
    <Box
      sx={{
        px: 2,
        py: 4,
        textAlign: "center",
      }}
    >
      <Typography variant="h5" fontWeight={600} color="#212877" mb={2}>
        Our Global Flags
      </Typography>
      <Typography variant="body1" color="#666">
        We operate across multiple countries with local expertise and global
        reach.
      </Typography>
    </Box>
  );
};

export default Flag;
