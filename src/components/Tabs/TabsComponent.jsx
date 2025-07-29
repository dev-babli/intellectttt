import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SectionHeading from "../SectionHeading/SectionHeading";

const tabData = [
  {
    label: "AI & Gen AI",
    title: "AI & Gen AI Consulting",
    description:
      "Empower your business with next-generation AI and Generative AI solutions. Accelerate innovation, unlock new revenue streams, and drive intelligent automation across your organization.",
    image: "/video/Ai.mp4",
    href: "/service/ai-and-gen-ai",
  },
  {
    label: "Cloud & Application",
    title: "Cloud & Application Services",
    description: "Modernize your IT landscape with scalable cloud platforms, custom applications, seamless integrations, and agile delivery for faster business outcomes.",
    image: "/video/cld.mp4",
    href: "/service/cloud-and-application-services",
  },
  {
    label: "SAP",
    title: "Data Management Services",
    description: "Transform your enterprise with end-to-end SAP solutions, process optimization, intelligent automation, and accelerated digital transformation across your value chain.",
    image: "/video/shap.mp4",
    href: "/service/sap-services",
  },
  {
    label: "Data &  Analytics",
    title: "Data & Analytics",
    description: "Unlock actionable insights with advanced data engineering, real-time analytics, intelligent dashboards, and AI-powered decision-making capabilities.",
    image: "/video/data.mp4",
    href: "/service/data-and-analytics",
  },
];

export default function TabsComponent() {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const activeTab = tabData[value];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ maxWidth: "1357px",   margin: "0 auto", pt: { xs: 2, sm: 4 }, pb: { xs: 4, sm: 6, md: 0 } }}
    >
      <SectionHeading />
      {/* Tabs */}
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        sx={{
          backgroundColor: "#ffffffff!important",
          borderRadius: "30px",
          px: { xs: 1, sm: 2 },
          py: { xs: 1, sm: 1.5 },
          width: { xs: "100%", sm: "fit-content" },
          mx: "auto",
          overflowX: "auto",
          maxWidth: "100%",
          border: "1px solid #2E5AAC",
        }}
      >
        {tabData.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            sx={{
              backgroundColor: value === index ? "#0199D3!important" : "transparent",
              color: value === index ? "#ffffff !important" : "#000",
              borderRadius: "30px",
              fontWeight: 600,
              textTransform: "none",
              minWidth: { xs: 100, sm: 140 },
              mx: { xs: 0.5, sm: 1 },
              fontSize: { xs: "0.75rem", sm: "1rem" },
              flexShrink: 0, // ensures consistent width
              
            }}
          />
        ))}
      </Tabs>

      {/* Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          marginTop: 4,
          backgroundColor: "#feffffff",
          borderRadius: 4,
          overflow: "hidden",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          textAlign: "start",
        }}
      >
        {/* Left Text */}
        <Box sx={{ flex: 1, padding: { xs: 2, sm: 4 } }}>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            fontWeight="bold"
            color="#1D3557"
          >
            {activeTab.title}
          </Typography>
          <Typography variant="body1" color="#333" mt={2} mb={4}>
            {activeTab.description}
          </Typography>
          <Button
          href={activeTab.href}
            variant="contained"
            sx={{
              backgroundColor: "#0199D3",
              borderRadius: "20px",
              paddingX: 4,
              paddingY: 1,
              fontWeight: 600,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#0199D3",
                color: "#fff",
              },
            }}
          >
            Explore Now
          </Button>
        </Box>

        <Box sx={{ flex: 1 }}>
          <video
            src={activeTab.image} // same key used, you can rename to activeTab.video if needed
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: isMobile ? "200px" : "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
