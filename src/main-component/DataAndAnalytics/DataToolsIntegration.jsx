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
  Storage,
  Dashboard,
  Build,
  Shield
} from '@mui/icons-material';

const DataToolsIntegration = () => {
  return (
    <MasterSubServiceTemplate
      // Hero Section - Minimal
      heroTitle="Azure Data Lake, Snowflake & Power BI"
      heroSubtitle="Enterprise Data Platform"
      heroDescription="Unify, store, and visualize data at scale with enterprise-grade data platforms and advanced analytics. Build comprehensive data solutions using Azure Data Lake, Snowflake, and Power BI for powerful insights."
      heroButtonText="Explore Tools"
      heroButtonLink="/contact"
      heroBackgroundImage="/images/1d.webp"
      heroFeatures={[
        "Data Warehousing",
        "Real-time Analytics",
        "Advanced Visualization",
        "Enterprise Integration"
      ]}

      // Problem/Solution Section
      problemSolutionTitle="The Data Tools Integration Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of data platform integration and have the expertise to build unified data solutions"
      problems={[
        {
          title: "Data Platform Fragmentation",
          description: "Multiple disconnected data platforms that prevent unified analytics and create data silos across the organization."
        },
        {
          title: "Real-time Processing Complexity",
          description: "Difficulty processing and analyzing data in real-time with traditional data warehouse solutions."
        },
        {
          title: "Visualization & Reporting Gaps",
          description: "Lack of powerful visualization tools and reporting capabilities that prevent data-driven decision making."
        }
      ]}
      solutions={[
        {
          title: "Unified Data Platform",
          description: "Integrated data platform using Azure Data Lake, Snowflake, and Power BI for comprehensive data management."
        },
        {
          title: "Real-time Analytics Pipeline",
          description: "End-to-end real-time data processing and analytics pipeline for instant insights and decision making."
        },
        {
          title: "Advanced Visualization & Reporting",
          description: "Powerful visualization and reporting capabilities with Power BI for data-driven insights and storytelling."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our Data Tools Integration Services"
      serviceOfferingsSubtitle="Comprehensive data platform integration services designed to unify your data ecosystem"
      services={[
        {
          icon: <Storage />,
          title: "Azure Data Lake Integration",
          description: "Design and implement Azure Data Lake solutions for scalable data storage and processing.",
          features: [
            "Data lake architecture",
            "Scalable storage",
            "Data processing"
          ],
          badge: "Most Popular",
          link: "/contact",
          ctaText: "Azure Data Lake"
        },
        {
          icon: <Analytics />,
          title: "Snowflake Data Warehouse",
          description: "Implement Snowflake data warehouse for cloud-native analytics and data warehousing.",
          features: [
            "Cloud-native warehouse",
            "Multi-cloud support",
            "Performance optimization"
          ],
          badge: "Trending",
          link: "/contact",
          ctaText: "Snowflake Solutions"
        },
        {
          icon: <Dashboard />,
          title: "Power BI Implementation",
          description: "Deploy Power BI for advanced data visualization and business intelligence reporting.",
          features: [
            "Interactive dashboards",
            "Real-time reporting",
            "Advanced analytics"
          ],
          link: "/contact",
          ctaText: "Power BI"
        },
        {
          icon: <Build />,
          title: "Platform Integration",
          description: "Seamlessly integrate Azure Data Lake, Snowflake, and Power BI for unified data solutions.",
          features: [
            "End-to-end integration",
            "Data pipeline design",
            "Unified analytics"
          ],
          link: "/contact",
          ctaText: "Platform Integration"
        }
      ]}
      serviceOfferingsVariant="default"

      // Benefits Section
      benefitsTitle="Why Choose Our Data Tools Integration Services"
      benefitsSubtitle="Discover the tangible benefits and outcomes you can expect from our data platform solutions"
      benefits={[
        {
          icon: <Speed />,
          title: "Real-time Data Processing",
          description: "Process and analyze data in real-time with unified data platforms for instant insights and decision making.",
          features: [
            "Real-time analytics",
            "Instant insights",
            "Live dashboards"
          ],
          metric: {
            value: "Real-time",
            label: "Data Processing"
          }
        },
        {
          icon: <TrendingUp />,
          title: "Unified Data Platform",
          description: "Single source of truth for all data with integrated platforms that eliminate silos and improve data quality.",
          features: [
            "Data unification",
            "Quality improvement",
            "Silo elimination"
          ],
          metric: {
            value: "100%",
            label: "Data Unification"
          }
        },
        {
          icon: <Analytics />,
          title: "Advanced Analytics",
          description: "Powerful analytics capabilities with advanced visualization and reporting for data-driven insights.",
          features: [
            "Advanced visualization",
            "Predictive analytics",
            "Business intelligence"
          ],
          metric: {
            value: "50+",
            label: "Analytics Models"
          }
        }
      ]}

      // Stats Section
      statsTitle="Proven Data Tools Results"
      statsSubtitle="Numbers that speak for themselves - real outcomes from our data platform implementations"
      stats={[
        {
          icon: <Speed />,
          value: "Real-time",
          label: "Data Processing",
          description: "Real-time data processing and analytics"
        },
        {
          icon: <TrendingUp />,
          value: "100%",
          label: "Data Unification",
          description: "Complete data platform integration"
        },
        {
          icon: <Analytics />,
          value: "50+",
          label: "Analytics Models",
          description: "Advanced analytics models deployed"
        },
        {
          icon: <CheckCircle />,
          value: "99.9%",
          label: "Platform Uptime",
          description: "Guaranteed uptime for data platforms"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Unify Your Data Platform?"
      finalCtaSubtitle="Join hundreds of companies that have already transformed their data capabilities with our data tools integration services. Let's discuss how we can help you achieve similar results."
      finalCtaButtonText="Schedule Data Platform Consultation"
      finalCtaButtonLink="/contact"

      // Blog & Case Studies
      blogTitle="Data Tools Integration Insights & Updates"
      blogSubtitle="Stay informed with our latest data platform research, industry trends, and thought leadership content"
      caseStudyTitle="Data Platform Success Stories"
      caseStudySubtitle="Discover how we've helped businesses achieve remarkable results with data platform integration"

      // Theme
      theme="light"
    />
  );
};

export default DataToolsIntegration;
