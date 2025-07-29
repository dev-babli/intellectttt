import { Box, Grid, Typography } from "@mui/material";

const WhoAreWeSection = ({
  heading = "Who Are We?",
  subheading = "About Us",
  paragraphs = [],
  stats = [],
  bgColor = "#fff",
  cardColor = "#212877",
  hoverColor = "#1a1f66",
  textColor = "#fff",
}) => {
  return (
    <Box
      px={{ xs: 2, md: 6 }}
      pt={10}
      pb={4}
      bgcolor={bgColor}
      maxWidth={"1200px"}
      margin="0 auto"
    >
      <Grid container spacing={4} alignItems="center">
        {/* Heading + Paragraphs */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight={700} color={cardColor} gutterBottom>
            {heading}
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ mb: 2, fontWeight: "bold", fontSize: "1.2rem" }}
          >
            {subheading}
          </Typography>

          {paragraphs.map((para, index) => (
            <Typography color="text.secondary" key={index} paragraph>
              {para}
            </Typography>
          ))}
        </Grid>

        {/* Stats Cards */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {stats.map((stat, index) => (
              <Grid item xs={6} sm={6} md={6} key={index}>
                <Box
                  sx={{
                    backgroundColor: cardColor,
                    color: textColor,
                    borderRadius: 2,
                    p: 3,
                    minHeight: 180,
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    transition: "all 0.3s ease-in-out",
                    transform: "scale(1)",
                    boxShadow: 2,
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: 6,
                      backgroundColor: hoverColor,
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: -10,
                      right: -10,
                      width: 80,
                      height: 80,
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: "50%",
                    }}
                  />
                  <Typography variant="h4" color={textColor} fontWeight={700} fontSize={"3rem"}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" mt={1}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhoAreWeSection;
