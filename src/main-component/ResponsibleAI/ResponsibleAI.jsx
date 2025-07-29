import React, { Fragment, useState } from "react";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import ContactSection from "../../components/It-Services-Components/ContactSection";
import FeaturesSection from "../../components/FeaturesSectionSub/FeaturesSection";
import { CssBaseline } from "@mui/material";
import DataSection from "../../components/DataSection/DataSection";
import TechnologyLogos from "../../components/TechnologyLogos/TechnologyLogos";

import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import BalanceIcon from "@mui/icons-material/Balance";
import GavelIcon from "@mui/icons-material/Gavel";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import ShieldIcon from "@mui/icons-material/Shield";

import PolicyIcon from "@mui/icons-material/Policy";
import GroupsIcon from "@mui/icons-material/Groups";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";

const features = [
  {
    icon: <AutoGraphIcon sx={{ color: "#e85d04", fontSize: 30 }} />,
    title: "Strategic AI Roadmapping",
    description:
      "We help you align AI initiatives with long-term business goals through expert-led advisory.",
  },
  {
    icon: <BalanceIcon sx={{ color: "#e85d04", fontSize: 30 }} />,
    title: "Ethical AI Frameworks",
    description:
      "Our solutions are built on fairness, transparency, and accountability from day one.",
  },
  {
    icon: <GavelIcon sx={{ color: "#e85d04", fontSize: 30 }} />,
    title: "Governance & Compliance",
    description:
      "We ensure your AI systems meet global standards like GDPR, HIPAA, and ISO guidelines.",
  },
  {
    icon: <VisibilityOffIcon sx={{ color: "#e85d04", fontSize: 30 }} />,
    title: "Bias Detection & Mitigation",
    description:
      "We implement tools and practices to identify, reduce, and monitor model bias effectively.",
  },
  {
    icon: <EmojiObjectsIcon sx={{ color: "#e85d04", fontSize: 30 }} />,
    title: "Impact-Focused Consulting",
    description:
      "Drive measurable business outcomes while staying aligned with ethical and social responsibilities.",
  },
  {
    icon: <ShieldIcon sx={{ color: "#e85d04", fontSize: 30 }} />,
    title: "Privacy-Centric Solutions",
    description:
      "We design AI architectures that prioritize data privacy, anonymization, and security by default.",
  },
];

const Datafeatures = [
  {
    icon: <PolicyIcon sx={{ color: "#5b5fc7", fontSize: 30 }} />,
    title: "Advisory-Led, Impact-Driven",
    description:
      "Help shape AI policies, frameworks, and roadmaps for organizations navigating the future of responsible innovation.",
  },
  {
    icon: <GroupsIcon sx={{ color: "#f5b400", fontSize: 30 }} />,
    title: "Collaborative & Inclusive Teams",
    description:
      "Join a multidisciplinary environment where technology, ethics, and business come together to solve high-stakes challenges.",
  },
  {
    icon: <SwitchAccountIcon sx={{ color: "#fb5607", fontSize: 30 }} />,
    title: "Transition-Ready Roles",
    description:
      "Whether you’re from tech, policy, compliance, or research—we offer tailored onboarding into advisory roles at the intersection of AI and governance.",
  },
];
const ResponsibleAI = () => {
  return (
    <Fragment>
             <div className="sco_agency">
               <div className="page_content service-single-page">
                 <HeroSectionTitle
                   title="AI Advisory & Responsible AI Consulting"
                   subtitle="Unlock the Power of Responsible AI. We help companies harness the power of AI and RPA to unlock new growth opportunities, automate complex tasks, and make smarter, faster decisions."
                   buttonText="TALK TO OUR EXPERTS"
                   buttonLink="#contact"
                   backgroundImage="/AiGenAi/AIAdvisoryandResponsibleAI.webp"
                 />
                 <CssBaseline />
                 <FeaturesSection features={features} />
                 <DataSection
            title="  Build AI with Strategy and Responsibility"
            description={`AI is a transformative force—but without the right strategy, governance, and oversight, it can introduce risk, bias, and inefficiency.

Our AI Advisory & Responsible AI services help you align technology with your business goals while adhering to ethical standards, industry regulations, and societal values.

From AI roadmaps and policy frameworks to model audits and compliance tools—we support responsible innovation every step of the way.

Build stakeholder trust, reduce risk exposure, and ensure your AI systems remain effective, accountable, and ethical.`}
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

export default ResponsibleAI
