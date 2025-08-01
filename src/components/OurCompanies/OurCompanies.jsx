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
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        {/* Lumin Inc. Box */}
        <Box
          component="a"
          href="https://lumininc.com/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            flex: 1,
            maxWidth: { xs: "100%", md: "400px" },
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <Box
            sx={{
              border: "2px solid #e0e0e0",
              borderRadius: "16px",
              padding: 3,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              transition: "all 0.3s ease",
              backgroundColor: "rgba(59, 130, 246, 0.05)",
              "&:hover": {
                borderColor: "#3b82f6",
                backgroundColor: "rgba(59, 130, 246, 0.1)",
                transform: "translateY(-4px)",
                boxShadow: "0 8px 25px rgba(59, 130, 246, 0.15)",
              },
            }}
          >
            <Box
              component="img"
              src="/Lumininc-logo.png"
              alt="Lumin Inc."
              sx={{
                width: { xs: "120px", sm: "140px", md: "160px" },
                height: "auto",
                objectFit: "contain",
                mb: 2,
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: "#1f2937",
                mb: 1,
              }}
            >
              Lumin Inc.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#6b7280",
                textAlign: "center",
                lineHeight: 1.5,
                mb: 2,
              }}
            >
              Healthcare display and consulting solutions specializing in
              medical technology
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "#3b82f6",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Healthcare Technology
            </Typography>
          </Box>
        </Box>

        {/* Lumin Innovations Box */}
        <Box
          component="a"
          href="https://lumin-innovations.com/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            flex: 1,
            maxWidth: { xs: "100%", md: "400px" },
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <Box
            sx={{
              border: "2px solid #e0e0e0",
              borderRadius: "16px",
              padding: 3,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              transition: "all 0.3s ease",
              backgroundColor: "rgba(16, 185, 129, 0.05)",
              "&:hover": {
                borderColor: "#10b981",
                backgroundColor: "rgba(16, 185, 129, 0.1)",
                transform: "translateY(-4px)",
                boxShadow: "0 8px 25px rgba(16, 185, 129, 0.15)",
              },
            }}
          >
            <Box
              component="img"
              src="/Lumin-Innovations-Horizontal-scaled-2.png"
              alt="Lumin Innovations"
              sx={{
                width: { xs: "140px", sm: "160px", md: "200px" },
                height: "auto",
                objectFit: "contain",
                mb: 2,
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: "#1f2937",
                mb: 1,
              }}
            >
              Lumin Innovations
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#6b7280",
                textAlign: "center",
                lineHeight: 1.5,
                mb: 2,
              }}
            >
              Advanced manufacturing and automation driving Industry 4.0
              solutions
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "#10b981",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Manufacturing & Automation
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OurCompanies;
