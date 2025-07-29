// src/components/FeaturesSection.js
import { Grid, Container } from '@mui/material';


import FeatureCard from '../FeatureCard/FeatureCard';



const FeaturesSection = ({ features = [] }) => {
  return (
    <Container sx={{ py: 6, maxWidth: '90% !important', width: '90%' }}>
      <Grid container spacing={4}>
        {features.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <FeatureCard {...item} />
          </Grid>
        ))}
       
      </Grid>
    </Container>
  );
};

export default FeaturesSection;
