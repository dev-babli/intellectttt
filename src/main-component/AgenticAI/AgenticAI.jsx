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

import MemoryIcon from "@mui/icons-material/Memory";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import SpeedIcon from "@mui/icons-material/Speed";
import SensorsIcon from "@mui/icons-material/Sensors";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import SecurityIcon from "@mui/icons-material/Security";

import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";

const features = [
  {
    icon: <MemoryIcon sx={{ color: "#e85d04", fontSize: 30 }} />,
    title: "Autonomous Agent Design",
    description:
      "We specialize in building AI agents that can reason, learn, and act independently.",
  },
  {
    icon: (
      <IntegrationInstructionsIcon sx={{ color: "#e85d04", fontSize: 30 }} />
    ),
    title: "End-to-End Integration",
    description:
      "From data pipelines to deployment, we handle the full lifecycle of agentic systems.",
  },
  {
    icon: <SpeedIcon sx={{ color: "#e85d04", fontSize: 30 }} />,
    title: "Fast & Scalable Solutions",
    description:
      "Our frameworks are built to scale rapidly across use cases and environments.",
  },
  {
    icon: <SensorsIcon sx={{ color: "#e85d04", fontSize: 30 }} />,
    title: "Multimodal Intelligence",
    description:
      "We create agents that understand and interact using text, voice, images, and IoT data.",
  },
  {
    icon: <AutorenewIcon sx={{ color: "#e85d04", fontSize: 30 }} />,
    title: "Continuous Adaptation",
    description:
      "Our agents are designed to evolve and improve through real-time feedback loops.",
  },
  {
    icon: <SecurityIcon sx={{ color: "#e85d04", fontSize: 30 }} />,
    title: "Enterprise-Grade Security",
    description:
      "All solutions are secured by design—ensuring safety, compliance, and data integrity.",
  },
];

const Datafeatures = [
  {
    icon: <RocketLaunchIcon sx={{ color: "#5b5fc7", fontSize: 30 }} />,
    title: "Limitless Career Progression",
    description:
      "We offer hands-on exposure to frontier technologies and projects that matter—nurturing both technical excellence and leadership growth.",
  },
  {
    icon: <LightbulbIcon sx={{ color: "#f5b400", fontSize: 30 }} />,
    title: "Collaborative & Creative Spaces",
    description:
      "Enjoy a work culture that values experimentation, idea-sharing, and wellness, with amenities designed to keep your mind sharp and your body energized.",
  },
  {
    icon: <AutoFixHighIcon sx={{ color: "#fb5607", fontSize: 30 }} />,
    title: "Seamless Transition for Tech Professionals",
    description:
      "New to AI? Transition smoothly into the world of intelligent systems with our upskilling support and mentorship programs.",
  },
];
const AgenticAI = () => {
  // Scroll to top when component mounts
  useScrollToTop();
  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <HeroSectionTitle
            title="Agentic AI & AI Agents Consulting"
            subtitle="We help companies harness the power of Gen AI and LLM to unlock new growth opportunities, automate complex tasks, and make smarter, faster decisions."
            buttonText="TALK TO OUR EXPERTS"
            buttonLink="#contact"
            backgroundImage="/AiGenAi/Agenticagents.webp"
          />
          <CssBaseline />
          <FeaturesSection features={features} />
          <DataSection
            title="Unlock Intelligent Autonomy for Your Business"
            description={`Generative AI is not just about content generation—it's about augmenting decision-making, personalizing customer experiences, and unlocking new operational efficiencies.

We help businesses harness the full potential of Large Language Models (LLMs) and Generative AI by integrating them into core platforms and pipelines—safely, responsibly, and at scale.

Whether it’s a chatbot that adapts to tone and context, or a document assistant that drafts, summarizes, and translates—our Gen AI integrations make your teams faster and smarter.`}
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

export default AgenticAI;
