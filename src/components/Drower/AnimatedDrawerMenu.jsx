import React, { useState } from "react";
import {
  Drawer,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Typography,
  IconButton,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";

const menuStructure = [
  {
    label: "AI & GenAI Practice",
    to: "/service/ai-and-gen-ai",
    submenu: [
      { label: "GenAI & LLM Integration (GPT, Azure OpenAI)", to: "/service/ai-and-gen-ai/llm" },
      { label: "Agentic AI & AI Agents", to: "/service/ai-and-gen-ai/agents" },
      { label: "NLP & Computer Vision", to: "/service/ai-and-gen-ai/nlp" },
      { label: "ML Engineering & MLOps", to: "/service/ai-and-gen-ai/mlops" },
      { label: "AI Automation (AI + RPA)", to: "/service/ai-and-gen-ai/automation" },
      { label: "AI Advisory & Responsible AI", to: "/service/ai-and-gen-ai/responsible" },
    ],
  },
  {
    label: "Cloud & Application Services",
    to: "/service/cloud-and-application-services",
    submenu: [
      { label: "Azure, AWS, GCP Engineering", to: "/service/cloud-and-application-services/engineering" },
      { label: "DevOps & DevSecOps", to: "/service/cloud-and-application-services/devops" },
      {
        label: "App Modernization & Microservices",
        to: "/service/cloud-and-application-services/modernization",
      },
      { label: "API & Integration Services", to: "/service/cloud-and-application-services/api" },
    ],
  },
  {
    label: "SAP Services",
    to: "/service/sap-services",
    submenu: [
      { label: "SAP S/4HANA Migration", to: "/service/sap-services/s4hana" },
      { label: "SAP BTP, ABAP, Fiori Development", to: "/service/sap-services/btp" },
      { label: "SAP AMS & Managed Support", to: "/service/sap-services/ams" },
    ],
  },
  {
    label: "Managed IT Services",
    to: "/service/managed-it-services",
    submenu: [
      { label: "Infra & Network Monitoring (24/7 NOC)", to: "/service/managed-it-services/infra" },
      { label: "Application Support (L1-L3)", to: "/service/managed-it-services/support" },
      { label: "ITSM, Service Desk & CoE", to: "/service/managed-it-services/itsm" },
      { label: "Managed Resource Services (TMS)", to: "/service/managed-it-services/tms" },
    ],
  },
  {
    label: "Data & Analytics",
    to: "/service/data-and-analytics",
    submenu: [
      { label: "Data Engineering & ETL", to: "/service/data-and-analytics/etl" },
      { label: "Business Intelligence & Dashboards", to: "/service/data-and-analytics/bi" },
      { label: "Data Governance & Security", to: "/service/data-and-analytics/governance" },
      { label: "Azure Data Lake, Snowflake, Power BI", to: "/service/data-and-analytics/tools" },
    ],
  },
  {
    label: "Engineering & Manufacturing IT",
    to: "/service/engineering-and-manufacturing-it",
    submenu: [
      { label: "PLM, CAD/CAE Automation", to: "/service/engineering-and-manufacturing-it/plm" },
      { label: "MES Integration & IoT", to: "/service/engineering-and-manufacturing-it/mes" },
      { label: "Digital Twins & Smart Factory", to: "/service/engineering-and-manufacturing-it/twins" },
      { label: "Industry 4.0 Solutions", to: "/service/engineering-and-manufacturing-it/industry4" },
    ],
  },
  {
    label: "Healthcare & Life Sciences IT",
    to: "/service/healthcare-and-life-sciences-it",
    submenu: [
      { label: "HL7/FHIR Integration", to: "/service/healthcare-and-life-sciences-it/hl7" },
      { label: "Clinical Data Platforms", to: "/service/healthcare-and-life-sciences-it/data" },
      { label: "AI in Imaging & Diagnostics", to: "/service/healthcare-and-life-sciences-it/ai" },
      { label: "Compliance & Regulatory IT", to: "/service/healthcare-and-life-sciences-it/compliance" },
    ],
  },
  {
    label: "Talent Solutions",
    to: "/service/talent-solutions",
    submenu: [
      { label: "IT Staff Augmentation", to: "/service/talent-solutions/staffing" },
      {
        label: "Healthcare & Life Sciences Staffing",
        to: "/service/talent-solutions/healthcare",
      },
      { label: "Direct Hire & Contract-to-Hire", to: "/service/talent-solutions/direct-hire" },
      { label: "Corp-to-Corp & W2", to: "/service/talent-solutions/corp" },
    ],
  },
];

export default function AnimatedDrawerMenu({ open, onClose }) {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleItem = (label) => {
    setExpandedItem((prev) => (prev === label ? null : label));
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
  <Box sx={{ width: 500, padding: 2, overflow: "hidden" }}>
    <Typography
      variant="h6"
      sx={{
        mb: 2,
        fontSize: "1.4rem",
        fontWeight: 700,
        color: "#212877",
        position: "relative",
        borderBottom: "2px solid #fdb913",
        paddingY: 1,
        paddingX: 2,
        borderRadius: "8px",
      }}
    >
      <MiscellaneousServicesIcon sx={{ color: "#fdb913", fontSize: 28, mr: 1 }} />
      Services
    </Typography>

    <List>
      {menuStructure.map((menu) => (
        <Box
          key={menu.label}
          onMouseEnter={() => setExpandedItem(menu.label)}
          onMouseLeave={() => setExpandedItem(null)}
        >
          <ListItem
            button
            component={Link}
            to={menu.to}
            onClick={onClose}
            sx={{
              "&:hover": {
                backgroundColor: "#FFF0E5",
              },
              "&:hover .MuiTypography-root": {
                color: "#fdb913",
                fontWeight: 600,
              },
            }}
          >
            <ListItemText
              primary={menu.label}
              primaryTypographyProps={{
                sx: {
                  color: "#212877",
                  fontWeight: 600,
                  transition: "color 0.3s",
                },
              }}
            />
            {expandedItem === menu.label ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={expandedItem === menu.label} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {menu.submenu.map((sub) => (
                <ListItem
                  key={sub.label}
                  button
                  component={Link}
                  to={sub.to}
                  onClick={onClose}
                  sx={{
                    fontWeight: 500,
                    pl: 4,
                    "&:hover": {
                      backgroundColor: "#FFF0E5",
                      "& .MuiListItemText-primary": {
                        color: "#fdb913!important",
                        fontWeight: "500",
                      },
                    },
                  }}
                >
                  <ListItemText
                    primary={sub.label}
                    primaryTypographyProps={{
                      sx: {
                        color: "inherit",
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </Box>
      ))}
    </List>
  </Box>
</Drawer>

  );
}
