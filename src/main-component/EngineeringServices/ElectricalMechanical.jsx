import React from "react";
import MasterSubServiceTemplate from "../../components/templates/MasterSubServiceTemplate";
import { 
  Build,
  Science,
  TrendingUp,
  Business,
  CheckCircle,
  Speed,
  AutoAwesome,
  Cloud,
  Memory,
  Settings
} from '@mui/icons-material';

const ElectricalMechanical = () => {
  return (
    <MasterSubServiceTemplate
      // Hero Section
      heroTitle="Electrical & Mechanical Engineering"
      heroSubtitle="Integrated Innovation"
      heroDescription="Driving integrated electromechanical innovation. We provide detailed engineering and system-level integration across mechanical, electrical, and control domains."
      heroButtonText="Start Engineering"
      heroButtonLink="/contact"
      heroBackgroundImage="/Manufacturing-and-Automotive.webp"
      heroTextColor="white"
      heroFeatures={[
        "System Engineering",
        "Power Electronics & PCBAs",
        "Smart Automation",
        "Design Optimization"
      ]}

      // Problem/Solution Section
      problemSolutionTitle="The Electromechanical Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of integrated electromechanical systems and have the expertise to deliver innovative solutions"
      problems={[
        {
          title: "Complex System Integration",
          description: "Complex integration challenges between mechanical, electrical, and control systems that require multidisciplinary expertise."
        },
        {
          title: "Performance Optimization",
          description: "Performance optimization requirements across multiple domains including efficiency, reliability, and cost."
        },
        {
          title: "Manufacturing Constraints",
          description: "Manufacturing constraints and design optimization challenges that impact production efficiency and quality."
        }
      ]}
      solutions={[
        {
          title: "Integrated System Design",
          description: "Comprehensive system-level design that integrates mechanical, electrical, and control domains seamlessly."
        },
        {
          title: "Performance Optimization",
          description: "Multi-domain performance optimization for efficiency, reliability, and manufacturability."
        },
        {
          title: "Advanced Automation",
          description: "Smart automation solutions with OT/IT convergence for enhanced operational efficiency."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our Electrical & Mechanical Engineering Services"
      serviceOfferingsSubtitle="Comprehensive electromechanical engineering services designed for integrated innovation"
      services={[
        {
          icon: <Settings />,
          title: "System Engineering",
          description: "Comprehensive system engineering for control panels, actuators, drives, and enclosures.",
          features: [
            "Control system design",
            "Actuator and drive systems",
            "Panel and enclosure design",
            "System integration"
          ],
          badge: "Most Popular",
          link: "/contact",
          ctaText: "System Engineering"
        },
        {
          icon: <Memory />,
          title: "Power Electronics & PCBAs",
          description: "Advanced power electronics design and PCB assembly for high-performance applications.",
          features: [
            "Power electronics design",
            "PCB assembly and testing",
            "Electrical harness design",
            "Power management systems"
          ],
          badge: "Power Systems",
          link: "/contact",
          ctaText: "Power Electronics"
        },
        {
          icon: <AutoAwesome />,
          title: "Smart Automation",
          description: "Intelligent automation solutions with OT/IT convergence for enhanced operational efficiency.",
          features: [
            "Industrial automation",
            "OT/IT convergence",
            "Interface development",
            "Process optimization"
          ],
          link: "/contact",
          ctaText: "Smart Automation"
        },
        {
          icon: <TrendingUp />,
          title: "Design Optimization",
          description: "Comprehensive design optimization for manufacturability, cooling, and structural integrity.",
          features: [
            "Manufacturability optimization",
            "Thermal management",
            "Structural analysis",
            "Cost optimization"
          ],
          link: "/contact",
          ctaText: "Design Optimization"
        }
      ]}

      // Benefits Section
      benefitsTitle="Why Choose Our Electromechanical Services"
      benefitsSubtitle="Discover the advantages of partnering with our expert electromechanical team"
      benefits={[
        {
          icon: <CheckCircle />,
          title: "Multidisciplinary Expertise",
          description: "Expert teams with deep knowledge across mechanical, electrical, and control engineering."
        },
        {
          icon: <Speed />,
          title: "Integrated Solutions",
          description: "Seamless integration of mechanical, electrical, and control systems for optimal performance."
        },
        {
          icon: <AutoAwesome />,
          title: "Advanced Technologies",
          description: "Cutting-edge technologies including smart automation and IoT integration."
        },
        {
          icon: <Cloud />,
          title: "Scalable Design",
          description: "Scalable design solutions that adapt to changing requirements and technology evolution."
        }
      ]}

      // Stats Section
      statsTitle="Electromechanical Excellence"
      statsSubtitle="Numbers that demonstrate our electromechanical capabilities"
      stats={[
        {
          number: "200+",
          label: "Systems Designed",
          description: "Integrated electromechanical systems"
        },
        {
          number: "95%",
          label: "Efficiency Gain",
          description: "Average efficiency improvement"
        },
        {
          number: "50+",
          label: "Technologies",
          description: "Advanced technologies integrated"
        },
        {
          number: "24/7",
          label: "Support",
          description: "Round-the-clock engineering support"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Drive Electromechanical Innovation?"
      finalCtaSubtitle="Let's discuss how our integrated engineering expertise can help create innovative electromechanical solutions"
      finalCtaButtonText="Start Engineering Project"
      finalCtaButtonLink="/contact"
    />
  );
};

export default ElectricalMechanical;
