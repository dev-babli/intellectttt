import React from "react";
import MasterIndustryTemplate from "../../components/templates/MasterIndustryTemplate";
import { 
  Factory, 
  Engineering, 
  Speed, 
  TrendingUp, 
  AutoAwesome,
  Cloud,
  Security,
  Analytics,
  DataUsage,
  Assessment,
  Compliance,
  Automation,
  DataAnalytics,
  AI,
  MachineLearning,
  IoT,
  Sensors,
  PrecisionManufacturing,
  Build,
  Memory,
  IntegrationInstructions,
  Autorenew,
  RocketLaunch
} from '@mui/icons-material';

const MenufacturingAndAutomotive = () => {
  return (
    <MasterIndustryTemplate
      // Hero Section
      heroTitle="Manufacturing & Automotive IT"
      heroSubtitle="Build. Evaluate. Generate."
      heroDescription="Transform manufacturing operations with Industry 4.0 technologies, IoT integration, and digital twin solutions. Build intelligent factories with advanced automation, real-time monitoring, and data-driven insights."
      heroButtonText="TALK TO OUR EXPERTS"
      heroButtonLink="/contact"
      heroBackgroundImage="/Manufacturing-and-Automotive.webp"
      heroFeatures={[
        "Industry 4.0 Solutions",
        "IoT & Connected Manufacturing",
        "Digital Twin Technology",
        "Smart Factory Automation"
      ]}

      // Problem/Solution Section (Industry Challenges)
      showProblemSolution={true}
      problemSolutionTitle="Manufacturing & Automotive Industry Challenges & Solutions"
      problemSolutionSubtitle="We understand the unique challenges facing manufacturing and automotive companies and provide innovative solutions"
      problems={[
        {
          title: "Legacy System Integration",
          description: "Outdated manufacturing systems and equipment that lack connectivity and real-time data capabilities."
        },
        {
          title: "Operational Efficiency",
          description: "Inefficient production processes, manual workflows, and lack of real-time visibility into operations."
        },
        {
          title: "Quality Control & Compliance",
          description: "Manual quality control processes and difficulty maintaining consistent product quality standards."
        },
        {
          title: "Supply Chain Complexity",
          description: "Complex global supply chains with limited visibility and coordination across multiple stakeholders."
        },
        {
          title: "Predictive Maintenance",
          description: "Reactive maintenance approaches leading to unexpected downtime and increased operational costs."
        },
        {
          title: "Data Silos & Analytics",
          description: "Fragmented data systems preventing comprehensive insights and data-driven decision making."
        }
      ]}
      solutions={[
        {
          title: "Digital Transformation Strategy",
          description: "Comprehensive digital transformation roadmap with modern technology integration and process optimization."
        },
        {
          title: "IoT & Connected Manufacturing",
          description: "Connected devices and sensors providing real-time data collection and operational visibility."
        },
        {
          title: "Automated Quality Control",
          description: "AI-powered quality control systems with automated inspection and real-time quality monitoring."
        },
        {
          title: "Supply Chain Optimization",
          description: "Intelligent supply chain management with real-time tracking and predictive analytics."
        },
        {
          title: "Predictive Maintenance Systems",
          description: "AI-driven predictive maintenance solutions to prevent downtime and optimize equipment performance."
        },
        {
          title: "Unified Data Platform",
          description: "Integrated data solutions providing comprehensive insights and enabling data-driven decision making."
        }
      ]}

      // Service Offerings Section (Industry Solutions)
      showServiceOfferings={true}
      serviceOfferingsTitle="Manufacturing & Automotive Technology Solutions"
      serviceOfferingsSubtitle="Comprehensive digital solutions designed specifically for manufacturing and automotive industry challenges"
      services={[
        {
          title: "Industry 4.0 Solutions",
          description: "Comprehensive Industry 4.0 implementation with smart manufacturing and digital transformation.",
          image: "/images/industry-4.webp",
          features: ["Smart Manufacturing", "Digital Transformation", "Process Automation", "Real-time Monitoring"],
          link: "/services/industry-4",
          badge: "Industry 4.0"
        },
        {
          title: "IoT & Connected Manufacturing",
          description: "IoT solutions for connected manufacturing with real-time data collection and operational visibility.",
          image: "/images/iot-manufacturing.webp",
          features: ["Device Connectivity", "Real-time Data", "Operational Visibility", "Remote Monitoring"],
          link: "/services/iot-manufacturing",
          badge: "IoT"
        },
        {
          title: "Digital Twin Technology",
          description: "Digital twin solutions for virtual modeling and simulation of manufacturing processes and products.",
          image: "/images/digital-twin.webp",
          features: ["Virtual Modeling", "Process Simulation", "Predictive Analytics", "Performance Optimization"],
          link: "/services/digital-twin",
          badge: "Digital Twin"
        },
        {
          title: "MES Integration & Automation",
          description: "Manufacturing Execution System integration with automated workflows and real-time production control.",
          image: "/images/mes-integration.webp",
          features: ["Production Control", "Workflow Automation", "Real-time Monitoring", "Quality Management"],
          link: "/services/mes-integration",
          badge: "MES"
        },
        {
          title: "Predictive Maintenance",
          description: "AI-powered predictive maintenance solutions to prevent downtime and optimize equipment performance.",
          image: "/images/predictive-maintenance.webp",
          features: ["Equipment Monitoring", "Predictive Analytics", "Downtime Prevention", "Performance Optimization"],
          link: "/services/predictive-maintenance",
          badge: "AI"
        },
        {
          title: "Supply Chain Optimization",
          description: "Intelligent supply chain management with real-time tracking, analytics, and optimization.",
          image: "/images/supply-chain.webp",
          features: ["Real-time Tracking", "Supply Chain Analytics", "Inventory Optimization", "Demand Forecasting"],
          link: "/services/supply-chain",
          badge: "Analytics"
        }
      ]}

      // Benefits Section (Industry Process)
      showBenefits={true}
      benefitsTitle="Our Manufacturing Development Approach"
      benefitsSubtitle="Proven methodology for delivering innovative manufacturing and automotive technology solutions"
      benefits={[
        {
          title: "Digital Transformation Strategy",
          description: "Comprehensive assessment and roadmap for modernizing manufacturing operations with digital technologies.",
          features: ["Current State Analysis", "Technology Roadmap", "Change Management", "Implementation Plan"]
        },
        {
          title: "IoT & Automation Integration",
          description: "Seamless integration of IoT devices and automation systems to optimize manufacturing processes.",
          features: ["Device Integration", "System Automation", "Data Collection", "Process Optimization"]
        },
        {
          title: "Continuous Improvement",
          description: "Ongoing optimization and improvement of manufacturing systems with data-driven insights.",
          features: ["Performance Monitoring", "Data Analytics", "Process Optimization", "Continuous Learning"]
        }
      ]}

      // Stats Section (Industry Results)
      showStats={true}
      statsTitle="Manufacturing Technology Results"
      statsSubtitle="Proven outcomes for manufacturing companies implementing our solutions"
      stats={[
        {
          metric: { value: "30%", label: "Cost Reduction" },
          description: "Reduced operational costs with automation"
        },
        {
          metric: { value: "50%", label: "Efficiency Improvement" },
          description: "Improved manufacturing efficiency"
        },
        {
          metric: { value: "90%", label: "Downtime Reduction" },
          description: "Reduced unplanned downtime with predictive maintenance"
        },
        {
          metric: { value: "25%", label: "Quality Improvement" },
          description: "Enhanced product quality with automated QC"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Transform Manufacturing Operations?"
      finalCtaSubtitle="Let's discuss how our manufacturing expertise can help you build intelligent factories and optimize operations"
      finalCtaButtonText="Schedule Manufacturing Consultation"
      finalCtaButtonLink="/contact"
    />
  );
};

export default MenufacturingAndAutomotive;
