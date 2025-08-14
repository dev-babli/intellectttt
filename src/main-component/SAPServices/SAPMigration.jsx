import React, { Fragment, useState } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import Footer from "../../components/footer/Footer";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import FeaturesSection from "../../components/FeaturesSectionSub/FeaturesSection";
import { CssBaseline } from "@mui/material";
import DataSection from "../../components/DataSection/DataSection";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import GppGoodIcon from "@mui/icons-material/GppGood";
import UpdateIcon from "@mui/icons-material/Update";

import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import InsightsIcon from "@mui/icons-material/Insights";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";

const features = [
  {
    icon: <AccessTimeIcon sx={{ color: "#e85d04", fontSize: 34 }} />,
    title: "24/7 Global Support Model",
    description:
      "Round-the-clock monitoring and issue resolution to keep your SAP landscape running smoothly.",
  },
  {
    icon: <WorkspacePremiumIcon sx={{ color: "#e85d04", fontSize: 34 }} />,
    title: "Certified SAP Experts",
    description:
      "Functional and technical consultants with deep knowledge across modules like FI/CO, MM, SD, PP, HCM, and BASIS.",
  },
  {
    icon: <SwapHorizIcon sx={{ color: "#e85d04", fontSize: 34 }} />,
    title: "Flexible Engagement Models",
    description:
      "Choose from shared, dedicated, or hybrid support teams based on your business needs and scale.",
  },
  {
    icon: <MonitorHeartIcon sx={{ color: "#e85d04", fontSize: 34 }} />,
    title: "Proactive Monitoring & Optimization",
    description:
      "Prevent issues before they arise with performance tuning, root cause analysis, and automated alerts.",
  },
  {
    icon: <GppGoodIcon sx={{ color: "#e85d04", fontSize: 34 }} />,
    title: "SLA-Driven Delivery",
    description:
      "We commit to strict service level agreements, ensuring predictable performance and accountability.",
  },
  {
    icon: <UpdateIcon sx={{ color: "#e85d04", fontSize: 34 }} />,
    title: "Continuous Value Addition",
    description:
      "Go beyond ticket resolution with improvement recommendations, mini projects, and periodic system health checks.",
  },
];

const Datafeatures = [
  {
    icon: <SupportAgentIcon sx={{ color: "#5b5fc7", fontSize: 36 }} />,
    title: "Proactive SAP Support",
    description:
      "Go beyond reactive ticketing. Our intelligent support system ensures continuous monitoring, automated issue detection, and real-time resolutions to keep your SAP environment optimized.",
  },
  {
    icon: <InsightsIcon sx={{ color: "#f5b400", fontSize: 36 }} />,
    title: "Actionable System Insights",
    description:
      "Gain strategic visibility into your SAP landscape with performance analytics, usage patterns, and system health metrics to support smarter decision-making and process improvement.",
  },
  {
    icon: <AutoGraphIcon sx={{ color: "#fb5607", fontSize: 36 }} />,
    title: "Scalable Business Transformation",
    description:
      "Adapt and scale with confidence. Our managed support services help you evolve your SAP systems alongside changing business needs, new modules, and cloud transitions.",
  },
];
const SAPMigration = () => {
  // Scroll to top when component mounts
  useScrollToTop();
  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <HeroSectionTitle
            title="SAP AMS & Managed Support Consulting"
            subtitle="Unlock the Power of Intelligent Automation with Our Expertise in SAP AMS and Managed Support Services."
            buttonText="TALK TO OUR EXPERTS"
            buttonLink="#contact"
            backgroundImage="/SAP.webp"
          />
          <CssBaseline />
          <FeaturesSection features={features} />
          <DataSection
            title="Unlock Intelligent SAP AMS & Managed Support for Your Enterprise"
            description={`In today’s fast-paced digital economy, enterprises require more than just SAP maintenance—they need intelligent, proactive support that evolves with their business.

Our SAP AMS & Managed Support solutions go beyond traditional ticket resolution. We enable continuous innovation, system optimization, and value-driven transformation by aligning support operations with your strategic goals.

With a dedicated team of SAP experts, real-time monitoring, automated incident handling, and strategic advisory, we ensure your SAP landscape is resilient, agile, and ready for what’s next.

From routine operations to complex enhancements—we empower your business to run smarter, not harder.`}
            features={Datafeatures}
            ctaText="Let's Connect"
            ctaLink="/contact"
          />
        </div>
      </div>
      <Footer />

        </Fragment>
  );
};

export default SAPMigration;
