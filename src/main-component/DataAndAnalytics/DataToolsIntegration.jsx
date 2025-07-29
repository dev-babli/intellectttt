import React, { Fragment, useState } from "react";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import ContactSection from "../../components/It-Services-Components/ContactSection";
import FeaturesSection from "../../components/FeaturesSectionSub/FeaturesSection";
import { CssBaseline } from "@mui/material";
import DataSection from "../../components/DataSection/DataSection";
import TechnologyLogos from "../../components/TechnologyLogos/TechnologyLogos";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import BarChartIcon from "@mui/icons-material/BarChart";
import HubIcon from "@mui/icons-material/Hub";
import InsightsIcon from "@mui/icons-material/Insights";
import SyncAltIcon from "@mui/icons-material/SyncAlt";

import StorageIcon from "@mui/icons-material/Storage";           
import DataObjectIcon from "@mui/icons-material/DataObject";     
// import InsightsIcon from "@mui/icons-material/Insights";     

const features = [
  {
    icon: <CloudQueueIcon sx={{ color: "#0288d1", fontSize: 34 }} />,
    title: "Cloud-Native Data Lakes",
    description:
      "Build scalable and secure data lakes using Azure Data Lake for unified storage and analytics across your enterprise.",
  },
  {
    icon: <AcUnitIcon sx={{ color: "#0288d1", fontSize: 34 }} />,
    title: "Modern Data Warehousing",
    description:
      "Leverage Snowflake’s cloud-native architecture for elastic compute, storage separation, and effortless data sharing.",
  },
  {
    icon: <BarChartIcon sx={{ color: "#0288d1", fontSize: 34 }} />,
    title: "Power BI Dashboards",
    description:
      "Create dynamic dashboards and reports with Power BI to deliver real-time insights and executive visibility.",
  },
  {
    icon: <HubIcon sx={{ color: "#0288d1", fontSize: 34 }} />,
    title: "Seamless Data Integration",
    description:
      "Integrate structured and unstructured data from various sources to fuel advanced analytics and decision-making.",
  },
  {
    icon: <InsightsIcon sx={{ color: "#0288d1", fontSize: 34 }} />,
    title: "Advanced Analytics Enablement",
    description:
      "Enable predictive and prescriptive analytics by aligning your data platforms with AI/ML workflows.",
  },
  {
    icon: <SyncAltIcon sx={{ color: "#0288d1", fontSize: 34 }} />,
    title: "Real-Time Data Sync",
    description:
      "Ensure real-time data availability with robust ETL/ELT pipelines between Azure, Snowflake, and Power BI.",
  },
];

const Datafeatures = [
  {
    icon: <StorageIcon sx={{ color: "#0078D4", fontSize: 36 }} />,
    title: "Lakehouse Architecture",
    description:
      "Combine data lake flexibility with warehouse performance—bridging batch and streaming pipelines for modern analytics use cases.",
  },
  {
    icon: <DataObjectIcon sx={{ color: "#29B5E8", fontSize: 36 }} />,
    title: "Snowflake ELT Workflows",
    description:
      "Create efficient ELT pipelines within Snowflake—optimizing data transformation, modeling, and sharing with near-zero maintenance overhead.",
  },
  {
    icon: <InsightsIcon sx={{ color: "#F2C811", fontSize: 36 }} />,
    title: "Interactive BI Dashboards",
    description:
      "Deliver real-time business intelligence through interactive dashboards, automated KPIs, and drill-down visualizations in Power BI.",
  },
];
const DataToolsIntegration = () => {
  return (
    <Fragment>
             <div className="sco_agency">
               <div className="page_content service-single-page">
                 <HeroSectionTitle
                   title="Azure Data Lake, Snowflake, Power BI"
                   subtitle="Maximize the value of your data with a modern analytics ecosystem powered by Azure Data Lake, Snowflake, and Power BI."
                   buttonText="TALK TO OUR EXPERTS"
                   buttonLink="#contact"
                   backgroundImage="/Data-Analytics-Header.webp"
                 />
                 <CssBaseline />
                 <FeaturesSection features={features} />
                 <DataSection
                   title="Unify. Analyze. Scale."
    description={`Maximize the value of your data with a modern analytics ecosystem powered by Azure Data Lake, Snowflake, and Power BI.

We help organizations unify disparate data sources, store them efficiently in scalable cloud lakes or warehouses, and visualize actionable insights through interactive dashboards.

From ingesting and organizing raw data in Azure Data Lake to building robust Snowflake schemas and delivering business insights via Power BI—we design end-to-end data pipelines that fuel decision-making.

Whether it's real-time analytics, governed self-service BI, or cross-platform integration—our expertise ensures your data works smarter, faster, and harder for your business.`}
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

export default DataToolsIntegration
