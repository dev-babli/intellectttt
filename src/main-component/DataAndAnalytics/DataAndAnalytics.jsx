import React from "react";
import MasterMainServiceTemplate from "../../components/templates/MasterMainServiceTemplate";
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

const DataAndAnalytics = () => {
  return (
    <MasterMainServiceTemplate
      // Hero Section - Minimal
      heroTitle="Data & Analytics Solutions"
      heroSubtitle="Data-Driven Insights"
      heroDescription="Transform data into actionable insights with analytics and BI."
      heroButtonText="Explore Solutions"
      heroButtonLink="/contact"
      heroBackgroundImage="/Data-&-Analytics.webp"
      heroTextColor="white"
      heroFeatures={[
        "Data Engineering & ETL",
        "Business Intelligence",
        "Advanced Analytics",
        "Data Governance"
      ]}

      // Problem/Solution Section
      problemSolutionTitle="The Data & Analytics Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of data transformation and have the expertise to make it work for your business"
      problems={[
        {
          title: "Data Silos & Fragmentation",
          description: "Critical business data scattered across multiple systems, preventing actionable insights and unified decision-making."
        },
        {
          title: "Poor Data Quality",
          description: "Inconsistent, incomplete, and unreliable data that leads to poor business decisions and operational inefficiencies."
        },
        {
          title: "Limited Analytics Capabilities",
          description: "Lack of real-time insights, predictive analytics, and advanced reporting that prevents data-driven decision making."
        }
      ]}
      solutions={[
        {
          title: "Unified Data Platform",
          description: "Centralized data management with real-time analytics, breaking down silos and providing a single source of truth."
        },
        {
          title: "Data Quality & Governance",
          description: "Comprehensive data quality management and governance frameworks ensuring reliable, compliant, and secure data."
        },
        {
          title: "Advanced Analytics & BI",
          description: "Real-time dashboards, predictive analytics, and advanced reporting capabilities for data-driven insights."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our Data & Analytics Services"
      serviceOfferingsSubtitle="Comprehensive data and analytics services designed to transform your business intelligence and decision-making"
      services={[
        {
          icon: <Storage />,
          title: "Azure Data Lake, Snowflake & Power BI",
          description: "Unify, store, and visualize data at scale with enterprise-grade data platforms and advanced analytics.",
          features: [
            "Data warehousing",
            "Real-time analytics",
            "Advanced visualization"
          ],
          badge: "Most Popular",
          link: "/service/data-and-analytics/tools",
          ctaText: "Explore Tools"
        },
        {
          icon: <Dashboard />,
          title: "Business Intelligence & Dashboards",
          description: "Turn raw data into powerful insights with interactive dashboards and real-time reporting solutions.",
          features: [
            "Interactive dashboards",
            "Real-time reporting",
            "KPI tracking"
          ],
          badge: "Trending",
          link: "/service/data-and-analytics/bi",
          ctaText: "BI Solutions"
        },
        {
          icon: <Build />,
          title: "Data Engineering & ETL",
          description: "Build and streamline trusted data pipelines with scalable ETL processes and data quality management.",
          features: [
            "ETL pipelines",
            "Data quality",
            "Scalable architecture"
          ],
          link: "/service/data-and-analytics/etl",
          ctaText: "Data Engineering"
        },
        {
          icon: <Shield />,
          title: "Data Governance & Security",
          description: "Ensure compliant, secure, and reliable data with comprehensive governance frameworks and security protocols.",
          features: [
            "Data governance",
            "Security compliance",
            "Privacy protection"
          ],
          link: "/service/data-and-analytics/governance",
          ctaText: "Governance"
        }
      ]}
      serviceOfferingsVariant="default"

      // Benefits Section
      benefitsTitle="Why Choose Our Data & Analytics Solutions"
      benefitsSubtitle="Discover the tangible benefits and outcomes you can expect from our data transformation"
      benefits={[
        {
          icon: <Speed />,
          title: "Real-Time Insights",
          description: "Access to real-time data and analytics for faster, more informed decision-making across your organization.",
          features: [
            "Live dashboards",
            "Instant reporting",
            "Proactive alerts"
          ],
          metric: {
            value: "Real-time",
            label: "Data Access"
          }
        },
        {
          icon: <TrendingUp />,
          title: "25% Revenue Growth",
          description: "Data-driven insights that identify new opportunities, optimize operations, and drive revenue growth.",
          features: [
            "Market insights",
            "Customer analytics",
            "Performance optimization"
          ],
          metric: {
            value: "25%",
            label: "Revenue Growth"
          }
        },
        {
          icon: <Analytics />,
          title: "Predictive Analytics",
          description: "Advanced analytics and machine learning models that predict trends and enable proactive decision-making.",
          features: [
            "Trend prediction",
            "Risk assessment",
            "Forecasting models"
          ],
          metric: {
            value: "95%",
            label: "Accuracy Rate"
          }
        }
      ]}

      // Stats Section
      statsTitle="Proven Data Results"
      statsSubtitle="Numbers that speak for themselves - real outcomes from our data implementations"
      stats={[
        {
          icon: <Speed />,
          value: "Real-time",
          label: "Data Access",
          description: "Instant access to business insights and analytics"
        },
        {
          icon: <TrendingUp />,
          value: "25%",
          label: "Revenue Growth",
          description: "Average revenue increase for data-driven clients"
        },
        {
          icon: <Analytics />,
          value: "95%",
          label: "Accuracy Rate",
          description: "Average accuracy of our predictive models"
        },
        {
          icon: <CheckCircle />,
          value: "200+",
          label: "Data Projects",
          description: "Successful data projects delivered across industries"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Transform Your Business with Data?"
      finalCtaSubtitle="Join hundreds of companies that have already revolutionized their operations with our data and analytics solutions. Let's discuss how we can help you achieve similar results."
      finalCtaButtonText="Schedule Data Consultation"
      finalCtaButtonLink="/contact"

      // Blog & Case Studies
      blogTitle="Data & Analytics Insights & Updates"
      blogSubtitle="Stay informed with our latest data research, industry trends, and thought leadership content"
      caseStudyTitle="Data Success Stories"
      caseStudySubtitle="Discover how we've helped businesses achieve remarkable results with data implementation"

      // Theme
      theme="light"
    />
  );
};

export default DataAndAnalytics;
