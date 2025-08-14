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
  Factory,
  PrecisionManufacturing
} from '@mui/icons-material';

const Industry4Solutions = () => {
  return (
    <MasterSubServiceTemplate
      // Hero Section - Minimal
      heroTitle="Industry 4.0 Solutions"
      heroSubtitle="Smart Manufacturing Revolution"
      heroDescription="Embrace the fourth industrial revolution with integrated Industry 4.0 solutions. From IoT-enabled production lines and AI-driven analytics to digital twins and end-to-end system integration, we help transform traditional operations into intelligent, connected, and data-driven ecosystems."
      heroButtonText="Industry 4.0"
      heroButtonLink="/contact"
      heroBackgroundImage="/Smart-Factory.webp"
      heroTextColor="black"
      heroFeatures={[
        "IoT-Enabled Production",
        "AI-Driven Analytics",
        "Digital Twins",
        "End-to-End Integration"
      ]}

      // Problem/Solution Section
      problemSolutionTitle="The Industry 4.0 Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of digital transformation and have the expertise to implement comprehensive Industry 4.0 solutions"
      problems={[
        {
          title: "Traditional Operations",
          description: "Outdated manufacturing operations that lack connectivity, automation, and data-driven decision-making capabilities."
        },
        {
          title: "Technology Integration",
          description: "Complex integration challenges between legacy systems and modern Industry 4.0 technologies."
        },
        {
          title: "Data Management",
          description: "Inefficient data management and analytics that prevent optimization and innovation in manufacturing processes."
        }
      ]}
      solutions={[
        {
          title: "Comprehensive Industry 4.0",
          description: "Integrated Industry 4.0 solutions that transform traditional operations into intelligent, connected ecosystems."
        },
        {
          title: "Seamless Technology Integration",
          description: "Advanced integration capabilities that connect legacy systems with modern Industry 4.0 technologies."
        },
        {
          title: "Advanced Data Analytics",
          description: "Sophisticated data management and analytics platforms that enable optimization and innovation."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our Industry 4.0 Solutions"
      serviceOfferingsSubtitle="Comprehensive Industry 4.0 services designed to transform manufacturing operations and drive digital transformation"
      services={[
        {
          icon: <Sensors />,
          title: "IoT-Enabled Production",
          description: "Implement IoT sensors and connected devices across production lines for real-time monitoring and control.",
          features: [
            "IoT sensors",
            "Connected devices",
            "Real-time monitoring"
          ],
          badge: "Most Popular",
          link: "/contact",
          ctaText: "IoT Production"
        },
        {
          icon: <Analytics />,
          title: "AI-Driven Analytics",
          description: "Leverage artificial intelligence and machine learning for predictive analytics and process optimization.",
          features: [
            "AI analytics",
            "Machine learning",
            "Predictive insights"
          ],
          badge: "Trending",
          link: "/contact",
          ctaText: "AI Analytics"
        },
        {
          icon: <Analytics />,
          title: "Digital Twins",
          description: "Create digital replicas of physical manufacturing systems for simulation and optimization.",
          features: [
            "Digital replicas",
            "System simulation",
            "Process optimization"
          ],
          link: "/contact",
          ctaText: "Digital Twins"
        },
        {
          icon: <IntegrationInstructions />,
          title: "End-to-End Integration",
          description: "Integrate all manufacturing systems and processes for seamless operation and data flow.",
          features: [
            "System integration",
            "Seamless operation",
            "Data flow optimization"
          ],
          link: "/contact",
          ctaText: "System Integration"
        }
      ]}
      serviceOfferingsVariant="default"

      // Benefits Section
      benefitsTitle="Why Choose Our Industry 4.0 Solutions"
      benefitsSubtitle="Discover the tangible benefits and outcomes you can expect from our Industry 4.0 implementations"
      benefits={[
        {
          icon: <Speed />,
          title: "50% Faster Operations",
          description: "Accelerate manufacturing operations by 50% with IoT automation and AI-driven optimization.",
          features: [
            "Faster operations",
            "IoT automation",
            "AI optimization"
          ],
          metric: {
            value: "50%",
            label: "Faster Operations"
          }
        },
        {
          icon: <TrendingUp />,
          title: "40% Cost Reduction",
          description: "Reduce manufacturing costs by 40% with optimized processes and predictive maintenance.",
          features: [
            "Cost reduction",
            "Optimized processes",
            "Predictive maintenance"
          ],
          metric: {
            value: "40%",
            label: "Cost Reduction"
          }
        },
        {
          icon: <CheckCircle />,
          title: "100% Digital Transformation",
          description: "Achieve complete digital transformation with comprehensive Industry 4.0 solutions and technologies.",
          features: [
            "Digital transformation",
            "Comprehensive solutions",
            "Modern technologies"
          ],
          metric: {
            value: "100%",
            label: "Digital Transformation"
          }
        }
      ]}

      // Stats Section
      statsTitle="Proven Industry 4.0 Results"
      statsSubtitle="Numbers that speak for themselves - real outcomes from our Industry 4.0 implementations"
      stats={[
        {
          icon: <Speed />,
          value: "50%",
          label: "Faster Operations",
          description: "Average improvement in operational speed"
        },
        {
          icon: <TrendingUp />,
          value: "40%",
          label: "Cost Reduction",
          description: "Average reduction in manufacturing costs"
        },
        {
          icon: <CheckCircle />,
          value: "100%",
          label: "Digital Transformation",
          description: "Complete digital transformation achieved"
        },
        {
          icon: <Factory />,
          value: "40+",
          label: "Digital Programs",
          description: "Industry 4.0 programs delivered"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Embrace Industry 4.0?"
      finalCtaSubtitle="Join hundreds of manufacturers that have already transformed their operations with our Industry 4.0 solutions. Let's discuss how we can help you achieve similar results."
      finalCtaButtonText="Schedule Industry 4.0 Consultation"
      finalCtaButtonLink="/contact"

      // Blog & Case Studies
      blogTitle="Industry 4.0 Insights & Updates"
      blogSubtitle="Stay informed with our latest Industry 4.0 research, industry trends, and thought leadership content"
      caseStudyTitle="Industry 4.0 Success Stories"
      caseStudySubtitle="Discover how we've helped manufacturers achieve remarkable results with Industry 4.0 solutions"

      // Theme
      theme="light"
    />
  );
};

export default Industry4Solutions;
