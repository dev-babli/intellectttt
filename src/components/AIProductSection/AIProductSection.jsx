import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";

// Dummy data
const products = [
  {
    title: "AI & Gen AI Practice",
    gif: "/AI-&-Gen-AI.gif",
  },
  {
    title: "Cloud & Application Service",
    gif: "/Cloud-Application.gif",
  },
  {
    title: "SAP Service",
    gif: "/SAP-services.gif",
  },
  {
    title: "Data & Analytics",
    gif: "/Data-Analytics.gif",
  },
];

const AIProductSection = () => {
  return (
    <Box
      sx={{
        pb: 6,
        px: 2,
        
        maxWidth: "90%",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <Typography variant="h6" color="primary" fontWeight={500}>
        AI-Powered Products for
      </Typography>
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{ mb: 1, color: "#1a1a1a" }}
      >
        Enhanced Efficiency
      </Typography>
      <Typography
        variant="body1"
        sx={{ maxWidth: 600, mx: "auto", mb: 6, color: "#666" }}
      >
        Our AI-powered products are designed to bring unmatched agility and
        efficiency to help your business complete the transformation journey.
      </Typography>

      {/* Cards */}
      <Grid container spacing={4} justifyContent="center">
        {products.map((item, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Card
              elevation={0}
              sx={{
                bgcolor: "#e6f6ff",
                borderRadius: 4,
                p: 3,
                height: "100%",
                textAlign: "center",
              }}
            >
              <Box
                component="img"
                src={item.gif}
                alt={item.title}
                sx={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                  mb: 2,
                  mx: "auto",
                }}
              />
              <CardContent>
                <Typography variant="subtitle1" fontWeight={600}>
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AIProductSection;
