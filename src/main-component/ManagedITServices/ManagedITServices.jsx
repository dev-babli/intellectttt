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
  Support,
  Monitor,
  Build,
  People
} from '@mui/icons-material';

const ManagedITServices = () => {
  return (
    <MasterMainServiceTemplate
      // Hero Section - Minimal
      heroTitle="Managed IT Services"
      heroSubtitle="IT Operations Excellence"
      heroDescription="Build. Evaluate. Generate. Optimize your IT operations with our comprehensive managed services. From infrastructure monitoring to application support, we provide reliable, scalable IT solutions that keep your business running smoothly."
      heroButtonText="Get Started"
      heroButtonLink="/contact"
      heroBackgroundImage="/images/bg/image-belowhero.webp"
      heroFeatures={[
        "24/7 Infrastructure Monitoring",
        "Application Support & Maintenance",
        "IT Service Management",
        "Managed Resource Services"
      ]}

      // Problem/Solution Section
      problemSolutionTitle="The IT Operations Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of IT operations and have the expertise to optimize your infrastructure"
      problems={[
        {
          title: "IT Infrastructure Complexity",
          description: "Complex IT environments that are difficult to manage, monitor, and maintain efficiently."
        },
        {
          title: "Downtime & Performance Issues",
          description: "Frequent system outages, performance bottlenecks, and lack of proactive monitoring that impact business operations."
        },
        {
          title: "Resource & Expertise Gaps",
          description: "Shortage of skilled IT personnel and lack of specialized expertise for modern IT infrastructure management."
        }
      ]}
      solutions={[
        {
          title: "Comprehensive IT Management",
          description: "End-to-end IT infrastructure management with 24/7 monitoring, proactive maintenance, and rapid issue resolution."
        },
        {
          title: "Proactive Performance Optimization",
          description: "Continuous monitoring and optimization of IT systems to prevent downtime and ensure optimal performance."
        },
        {
          title: "Expert Resource Management",
          description: "Access to skilled IT professionals and specialized expertise through flexible managed resource services."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our Managed IT Services"
      serviceOfferingsSubtitle="Comprehensive managed IT services designed to optimize your operations and ensure business continuity"
      services={[
        {
          icon: <Support />,
          title: "Application Support (L1–L3)",
          description: "End-to-end support across application lifecycles with proactive monitoring and rapid issue resolution.",
          features: [
            "24/7 monitoring",
            "Proactive support",
            "Rapid resolution"
          ],
          badge: "Most Popular",
          link: "/service/managed-it-services/support",
          ctaText: "Application Support"
        },
        {
          icon: <Monitor />,
          title: "Infra & Network Monitoring",
          description: "Real-time visibility into IT systems with comprehensive monitoring and alerting capabilities.",
          features: [
            "Real-time monitoring",
            "Performance tracking",
            "Alert management"
          ],
          badge: "Trending",
          link: "/service/managed-it-services/itsm",
          ctaText: "Infrastructure Monitoring"
        },
        {
          icon: <Build />,
          title: "ITSM (IT Service Management)",
          description: "Streamlined IT services for better uptime with standardized processes and service level agreements.",
          features: [
            "Service desk",
            "Incident management",
            "Change control"
          ],
          link: "/service/managed-it-services/infra",
          ctaText: "ITSM Solutions"
        },
        {
          icon: <People />,
          title: "Managed Resource Services",
          description: "Skilled IT resources deployed on demand with flexible staffing solutions and expertise scaling.",
          features: [
            "Flexible staffing",
            "Expertise scaling",
            "On-demand resources"
          ],
          link: "/service/managed-it-services/tms",
          ctaText: "Resource Services"
        }
      ]}
      serviceOfferingsVariant="default"

      // Benefits Section
      benefitsTitle="Why Choose Our Managed IT Services"
      benefitsSubtitle="Discover the tangible benefits and outcomes you can expect from our IT operations optimization"
      benefits={[
        {
          icon: <Speed />,
          title: "99.9% Uptime Guarantee",
          description: "Reliable IT infrastructure with guaranteed uptime and proactive monitoring to prevent business disruptions.",
          features: [
            "24/7 monitoring",
            "Proactive maintenance",
            "Rapid response"
          ],
          metric: {
            value: "99.9%",
            label: "Uptime SLA"
          }
        },
        {
          icon: <TrendingUp />,
          title: "35% Cost Reduction",
          description: "Optimized IT operations that reduce infrastructure costs and improve resource utilization efficiency.",
          features: [
            "Cost optimization",
            "Resource efficiency",
            "Predictable costs"
          ],
          metric: {
            value: "35%",
            label: "Cost Savings"
          }
        },
        {
          icon: <CheckCircle />,
          title: "Expert IT Management",
          description: "Access to specialized IT expertise and best practices without the overhead of maintaining an in-house team.",
          features: [
            "Specialized expertise",
            "Best practices",
            "Continuous improvement"
          ],
          metric: {
            value: "150+",
            label: "IT Environments"
          }
        }
      ]}

      // Stats Section
      statsTitle="Proven IT Results"
      statsSubtitle="Numbers that speak for themselves - real outcomes from our managed IT implementations"
      stats={[
        {
          icon: <Speed />,
          value: "99.9%",
          label: "Uptime SLA",
          description: "Guaranteed uptime for all managed IT environments"
        },
        {
          icon: <TrendingUp />,
          value: "35%",
          label: "Cost Reduction",
          description: "Average cost savings for managed IT clients"
        },
        {
          icon: <CheckCircle />,
          value: "150+",
          label: "IT Environments",
          description: "IT environments managed successfully"
        },
        {
          icon: <Support />,
          value: "<15min",
          label: "Response Time",
          description: "Average response time for IT incidents"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Optimize Your IT Operations?"
      finalCtaSubtitle="Join hundreds of companies that have already transformed their IT operations with our managed services. Let's discuss how we can help you achieve similar results."
      finalCtaButtonText="Schedule IT Consultation"
      finalCtaButtonLink="/contact"

      // Blog & Case Studies
      blogTitle="IT Operations Insights & Updates"
      blogSubtitle="Stay informed with our latest IT research, industry trends, and thought leadership content"
      caseStudyTitle="IT Success Stories"
      caseStudySubtitle="Discover how we've helped businesses achieve remarkable results with IT operations optimization"

      // Theme
      theme="light"
    />
  );
};

export default ManagedITServices;
