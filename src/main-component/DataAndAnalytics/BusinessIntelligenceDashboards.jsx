import React, { Fragment, useState } from "react";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import ContactSection from "../../components/It-Services-Components/ContactSection";
import FeaturesSection from "../../components/FeaturesSectionSub/FeaturesSection";
import { CssBaseline } from "@mui/material";
import DataSection from "../../components/DataSection/DataSection";
import TechnologyLogos from "../../components/TechnologyLogos/TechnologyLogos";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import InsightsIcon from "@mui/icons-material/Insights";
import BarChartIcon from "@mui/icons-material/BarChart";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";

// import InsightsIcon from "@mui/icons-material/Insights";
// import QueryStatsIcon from "@mui/icons-material/QueryStats";
import SpeedIcon from "@mui/icons-material/Speed";

const features = [
  {
    icon: <QueryStatsIcon sx={{ color: "#0288d1", fontSize: 34 }} />,
    title: "Unified Data Access",
    description:
      "Integrate and centralize data from CRMs, ERPs, cloud apps, and databases for seamless reporting and decision-making.",
  },
  {
    icon: <DashboardCustomizeIcon sx={{ color: "#0288d1", fontSize: 34 }} />,
    title: "Interactive Dashboards",
    description:
      "Design responsive, user-friendly dashboards with drill-down capabilities and cross-filtering for deeper data exploration.",
  },
  {
    icon: <InsightsIcon sx={{ color: "#0288d1", fontSize: 34 }} />,
    title: "Real-Time Insights",
    description:
      "Enable up-to-the-minute decision-making with real-time metrics, alerts, and performance monitoring from live data streams.",
  },
  {
    icon: <BarChartIcon sx={{ color: "#0288d1", fontSize: 34 }} />,
    title: "Advanced Visuals",
    description:
      "Leverage custom charts, graphs, KPIs, and storytelling visuals that make complex data easier to understand and act upon.",
  },
  {
    icon: <MonitorHeartIcon sx={{ color: "#0288d1", fontSize: 34 }} />,
    title: "Self-Service BI",
    description:
      "Empower business users with drag-and-drop tools to explore data, create reports, and make independent insights.",
  },
  {
    icon: <AutoGraphIcon sx={{ color: "#0288d1", fontSize: 34 }} />,
    title: "Predictive Dashboards",
    description:
      "Infuse dashboards with ML/AI-powered forecasts, anomaly detection, and trend analysis to support proactive decisions.",
  },
];

const Datafeatures = [
  {
    icon: <InsightsIcon sx={{ color: "#5b5fc7", fontSize: 36 }} />,
    title: "Interactive Dashboard Development",
    description:
      "Design intuitive, customizable dashboards that turn complex data into clear, actionable insights—enabling better decision-making across all levels of your organization.",
  },
  {
    icon: <QueryStatsIcon sx={{ color: "#f5b400", fontSize: 36 }} />,
    title: "Advanced Data Visualization",
    description:
      "Leverage modern BI tools like Power BI, Tableau, and Looker to build visually compelling, analytics-rich visualizations that drive data storytelling and clarity.",
  },
  {
    icon: <SpeedIcon sx={{ color: "#fb5607", fontSize: 36 }} />,
    title: "Real-Time Insights & Alerts",
    description:
      "Enable real-time reporting, trend detection, and KPI monitoring with streaming dashboards and proactive alert systems—keeping you informed and agile.",
  },
];
const BusinessIntelligenceDashboards = () => {
  return (
    <Fragment>
         <div className="sco_agency">
           <div className="page_content service-single-page">
             <HeroSectionTitle
               title="Business Intelligence & Dashboards"
               subtitle="Empower Decision-Making with Intelligent Dashboards & BI Solutions"
               buttonText="TALK TO OUR EXPERTS"
               buttonLink="#contact"
               backgroundImage="/Business-Intelligence.webp"
             />
             <CssBaseline />
             <FeaturesSection features={features} />
             <DataSection
               title="Empower Decisions with Intelligent Dashboards & BI Solutions"
description={`In today’s insight-driven economy, businesses need clear, real-time visibility into their operations and KPIs.

Our Business Intelligence & Dashboard solutions help you turn complex data into actionable insights through dynamic dashboards, interactive reports, and automated visualizations.

From integrating multiple data sources to designing intuitive dashboards in Power BI, Tableau, or Looker—we ensure that every stakeholder gets the right insights at the right time.

With our expertise in data modeling, drill-down analytics, and real-time visualization—we help you make confident decisions, optimize operations, and drive strategic growth.`}
               features={Datafeatures}
               ctaText="Contact Us"
               ctaLink="/contact"
             />
             <TechnologyLogos />
             <ContactSection />
           </div>
         </div>
       </Fragment>
  )
}

export default BusinessIntelligenceDashboards
