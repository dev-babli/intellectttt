import React from "react";
import IndustryTemplate from "../../components/templates/IndustryTemplate";
import { 
  Flight, 
  Security, 
  Analytics, 
  Speed, 
  TrendingUp, 
  AutoAwesome,
  Shield,
  Assessment,
  Policy,
  Compliance,
  DataAnalytics,
  AI,
  MachineLearning,
  Cloud,
  MobileFriendly,
  API,
  IntegrationInstructions,
  Satellite,
  Radar,
  Engineering,
  PrecisionManufacturing,
  Build
} from '@mui/icons-material';

const AerospaceAndDefenses = () => {
  return (
    <IndustryTemplate
      // Hero Section
      heroTitle="Aerospace & Defense"
      heroSubtitle="Secure IT Solutions"
      heroDescription="Mission-critical aerospace software, defense technology solutions, and precision engineering for advanced aerospace systems."
      heroButtonText="TALK TO OUR EXPERTS"
      heroButtonLink="/contact"
      heroBackgroundImage="/Aerospace-and-Defense.webp"
      heroFeatures={[
        "Mission-Critical Software",
        "Embedded Systems",
        "Aerospace Simulation",
        "Defense Networks"
      ]}

      // Services Component Props - Industry Solutions
      showServicesComponent={true}
      services={[
        {
          title: "Mission-Critical Software",
          description: "High-assurance, fault-tolerant software for avionics and aerospace control systems with real-time processing capabilities.",
          image: "/images/mission-critical.webp",
          features: ["Real-Time Processing", "High Reliability", "Fault Tolerance", "Avionics Systems"],
          link: "/services/mission-critical",
          badge: "Critical"
        },
        {
          title: "Embedded Systems Engineering",
          description: "Design and develop embedded firmware for guidance, navigation, and control systems in aircrafts and satellites.",
          image: "/images/embedded-systems.webp",
          features: ["RTOS", "Firmware Development", "Guidance Systems", "Navigation Control"],
          link: "/services/embedded-systems",
          badge: "Embedded"
        },
        {
          title: "Aerospace Simulation Tools",
          description: "Build complex simulation systems for aircraft testing, digital twin modeling, and operator training.",
          image: "/images/aerospace-simulation.webp",
          features: ["Flight Simulation", "Hardware-in-Loop", "Digital Twin", "Operator Training"],
          link: "/services/aerospace-simulation",
          badge: "Simulation"
        },
        {
          title: "Secure Defense Networks",
          description: "Design secure, resilient communication networks for defense infrastructure with end-to-end encryption.",
          image: "/images/defense-networks.webp",
          features: ["Encryption", "Zero Trust", "Resilient Networks", "Defense Infrastructure"],
          link: "/services/defense-networks",
          badge: "Security"
        },
        {
          title: "Supply Chain Intelligence",
          description: "Optimize aerospace manufacturing & maintenance supply chains with intelligent tracking and forecasting tools.",
          image: "/images/supply-chain-intelligence.webp",
          features: ["Predictive Analytics", "Logistics AI", "Intelligent Tracking", "Forecasting"],
          link: "/services/supply-chain-intelligence",
          badge: "Intelligence"
        },
        {
          title: "Compliance & Airworthiness Automation",
          description: "Automate documentation, traceability, and audit trails to meet industry standards and regulatory approvals.",
          image: "/images/compliance-automation.webp",
          features: ["AS9100", "DO-178C", "Documentation", "Audit Trails"],
          link: "/services/compliance-automation",
          badge: "Compliance"
        }
      ]}
      servicesLimit={6}
      servicesShowButton={true}
      servicesButtonText="Schedule a Strategy Call"
      servicesButtonLink="/contact"
    />
  );
};

export default AerospaceAndDefenses;
