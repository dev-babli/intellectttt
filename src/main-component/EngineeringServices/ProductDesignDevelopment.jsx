import React from "react";
import MasterSubServiceTemplate from "../../components/templates/MasterSubServiceTemplate";
import { 
  DesignServices,
  Architecture,
  Build,
  Science,
  TrendingUp,
  Business,
  CheckCircle,
  Speed,
  AutoAwesome,
  Cloud
} from '@mui/icons-material';

const ProductDesignDevelopment = () => {
  return (
    <MasterSubServiceTemplate
      // Hero Section
      heroTitle="Product Design & Development"
      heroSubtitle="End-to-End Innovation"
      heroDescription="Accelerating innovation with end-to-end product engineering. We help clients take products from concept to market using robust engineering, compliance, and digital integration frameworks."
      heroButtonText="Start Product Development"
      heroButtonLink="/contact"
      heroBackgroundImage="/Manufacturing-and-Automotive.webp"
      heroTextColor="white"
      heroFeatures={[
        "Concept Design & CAD/DFM",
        "Rapid Prototyping",
        "Platform Engineering",
        "Hardware-Software Co-Design"
      ]}

      // Problem/Solution Section
      problemSolutionTitle="The Product Development Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of bringing innovative products to market and have the expertise to accelerate your development process"
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
          title: "End-to-End Product Engineering",
          description: "Comprehensive product engineering services from concept to commercialization with multidisciplinary expertise."
        },
        {
          title: "Regulatory-Aligned Development",
          description: "Product development processes designed to meet global regulatory standards and compliance requirements."
        },
        {
          title: "Accelerated Innovation Framework",
          description: "Robust engineering frameworks that accelerate innovation while maintaining quality and safety standards."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our Product Design & Development Services"
      serviceOfferingsSubtitle="Comprehensive product development services designed to accelerate innovation and ensure successful commercialization"
      services={[
        {
          icon: <DesignServices />,
          title: "Concept Design & CAD/DFM",
          description: "Transform ideas into detailed designs with advanced CAD tools and design for manufacturability principles.",
          features: [
            "Conceptual design and ideation",
            "3D CAD modeling and design",
            "Design for manufacturability (DFM)",
            "Tolerance analysis and optimization"
          ],
          badge: "Most Popular",
          link: "/contact",
          ctaText: "Concept Design"
        },
        {
          icon: <Build />,
          title: "Rapid Prototyping",
          description: "Accelerate development with rapid prototyping services that bring designs to life quickly and efficiently.",
          features: [
            "3D printing and additive manufacturing",
            "CNC machining and fabrication",
            "Functional prototyping",
            "Iterative design validation"
          ],
          badge: "Fast Track",
          link: "/contact",
          ctaText: "Rapid Prototyping"
        },
        {
          icon: <Architecture />,
          title: "Platform Engineering",
          description: "Build scalable platforms for SaaS, connected devices, and smart products with robust architecture.",
          features: [
            "SaaS platform development",
            "Connected device architecture",
            "Smart product integration",
            "Scalable system design"
          ],
          link: "/contact",
          ctaText: "Platform Engineering"
        },
        {
          icon: <Science />,
          title: "Hardware-Software Co-Design",
          description: "Integrated hardware and software development for regulated industries with compliance focus.",
          features: [
            "Hardware-software integration",
            "Regulatory compliance (ISO, FDA, DO-178C)",
            "System architecture design",
            "Cross-domain optimization"
          ],
          link: "/contact",
          ctaText: "Co-Design"
        },
        {
          icon: <TrendingUp />,
          title: "Digital Thread Implementation",
          description: "Implement digital thread solutions for complete lifecycle traceability and data management.",
          features: [
            "Digital twin implementation",
            "Lifecycle traceability",
            "Data management systems",
            "PLM integration"
          ],
          link: "/contact",
          ctaText: "Digital Thread"
        }
      ]}

      // Benefits Section
      benefitsTitle="Why Choose Our Product Development Services"
      benefitsSubtitle="Discover the advantages of partnering with our expert product development team"
      benefits={[
        {
          icon: <CheckCircle />,
          title: "Multidisciplinary Expertise",
          description: "Expert teams with deep knowledge across mechanical, electrical, and software engineering domains."
        },
        {
          icon: <Speed />,
          title: "Accelerated Development",
          description: "Rapid prototyping and iterative design processes that reduce time-to-market significantly."
        },
        {
          icon: <AutoAwesome />,
          title: "Regulatory Compliance",
          description: "Built-in compliance frameworks for FDA, ISO, and other regulatory requirements."
        },
        {
          icon: <Cloud />,
          title: "Digital Integration",
          description: "Seamless integration of digital tools and platforms for enhanced collaboration and efficiency."
        }
      ]}

      // Stats Section
      statsTitle="Product Development Excellence"
      statsSubtitle="Numbers that demonstrate our product development capabilities"
      stats={[
        {
          number: "50%",
          label: "Faster Time-to-Market",
          description: "Average reduction in development time"
        },
        {
          number: "100+",
          label: "Products Launched",
          description: "Successfully brought to market"
        },
        {
          number: "95%",
          label: "Regulatory Success",
          description: "First-pass regulatory approval rate"
        },
        {
          number: "24/7",
          label: "Development Support",
          description: "Round-the-clock engineering support"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Accelerate Your Product Development?"
      finalCtaSubtitle="Let's discuss how our product development expertise can help bring your innovation to market faster"
      finalCtaButtonText="Start Product Development"
      finalCtaButtonLink="/contact"
    />
  );
};

export default ProductDesignDevelopment;
