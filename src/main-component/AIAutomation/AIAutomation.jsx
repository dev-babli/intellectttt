import React, { Fragment, useState } from "react";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import ContactSection from "../../components/It-Services-Components/ContactSection";
import FeaturesSection from "../../components/FeaturesSectionSub/FeaturesSection";
import { CssBaseline } from "@mui/material";
import DataSection from "../../components/DataSection/DataSection";
import TechnologyLogos from "../../components/TechnologyLogos/TechnologyLogos";

import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

import SmartToyIcon from "@mui/icons-material/SmartToy";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import PsychologyIcon from "@mui/icons-material/Psychology";
import GppGoodIcon from "@mui/icons-material/GppGood";

const features = [
  {
    icon: <SmartToyIcon sx={{ color: "#e85d04", fontSize: 30 }} />,
    title: "Smart Process Automation",
    description:
      "We combine AI with RPA to automate complex, decision-based business workflows.",
  },
  {
    icon: <FlashOnIcon sx={{ color: "#e85d04", fontSize: 30 }} />,
    title: "Faster Task Execution",
    description:
      "Our bots work 24/7, delivering speed, consistency, and zero downtime across operations.",
  },
  {
    icon: <TrendingUpIcon sx={{ color: "#e85d04", fontSize: 30 }} />,
    title: "Boosted Operational Efficiency",
    description:
      "Reduce manual effort and error rates while scaling productivity across departments.",
  },
  {
    icon: (
      <IntegrationInstructionsIcon sx={{ color: "#e85d04", fontSize: 30 }} />
    ),
    title: "Seamless System Integration",
    description:
      "Integrates effortlessly with your existing tools—ERP, CRM, legacy systems, and more.",
  },
  {
    icon: <PsychologyIcon sx={{ color: "#e85d04", fontSize: 30 }} />,
    title: "Cognitive Capabilities",
    description:
      "Empowered by NLP and computer vision, our bots understand documents, speech, and intent.",
  },
  {
    icon: <GppGoodIcon sx={{ color: "#e85d04", fontSize: 30 }} />,
    title: "Governed & Secure",
    description:
      "Enterprise-grade security and compliance frameworks ensure safe automation at scale.",
  },
];

const Datafeatures = [
  {
    icon: <SupportAgentIcon sx={{ color: "#5b5fc7", fontSize: 30 }} />,
    title: "Projects That Drive Transformation",
    description:
      "Help enterprises reimagine their back-office, customer service, and operational workflows with intelligent automation.",
  },
  {
    icon: <Diversity3Icon sx={{ color: "#f5b400", fontSize: 30 }} />,
    title: "Supportive & Innovative Culture",
    description:
      "Join a team that values collaboration, continuous learning, and impact—backed by flexible schedules and growth-focused mentorship.",
  },
  {
    icon: <RocketLaunchIcon sx={{ color: "#fb5607", fontSize: 30 }} />,
    title: "Onboarding for Automation Enthusiasts",
    description:
      "Whether you’re from IT, analytics, or business ops, we help you step into the AI + RPA space through structured learning paths and real-world projects.",
  },
];
const AIAutomation = () => {
  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <HeroSectionTitle
            title="AI Automation (AI + RPA) Consulting"
            subtitle="We help companies harness the power of AI and RPA to unlock new growth opportunities, automate complex tasks, and make smarter, faster decisions."
            buttonText="TALK TO OUR EXPERTS"
            buttonLink="#contact"
            backgroundImage="/AiGenAi/AIAutomation.webp"
          />
          <CssBaseline />
          <FeaturesSection features={features} />
          <DataSection
            title="  Unlock the Power of Smart Automation"
            description={`AI + RPA brings the best of both worlds—rule-based precision and intelligent decision-making.

We help organizations move beyond simple scripts to dynamic workflows that can understand, learn, and adapt in real time.

Our solutions blend computer vision, NLP, and machine learning with automation platforms to handle both structured and unstructured tasks with minimal human input.

From invoice processing to support ticket resolution and compliance monitoring—AI-powered bots work smarter, faster, and with greater impact.`}
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

export default AIAutomation;
