import React from "react";
import MasterMainServiceTemplate from "../../components/templates/MasterMainServiceTemplate";
import EngineeringValuesSection from "./EngineeringValuesSection";
import FeatureCards from "../../components/feature/FeatureCards";
import Footer from "../../components/footer/Footer";
import { 
  Speed, 
  TrendingUp, 
  Cloud, 
  Security, 
  Analytics, 
  AutoAwesome,
  SmartToy,
  DataUsage,
  Psychology,
  CheckCircle,
  Memory,
  IntegrationInstructions,
  Sensors,
  Autorenew,
  RocketLaunch,
  Lightbulb,
  AutoFixHigh,
  Build,
  Engineering,
  Factory,
  PrecisionManufacturing,
  DesignServices,
  Architecture,
  Code,
  Storage,
  Settings,
  Business,
  Science,
  MedicalServices,
  DirectionsCar,
  Flight,
  Bolt,
  Industrial,
  OilBarrel,
  Devices,
  Construction
} from '@mui/icons-material';

const EngineeringServices = () => {
  return (
    <>
      <MasterMainServiceTemplate
        // Hero Section
        heroTitle="Engineering Services"
        heroSubtitle="Product Innovation"
        heroDescription="Accelerate innovation with end-to-end product engineering. We help clients take products from concept to market using robust engineering, compliance, and digital integration frameworks."
        heroButtonText="Start Engineering"
        heroButtonLink="/contact"
        heroBackgroundImage="/Manufacturing-and-Automotive.webp"
        heroTextColor="white"
        heroFeatures={[
          "Product Design & Development",
          "CAD/CAE & Simulation",
          "Embedded Systems & IoT",
          "Prototyping & Testing"
        ]}

        // Problem/Solution Section
        problemSolutionTitle="The Engineering Challenge & Our Solution"
        problemSolutionSubtitle="We understand the complexities of product development and have the expertise to bridge the gap between concept and commercialization"
        problems={[
          {
            title: "Complex Product Development",
            description: "Complex product development processes that require multidisciplinary expertise across mechanical, electrical, and software domains."
          },
          {
            title: "Regulatory Compliance",
            description: "Stringent regulatory requirements and compliance standards that vary across industries and geographies."
          },
          {
            title: "Time-to-Market Pressure",
            description: "Increasing pressure to reduce time-to-market while maintaining quality, safety, and cost efficiency."
          }
        ]}
        solutions={[
          {
            title: "End-to-End Engineering Services",
            description: "Comprehensive engineering services from concept to commercialization with multidisciplinary expertise."
          },
          {
            title: "Regulatory-Aligned Development",
            description: "Engineering processes designed to meet global regulatory standards and compliance requirements."
          },
          {
            title: "Accelerated Innovation Framework",
            description: "Robust engineering frameworks that accelerate innovation while maintaining quality and safety standards."
          }
        ]}
        problemSolutionVariant="split"

        // Service Offerings
        serviceOfferingsTitle="Our Engineering Services"
        serviceOfferingsSubtitle="Comprehensive engineering services designed to accelerate innovation and ensure successful product commercialization"
        services={[
          {
            icon: <DesignServices />,
            title: "Product Design & Development",
            description: "End-to-end product engineering from concept to market.",
            features: [
              "Concept Design & CAD/DFM Optimization",
              "Platform Engineering & System Architecture",
              "Hardware-Software Co-Design & Integration",
              "Digital Thread & Lifecycle Management"
            ],
            badge: "Most Popular",
            link: "/service/engineering-services/product-design",
            ctaText: "Product Development"
          },
          {
            icon: <Architecture />,
            title: "CAD/CAE & Simulation Services",
            description: "Advanced simulation and analysis for design validation.",
            features: [
              "3D CAD Modeling & DFM Optimization",
              "FEA/CFD Multi-Physics Analysis",
              "Manufacturing Simulation & Line Balancing",
              "Failure Analysis & EMI/EMC Testing"
            ],
            badge: "Trending",
            link: "/service/engineering-services/cad-cae-simulation",
            ctaText: "Simulation Services"
          },
          {
            icon: <Sensors />,
            title: "Embedded Systems & IoT Solutions",
            description: "Intelligent embedded platforms for smart devices.",
            features: [
              "Embedded Firmware & Real-Time Systems",
              "PCB Design & Signal Integrity Analysis",
              "IoT Protocols & Edge Computing",
              "Device Security & Cloud Integration"
            ],
            badge: "Innovation",
            link: "/iot",
            ctaText: "Embedded Systems"
          },
          {
            icon: <Build />,
            title: "Electrical & Mechanical Engineering",
            description: "Integrated electromechanical solutions for industry.",
            features: [
              "System Engineering & Integration",
              "Power Electronics & PCB Design",
              "Industrial Automation & Control Systems",
              "Thermal Management & Structural Design"
            ],
            link: "/service/engineering-services/electrical-mechanical",
            ctaText: "Electromechanical"
          },
          {
            icon: <Science />,
            title: "Prototyping & Testing",
            description: "Rapid prototyping and validation services.",
            features: [
              "Rapid Prototyping & 3D Printing",
              "Functional & Compliance Testing",
              "Hardware-in-the-Loop Validation",
              "Test Automation & Quality Assurance"
            ],
            link: "/service/engineering-services/prototyping-testing",
            ctaText: "Prototyping"
          },
          {
            icon: <TrendingUp />,
            title: "Value Engineering",
            description: "Cost optimization while maintaining performance.",
            features: [
              "VAVE Workshops & Cost Analysis",
              "Supplier Optimization & Sourcing",
              "Material Substitution & Sustainability",
              "Design Optimization & Lifecycle Extension"
            ],
            link: "/service/engineering-services/value-engineering",
            ctaText: "Value Engineering"
          },
          {
            icon: <Business />,
            title: "Project Management & Consulting",
            description: "Engineering programs with agile methodologies.",
            features: [
              "Engineering Project Management",
              "PLM/ALM Implementation & Migration",
              "Regulatory Compliance & Documentation",
              "Digital PMO & Project Analytics"
            ],
            link: "/service/engineering-services/project-management",
            ctaText: "Project Management"
          },
          {
            icon: <Factory />,
            title: "PLM & CAD Automation",
            description: "Streamlined product development workflows.",
            features: [
              "PLM System Implementation",
              "CAD Automation & Customization",
              "Workflow Optimization & Integration",
              "Digital Engineering Collaboration"
            ],
            badge: "Automation",
            link: "/service/engineering-and-manufacturing-it/plm",
            ctaText: "PLM & CAD"
          },
          {
            icon: <AutoAwesome />,
            title: "Digital Twins & Smart Factory",
            description: "Virtual representations for process optimization.",
            features: [
              "Digital Twin Development",
              "Smart Factory Implementation",
              "Predictive Analytics & Monitoring",
              "Manufacturing Process Optimization"
            ],
            badge: "Smart Factory",
            link: "/service/engineering-and-manufacturing-it/mes",
            ctaText: "Digital Twins"
          },
          {
            icon: <Analytics />,
            title: "Industry 4.0 Solutions",
            description: "Smart manufacturing through automation.",
            features: [
              "Industry 4.0 Strategy & Roadmap",
              "Advanced Automation & Robotics",
              "Data Analytics & Machine Learning",
              "Connected Manufacturing Systems"
            ],
            badge: "Industry 4.0",
            link: "/service/engineering-and-manufacturing-it/industry4",
            ctaText: "Industry 4.0"
          }
        ]}

        // Benefits Section
        benefitsTitle="Why Choose Intellectt Engineering"
        benefitsSubtitle="Discover the advantages of partnering with our expert engineering team"
        benefits={[
          {
            icon: <CheckCircle />,
            title: "Skilled Multidisciplinary Teams",
            description: "Over 300 engineers operating from ISO-9001 and ISO-17025 accredited design centers across North America and Asia."
          },
          {
            icon: <Speed />,
            title: "Agile & Client-Centric Delivery",
            description: "Agile and client-centric delivery models that adapt to your specific project requirements and timelines."
          },
          {
            icon: <AutoAwesome />,
            title: "Scalable Engagement Models",
            description: "Flexible engagement from short-term projects to long-term partnerships that scale with your business needs."
          },
          {
            icon: <Cloud />,
            title: "Global Delivery Capabilities",
            description: "Strong onshore-offshore capabilities with global delivery centers ensuring 24/7 development and support."
          }
        ]}

        // Stats Section
        statsTitle="Engineering Excellence"
        statsSubtitle="Numbers that demonstrate our engineering capabilities"
        stats={[
          {
            number: "300+",
            label: "Engineers",
            description: "Skilled multidisciplinary engineering professionals"
          },
          {
            number: "ISO-9001",
            label: "Certified",
            description: "Quality management systems certification"
          },
          {
            number: "ISO-17025",
            label: "Accredited",
            description: "Testing and calibration laboratories"
          },
          {
            number: "9+",
            label: "Industries",
            description: "Served across diverse industry verticals"
          }
        ]}

        // Alliances Section
        showAlliances={true}

        // Footer Props
        showFooter={false}

        // Final CTA
        finalCtaTitle="Ready to Accelerate Your Product Innovation?"
        finalCtaSubtitle="Let's discuss how our engineering expertise can help bring your product vision to life"
        finalCtaButtonText="Start Engineering Project"
        finalCtaButtonLink="/contact"
      />
      
      {/* Industries Section */}
      <FeatureCards />
      
      {/* Values Section */}
      <EngineeringValuesSection />
      
      {/* Footer */}
      <Footer />
    </>
  );
};

export default EngineeringServices;
