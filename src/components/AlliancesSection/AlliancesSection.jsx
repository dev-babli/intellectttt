import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

// Styled box for logo cards
const LogoCard = styled(Box)(({ theme }) => ({
  backgroundColor: "#f9f9f9",
  borderRadius: 12,
  padding: "16px 24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.3s ease-in-out",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.05)",
    backgroundColor: "#fff",
    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
  },
}));

const AlliancesSection = () => {
  const partners = [
    { src: "/partners/aws-logo.png", alt: "RedHat" },
    { src: "/partners/citrix-logo.svg", alt: "Cloud" },
    { src: "/partners/google-cloud-logo.png", alt: "AWS" },
    { src: "/partners/ibm.png", alt: "Automation Anywhere" },
    { src: "/partners/red-hat-logo.png", alt: "UiPath" },
    { src: "/partners/salesforce-logo.png", alt: "Citrix" },
    { src: "/partners/sap.png", alt: "IBM" },
    { src: "/partners/uipath.png", alt: "Salesforce" },
    { src: "/partners/automation-1.png", alt: "SAP" },
  ];

  return (
    <Box px={{ xs: 2, md: 6 }} py={8} bgcolor="#fff" maxWidth={"1355px"} margin="0 auto">
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        color="#212877"
        mb={4}
      >
        Alliances & Partnerships
      </Typography>

      <Grid container spacing={4} alignItems="center">
        {/* Left image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/partners/Partnership.webp" 
            alt="Partnership"
            sx={{
              width: "100%",
              maxHeight: 400,
              borderRadius: 4,
              boxShadow: 3,
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: 6,
              },
            }}
          />
        </Grid>

        {/* Logos Grid */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {partners.map((logo, index) => (
              <Grid item xs={4} sm={4} md={4} key={index}>
                <LogoCard>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    style={{ maxHeight: 60, maxWidth: "100%" }}
                  />
                </LogoCard>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AlliancesSection;
