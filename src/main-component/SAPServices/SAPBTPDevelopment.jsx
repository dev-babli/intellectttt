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
  Code,
  Build,
  Storage,
  Web
} from '@mui/icons-material';

const SAPBTPDevelopment = () => {
  return (
    <MasterSubServiceTemplate
      // Hero Section - Minimal
      heroTitle="SAP BTP, ABAP & Fiori Development"
      heroSubtitle="SAP Innovation"
      heroDescription="Unlock the power of SAP Business Technology Platform with custom ABAP development and modern Fiori UI design. Build scalable cloud-native extensions and enhance SAP functionality."
      heroButtonText="SAP Development"
      heroButtonLink="/contact"
      heroBackgroundImage="/SAP.webp"
      heroTextColor="black"
      heroFeatures={[
        "SAP BTP Development",
        "ABAP Programming",
        "Fiori UI Design",
        "Cloud Extensions"
      ]}

      // Problem/Solution Section
      problemSolutionTitle="The SAP Development Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of SAP development and have the expertise to build innovative SAP solutions"
      problems={[
        {
          title: "Limited SAP Functionality",
          description: "Standard SAP functionality that doesn't meet specific business requirements and lacks customization capabilities."
        },
        {
          title: "Outdated User Interfaces",
          description: "Poor user experience with outdated SAP interfaces that reduce productivity and user adoption."
        },
        {
          title: "Integration Complexity",
          description: "Complex integration challenges between SAP systems and external applications or cloud services."
        }
      ]}
      solutions={[
        {
          title: "Custom ABAP Development",
          description: "Custom ABAP programs, reports, and interfaces tailored to specific business requirements and workflows."
        },
        {
          title: "Modern Fiori UI Design",
          description: "Responsive, intuitive Fiori applications that provide excellent user experience across all devices."
        },
        {
          title: "SAP BTP Cloud Extensions",
          description: "Build cloud-native extensions using SAP Business Technology Platform."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our SAP BTP & Development Services"
      serviceOfferingsSubtitle="Comprehensive SAP development services designed to enhance SAP functionality"
      services={[
        {
          icon: <Code />,
          title: "Custom ABAP Development",
          description: "Enhance standard SAP functionality with custom ABAP programs, reports, and workflows.",
          features: [
            "Custom programs",
            "Reports development",
            "Workflow automation"
          ],
          badge: "Most Popular",
          link: "/contact",
          ctaText: "ABAP Development"
        },
        {
          icon: <Web />,
          title: "Fiori UI Design",
          description: "Design responsive, intuitive Fiori applications for modern user experience.",
          features: [
            "Responsive design",
            "User experience",
            "Modern interfaces"
          ],
          badge: "Trending",
          link: "/contact",
          ctaText: "Fiori Design"
        },
        {
          icon: <Storage />,
          title: "SAP BTP Extensions",
          description: "Build cloud-native extensions using SAP Business Technology Platform.",
          features: [
            "Cloud extensions",
            "BTP integration",
            "Scalable solutions"
          ],
          link: "/contact",
          ctaText: "BTP Extensions"
        },
        {
          icon: <Build />,
          title: "DevOps & CI/CD",
          description: "Implement DevOps best practices and CI/CD pipelines for SAP development.",
          features: [
            "DevOps practices",
            "CI/CD pipelines",
            "Automated testing"
          ],
          link: "/contact",
          ctaText: "DevOps & CI/CD"
        }
      ]}
      serviceOfferingsVariant="default"

      // Benefits Section
      benefitsTitle="Why Choose Our SAP BTP & Development Services"
      benefitsSubtitle="Discover the tangible benefits and outcomes you can expect from our SAP development solutions"
      benefits={[
        {
          icon: <Speed />,
          title: "50% Faster Development",
          description: "Accelerate SAP development by 50% with modern tools, frameworks, and best practices.",
          features: [
            "Faster development",
            "Modern tools",
            "Best practices"
          ],
          metric: {
            value: "50%",
            label: "Faster Development"
          }
        },
        {
          icon: <TrendingUp />,
          title: "40% Better User Experience",
          description: "Improve user experience by 40% with modern Fiori interfaces and responsive design.",
          features: [
            "Better UX",
            "Modern interfaces",
            "Responsive design"
          ],
          metric: {
            value: "40%",
            label: "Better UX"
          }
        },
        {
          icon: <CheckCircle />,
          title: "100% SAP Compliance",
          description: "Ensure 100% SAP compliance and best practices in all development and integration work.",
          features: [
            "SAP compliance",
            "Best practices",
            "Quality assurance"
          ],
          metric: {
            value: "100%",
            label: "SAP Compliance"
          }
        }
      ]}

      // Stats Section
      statsTitle="Proven SAP Development Results"
      statsSubtitle="Numbers that speak for themselves - real outcomes from our SAP development implementations"
      stats={[
        {
          icon: <Speed />,
          value: "50%",
          label: "Faster Development",
          description: "Average improvement in development speed"
        },
        {
          icon: <TrendingUp />,
          value: "40%",
          label: "Better UX",
          description: "Average improvement in user experience"
        },
        {
          icon: <CheckCircle />,
          value: "100%",
          label: "SAP Compliance",
          description: "SAP compliance and best practices achieved"
        },
        {
          icon: <Code />,
          value: "200+",
          label: "SAP Projects",
          description: "SAP development projects completed"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Enhance Your SAP Systems?"
      finalCtaSubtitle="Join hundreds of companies that have already improved their SAP functionality with our development services. Let's discuss how we can help you achieve similar results."
      finalCtaButtonText="Schedule SAP Development Consultation"
      finalCtaButtonLink="/contact"

      // Blog & Case Studies
      blogTitle="SAP Development Insights & Updates"
      blogSubtitle="Stay informed with our latest SAP development research, industry trends, and thought leadership content"
      caseStudyTitle="SAP Development Success Stories"
      caseStudySubtitle="Discover how we've helped businesses achieve remarkable results with SAP development"

      // Theme
      theme="light"
    />
  );
};

export default SAPBTPDevelopment;
