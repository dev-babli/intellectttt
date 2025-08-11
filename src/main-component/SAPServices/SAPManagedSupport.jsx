import React, { Fragment, useState } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import Footer from "../../components/footer/Footer";
import OptimizedBlogSection from "../../components/OptimizedBlogSection/OptimizedBlogSection";
import OptimizedCaseStudySection from "../../components/OptimizedCaseStudySection/OptimizedCaseStudySection";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import FeaturesSection from "../../components/FeaturesSectionSub/FeaturesSection";
import { CssBaseline } from "@mui/material";
import DataSection from "../../components/DataSection/DataSection";
import TechnologyLogos from "../../components/TechnologyLogos/TechnologyLogos";
import VerifiedIcon from "@mui/icons-material/Verified";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

import AssessmentIcon from "@mui/icons-material/Assessment";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import SupportIcon from "@mui/icons-material/Support";

const features = [
  {
    icon: <VerifiedIcon sx={{ color: "#4CAF50", fontSize: 36 }} />,
    title: "Certified SAP Experts",
    description:
      "Our team includes certified professionals with deep experience in SAP S/4HANA migrations across industries.",
  },
  {
    icon: <FlashOnIcon sx={{ color: "#FF9800", fontSize: 36 }} />,
    title: "Accelerated Time-to-Value",
    description:
      "We leverage proven frameworks and automation tools to reduce downtime and speed up your transformation.",
  },
  {
    icon: <MonetizationOnIcon sx={{ color: "#03A9F4", fontSize: 36 }} />,
    title: "Cost-Effective Delivery",
    description:
      "Optimized migration planning ensures minimal waste, predictable costs, and maximum ROI.",
  },
  {
    icon: <SwapHorizIcon sx={{ color: "#9C27B0", fontSize: 36 }} />,
    title: "Flexible Migration Approaches",
    description:
      "Whether it's Greenfield, Brownfield, or Hybrid, we tailor the method to your business and IT landscape.",
  },
  {
    icon: <ArchitectureIcon sx={{ color: "#FF5722", fontSize: 36 }} />,
    title: "Future-Ready Architecture",
    description:
      "We help modernize your ERP foundation to support innovations like AI, analytics, and cloud-native services.",
  },
  {
    icon: <SupportAgentIcon sx={{ color: "#607D8B", fontSize: 36 }} />,
    title: "End-to-End Support",
    description:
      "From assessment to post-migration optimization, we ensure a smooth, secure, and value-driven journey.",
  },
];

const Datafeatures = [
  {
    icon: <AssessmentIcon sx={{ color: "#5b5fc7", fontSize: 36 }} />,
    title: "Readiness & System Assessment",
    description:
      "Evaluate your current SAP ECC environment with detailed readiness checks, custom code analysis, and a migration strategy aligned with your business goals.",
  },
  {
    icon: <PublishedWithChangesIcon sx={{ color: "#f5b400", fontSize: 36 }} />,
    title: "Seamless Data & Process Migration",
    description:
      "Ensure smooth transition of master data, transactional data, and business processes to S/4HANA using proven tools, best practices, and minimal downtime techniques.",
  },
  {
    icon: <SupportIcon sx={{ color: "#fb5607", fontSize: 36 }} />,
    title: "Post-Migration Optimization & Support",
    description:
      "Optimize your S/4HANA system post go-live with performance tuning, user enablement, continuous enhancements, and managed support services.",
  },
];
const SAPManagedSupport = () => {
  // Scroll to top when component mounts
  useScrollToTop();
  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <HeroSectionTitle
            title="SAP S/4HANA Migration & Support"
            subtitle="Accelerate Your SAP S/4HANA Migration with Confidence and Future-Ready Support"
            buttonText="TALK TO OUR EXPERTS"
            buttonLink="#contact"
            backgroundImage="/hana.webp"
          />
          <CssBaseline />
          <FeaturesSection features={features} />
          <DataSection
            title="Accelerate Your SAP S/4HANA Migration with Confidence"
            description={`In today’s evolving digital landscape, migrating to SAP S/4HANA is not just an upgrade—it’s a strategic transformation toward a more intelligent enterprise.

Our SAP S/4HANA Migration services help organizations move from legacy SAP ECC systems to S/4HANA seamlessly, minimizing risk while maximizing business value.

From system assessment and custom code remediation to data migration, process optimization, and post-go-live support—we cover every stage of the migration journey.

With certified SAP consultants, proven tools, and a roadmap tailored to your business goals, we ensure a smooth, secure, and future-ready S/4HANA transition.`}
            features={Datafeatures}
            ctaText="Let's Connect"
            ctaLink="/contact"
          />
          <TechnologyLogos />
          {}
        </div>
      </div>
          
        <OptimizedBlogSection 
          title="Latest Insights & Updates"
          subtitle="Stay informed with our latest industry insights, technical articles, and thought leadership content"
        />
        <OptimizedCaseStudySection 
          title="Success Stories"
          subtitle="Discover how we've helped businesses achieve their digital transformation goals"
        /><Footer />

        </Fragment>
  );
};

export default SAPManagedSupport;
