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
  NetworkCheck,
  Build,
  Monitor,
  Wifi
} from '@mui/icons-material';

const InfraNetworkMonitoring = () => {
  return (
    <MasterSubServiceTemplate
      // Hero Section - Minimal
      heroTitle="Infrastructure & Network Monitoring"
      heroSubtitle="Network Monitoring"
      heroDescription="Comprehensive infrastructure and network monitoring solutions for proactive issue detection and resolution. Ensure optimal performance and reliability with real-time monitoring and alerting."
      heroButtonText="Monitoring Solutions"
      heroButtonLink="/contact"
      heroBackgroundImage="/Infra-Network.webp"
      heroTextColor="white"
      heroFeatures={[
        "Real-time Monitoring",
        "Proactive Alerts",
        "Performance Optimization",
        "Network Security"
      ]}

      // Problem/Solution Section
      problemSolutionTitle="The Infrastructure Monitoring Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of infrastructure monitoring and have the expertise to build proactive monitoring solutions"
      problems={[
        {
          title: "Reactive Monitoring",
          description: "Reactive monitoring approaches that only detect issues after they impact users and business operations."
        },
        {
          title: "Network Performance Issues",
          description: "Poor network performance, connectivity issues, and lack of visibility into infrastructure health."
        },
        {
          title: "Security Vulnerabilities",
          description: "Unidentified security vulnerabilities and lack of real-time threat detection in network infrastructure."
        }
      ]}
      solutions={[
        {
          title: "Proactive Monitoring",
          description: "Proactive monitoring with real-time alerts and predictive analytics to prevent issues before they occur."
        },
        {
          title: "Performance Optimization",
          description: "Continuous performance monitoring and optimization to ensure optimal infrastructure and network performance."
        },
        {
          title: "Security Monitoring",
          description: "Comprehensive security monitoring with real-time threat detection and vulnerability assessment."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our Infrastructure & Network Monitoring Services"
      serviceOfferingsSubtitle="Comprehensive monitoring services designed to ensure optimal infrastructure performance"
      services={[
        {
          icon: <Monitor />,
          title: "Real-time Monitoring",
          description: "24/7 real-time monitoring of infrastructure and network performance with instant alerts.",
          features: [
            "24/7 monitoring",
            "Real-time alerts",
            "Performance tracking"
          ],
          badge: "Most Popular",
          link: "/contact",
          ctaText: "Real-time Monitoring"
        },
        {
          icon: <NetworkCheck />,
          title: "Network Monitoring",
          description: "Comprehensive network monitoring with traffic analysis and connectivity optimization.",
          features: [
            "Traffic analysis",
            "Connectivity monitoring",
            "Network optimization"
          ],
          badge: "Trending",
          link: "/contact",
          ctaText: "Network Monitoring"
        },
        {
          icon: <Wifi />,
          title: "Infrastructure Monitoring",
          description: "End-to-end infrastructure monitoring for servers, applications, and cloud services.",
          features: [
            "Server monitoring",
            "Application monitoring",
            "Cloud monitoring"
          ],
          link: "/contact",
          ctaText: "Infrastructure Monitoring"
        },
        {
          icon: <Build />,
          title: "Performance Optimization",
          description: "Continuous performance optimization and capacity planning for infrastructure.",
          features: [
            "Performance optimization",
            "Capacity planning",
            "Resource management"
          ],
          link: "/contact",
          ctaText: "Performance Optimization"
        }
      ]}
      serviceOfferingsVariant="default"

      // Benefits Section
      benefitsTitle="Why Choose Our Infrastructure & Network Monitoring Services"
      benefitsSubtitle="Discover the tangible benefits and outcomes you can expect from our monitoring solutions"
      benefits={[
        {
          icon: <Speed />,
          title: "99.9% Uptime",
          description: "Ensure 99.9% infrastructure uptime with proactive monitoring and rapid issue resolution.",
          features: [
            "High availability",
            "Proactive monitoring",
            "Rapid resolution"
          ],
          metric: {
            value: "99.9%",
            label: "Uptime"
          }
        },
        {
          icon: <TrendingUp />,
          title: "60% Faster Resolution",
          description: "Reduce issue resolution times by 60% with proactive monitoring and automated alerts.",
          features: [
            "Faster resolution",
            "Proactive alerts",
            "Automated monitoring"
          ],
          metric: {
            value: "60%",
            label: "Faster Resolution"
          }
        },
        {
          icon: <CheckCircle />,
          title: "Real-time Visibility",
          description: "Complete real-time visibility into infrastructure and network performance across all systems.",
          features: [
            "Real-time visibility",
            "Complete monitoring",
            "Performance insights"
          ],
          metric: {
            value: "100%",
            label: "Visibility"
          }
        }
      ]}

      // Stats Section
      statsTitle="Proven Monitoring Results"
      statsSubtitle="Numbers that speak for themselves - real outcomes from our monitoring implementations"
      stats={[
        {
          icon: <Speed />,
          value: "99.9%",
          label: "Uptime",
          description: "Infrastructure availability achieved"
        },
        {
          icon: <TrendingUp />,
          value: "60%",
          label: "Faster Resolution",
          description: "Average improvement in issue resolution"
        },
        {
          icon: <CheckCircle />,
          value: "100%",
          label: "Visibility",
          description: "Complete infrastructure visibility"
        },
        {
          icon: <Monitor />,
          value: "24/7",
          label: "Monitoring",
          description: "Round-the-clock monitoring coverage"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Optimize Your Infrastructure?"
      finalCtaSubtitle="Join hundreds of companies that have already improved their infrastructure reliability with our monitoring solutions. Let's discuss how we can help you achieve similar results."
      finalCtaButtonText="Schedule Monitoring Consultation"
      finalCtaButtonLink="/contact"

      // Blog & Case Studies
      blogTitle="Infrastructure Monitoring Insights & Updates"
      blogSubtitle="Stay informed with our latest monitoring research, industry trends, and thought leadership content"
      caseStudyTitle="Monitoring Success Stories"
      caseStudySubtitle="Discover how we've helped businesses achieve remarkable results with infrastructure monitoring"

      // Theme
      theme="light"
    />
  );
};

export default InfraNetworkMonitoring;
