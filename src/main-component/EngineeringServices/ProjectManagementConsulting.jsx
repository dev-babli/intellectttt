import React from "react";
import MasterSubServiceTemplate from "../../components/templates/MasterSubServiceTemplate";
import { 
  Business,
  CheckCircle,
  Speed,
  AutoAwesome,
  Cloud,
  Memory,
  Settings,
  Verified,
  Savings,
  Analytics
} from '@mui/icons-material';

const ProjectManagementConsulting = () => {
  return (
    <MasterSubServiceTemplate
      // Hero Section
      heroTitle="Project Management & Consulting"
      heroSubtitle="Strategic Execution"
      heroDescription="Delivering complex programs with agility, compliance, and insight. We provide consulting-led execution, digital PMO support, and engineering governance for high-impact projects across sectors."
      heroButtonText="Start Consulting"
      heroButtonLink="/contact"
      heroBackgroundImage="/Manufacturing-and-Automotive.webp"
      heroTextColor="white"
      heroFeatures={[
        "Engineering Consulting",
        "PLM & ALM Support",
        "Regulatory Documentation",
        "Digital Project Tracking"
      ]}

      // Problem/Solution Section
      problemSolutionTitle="The Project Management Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of engineering project management and have the expertise to deliver successful outcomes"
      problems={[
        {
          title: "Complex Project Execution",
          description: "Complex project execution challenges that require multidisciplinary coordination and governance."
        },
        {
          title: "Compliance Requirements",
          description: "Stringent compliance requirements that need expert documentation and regulatory support."
        },
        {
          title: "Digital Transformation",
          description: "Digital transformation challenges that require strategic consulting and technology implementation."
        }
      ]}
      solutions={[
        {
          title: "Strategic Consulting",
          description: "Strategic consulting services with deep engineering expertise and industry knowledge."
        },
        {
          title: "Digital PMO Support",
          description: "Digital project management office support with advanced tools and methodologies."
        },
        {
          title: "Compliance Excellence",
          description: "Comprehensive compliance support for regulatory documentation and governance."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our Project Management & Consulting Services"
      serviceOfferingsSubtitle="Comprehensive project management and consulting services designed for strategic execution"
      services={[
        {
          icon: <Business />,
          title: "Engineering Consulting",
          description: "Strategic engineering consulting and EPCm support for complex engineering projects.",
          features: [
            "Strategic consulting",
            "EPCm support",
            "Engineering governance",
            "Project optimization"
          ],
          badge: "Most Popular",
          link: "/contact",
          ctaText: "Engineering Consulting"
        },
        {
          icon: <Cloud />,
          title: "PLM & ALM Support",
          description: "Product lifecycle management and application lifecycle management support and migration.",
          features: [
            "PLM implementation",
            "ALM support",
            "Cloud migration",
            "System integration"
          ],
          badge: "Digital",
          link: "/contact",
          ctaText: "PLM & ALM"
        },
        {
          icon: <Verified />,
          title: "Regulatory Documentation",
          description: "Comprehensive regulatory documentation support for OSHA, GAMP, PSM compliance.",
          features: [
            "OSHA compliance",
            "GAMP documentation",
            "PSM support",
            "Regulatory consulting"
          ],
          link: "/contact",
          ctaText: "Regulatory Support"
        },
        {
          icon: <Analytics />,
          title: "Digital Project Tracking",
          description: "Advanced digital project tracking and asset reliability dashboards for real-time monitoring.",
          features: [
            "Project tracking",
            "Asset reliability",
            "Real-time monitoring",
            "Performance analytics"
          ],
          link: "/contact",
          ctaText: "Digital Tracking"
        }
      ]}

      // Benefits Section
      benefitsTitle="Why Choose Our Project Management Services"
      benefitsSubtitle="Discover the advantages of partnering with our expert project management team"
      benefits={[
        {
          icon: <CheckCircle />,
          title: "Strategic Expertise",
          description: "Deep strategic expertise in engineering project management and consulting."
        },
        {
          icon: <Speed />,
          title: "Agile Execution",
          description: "Agile project execution methodologies that adapt to changing requirements."
        },
        {
          icon: <AutoAwesome />,
          title: "Digital Innovation",
          description: "Digital innovation with advanced PMO tools and project tracking platforms."
        },
        {
          icon: <Cloud />,
          title: "Compliance Excellence",
          description: "Comprehensive compliance support for regulatory requirements and governance."
        }
      ]}

      // Stats Section
      statsTitle="Project Management Excellence"
      statsSubtitle="Numbers that demonstrate our project management capabilities"
      stats={[
        {
          number: "500+",
          label: "Projects Managed",
          description: "Complex engineering projects"
        },
        {
          number: "95%",
          label: "Success Rate",
          description: "Project success rate"
        },
        {
          number: "50+",
          label: "Clients Served",
          description: "Satisfied clients across industries"
        },
        {
          number: "24/7",
          label: "Support",
          description: "Round-the-clock project support"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Execute Your Projects with Excellence?"
      finalCtaSubtitle="Let's discuss how our project management expertise can help deliver successful outcomes for your engineering projects"
      finalCtaButtonText="Start Consulting Project"
      finalCtaButtonLink="/contact"
    />
  );
};

export default ProjectManagementConsulting;
