import React from "react";
import MasterSubServiceTemplate from "../../components/templates/MasterSubServiceTemplate";
import { 
  TrendingUp,
  Business,
  CheckCircle,
  Speed,
  AutoAwesome,
  Cloud,
  Memory,
  Settings,
  Verified,
  Savings
} from '@mui/icons-material';

const ValueEngineering = () => {
  return (
    <MasterSubServiceTemplate
      // Hero Section
      heroTitle="Value Engineering"
      heroSubtitle="Cost Optimization"
      heroDescription="Maximizing product value while reducing cost and complexity. We combine deep domain knowledge and digital tools to optimize design, reduce material cost, and simplify manufacturing."
      heroButtonText="Start Value Engineering"
      heroButtonLink="/contact"
      heroBackgroundImage="/Manufacturing-and-Automotive.webp"
      heroTextColor="white"
      heroFeatures={[
        "VAVE Workshops",
        "Alternate Sourcing",
        "Material Substitution",
        "Lifecycle Extension"
      ]}

      // Problem/Solution Section
      problemSolutionTitle="The Cost Optimization Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of cost optimization and have the expertise to maximize value while reducing complexity"
      problems={[
        {
          title: "High Manufacturing Costs",
          description: "High manufacturing costs that impact profitability and competitive positioning in the market."
        },
        {
          title: "Complex Supply Chains",
          description: "Complex supply chains that increase costs and reduce flexibility in sourcing and manufacturing."
        },
        {
          title: "Design Inefficiencies",
          description: "Design inefficiencies that lead to increased material costs and manufacturing complexity."
        }
      ]}
      solutions={[
        {
          title: "Comprehensive Cost Analysis",
          description: "Comprehensive cost analysis and optimization strategies across design, materials, and manufacturing."
        },
        {
          title: "Supply Chain Optimization",
          description: "Supply chain optimization with alternate sourcing and supplier qualification strategies."
        },
        {
          title: "Design Optimization",
          description: "Design optimization for manufacturability, cost efficiency, and sustainability."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our Value Engineering Services"
      serviceOfferingsSubtitle="Comprehensive value engineering services designed to maximize value and reduce costs"
      services={[
        {
          icon: <Settings />,
          title: "VAVE Workshops",
          description: "Value Analysis and Value Engineering workshops for system and component cost reduction.",
          features: [
            "Value analysis workshops",
            "Cost reduction strategies",
            "Component optimization",
            "Process improvement"
          ],
          badge: "Most Popular",
          link: "/contact",
          ctaText: "VAVE Workshops"
        },
        {
          icon: <Cloud />,
          title: "Alternate Sourcing",
          description: "Comprehensive alternate sourcing and supplier requalification strategies.",
          features: [
            "Supplier evaluation",
            "Alternate sourcing strategies",
            "Supplier qualification",
            "Cost optimization"
          ],
          badge: "Sourcing",
          link: "/contact",
          ctaText: "Alternate Sourcing"
        },
        {
          icon: <AutoAwesome />,
          title: "Material Substitution",
          description: "Advanced material substitution and sustainability studies for cost optimization.",
          features: [
            "Material analysis",
            "Substitution strategies",
            "Sustainability studies",
            "Performance validation"
          ],
          link: "/contact",
          ctaText: "Material Substitution"
        },
        {
          icon: <TrendingUp />,
          title: "Lifecycle Extension",
          description: "Product lifecycle extension and redesign for cost efficiency and sustainability.",
          features: [
            "Lifecycle analysis",
            "Redesign strategies",
            "Cost efficiency optimization",
            "Sustainability improvement"
          ],
          link: "/contact",
          ctaText: "Lifecycle Extension"
        }
      ]}

      // Benefits Section
      benefitsTitle="Why Choose Our Value Engineering Services"
      benefitsSubtitle="Discover the advantages of partnering with our expert value engineering team"
      benefits={[
        {
          icon: <CheckCircle />,
          title: "Cost Reduction",
          description: "Significant cost reduction through comprehensive value engineering analysis and optimization."
        },
        {
          icon: <Speed />,
          title: "Rapid Implementation",
          description: "Fast implementation of cost optimization strategies with measurable results."
        },
        {
          icon: <AutoAwesome />,
          title: "Sustainable Solutions",
          description: "Sustainable cost optimization solutions that maintain quality and performance."
        },
        {
          icon: <Cloud />,
          title: "Digital Tools",
          description: "Advanced digital tools and analytics for comprehensive cost analysis and optimization."
        }
      ]}

      // Stats Section
      statsTitle="Value Engineering Excellence"
      statsSubtitle="Numbers that demonstrate our value engineering capabilities"
      stats={[
        {
          number: "30%",
          label: "Cost Reduction",
          description: "Average cost reduction achieved"
        },
        {
          number: "200+",
          label: "Projects Completed",
          description: "Value engineering projects"
        },
        {
          number: "50+",
          label: "Suppliers Evaluated",
          description: "Supplier evaluation and qualification"
        },
        {
          number: "24/7",
          label: "Support",
          description: "Round-the-clock optimization support"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Optimize Your Costs and Maximize Value?"
      finalCtaSubtitle="Let's discuss how our value engineering expertise can help reduce costs and improve your competitive position"
      finalCtaButtonText="Start Value Engineering"
      finalCtaButtonLink="/contact"
    />
  );
};

export default ValueEngineering;
