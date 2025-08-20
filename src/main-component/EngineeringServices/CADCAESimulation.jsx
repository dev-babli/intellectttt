import React from "react";
import MasterSubServiceTemplate from "../../components/templates/MasterSubServiceTemplate";
import { 
  Architecture,
  Build,
  Science,
  TrendingUp,
  Business,
  CheckCircle,
  Speed,
  AutoAwesome,
  Cloud,
  Memory,
  Analytics
} from '@mui/icons-material';

const CADCAESimulation = () => {
  return (
    <MasterSubServiceTemplate
      // Hero Section
      heroTitle="CAD/CAE & Simulation Services"
      heroSubtitle="Precision Engineering"
      heroDescription="Designing with precision. Validated by simulation. Our multi-domain teams use advanced modeling and simulation tools to validate performance, safety, and manufacturability from day one."
      heroButtonText="Start Simulation"
      heroButtonLink="/contact"
      heroBackgroundImage="/Manufacturing-and-Automotive.webp"
      heroTextColor="white"
      heroFeatures={[
        "CAD Modeling & DFM",
        "FEA/CFD Simulations",
        "Line Balancing & Factory Simulation",
        "Failure Analysis & EMI/EMC"
      ]}

      // Problem/Solution Section
      problemSolutionTitle="The Simulation Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of engineering simulation and have the expertise to validate designs with precision and accuracy"
      problems={[
        {
          title: "Complex Design Validation",
          description: "Complex design validation requirements that need advanced simulation tools and expertise across multiple domains."
        },
        {
          title: "Performance Optimization",
          description: "Performance optimization challenges that require detailed analysis and simulation-driven design improvements."
        },
        {
          title: "Manufacturability Issues",
          description: "Manufacturability issues that arise from design decisions and need early detection through simulation."
        }
      ]}
      solutions={[
        {
          title: "Advanced Simulation Tools",
          description: "State-of-the-art CAD/CAE tools and simulation software for comprehensive design validation."
        },
        {
          title: "Multi-Domain Expertise",
          description: "Expert teams with deep knowledge across mechanical, thermal, and fluid dynamics simulation."
        },
        {
          title: "Early Validation Framework",
          description: "Simulation-driven design processes that validate performance and manufacturability from day one."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our CAD/CAE & Simulation Services"
      serviceOfferingsSubtitle="Comprehensive simulation services designed to validate performance, safety, and manufacturability"
      services={[
        {
          icon: <Architecture />,
          title: "CAD Modeling & DFM",
          description: "Advanced CAD modeling with design for manufacturability principles and tolerancing analysis.",
          features: [
            "3D CAD modeling and design",
            "Design for manufacturability (DFM)",
            "Tolerance analysis and optimization",
            "Assembly design and validation"
          ],
          badge: "Most Popular",
          link: "/contact",
          ctaText: "CAD Modeling"
        },
        {
          icon: <Analytics />,
          title: "FEA/CFD Simulations",
          description: "Finite element analysis and computational fluid dynamics for thermal, structural, and flow optimization.",
          features: [
            "Structural analysis and optimization",
            "Thermal analysis and heat transfer",
            "Fluid dynamics and flow simulation",
            "Multi-physics simulation"
          ],
          badge: "Advanced",
          link: "/contact",
          ctaText: "FEA/CFD"
        },
        {
          icon: <Build />,
          title: "Line Balancing & Factory Simulation",
          description: "Manufacturing line optimization and factory simulation for improved efficiency and productivity.",
          features: [
            "Production line balancing",
            "Factory layout optimization",
            "Process simulation and validation",
            "Capacity planning and optimization"
          ],
          link: "/contact",
          ctaText: "Factory Simulation"
        },
        {
          icon: <Science />,
          title: "Virtual Twins",
          description: "Digital twin implementation for real-time monitoring and predictive maintenance.",
          features: [
            "Digital twin development",
            "Real-time monitoring systems",
            "Predictive maintenance models",
            "Performance optimization"
          ],
          link: "/contact",
          ctaText: "Virtual Twins"
        },
        {
          icon: <TrendingUp />,
          title: "Failure Analysis & EMI/EMC",
          description: "Comprehensive failure analysis and electromagnetic interference/compatibility testing.",
          features: [
            "Failure mode analysis",
            "Fatigue modeling and prediction",
            "EMI/EMC testing and compliance",
            "Reliability engineering"
          ],
          link: "/contact",
          ctaText: "Failure Analysis"
        }
      ]}

      // Benefits Section
      benefitsTitle="Why Choose Our Simulation Services"
      benefitsSubtitle="Discover the advantages of partnering with our expert simulation team"
      benefits={[
        {
          icon: <CheckCircle />,
          title: "Advanced Simulation Tools",
          description: "State-of-the-art CAD/CAE software and simulation platforms for comprehensive analysis."
        },
        {
          icon: <Speed />,
          title: "Rapid Validation",
          description: "Fast simulation cycles that enable quick design iterations and optimization."
        },
        {
          icon: <AutoAwesome />,
          title: "Multi-Domain Expertise",
          description: "Expert teams with deep knowledge across mechanical, thermal, and fluid dynamics."
        },
        {
          icon: <Cloud />,
          title: "Cloud-Based Solutions",
          description: "Scalable cloud-based simulation platforms for complex computational requirements."
        }
      ]}

      // Stats Section
      statsTitle="Simulation Excellence"
      statsSubtitle="Numbers that demonstrate our simulation capabilities"
      stats={[
        {
          number: "90%",
          label: "Accuracy Rate",
          description: "Simulation accuracy compared to physical testing"
        },
        {
          number: "60%",
          label: "Time Savings",
          description: "Reduction in design validation time"
        },
        {
          number: "500+",
          label: "Simulations Completed",
          description: "Complex simulations successfully executed"
        },
        {
          number: "24/7",
          label: "Computing Power",
          description: "Round-the-clock simulation computing"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Validate Your Designs with Precision?"
      finalCtaSubtitle="Let's discuss how our simulation expertise can help optimize your designs and accelerate development"
      finalCtaButtonText="Start Simulation Project"
      finalCtaButtonLink="/contact"
    />
  );
};

export default CADCAESimulation;
