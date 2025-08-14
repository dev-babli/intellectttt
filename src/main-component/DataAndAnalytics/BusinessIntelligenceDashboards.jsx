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
  Dashboard,
  Build,
  Visibility
} from '@mui/icons-material';

const BusinessIntelligenceDashboards = () => {
  return (
    <MasterSubServiceTemplate
      // Hero Section - Minimal
      heroTitle="Business Intelligence & Dashboards"
      heroSubtitle="Data-Driven Insights"
      heroDescription="Turn raw data into powerful insights with interactive dashboards and real-time reporting solutions. Transform your business intelligence with advanced analytics, interactive dashboards, and real-time reporting capabilities."
      heroButtonText="BI Solutions"
      heroButtonLink="/contact"
      heroBackgroundImage="/Data-&-Analytics.webp"
      heroFeatures={[
        "Interactive Dashboards",
        "Real-time Reporting",
        "KPI Tracking",
        "Advanced Analytics"
      ]}

      // Problem/Solution Section
      problemSolutionTitle="The Business Intelligence Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of business intelligence and have the expertise to transform your data into actionable insights"
      problems={[
        {
          title: "Data Silos & Fragmentation",
          description: "Disconnected data sources that prevent unified reporting and create inconsistent business intelligence across departments."
        },
        {
          title: "Static Reporting Limitations",
          description: "Static reports and dashboards that don't provide real-time insights and require manual updates and maintenance."
        },
        {
          title: "Limited Self-Service Analytics",
          description: "Lack of self-service analytics capabilities that prevent business users from accessing insights independently."
        }
      ]}
      solutions={[
        {
          title: "Interactive Dashboard Solutions",
          description: "Dynamic, interactive dashboards that provide real-time insights and enable data-driven decision making."
        },
        {
          title: "Real-time Reporting Systems",
          description: "Automated real-time reporting systems that deliver insights instantly without manual intervention."
        },
        {
          title: "Self-Service Analytics Platform",
          description: "Empower business users with self-service analytics capabilities for independent data exploration and insights."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our Business Intelligence Services"
      serviceOfferingsSubtitle="Comprehensive business intelligence services designed to transform your data into actionable insights"
      services={[
        {
          icon: <Dashboard />,
          title: "Interactive Dashboards",
          description: "Design and develop interactive dashboards that provide real-time insights and enable data exploration.",
          features: [
            "Real-time dashboards",
            "Interactive visualizations",
            "Drill-down capabilities"
          ],
          badge: "Most Popular",
          link: "/contact",
          ctaText: "Interactive Dashboards"
        },
        {
          icon: <Analytics />,
          title: "Real-time Reporting",
          description: "Build automated real-time reporting systems that deliver insights instantly across your organization.",
          features: [
            "Automated reporting",
            "Real-time updates",
            "Scheduled reports"
          ],
          badge: "Trending",
          link: "/contact",
          ctaText: "Real-time Reporting"
        },
        {
          icon: <Visibility />,
          title: "KPI Tracking",
          description: "Implement comprehensive KPI tracking and monitoring systems for performance measurement and optimization.",
          features: [
            "KPI definition",
            "Performance tracking",
            "Goal monitoring"
          ],
          link: "/contact",
          ctaText: "KPI Tracking"
        },
        {
          icon: <Build />,
          title: "Advanced Analytics",
          description: "Develop advanced analytics capabilities including predictive analytics and machine learning insights.",
          features: [
            "Predictive analytics",
            "Machine learning",
            "Statistical analysis"
          ],
          link: "/contact",
          ctaText: "Advanced Analytics"
        }
      ]}
      serviceOfferingsVariant="default"

      // Benefits Section
      benefitsTitle="Why Choose Our Business Intelligence Services"
      benefitsSubtitle="Discover the tangible benefits and outcomes you can expect from our BI solutions"
      benefits={[
        {
          icon: <Speed />,
          title: "Real-time Insights",
          description: "Access to real-time business insights and analytics for faster, more informed decision-making across your organization.",
          features: [
            "Instant insights",
            "Live dashboards",
            "Real-time alerts"
          ],
          metric: {
            value: "Real-time",
            label: "Data Access"
          }
        },
        {
          icon: <TrendingUp />,
          title: "30% Better Decisions",
          description: "Data-driven insights that improve decision quality and lead to better business outcomes and performance.",
          features: [
            "Data-driven decisions",
            "Improved accuracy",
            "Better outcomes"
          ],
          metric: {
            value: "30%",
            label: "Decision Improvement"
          }
        },
        {
          icon: <CheckCircle />,
          title: "Self-Service Analytics",
          description: "Empower business users with self-service analytics capabilities for independent data exploration and insights.",
          features: [
            "User empowerment",
            "Independent analysis",
            "Reduced IT dependency"
          ],
          metric: {
            value: "100%",
            label: "User Access"
          }
        }
      ]}

      // Stats Section
      statsTitle="Proven Business Intelligence Results"
      statsSubtitle="Numbers that speak for themselves - real outcomes from our BI implementations"
      stats={[
        {
          icon: <Speed />,
          value: "Real-time",
          label: "Data Access",
          description: "Instant access to business insights and analytics"
        },
        {
          icon: <TrendingUp />,
          value: "30%",
          label: "Decision Improvement",
          description: "Average improvement in decision quality"
        },
        {
          icon: <CheckCircle />,
          value: "100%",
          label: "User Access",
          description: "Business users with self-service analytics"
        },
        {
          icon: <Dashboard />,
          value: "50+",
          label: "Dashboards Deployed",
          description: "Interactive dashboards across organizations"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Transform Your Business Intelligence?"
      finalCtaSubtitle="Join hundreds of companies that have already transformed their data capabilities with our business intelligence services. Let's discuss how we can help you achieve similar results."
      finalCtaButtonText="Schedule BI Consultation"
      finalCtaButtonLink="/contact"

      // Blog & Case Studies
      blogTitle="Business Intelligence Insights & Updates"
      blogSubtitle="Stay informed with our latest BI research, industry trends, and thought leadership content"
      caseStudyTitle="BI Success Stories"
      caseStudySubtitle="Discover how we've helped businesses achieve remarkable results with business intelligence"

      // Theme
      theme="light"
    />
  );
};

export default BusinessIntelligenceDashboards;
