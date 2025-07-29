import { Box, Grid, Typography, Button } from "@mui/material";
import FeatureBox from "../FeatureBox/FeatureBox";

const DataSection = ({
  title,
  description,
  features = [],
  ctaText = "Contact Us",
  onCtaClick,
  ctaLink,
  bgColor = "#f2fbfd",
}) => {
  return (
    <Box
      sx={{
        background: bgColor,
        py: { xs: 6, md: 10 },
       px:{ xs: 2, sm: 4, md: 6 },
        maxWidth: '89% !important', width: '89%' , margin: '0 auto'
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* Left Text */}
        <Grid item xs={12} md={6}>
          <Box px={{ xs: 2, sm: 4 }}>
            {title && (
              <Typography variant="h4" fontWeight={800} gutterBottom>
                {title}
              </Typography>
            )}
            {description && (
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mt: 2, whiteSpace: "pre-line" }}
              >
                {description}
              </Typography>
            )}
          </Box>
        </Grid>

        {/* Right Features */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={3}>
            {features.map((item, i) => (
              <Grid item xs={12} key={i}>
                <FeatureBox {...item} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* CTA Button */}
      {(ctaText && (onCtaClick || ctaLink)) && (
        <Box mt={6} textAlign="center">
          <Button
            variant="contained"
            sx={{
              background: "#6c3ef4",
              px: 5,
              py: 1.5,
              fontWeight: 700,
              fontSize: "1rem",
              textTransform: "none",
              borderRadius: 2,
              "&:hover": {
                background: "#5a30d0",
              },
            }}
            onClick={onCtaClick}
            href={ctaLink}
          >
            {ctaText}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default DataSection;
