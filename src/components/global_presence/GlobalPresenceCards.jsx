// src/components/GlobalPresence.js
import React from "react";
import { Box, Grid, Typography, Divider, Stack } from "@mui/material";

const countries = [
  { name: "India", flag: "/flags/india.png" },
  { name: "USA", flag: "/flags/usa.png" },
  { name: "Canada", flag: "/flags/canada.png" },
  { name: "Mexico", flag: "/flags/mexico.png" },
  { name: "Ireland", flag: "/flags/ireland.png" },
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
                <Typography variant="subtitle1" sx={{ fontWeight: 500, fontSize: "1.2rem" }}>
                  {country.name}
                </Typography>
              </Stack>

              {/* <Divider sx={{ mb: 2, borderColor: "black!important", height: 2 }} /> */}

              {/* Offices and Resources Side-by-Side */}
              <Stack
                direction="column"
                spacing={4}
                justifyContent="center"
                alignItems="center"
              >
                {/* Offices */}
                <Box>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 600, color: "#0071bc", lineHeight: 1 }}
                  >
                    2
                  </Typography>
                  <Typography variant="body2">Offices</Typography>
                </Box>

                {/* Resources */}
                <Box>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 600, color: "#0071bc", lineHeight: 1 }}
                  >
                    34
                  </Typography>
                  <Typography variant="body2">Resources</Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GlobalPresenceCards;
