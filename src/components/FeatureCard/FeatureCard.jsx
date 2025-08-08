// src/components/FeatureCard.js
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 3,
          p: 4,
          borderRadius: "20px",
          background: "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
          border: "1px solid rgba(0, 0, 0, 0.06)",
          boxShadow:
            "0 8px 32px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.9)",
          minHeight: 200,
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background:
              "linear-gradient(90deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
            opacity: 0,
            transition: "opacity 0.3s ease",
          },
          "&:hover": {
            boxShadow:
              "0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 1)",
            background: "linear-gradient(145deg, #ffffff 0%, #fafbfc 100%)",
            "&::before": {
              opacity: 1,
            },
            "& .feature-icon": {
              transform: "scale(1.1) rotate(5deg)",
              background: "linear-gradient(145deg, #667eea 0%, #764ba2 100%)",
            },
            "& .feature-title": {
              color: "#2d3748",
            },
          },
        }}
      >
        <Box
          className="feature-icon"
          sx={{
            width: 72,
            height: 72,
            borderRadius: "20px",
            background: "linear-gradient(145deg, #f7fafc 0%, #edf2f7 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            border: "1px solid rgba(0, 0, 0, 0.05)",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
            "& svg": {
              color: "#4a5568",
              fontSize: "2rem",
              transition: "color 0.3s ease",
            },
            "&:hover svg": {
              color: "#ffffff",
            },
          }}
        >
          {icon}
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography
            className="feature-title"
            variant="h6"
            sx={{
              color: "#2d3748",
              fontWeight: 700,
              fontSize: { xs: "1.1rem", md: "1.3rem" },
              lineHeight: 1.3,
              mb: 2,
              transition: "color 0.3s ease",
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              letterSpacing: "-0.01em",
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#718096",
              fontWeight: 400,
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              lineHeight: 1.6,
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              letterSpacing: "0.01em",
            }}
          >
            {description}
          </Typography>
        </Box>

        {/* Subtle decorative element */}
        <Box
          sx={{
            position: "absolute",
            top: -20,
            right: -20,
            width: 60,
            height: 60,
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
            opacity: 0.5,
            transition: "all 0.4s ease",
            ".feature-card:hover &": {
              opacity: 0.8,
              transform: "scale(1.2)",
            },
          }}
        />
      </Box>
    </motion.div>
  );
};

export default FeatureCard;
