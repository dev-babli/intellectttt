import React from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Typography, Container, Button } from "@mui/material";
import { motion } from "framer-motion";
import icon1 from "../../../images/icon/da-fea_icon01.svg";
import icon2 from "../../../images/icon/da-fea_icon02.svg";
import icon3 from "../../../images/icon/da-fea_icon03.svg";
import icon4 from "../../../images/icon/da-fea_icon04.svg";
import hicon from "../../../images/icon/flower-icon-blue.svg";

const Features = [
  {
    title: "Dispersed data",
    des: "Your data is held in multiple sources, making it difficult to get a single view of the truth.",
    icon: icon1,
    color: "#6366f1",
  },
  {
    title: "Skills shortage",
    des: "You struggle to get data into an accessible format and act on generated insights.",
    icon: icon2,
    color: "#f59e0b",
  },
  {
    title: "Business adoption",
    des: "Senior stakeholders don't understand the untapped value that data and AI can bring.",
    icon: icon3,
    color: "#10b981",
  },
  {
    title: "Solution design",
    des: "You have the insights but can't grasp the technology to drive the business forward.",
    icon: icon4,
    color: "#ef4444",
  },
];

const FeatureCard = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Box
        sx={{
          p: 3,
          borderRadius: "12px",
          background: "#ffffff",
          border: "1px solid #e5e7eb",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          height: "100%",
          transition: "all 0.3s ease",
          position: "relative",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
            borderColor: feature.color,
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
            mb: 3,
          }}
        >
          <img
            src={feature.icon}
            alt={feature.title}
            style={{
              width: "30px",
              height: "30px",
            }}
          />
        </Box>

        {/* Content */}
        <Typography
          variant="h6"
          sx={{
            fontSize: "1.125rem",
            fontWeight: 700,
            color: "#1a1a1a",
            lineHeight: 1.3,
            letterSpacing: "-0.01em",
            fontFamily:
              'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            mb: 2,
          }}
        >
          {feature.title}
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
              'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            mb: 3,
          }}
        >
          {feature.des}
        </Typography>

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
                'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              display: "flex",
              alignItems: "center",
              gap: 1,
              "&:hover": {
                color: feature.color,
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

const FeatureSection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <Box
      sx={{
        background: "#ffffff",
        py: 10,
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 2,
            }}
          >
            <img
              src={hicon}
              alt=""
              style={{ width: "20px", height: "20px", marginRight: "8px" }}
            />
            <Typography
              variant="overline"
              sx={{
                color: "#6366f1",
                fontWeight: 600,
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily:
                  'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
            >
              Challenge
            </Typography>
          </Box>
          <Typography
            variant="h2"
            sx={{
              color: "#1a1a1a",
              fontWeight: 700,
              fontSize: { xs: "1.75rem", md: "2.5rem" },
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              fontFamily:
                'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            Can't see the wood from the trees? Don't let good data go to waste
          </Typography>
        </Box>

        {/* Feature Cards Grid */}
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {Features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <FeatureCard feature={feature} index={index} />
            </Grid>
          ))}
        </Grid>

        {/* CTA Button */}
        <Box sx={{ textAlign: "center" }}>
          <Button
            component={Link}
            to="/contact"
            onClick={ClickHandler}
            variant="contained"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: "8px",
              background: "#6366f1",
              color: "#ffffff",
              fontWeight: 600,
              textTransform: "none",
              fontSize: "0.95rem",
              letterSpacing: "0.02em",
              fontFamily:
                'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              boxShadow: "0 2px 8px rgba(99, 102, 241, 0.3)",
              transition: "all 0.2s ease",
              "&:hover": {
                background: "#5b5bd6",
                transform: "translateY(-1px)",
                boxShadow: "0 4px 12px rgba(99, 102, 241, 0.4)",
              },
            }}
          >
            Book a Discover Call
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FeatureSection;
