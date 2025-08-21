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
  Support,
  Build,
  Monitor,
  Verified
} from '@mui/icons-material';

const SAPManagedSupport = () => {
  return (
    <MasterSubServiceTemplate
      // Hero Section - Minimal
      heroTitle="SAP S/4HANA Migration & Support"
      heroSubtitle="SAP Support"
      heroDescription="Accelerate your SAP S/4HANA migration with confidence and future-ready support. From assessment to post-migration optimization, we ensure a smooth, secure, and value-driven journey."
      heroButtonText="SAP Migration"
      heroButtonLink="/contact"
      heroBackgroundImage="/hana.webp"
      heroTextColor="black"
      heroFeatures={[
        "S/4HANA Migration",
        "System Assessment",
        "Data Migration",
        "Post-Migration Support"
      ]}

      // Problem/Solution Section
      problemSolutionTitle="The SAP Migration Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of SAP S/4HANA migration and have the expertise to ensure successful transformation"
      problems={[
        {
          title: "Migration Complexity",
          description: "Complex SAP S/4HANA migration processes that are risky, time-consuming, and prone to data loss and system downtime."
        },
        {
          title: "System Assessment Issues",
          description: "Lack of proper system assessment and readiness checks that lead to migration failures and unexpected costs."
        },
        {
          title: "Post-Migration Support",
          description: "Inadequate post-migration support and optimization that prevents organizations from realizing full S/4HANA benefits."
        }
      ]}
      solutions={[
        {
          title: "Comprehensive Migration Strategy",
          description: "End-to-end migration strategy with proven frameworks and minimal downtime techniques for successful S/4HANA transformation."
        },
        {
          title: "System Assessment & Readiness",
          description: "Detailed system assessment and readiness checks to ensure smooth migration and minimize risks."
        },
        {
          title: "Post-Migration Optimization",
          description: "Complete post-migration optimization and support to maximize S/4HANA benefits and system performance."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our SAP S/4HANA Migration & Support Services"
      serviceOfferingsSubtitle="Comprehensive SAP migration services designed to ensure successful S/4HANA transformation"
      services={[
        {
          icon: <Analytics />,
          title: "System Assessment",
          description: "Evaluate your current SAP ECC environment with detailed readiness checks and migration strategy.",
          features: [
            "Readiness checks",
            "Custom code analysis",
            "Migration strategy"
          ],
          badge: "Most Popular",
          link: "/contact",
          ctaText: "System Assessment"
        },
        {
          icon: <IntegrationInstructions />,
          title: "Data & Process Migration",
          description: "Ensure smooth transition of master data, transactional data, and business processes to S/4HANA.",
          features: [
            "Data migration",
            "Process migration",
            "Minimal downtime"
          ],
          badge: "Trending",
          link: "/contact",
          ctaText: "Data Migration"
        },
        {
          icon: <Support />,
          title: "Post-Migration Support",
          description: "Optimize your S/4HANA system post go-live with performance tuning and continuous enhancements.",
          features: [
            "Performance tuning",
            "User enablement",
            "Continuous enhancements"
          ],
          link: "/contact",
          ctaText: "Post-Migration Support"
        },
        {
          icon: <Build />,
          title: "Managed Support Services",
          description: "Comprehensive managed support services for ongoing S/4HANA optimization and maintenance.",
          features: [
            "Ongoing optimization",
            "System maintenance",
            "Managed support"
          ],
          link: "/contact",
          ctaText: "Managed Support"
        }
      ]}
      serviceOfferingsVariant="default"

      // Benefits Section
      benefitsTitle="Why Choose Our SAP S/4HANA Migration & Support Services"
      benefitsSubtitle="Discover the tangible benefits and outcomes you can expect from our SAP migration solutions"
      benefits={[
        {
          icon: <Speed />,
          title: "50% Faster Migration",
          description: "Accelerate S/4HANA migration by 50% with proven frameworks and automation tools.",
          features: [
            "Faster migration",
            "Proven frameworks",
            "Automation tools"
          ],
          metric: {
            value: "50%",
            label: "Faster Migration"
          }
        },
        {
          icon: <TrendingUp />,
          title: "30% Cost Reduction",
          description: "Reduce migration costs by 30% with optimized planning and efficient processes.",
          features: [
            "Cost reduction",
            "Optimized planning",
            "Efficient processes"
          ],
          metric: {
            value: "30%",
            label: "Cost Reduction"
          }
        },
        {
          icon: <CheckCircle />,
          title: "100% Success Rate",
          description: "Ensure 100% migration success with certified experts and comprehensive support.",
          features: [
            "Migration success",
            "Certified experts",
            "Comprehensive support"
          ],
          metric: {
            value: "100%",
            label: "Success Rate"
          }
        }
      ]}

      // Stats Section
      statsTitle="Proven SAP Migration Results"
      statsSubtitle="Numbers that speak for themselves - real outcomes from our SAP migration implementations"
      stats={[
        {
          icon: <Speed />,
          value: "50%",
          label: "Faster Migration",
          description: "Average improvement in migration speed"
        },
        {
          icon: <TrendingUp />,
          value: "30%",
          label: "Cost Reduction",
          description: "Average reduction in migration costs"
        },
        {
          icon: <CheckCircle />,
          value: "100%",
          label: "Success Rate",
          description: "Successful migration rate achieved"
        },
        {
          icon: <Verified />,
          value: "200+",
          label: "SAP Projects",
          description: "SAP migration projects completed"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Transform Your SAP Systems?"
      finalCtaSubtitle="Join hundreds of companies that have already successfully migrated to S/4HANA with our services. Let's discuss how we can help you achieve similar results."
      finalCtaButtonText="Schedule SAP Migration Consultation"
      finalCtaButtonLink="/contact"

      // Blog & Case Studies
      blogTitle="SAP Migration Insights & Updates"
      blogSubtitle="Stay informed with our latest SAP migration research, industry trends, and thought leadership content"
      caseStudyTitle="SAP Migration Success Stories"
      caseStudySubtitle="Discover how we've helped businesses achieve remarkable results with SAP S/4HANA migration"

      // Theme
      theme="light"
    />
  );
};

export default SAPManagedSupport;
