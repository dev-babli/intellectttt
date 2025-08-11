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
import GroupIcon from "@mui/icons-material/Group";
import SpeedIcon from "@mui/icons-material/Speed";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import VerifiedIcon from "@mui/icons-material/Verified";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SecurityIcon from "@mui/icons-material/Security";

import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const features = [
  {
    icon: <GroupIcon sx={{ color: "#e85d04", fontSize: 30 }} />,
    title: "Expert Team Members",
    description:
      "We take pride in assembling a diverse and highly skilled team of AI experts.",
  },
  {
    icon: <SpeedIcon sx={{ color: "#e85d04", fontSize: 30 }} />,
    title: "Fastest Customer Service",
    description:
      "We’re known for delivering rapid, reliable customer support whenever you need us.",
  },
  {
    icon: <AttachMoneyIcon sx={{ color: "#e85d04", fontSize: 30 }} />,
    title: "Reasonable Pricing",
    description:
      "Our pricing is fair, flexible, and built to fit businesses of all sizes.",
  },
  {
    icon: <VerifiedIcon sx={{ color: "#e85d04", fontSize: 30 }} />,
    title: "Proven Expertise",
    description:
      "Years of hands-on experience in GenAI and LLM deployment across industries.",
  },
  {
    icon: <RocketLaunchIcon sx={{ color: "#e85d04", fontSize: 30 }} />,
    title: "Agile Implementation",
    description:
      "We ensure faster go-to-market with minimal disruption to your existing systems.",
  },
  {
    icon: <SecurityIcon sx={{ color: "#e85d04", fontSize: 30 }} />,
    title: "Data-Safe Solutions",
    description:
      "Our solutions are built with enterprise-grade security to protect your data and models.",
  },
];

const Datafeatures = [
  {
    icon: <PsychologyAltIcon sx={{ color: "#5b5fc7", fontSize: 30 }} />,
    title: "Frontier Tech Opportunities",
    description:
      "Join projects at the cutting edge of AI, including LLM tuning, retrieval-augmented generation (RAG), AI copilots, and autonomous agents.",
  },
  {
    icon: <Diversity3Icon sx={{ color: "#f5b400", fontSize: 30 }} />,
    title: "Supportive Work Culture",
    description:
      "Experience a modern, collaborative workspace where innovation thrives—complete with wellness support, flexible schedules, and open communication.",
  },
  {
    icon: <TrendingUpIcon sx={{ color: "#fb5607", fontSize: 30 }} />,
    title: "Career Shifts Welcome",
    description:
      "Looking to move into AI? We help professionals pivot into this exciting field with tailored mentorship, upskilling, and project-based learning.",
  },
];

const LLMIntegration = () => {
  // Scroll to top when component mounts
  useScrollToTop();
  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <HeroSectionTitle
            title="Gen AI & LLM Integration Consulting"
            subtitle="We help companies harness the power of Gen AI and LLM to unlock new growth opportunities, automate complex tasks, and make smarter, faster decisions."
            buttonText="TALK TO OUR EXPERTS"
            buttonLink="#contact"
            backgroundImage="/GenAI-LLM-Integration.webp"
          />
          <CssBaseline />
          <FeaturesSection features={features} />
          <DataSection
            title="Unlock Intelligent Autonomy for Your Business"
            description={`In an era where automation alone is not enough, businesses are turning to Agentic AI—AI systems that can perceive, reason, and act independently. Agentic AI goes beyond task execution. It plans, adapts, collaborates, and aligns with human objectives.

Our advanced AI agent frameworks empower organizations to automate high-level decision-making, manage complex workflows, and dynamically respond to real-world environments.

From autonomous customer service agents to intelligent supply chain managers—our solutions make AI work with you, not just for you.
`}
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

export default LLMIntegration;
