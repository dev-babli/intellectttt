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
  Visibility
} from '@mui/icons-material';

const DigitalTwinsFactory = () => {
  return (
    <MasterSubServiceTemplate
      // Hero Section - Minimal
      heroTitle="Digital Twins Factory"
      heroSubtitle="Smart Manufacturing Excellence"
      heroDescription="Create intelligent, connected, and responsive operations using Digital Twin and Smart Factory technologies. Bridge the physical and digital worlds for real-time monitoring, predictive analytics, and continuous optimization."
      heroButtonText="Digital Twins"
      heroButtonLink="/contact"
      heroBackgroundImage="/herosectionimages/5.webp"
      heroTextColor="white"
      heroFeatures={[
        "Digital Twin Technology",
        "Smart Factory Solutions",
        "Real-time Monitoring",
        "Predictive Analytics"
      ]}

      // Problem/Solution Section
      problemSolutionTitle="The Manufacturing Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of modern manufacturing and have the expertise to create intelligent factory solutions"
      problems={[
        {
          title: "Limited Visibility",
          description: "Lack of real-time visibility into manufacturing operations that prevents optimal decision-making and efficiency."
        },
        {
          title: "Reactive Maintenance",
          description: "Reactive maintenance approaches that lead to unexpected downtime and increased operational costs."
        },
        {
          title: "Data Silos",
          description: "Isolated data systems that prevent comprehensive analysis and optimization across production lines."
        }
      ]}
      solutions={[
        {
          title: "Digital Twin Technology",
          description: "Digital twin solutions that provide real-time visibility and predictive capabilities for manufacturing operations."
        },
        {
          title: "Smart Factory Integration",
          description: "Intelligent factory systems that enable proactive maintenance and continuous optimization."
        },
        {
          title: "Unified Data Platform",
          description: "Integrated data platforms that enable comprehensive analysis and optimization across all operations."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our Digital Twins Factory Services"
      serviceOfferingsSubtitle="Comprehensive digital twin and smart factory services designed to transform manufacturing operations"
      services={[
        {
          icon: <Visibility />,
          title: "Digital Twin Development",
          description: "Create digital replicas of physical manufacturing systems for real-time monitoring and simulation.",
          features: [
            "Digital replicas",
            "Real-time monitoring",
            "System simulation"
          ],
          badge: "Most Popular",
          link: "/contact",
          ctaText: "Digital Twin Development"
        },
        {
          icon: <Factory />,
          title: "Smart Factory Solutions",
          description: "Implement intelligent factory systems with IoT sensors and connected devices for automation.",
          features: [
            "IoT sensors",
            "Connected devices",
            "Factory automation"
          ],
          badge: "Trending",
          link: "/contact",
          ctaText: "Smart Factory"
        },
        {
          icon: <Analytics />,
          title: "Predictive Analytics",
          description: "Leverage advanced analytics to predict maintenance needs and optimize production processes.",
          features: [
            "Predictive maintenance",
            "Process optimization",
            "Advanced analytics"
          ],
          link: "/contact",
          ctaText: "Predictive Analytics"
        },
        {
          icon: <IntegrationInstructions />,
          title: "System Integration",
          description: "Integrate digital twin systems with existing manufacturing infrastructure for seamless operation.",
          features: [
            "System integration",
            "Infrastructure compatibility",
            "Seamless operation"
          ],
          link: "/contact",
          ctaText: "System Integration"
        }
      ]}
      serviceOfferingsVariant="default"

      // Benefits Section
      benefitsTitle="Why Choose Our Digital Twins Factory Services"
      benefitsSubtitle="Discover the tangible benefits and outcomes you can expect from our digital twin solutions"
      benefits={[
        {
          icon: <Speed />,
          title: "50% Faster Operations",
          description: "Accelerate manufacturing operations by 50% with real-time monitoring and predictive capabilities.",
          features: [
            "Faster operations",
            "Real-time monitoring",
            "Predictive capabilities"
          ],
          metric: {
            value: "50%",
            label: "Faster Operations"
          }
        },
        {
          icon: <TrendingUp />,
          title: "30% Cost Reduction",
          description: "Reduce operational costs by 30% with proactive maintenance and optimized processes.",
          features: [
            "Cost reduction",
            "Proactive maintenance",
            "Optimized processes"
          ],
          metric: {
            value: "30%",
            label: "Cost Reduction"
          }
        },
        {
          icon: <CheckCircle />,
          title: "100% Visibility",
          description: "Achieve 100% visibility into manufacturing operations with comprehensive digital twin solutions.",
          features: [
            "Complete visibility",
            "Comprehensive monitoring",
            "Digital twin solutions"
          ],
          metric: {
            value: "100%",
            label: "Visibility"
          }
        }
      ]}

      // Stats Section
      statsTitle="Proven Digital Twins Factory Results"
      statsSubtitle="Numbers that speak for themselves - real outcomes from our digital twin implementations"
      stats={[
        {
          icon: <Speed />,
          value: "50%",
          label: "Faster Operations",
          description: "Average improvement in operational speed"
        },
        {
          icon: <TrendingUp />,
          value: "30%",
          label: "Cost Reduction",
          description: "Average reduction in operational costs"
        },
        {
          icon: <CheckCircle />,
          value: "100%",
          label: "Visibility",
          description: "Complete operational visibility achieved"
        },
        {
          icon: <Factory />,
          value: "25+",
          label: "Smart Factories",
          description: "Digital twin implementations completed"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Transform Your Manufacturing Operations?"
      finalCtaSubtitle="Join hundreds of manufacturers that have already improved their operations with our digital twin solutions. Let's discuss how we can help you achieve similar results."
      finalCtaButtonText="Schedule Digital Twin Consultation"
      finalCtaButtonLink="/contact"

      // Blog & Case Studies
      blogTitle="Digital Twin Insights & Updates"
      blogSubtitle="Stay informed with our latest digital twin research, industry trends, and thought leadership content"
      caseStudyTitle="Digital Twin Success Stories"
      caseStudySubtitle="Discover how we've helped manufacturers achieve remarkable results with digital twin technology"

      // Theme
      theme="light"
    />
  );
};

export default DigitalTwinsFactory;
