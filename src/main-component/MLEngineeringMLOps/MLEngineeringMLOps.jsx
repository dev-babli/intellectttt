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

import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import RepeatIcon from "@mui/icons-material/Repeat";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import HubIcon from "@mui/icons-material/Hub";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import EngineeringIcon from "@mui/icons-material/Engineering";
const features = [
  {
    icon: (
      <SettingsInputComponentIcon sx={{ color: "#e85d04", fontSize: 30 }} />
    ),
    title: "Production-Ready ML",
    description:
      "We design and deploy robust machine learning models that are optimized for real-world performance.",
  },
  {
    icon: <CloudUploadIcon sx={{ color: "#e85d04", fontSize: 30 }} />,
    title: "Seamless Model Deployment",
    description:
      "From notebooks to production, we automate the entire deployment pipeline with minimal friction.",
  },
  {
    icon: <RepeatIcon sx={{ color: "#e85d04", fontSize: 30 }} />,
    title: "CI/CD for ML",
    description:
      "Implement continuous integration and delivery pipelines tailored for your ML lifecycle.",
  },
  {
    icon: <MonitorHeartIcon sx={{ color: "#e85d04", fontSize: 30 }} />,
    title: "Monitoring & Governance",
    description:
      "Track model drift, performance, and compliance with real-time monitoring and alerting.",
  },
  {
    icon: <HubIcon sx={{ color: "#e85d04", fontSize: 30 }} />,
    title: "Scalable Pipelines",
    description:
      "Our modular pipelines support large datasets, multiple environments, and distributed workloads.",
  },
  {
    icon: <VerifiedUserIcon sx={{ color: "#e85d04", fontSize: 30 }} />,
    title: "Secure & Auditable",
    description:
      "We build MLOps workflows with built-in security, versioning, and audit trails for full transparency.",
  },
];

const Datafeatures = [
  {
    icon: <AutoGraphIcon sx={{ color: "#5b5fc7", fontSize: 30 }} />,
    title: "Cutting-Edge Projects",
    description:
      "Work on real-time recommender systems, fraud detection engines, demand forecasting platforms, and more.",
  },
  {
    icon: <PsychologyAltIcon sx={{ color: "#f5b400", fontSize: 30 }} />,
    title: "Culture of Learning & Impact",
    description:
      "Thrive in a space that encourages technical ownership, innovation, and mentorship—backed by flexible work policies and wellness-first practices.",
  },
  {
    icon: <EngineeringIcon sx={{ color: "#fb5607", fontSize: 30 }} />,
    title: "Pathways into ML Engineering",
    description:
      "Whether you're a data scientist or DevOps engineer, we help you transition into MLOps and ML Engineering roles through hands-on training and expert guidance.",
  },
];

const MLEngineeringMLOps = () => {
  // Scroll to top when component mounts
  useScrollToTop();
  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <HeroSectionTitle
            title="ML Engineering & MLOps Consulting"
            subtitle="We help you harness the power of machine learning to optimize your business operations, drive innovation, and achieve sustainable growth."
            buttonText="TALK TO OUR EXPERTS"
            buttonLink="#contact"
            backgroundImage="/AiGenAi/Ml-engineeringML-ops.webp"
          />
          <CssBaseline />
          <FeaturesSection features={features} />
          <DataSection
            title="  Operationalize Machine Learning with Confidence"
            description={`Modern machine learning isn’t just about training accurate models—it’s about getting them into production, keeping them there reliably, and improving them continuously.

Our ML Engineering & MLOps services are designed to help teams go from research to real-world impact with confidence. We build ML pipelines, automate workflows, and deploy models across cloud, edge, and hybrid environments.

From experimentation to CI/CD pipelines for ML—we make your AI initiatives robust, scalable, and maintainable.`}
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

export default MLEngineeringMLOps;
