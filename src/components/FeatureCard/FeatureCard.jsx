// src/components/FeatureCard.js
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description, color = "#6366f1" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01, y: -2 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          p: 3,
          borderRadius: "12px",
          background: "#ffffff",
          border: "1px solid #e5e7eb",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          minHeight: 200,
          transition: "all 0.3s ease",
          position: "relative",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
            borderColor: color,
          },
        }}
      >
        {/* Icon Wrapper */}
        <Box
          sx={{
            width: "60px",
            height: "60px",
            borderRadius: "8px",
            background: "#f8fafc",
            border: "1px solid #e5e7eb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "flex-start",
          }}
        >
          <Box
            sx={{
              color: "#6b7280",
              fontSize: "1.5rem",
              transition: "color 0.2s ease",
            }}
          >
            {icon}
          </Box>
        </Box>

        {/* Content */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontSize: "1.125rem",
              fontWeight: 700,
              color: "#1a1a1a",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
              fontFamily:
                "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "0.95rem",
              color: "#666666",
              lineHeight: 1.6,
              fontWeight: 400,
              letterSpacing: "0.01em",
              fontFamily:
                "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            }}
          >
            {description}
          </Typography>
        </Box>

        {/* CTA Link */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            mt: "auto",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#1a1a1a",
              fontWeight: 600,
              fontSize: "0.875rem",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              fontFamily:
                "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              display: "flex",
              alignItems: "center",
              gap: 1,
              "&:hover": {
                color: color,
              },
            }}
          >
            LEARN MORE
            <Box
              component="span"
              sx={{
                fontSize: "0.75rem",
                transition: "transform 0.2s ease",
                "&:hover": {
                  transform: "translateX(4px)",
                },
              }}
            >
              →
            </Box>
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
};

export default FeatureCard;
