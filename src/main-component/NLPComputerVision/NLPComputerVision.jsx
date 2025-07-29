import React, { Fragment, useState } from "react";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import ContactSection from "../../components/It-Services-Components/ContactSection";
import FeaturesSection from "../../components/FeaturesSectionSub/FeaturesSection";
import { CssBaseline } from "@mui/material";
import DataSection from "../../components/DataSection/DataSection";
import TechnologyLogos from "../../components/TechnologyLogos/TechnologyLogos";

import TranslateIcon from "@mui/icons-material/Translate";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import LanguageIcon from "@mui/icons-material/Language";
import TuneIcon from "@mui/icons-material/Tune";
import SecurityIcon from "@mui/icons-material/Security";

import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import Groups2Icon from "@mui/icons-material/Groups2";
import SchoolIcon from "@mui/icons-material/School";

const features = [
  {
    icon: <TranslateIcon sx={{ color: "#e85d04", fontSize: 30 }} />,
    title: "Advanced NLP Models",
    description:
      "We build intelligent systems that understand, analyze, and generate human language with precision.",
  },
  {
    icon: <VisibilityIcon sx={{ color: "#e85d04", fontSize: 30 }} />,
    title: "Cutting-Edge Vision Tech",
    description:
      "From image classification to object detection, our CV models are optimized for real-world performance.",
  },
  {
    icon: <FlashOnIcon sx={{ color: "#e85d04", fontSize: 30 }} />,
    title: "Real-Time Processing",
    description:
      "Our solutions are built for speed—enabling instant insights from text, images, or video streams.",
  },
  {
    icon: <LanguageIcon sx={{ color: "#e85d04", fontSize: 30 }} />,
    title: "Multilingual & Multimodal",
    description:
      "Support for multiple languages and data types ensures versatility across global use cases.",
  },
  {
    icon: <TuneIcon sx={{ color: "#e85d04", fontSize: 30 }} />,
    title: "Custom-Tuned Models",
    description:
      "We fine-tune pre-trained models for your specific domain, boosting relevance and accuracy.",
  },
  {
    icon: <SecurityIcon sx={{ color: "#e85d04", fontSize: 30 }} />,
    title: "Secure & Compliant",
    description:
      "Your data stays protected with built-in security protocols and industry-standard compliance.",
  },
];

const Datafeatures = [
  {
    icon: <WorkOutlineIcon sx={{ color: "#5b5fc7", fontSize: 30 }} />,
    title: "Dynamic Career Growth",
    description:
      "Join high-impact projects that span intelligent document processing, conversational AI, medical imaging, retail automation, and more.",
  },
  {
    icon: <Groups2Icon sx={{ color: "#f5b400", fontSize: 30 }} />,
    title: "Inclusive & Collaborative Culture",
    description:
      "We foster a learning-first environment with team mentorship, peer reviews, innovation sprints, and modern workspaces.",
  },
  {
    icon: <SchoolIcon sx={{ color: "#fb5607", fontSize: 30 }} />,
    title: "Seamless Onboarding for Tech Talent",
    description:
      "We support professionals transitioning into AI roles through guided upskilling paths, hands-on training, and access to real-world datasets.",
  },
];
const NLPComputerVision = () => {
  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <HeroSectionTitle
            title="NLP & Computer Vision Consulting"
            subtitle="We help companies harness the power of NLP and computer vision to unlock new growth opportunities, automate complex tasks, and make smarter, faster decisions."
            buttonText="TALK TO OUR EXPERTS"
            buttonLink="#contact"
            backgroundImage="/AiGenAi/NLPComputer-vision.webp"
          />
          <CssBaseline />
         <FeaturesSection features={features} />
           <DataSection
            title="Extract Intelligence from Text and Images"
            description={`Natural Language Processing (NLP) and Computer Vision (CV) are transforming how modern enterprises interact with data. From understanding customer intent in real-time to extracting structured information from scanned documents, or detecting product defects on an assembly line—our solutions convert unstructured data into strategic assets.

We combine cutting-edge deep learning models with proven engineering practices to help your systems read, see, and understand the world around them.

Our NLP & CV stack is designed for business outcomes—accurate, scalable, and production-ready.`}
            features={Datafeatures}
            ctaText="Contact Us"
            ctaLink="/contact"
          />
          <TechnologyLogos />
          <ContactSection />
        </div>
      </div>
    </Fragment>
  );
};

export default NLPComputerVision;
