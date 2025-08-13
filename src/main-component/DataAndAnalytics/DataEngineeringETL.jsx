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
  Storage,
  Code,
  AccountTree
} from '@mui/icons-material';

const DataEngineeringETL = () => {
  return (
    <MasterSubServiceTemplate
      // Hero Section - Minimal
      heroTitle="Data Engineering & ETL"
      heroSubtitle="Scalable Data Pipelines"
      heroDescription="Build and streamline trusted data pipelines with scalable ETL processes and data quality management. Transform your data engineering with robust ETL pipelines, data quality management, and scalable architecture."
      heroButtonText="Data Engineering"
      heroButtonLink="/contact"
      heroBackgroundImage="/images/3d.webp"
      heroFeatures={[
        "ETL Pipeline Development",
        "Data Quality Management",
        "Scalable Architecture",
        "Real-time Processing"
      ]}

      // Problem/Solution Section
      problemSolutionTitle="The Data Engineering Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of data engineering and have the expertise to build robust data pipelines"
      problems={[
        {
          title: "Data Pipeline Complexity",
          description: "Complex, unreliable data pipelines that are difficult to maintain, scale, and ensure data quality across systems."
        },
        {
          title: "Data Quality Issues",
          description: "Poor data quality, inconsistent formats, and lack of data governance that lead to unreliable analytics and insights."
        },
        {
          title: "Scalability Limitations",
          description: "Data processing systems that can't scale with business growth and handle increasing data volumes efficiently."
        }
      ]}
      solutions={[
        {
          title: "Robust ETL Pipeline Development",
          description: "Design and build reliable, scalable ETL pipelines that process data efficiently and maintain quality standards."
        },
        {
          title: "Comprehensive Data Quality Management",
          description: "Implement data quality frameworks and governance processes to ensure reliable, consistent data across systems."
        },
        {
          title: "Scalable Data Architecture",
          description: "Build scalable data architecture that grows with your business and handles increasing data volumes efficiently."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our Data Engineering & ETL Services"
      serviceOfferingsSubtitle="Comprehensive data engineering services designed to build robust, scalable data pipelines"
      services={[
        {
          icon: <AccountTree />,
          title: "ETL Pipeline Development",
          description: "Design and build robust ETL pipelines for efficient data extraction, transformation, and loading processes.",
          features: [
            "Pipeline design",
            "Data transformation",
            "Load optimization"
          ],
          badge: "Most Popular",
          link: "/contact",
          ctaText: "ETL Development"
        },
        {
          icon: <Storage />,
          title: "Data Quality Management",
          description: "Implement comprehensive data quality frameworks and governance processes for reliable data.",
          features: [
            "Quality frameworks",
            "Data validation",
            "Governance processes"
          ],
          badge: "Trending",
          link: "/contact",
          ctaText: "Data Quality"
        },
        {
          icon: <Build />,
          title: "Scalable Architecture",
          description: "Build scalable data architecture that grows with your business and handles increasing data volumes.",
          features: [
            "Scalable design",
            "Performance optimization",
            "Growth planning"
          ],
          link: "/contact",
          ctaText: "Scalable Architecture"
        },
        {
          icon: <Code />,
          title: "Real-time Processing",
          description: "Implement real-time data processing capabilities for instant insights and decision-making.",
          features: [
            "Stream processing",
            "Real-time analytics",
            "Instant insights"
          ],
          link: "/contact",
          ctaText: "Real-time Processing"
        }
      ]}
      serviceOfferingsVariant="default"

      // Benefits Section
      benefitsTitle="Why Choose Our Data Engineering & ETL Services"
      benefitsSubtitle="Discover the tangible benefits and outcomes you can expect from our data engineering solutions"
      benefits={[
        {
          icon: <Speed />,
          title: "10x Faster Processing",
          description: "Optimized ETL pipelines that process data 10x faster and handle large volumes efficiently.",
          features: [
            "Optimized processing",
            "Large volume handling",
            "Performance improvement"
          ],
          metric: {
            value: "10x",
            label: "Processing Speed"
          }
        },
        {
          icon: <TrendingUp />,
          title: "99.9% Data Quality",
          description: "Comprehensive data quality management that ensures 99.9% accuracy and reliability across all data pipelines.",
          features: [
            "Quality assurance",
            "Data validation",
            "Reliability improvement"
          ],
          metric: {
            value: "99.9%",
            label: "Data Quality"
          }
        },
        {
          icon: <CheckCircle />,
          title: "Scalable Architecture",
          description: "Scalable data architecture that grows with your business and handles increasing data volumes efficiently.",
          features: [
            "Business growth support",
            "Volume scaling",
            "Future-proof design"
          ],
          metric: {
            value: "100%",
            label: "Scalability"
          }
        }
      ]}

      // Stats Section
      statsTitle="Proven Data Engineering Results"
      statsSubtitle="Numbers that speak for themselves - real outcomes from our data engineering implementations"
      stats={[
        {
          icon: <Speed />,
          value: "10x",
          label: "Processing Speed",
          description: "Average improvement in data processing speed"
        },
        {
          icon: <TrendingUp />,
          value: "99.9%",
          label: "Data Quality",
          description: "Data quality and reliability achieved"
        },
        {
          icon: <CheckCircle />,
          value: "100%",
          label: "Scalability",
          description: "Scalable architecture for business growth"
        },
        {
          icon: <AccountTree />,
          value: "100+",
          label: "Pipelines Built",
          description: "ETL pipelines deployed across organizations"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Build Robust Data Pipelines?"
      finalCtaSubtitle="Join hundreds of companies that have already transformed their data engineering with our ETL and data pipeline services. Let's discuss how we can help you achieve similar results."
      finalCtaButtonText="Schedule Data Engineering Consultation"
      finalCtaButtonLink="/contact"

      // Blog & Case Studies
      blogTitle="Data Engineering Insights & Updates"
      blogSubtitle="Stay informed with our latest data engineering research, industry trends, and thought leadership content"
      caseStudyTitle="Data Engineering Success Stories"
      caseStudySubtitle="Discover how we've helped businesses achieve remarkable results with data engineering"

      // Theme
      theme="light"
    />
  );
};

export default DataEngineeringETL;
