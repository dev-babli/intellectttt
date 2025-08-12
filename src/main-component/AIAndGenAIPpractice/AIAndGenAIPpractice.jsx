import React from "react";
import ServicePageTemplate from "../../components/common/ServicePageTemplate";

const paragraphs = [
  "At Intellectt, we are not just adapting to the technology revolution—we are leading it...",
  "Our mission is to empower organizations with intelligent, scalable, and secure digital ecosystems...",
  "With a dedicated focus on Artificial Intelligence, Machine Learning, Data Engineering, Cloud...",
];

const stats = [
  { value: "50+", label: "Technologies" },
  { value: "95%", label: "Customer Retention Rate" },
  { value: "10+", label: "Offices Worldwide" },
  { value: "3x", label: "Workforce Upskilling" },
];

const sampleCards = [
  {
    title: "Agentic AI and AI Agents",
    description: "Building intelligent, autonomous AI-driven agents that can perform complex tasks and make decisions independently.",
    image: "/images/bg/ai-brain-network.jpg",
    url: "/service-single/ai-and-gen-ai/agentic-ai",
    buttonText: "Learn More",
    features: ["Autonomous decision making", "Task automation", "Intelligent workflows"]
  },
  {
    title: "Gen AI & LLM Integration",
    description: "Integrating Generative AI and Large Language Models into business systems for enhanced capabilities.",
    image: "/images/bg/ai-technology.jpg",
    url: "/service-single/ai-and-gen-ai/gen-ai-integration",
    buttonText: "Learn More",
    features: ["LLM integration", "Content generation", "Natural language processing"]
  },
  {
    title: "AI Advisory and Responsible AI",
    description: "Strategic AI guidance with a focus on ethics, governance, and responsible implementation.",
    image: "/images/bg/abt-cnt_bg.png",
    url: "/service-single/ai-and-gen-ai/ai-advisory",
    buttonText: "Learn More",
    features: ["Ethical AI", "Governance frameworks", "Risk assessment"]
  },
  {
    title: "ML Engineering & ML Ops",
    description: "End-to-end machine learning engineering and operations for scalable AI solutions.",
    image: "/images/bg/image-belowhero.webp",
    url: "/service-single/ai-and-gen-ai/mlops",
    buttonText: "Learn More",
    features: ["ML pipeline development", "Model deployment", "Monitoring & maintenance"]
  }
];

const AIAndGenAIPpractice = () => {
  return (
    <ServicePageTemplate
      // Hero Section
      heroTitle="AI & Gen AI Industrialization Consulting"
      heroSubtitle="Intelligent Solutions"
      heroButtonText="Talk to Our Experts"
      heroButtonLink="/contact"
      heroBackgroundImage="/AI-and-gen-ai-practice.webp"
      
      // Who Are We Section
      whoAreWeHeading="Who Are We?"
      whoAreWeSubheading="About Intellectt"
      whoAreWeParagraphs={paragraphs}
      whoAreWeStats={stats}
      
      // Service Section
      showServiceSection={true}
      
      // Service Cards
      showServiceCards={true}
      serviceCards={sampleCards}
      serviceCardsTitle="AI & Gen AI Services"
      serviceCardsSubtitle="Comprehensive AI solutions designed to transform your business"
      
      // Alliances Section
      showAlliancesSection={true}
    />
  );
};

export default AIAndGenAIPpractice;
