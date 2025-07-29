import { Box, Typography, Divider } from "@mui/material";

const OurCompanies = () => {
  return (
    <Box
      sx={{
        pt: 6,
        pb: 3,
        px: { xs: 2, sm: 4, md: 4 },
        textAlign: "center",
        backgroundColor: "#fff",
        maxWidth: "1200px",
        margin: "0 auto",
        marginTop: 4,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
          fontWeight: 600,
          mb: 4,
        }}
      >
        Our Companies
      </Typography>

      <Box
        sx={{
          border: "1px solid #ccc",
          borderRadius: "16px",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "center",
          padding: 3,
          gap: 10,
        }}
      >
        {/* Left Logo */}
        <a
          href="https://lumininc.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            component="img"
            src="/Lumininc-logo.png"
            alt="Lumin Technologies"
            sx={{
              width: { xs: "120px", sm: "140px", md: "180px" },
              objectFit: "contain",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
        </a>
        {/* Vertical Divider */}
        <Divider
          orientation={window.innerWidth >= 600 ? "vertical" : "horizontal"}
          flexItem
          sx={{ borderColor: "black" }}
        />

        {/* Right Logo */}
        <a href="https://lumin-innovations.com/" target="_blank" rel="noopener noreferrer">
        <Box
          component="img"
          src="/Lumin-Innovations-Horizontal-scaled-2.png"
          alt="Lumin Innovations"
          sx={{
            width: { xs: "140px", sm: "160px", md: "300px" },
            objectFit: "contain",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />
        </a>
      </Box>
    </Box>
  );
};

export default OurCompanies;
