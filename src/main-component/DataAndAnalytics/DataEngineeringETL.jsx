import React, { Fragment, useState } from "react";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import ContactSection from "../../components/It-Services-Components/ContactSection";
import FeaturesSection from "../../components/FeaturesSectionSub/FeaturesSection";
import { CssBaseline } from "@mui/material";
import DataSection from "../../components/DataSection/DataSection";
import TechnologyLogos from "../../components/TechnologyLogos/TechnologyLogos";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import StorageIcon from "@mui/icons-material/Storage";
import CloudSyncIcon from "@mui/icons-material/CloudSync";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

import CodeIcon from "@mui/icons-material/Code";
import WebAssetIcon from "@mui/icons-material/WebAsset";
// import CloudSyncIcon from "@mui/icons-material/CloudSync";

const features = [
  {
    icon: (
      <IntegrationInstructionsIcon sx={{ color: "#e85d04", fontSize: 34 }} />
    ),
    title: "End-to-End ETL",
    description:
      "Design robust ETL workflows to extract, transform, and load data across diverse sources—supporting both batch and real-time scenarios.",
  },
  {
    icon: <StorageIcon sx={{ color: "#e85d04", fontSize: 34 }} />,
    title: "Cloud Data Integration",
    description:
      "Seamlessly integrate with platforms like Snowflake, Redshift, BigQuery, and Azure Synapse to enable unified, analytics-ready data storage.",
  },
  {
    icon: <CloudSyncIcon sx={{ color: "#e85d04", fontSize: 34 }} />,
    title: "Real-Time Processing",
    description:
      "Enable real-time decision-making using Kafka, Spark Streaming, or Flink to handle high-volume data ingestion and processing with low latency.",
  },
  {
    icon: <QueryStatsIcon sx={{ color: "#e85d04", fontSize: 34 }} />,
    title: "Data Quality Assurance",
    description:
      "Implement automated validation, cleansing, lineage tracking, and monitoring to ensure data integrity, accuracy, and trustworthiness.",
  },
  {
    icon: <SyncAltIcon sx={{ color: "#e85d04", fontSize: 34 }} />,
    title: "ETL Automation Tools",
    description:
      "Automate complex workflows using tools like Apache Airflow, dbt, or Azure Data Factory—ensuring repeatability, scalability, and performance.",
  },
  {
    icon: <TipsAndUpdatesIcon sx={{ color: "#e85d04", fontSize: 34 }} />,
    title: "Ongoing Optimization Support",
    description:
      "Drive continuous improvement through performance tuning, cost optimization, and proactive issue resolution in your data engineering landscape.",
  },
];

const Datafeatures = [
  {
    icon: <CodeIcon sx={{ color: "#5b5fc7", fontSize: 36 }} />,
    title: "Custom ETL Pipeline Development",
    description:
      "Design and implement scalable ETL workflows tailored to your data ecosystem—supporting batch and real-time ingestion, transformation, and orchestration across structured and unstructured data.",
  },
  {
    icon: <WebAssetIcon sx={{ color: "#f5b400", fontSize: 36 }} />,
    title: "Data Lake & Warehouse Integration",
    description:
      "Enable seamless data consolidation across cloud platforms like Snowflake, BigQuery, Redshift, and Azure Synapse—ensuring fast, reliable access for analytics and reporting.",
  },
  {
    icon: <CloudSyncIcon sx={{ color: "#fb5607", fontSize: 36 }} />,
    title: "Real-Time Streaming & Data Quality",
    description:
      "Ingest and process data streams in real time using tools like Kafka, Spark, or Flink—while embedding data validation, cleansing, and monitoring to maintain accuracy and trust.",
  },
];
const DataEngineeringETL = () => {
  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <HeroSectionTitle
            title="Data Engineering & ETL Services"
            subtitle="Unlock the Power of Data with Our SAP BTP, ABAP & Fiori Development & Support Services"
            buttonText="TALK TO OUR EXPERTS"
            buttonLink="#contact"
            backgroundImage="/Data-Engineering.webp"
          />
          <CssBaseline />
          <FeaturesSection features={features} />
          <DataSection
            title="Accelerate Insights with Scalable Data Engineering & ETL Services"
            description={`In today’s data-driven world, business agility depends on the ability to harness, transform, and operationalize large volumes of data—fast and reliably.

Our Data Engineering & ETL Services empower you to build robust, scalable data pipelines that integrate data from diverse sources into centralized, analytics-ready environments.

From designing real-time and batch ETL workflows to implementing cloud-native data lakes and warehouses, we help you optimize performance, ensure data quality, and enable actionable insights.

With certified data engineers, modern ETL frameworks, and end-to-end support—we transform your raw data into a strategic asset, driving smarter decisions and competitive advantage.`}
            features={Datafeatures}
            ctaText="Let's Connect"
            ctaLink="/contact"
          />
          <TechnologyLogos />
          <ContactSection />
        </div>
      </div>
    </Fragment>
  );
};

export default DataEngineeringETL;
