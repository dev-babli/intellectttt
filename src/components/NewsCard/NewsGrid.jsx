// src/components/NewsGrid.jsx
import React from "react";
import { Grid, Container } from "@mui/material";
import NewsCard from "./NewsCard";
import sampleImage from "../../images/gallery/g10.jpg"; // replace with your image

const dummyData = Array(8).fill({
  image: sampleImage,
  category: "TECHNOLOGY",
  title: "AI in Neuroimaging: IXICO’s Cloud Transformation",
  description: "Embark on an enlightening journey through the realm.",
});

const NewsGrid = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Grid container spacing={4}>
        {dummyData.map((item, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <NewsCard
              {...item}
              delay={index * 100}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default NewsGrid;
