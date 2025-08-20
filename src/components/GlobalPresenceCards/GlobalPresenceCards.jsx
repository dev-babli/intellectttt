// src/components/GlobalPresence.js
import React from "react";
import { Box, Grid, Typography, Divider, Stack } from "@mui/material";
import { GLOBAL_DATA } from "../../constants";

const countries = [
  { name: "India", flag: "/flags/india.png", offices: 8 },
  { name: "USA", flag: "/flags/usa.png", offices: 6 },
  { name: "Canada", flag: "/flags/canada.png", offices: 2 },
  { name: "Mexico", flag: "/flags/mexico.png", offices: 2 },
  { name: "Ireland", flag: "/flags/ireland.png", offices: 1 },
];

const GlobalPresenceCards = () => {
  return (
    <Box
      sx={{
        px: 2,
        py: 4,
        maxWidth: { xs: "100%", md: "60%" },
        margin: "0 auto",
      }}
    >
      <Typography
        variant="h4"
        fontWeight={800}
        textAlign="center"
        color="#212877"
        mb={4}
      >
        Global Operation
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {countries.map((country, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                // border: "1px solid #ccc",
                // borderRadius: "4px",
                p: 2,
                width: 300,
                textAlign: "center",
                position: "relative",
                ...(index === 1 && {
                  borderLeft: { md: "2px solid black", xs: "none" }, // borderLeft: "2px solid black",
                  borderRight: { md: "2px solid black", xs: "none" }, // borderRight: "2px solid black",
                }),
              }}
            >
              {/* Flag and Country Name */}
              <Stack
                direction="row"
                spacing={1.5}
                justifyContent="center"
                alignItems="center"
                borderBottom={"1px solid black"}
                pb={2}
                sx={{ mb: 2 }}
              >
                <Box
                  component="img"
                  src={country.flag}
                  alt={country.name}
                  sx={{ width: 50, height: 50, borderRadius: "50%" }}
                />
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 500, fontSize: "1.2rem" }}
                >
                  {country.name}
                </Typography>
              </Stack>

              {/* <Divider sx={{ mb: 2, borderColor: "black!important", height: 2 }} /> */}

              {/* Offices */}
              <Box>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 600, color: "#0071bc", lineHeight: 1 }}
                >
                  {country.offices}
                </Typography>
                <Typography variant="body2">Offices</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GlobalPresenceCards;
