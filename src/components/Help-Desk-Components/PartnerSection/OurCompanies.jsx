import React from "react";
import { Box, Container, Button } from "@mui/material";

const OurCompanies = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      {/* Image */}
      <Box
        component="img"
        src="/logos/Our-companies.webp"
        alt="Our Companies"
        draggable={false}
        sx={{
          width: "90%",
          margin: "0 auto",
          height: "auto",
          display: "block",
        }}
      />

      {/* Button Box */}
      <Box
        sx={{
          mt: 3,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <a
          href="https://lumininc.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              borderRadius: "50px",
              fontWeight: "bold",
              fontSize: "1rem",
              px: 4, // padding left and right
              py: 1.5, // padding top and bottom
              color: "black",
              borderColor: "black", // to make the outline black
              textTransform: "none", // keep text as it is, no uppercase
            }}
          >
            Explore More
          </Button>
        </a>

        <a
          href="https://lumin-innovations.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              borderRadius: "50px",
              fontWeight: "bold",
              fontSize: "1rem",
              px: 4,
              py: 1.5,
              color: "black",
              borderColor: "black",
              textTransform: "none",
            }}
          >
            Explore More
          </Button>
        </a>
      </Box>
    </Container>
  );
};

export default OurCompanies;
