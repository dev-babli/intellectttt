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
  BugReport
} from '@mui/icons-material';

const ApplicationSupport = () => {
  return (
    <MasterSubServiceTemplate
      // Hero Section - Minimal
      heroTitle="Application Support (L1-L3)"
      heroSubtitle="Application Support"
      heroDescription="Multi-tiered application support from first-level incident resolution to expert-level troubleshooting and enhancements. Ensure business continuity with our comprehensive L1-L3 support model."
      heroButtonText="Get Support"
      heroButtonLink="/contact"
      heroBackgroundImage="/herosectionimages/4.webp"
      heroTextColor="white"
      heroFeatures={[
        "L1-L3 Support",
        "24/7 Monitoring",
        "Incident Resolution",
        "Business Continuity"
      ]}

      // Problem/Solution Section
      problemSolutionTitle="The Application Support Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of application support and have the expertise to ensure business continuity"
      problems={[
        {
          title: "Application Downtime",
          description: "Frequent application outages and downtime that disrupt business operations and impact user productivity."
        },
        {
          title: "Slow Response Times",
          description: "Delayed incident response and resolution times that frustrate users and reduce system reliability."
        },
        {
          title: "Lack of Proactive Monitoring",
          description: "Reactive support approach without proactive monitoring and preventive maintenance capabilities."
        }
      ]}
      solutions={[
        {
          title: "Multi-Tier Support Model",
          description: "Comprehensive L1-L3 support model with rapid response times and expert-level troubleshooting."
        },
        {
          title: "24/7 Proactive Monitoring",
          description: "Round-the-clock monitoring and proactive maintenance to prevent issues before they impact users."
        },
        {
          title: "Business Continuity Assurance",
          description: "Ensured business continuity with 99.9% uptime and rapid incident resolution capabilities."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our Application Support Services"
      serviceOfferingsSubtitle="Comprehensive application support services designed to ensure business continuity"
      services={[
        {
          icon: <Support />,
          title: "L1 Support - First Level",
          description: "Immediate incident response and basic troubleshooting for common application issues.",
          features: [
            "Incident response",
            "Basic troubleshooting",
            "User assistance"
          ],
          badge: "Most Popular",
          link: "/contact",
          ctaText: "L1 Support"
        },
        {
          icon: <Monitor />,
          title: "L2 Support - Technical Level",
          description: "Advanced technical support and problem resolution for complex application issues.",
          features: [
            "Technical support",
            "Problem resolution",
            "Performance optimization"
          ],
          badge: "Trending",
          link: "/contact",
          ctaText: "L2 Support"
        },
        {
          icon: <BugReport />,
          title: "L3 Support - Expert Level",
          description: "Expert-level support for critical issues, enhancements, and system improvements.",
          features: [
            "Expert troubleshooting",
            "System enhancements",
            "Critical issue resolution"
          ],
          link: "/contact",
          ctaText: "L3 Support"
        },
        {
          icon: <Build />,
          title: "Proactive Monitoring",
          description: "24/7 proactive monitoring and preventive maintenance to prevent issues.",
          features: [
            "24/7 monitoring",
            "Preventive maintenance",
            "Performance tracking"
          ],
          link: "/contact",
          ctaText: "Proactive Monitoring"
        }
      ]}
      serviceOfferingsVariant="default"

      // Benefits Section
      benefitsTitle="Why Choose Our Application Support Services"
      benefitsSubtitle="Discover the tangible benefits and outcomes you can expect from our support solutions"
      benefits={[
        {
          icon: <Speed />,
          title: "99.9% Uptime",
          description: "Ensured application availability with 99.9% uptime and rapid incident resolution.",
          features: [
            "High availability",
            "Rapid resolution",
            "Reliable systems"
          ],
          metric: {
            value: "99.9%",
            label: "Uptime"
          }
        },
        {
          icon: <TrendingUp />,
          title: "50% Faster Resolution",
          description: "Reduced incident resolution times by 50% with expert support and proactive monitoring.",
          features: [
            "Faster resolution",
            "Expert support",
            "Proactive monitoring"
          ],
          metric: {
            value: "50%",
            label: "Faster Resolution"
          }
        },
        {
          icon: <CheckCircle />,
          title: "Business Continuity",
          description: "Ensured business continuity with comprehensive support and minimal disruption.",
          features: [
            "Business continuity",
            "Minimal disruption",
            "Comprehensive support"
          ],
          metric: {
            value: "100%",
            label: "Continuity"
          }
        }
      ]}

      // Stats Section
      statsTitle="Proven Application Support Results"
      statsSubtitle="Numbers that speak for themselves - real outcomes from our support implementations"
      stats={[
        {
          icon: <Speed />,
          value: "99.9%",
          label: "Uptime",
          description: "Application availability achieved"
        },
        {
          icon: <TrendingUp />,
          value: "50%",
          label: "Faster Resolution",
          description: "Average improvement in resolution time"
        },
        {
          icon: <CheckCircle />,
          value: "100%",
          label: "Continuity",
          description: "Business continuity ensured"
        },
        {
          icon: <Support />,
          value: "24/7",
          label: "Support Available",
          description: "Round-the-clock support coverage"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Ensure Application Reliability?"
      finalCtaSubtitle="Join hundreds of companies that have already improved their application reliability with our support services. Let's discuss how we can help you achieve similar results."
      finalCtaButtonText="Schedule Support Consultation"
      finalCtaButtonLink="/contact"

      // Blog & Case Studies
      blogTitle="Application Support Insights & Updates"
      blogSubtitle="Stay informed with our latest support research, industry trends, and thought leadership content"
      caseStudyTitle="Support Success Stories"
      caseStudySubtitle="Discover how we've helped businesses achieve remarkable results with application support"

      // Theme
      theme="light"
    />
  );
};

export default ApplicationSupport;
