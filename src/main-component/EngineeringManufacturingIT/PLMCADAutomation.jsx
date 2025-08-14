import React from "react";
import MasterSubServiceTemplate from "../../components/templates/MasterSubServiceTemplate";
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
  AutoFixNormal
} from '@mui/icons-material';

const PLMCADAutomation = () => {
  return (
    <MasterSubServiceTemplate
      // Hero Section - Minimal
      heroTitle="PLM & CAD Automation"
      heroSubtitle="Digital Engineering Excellence"
      heroDescription="Streamline product development with PLM and CAD automation solutions. Enhance design accuracy, reduce time-to-market, and empower engineering teams to innovate faster with greater precision and control."
      heroButtonText="PLM & CAD"
      heroButtonLink="/contact"
      heroBackgroundImage="/Manufacturing-and-Automotive.webp"
      heroTextColor="black"
      heroFeatures={[
        "Product Lifecycle Management",
        "CAD/CAE Automation",
        "Design Optimization",
        "Digital Engineering"
      ]}

      // Problem/Solution Section
      problemSolutionTitle="The Engineering Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of product development and have the expertise to streamline engineering processes"
      problems={[
        {
          title: "Manual Design Processes",
          description: "Time-consuming manual CAD/CAE tasks that slow down product development and reduce engineering efficiency."
        },
        {
          title: "PLM Integration Issues",
          description: "Complex PLM platform integrations that prevent seamless collaboration and data management across teams."
        },
        {
          title: "Design Iteration Delays",
          description: "Slow design iteration cycles that delay time-to-market and impact product quality and innovation."
        }
      ]}
      solutions={[
        {
          title: "Automated CAD/CAE Workflows",
          description: "Automated design workflows that accelerate product development and improve engineering efficiency."
        },
        {
          title: "Integrated PLM Solutions",
          description: "Seamless PLM integrations that enable collaboration and streamline data management across teams."
        },
        {
          title: "Rapid Design Iteration",
          description: "Fast design iteration capabilities that accelerate time-to-market and improve product quality."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our PLM & CAD Automation Services"
      serviceOfferingsSubtitle="Comprehensive engineering automation services designed to streamline product development"
      services={[
        {
          icon: <Engineering />,
          title: "CAD/CAE Automation",
          description: "Automate repetitive CAD/CAE tasks and streamline design workflows for faster product development.",
          features: [
            "Task automation",
            "Workflow optimization",
            "Design acceleration"
          ],
          badge: "Most Popular",
          link: "/contact",
          ctaText: "CAD/CAE Automation"
        },
        {
          icon: <Build />,
          title: "PLM Platform Integration",
          description: "Integrate PLM platforms with existing systems for seamless data management and collaboration.",
          features: [
            "Platform integration",
            "Data management",
            "Team collaboration"
          ],
          badge: "Trending",
          link: "/contact",
          ctaText: "PLM Integration"
        },
        {
          icon: <AutoFixNormal />,
          title: "Design Optimization",
          description: "Optimize design processes with advanced algorithms and simulation tools for better performance.",
          features: [
            "Process optimization",
            "Advanced algorithms",
            "Simulation tools"
          ],
          link: "/contact",
          ctaText: "Design Optimization"
        },
        {
          icon: <Engineering />,
          title: "Digital Engineering",
          description: "Transform engineering processes with digital tools and technologies for innovation.",
          features: [
            "Digital transformation",
            "Innovation tools",
            "Process modernization"
          ],
          link: "/contact",
          ctaText: "Digital Engineering"
        }
      ]}
      serviceOfferingsVariant="default"

      // Benefits Section
      benefitsTitle="Why Choose Our PLM & CAD Automation Services"
      benefitsSubtitle="Discover the tangible benefits and outcomes you can expect from our engineering automation solutions"
      benefits={[
        {
          icon: <Speed />,
          title: "60% Faster Design",
          description: "Accelerate design processes by 60% with automated workflows and optimized tools.",
          features: [
            "Faster design",
            "Automated workflows",
            "Optimized tools"
          ],
          metric: {
            value: "60%",
            label: "Faster Design"
          }
        },
        {
          icon: <TrendingUp />,
          title: "40% Cost Reduction",
          description: "Reduce engineering costs by 40% with streamlined processes and automation.",
          features: [
            "Cost reduction",
            "Streamlined processes",
            "Automation benefits"
          ],
          metric: {
            value: "40%",
            label: "Cost Reduction"
          }
        },
        {
          icon: <CheckCircle />,
          title: "100% Quality Assurance",
          description: "Ensure 100% design quality with automated validation and quality checks.",
          features: [
            "Quality assurance",
            "Automated validation",
            "Quality checks"
          ],
          metric: {
            value: "100%",
            label: "Quality Assurance"
          }
        }
      ]}

      // Stats Section
      statsTitle="Proven PLM & CAD Automation Results"
      statsSubtitle="Numbers that speak for themselves - real outcomes from our engineering automation implementations"
      stats={[
        {
          icon: <Speed />,
          value: "60%",
          label: "Faster Design",
          description: "Average improvement in design speed"
        },
        {
          icon: <TrendingUp />,
          value: "40%",
          label: "Cost Reduction",
          description: "Average reduction in engineering costs"
        },
        {
          icon: <CheckCircle />,
          value: "100%",
          label: "Quality Assurance",
          description: "Quality assurance achieved"
        },
        {
          icon: <Engineering />,
          value: "50+",
          label: "Engineering Projects",
          description: "PLM & CAD projects completed"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Transform Your Engineering Processes?"
      finalCtaSubtitle="Join hundreds of companies that have already improved their product development with our PLM & CAD automation services. Let's discuss how we can help you achieve similar results."
      finalCtaButtonText="Schedule Engineering Consultation"
      finalCtaButtonLink="/contact"

      // Blog & Case Studies
      blogTitle="Engineering Automation Insights & Updates"
      blogSubtitle="Stay informed with our latest engineering automation research, industry trends, and thought leadership content"
      caseStudyTitle="Engineering Automation Success Stories"
      caseStudySubtitle="Discover how we've helped businesses achieve remarkable results with PLM & CAD automation"

      // Theme
      theme="light"
    />
  );
};

export default PLMCADAutomation;
