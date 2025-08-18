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
  People,
  Build,
  Monitor,
  Business
} from '@mui/icons-material';

const ManagedResourceServices = () => {
  return (
    <MasterSubServiceTemplate
      // Hero Section - Minimal
      heroTitle="Managed Resource Services"
      heroSubtitle="Resource Management"
      heroDescription="Comprehensive managed resource services for IT staffing, project management, and resource optimization. Access expert talent and optimize resource allocation for maximum efficiency."
      heroButtonText="Resource Services"
      heroButtonLink="/contact"
      heroBackgroundImage="/Managed-Resources.webp"
      heroTextColor="white"
      heroFeatures={[
        "IT Staffing",
        "Project Management",
        "Resource Optimization",
        "Expert Talent"
      ]}

      // Problem/Solution Section
      problemSolutionTitle="The Resource Management Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of resource management and have the expertise to optimize resource allocation"
      problems={[
        {
          title: "Resource Shortages",
          description: "Shortage of skilled IT resources and expertise that delays projects and impacts business objectives."
        },
        {
          title: "Inefficient Resource Allocation",
          description: "Poor resource allocation and utilization that leads to project delays and increased costs."
        },
        {
          title: "Project Management Issues",
          description: "Lack of proper project management and resource coordination that affects project delivery and quality."
        }
      ]}
      solutions={[
        {
          title: "Expert IT Staffing",
          description: "Access to skilled IT professionals and experts for project delivery and technical expertise."
        },
        {
          title: "Resource Optimization",
          description: "Optimized resource allocation and utilization for maximum efficiency and cost-effectiveness."
        },
        {
          title: "Project Management Excellence",
          description: "Professional project management and resource coordination for successful project delivery."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our Managed Resource Services"
      serviceOfferingsSubtitle="Comprehensive resource management services designed to optimize resource allocation"
      services={[
        {
          icon: <People />,
          title: "IT Staffing Solutions",
          description: "Access to skilled IT professionals and experts for project delivery and technical expertise.",
          features: [
            "Skilled professionals",
            "Technical expertise",
            "Project delivery"
          ],
          badge: "Most Popular",
          link: "/contact",
          ctaText: "IT Staffing"
        },
        {
          icon: <Business />,
          title: "Project Management",
          description: "Professional project management and resource coordination for successful project delivery.",
          features: [
            "Project coordination",
            "Resource management",
            "Delivery excellence"
          ],
          badge: "Trending",
          link: "/contact",
          ctaText: "Project Management"
        },
        {
          icon: <Build />,
          title: "Resource Optimization",
          description: "Optimized resource allocation and utilization for maximum efficiency and cost-effectiveness.",
          features: [
            "Resource allocation",
            "Utilization optimization",
            "Cost effectiveness"
          ],
          link: "/contact",
          ctaText: "Resource Optimization"
        },
        {
          icon: <Monitor />,
          title: "Performance Monitoring",
          description: "Continuous monitoring and performance tracking for resource optimization and improvement.",
          features: [
            "Performance tracking",
            "Resource monitoring",
            "Continuous improvement"
          ],
          link: "/contact",
          ctaText: "Performance Monitoring"
        }
      ]}
      serviceOfferingsVariant="default"

      // Benefits Section
      benefitsTitle="Why Choose Our Managed Resource Services"
      benefitsSubtitle="Discover the tangible benefits and outcomes you can expect from our resource management solutions"
      benefits={[
        {
          icon: <Speed />,
          title: "40% Faster Delivery",
          description: "Accelerate project delivery by 40% with expert resources and optimized resource allocation.",
          features: [
            "Faster delivery",
            "Expert resources",
            "Optimized allocation"
          ],
          metric: {
            value: "40%",
            label: "Faster Delivery"
          }
        },
        {
          icon: <TrendingUp />,
          title: "30% Cost Reduction",
          description: "Reduce resource costs by 30% with optimized allocation and efficient resource management.",
          features: [
            "Cost reduction",
            "Optimized allocation",
            "Efficient management"
          ],
          metric: {
            value: "30%",
            label: "Cost Reduction"
          }
        },
        {
          icon: <CheckCircle />,
          title: "100% Project Success",
          description: "Ensure 100% project success with expert resources and professional project management.",
          features: [
            "Project success",
            "Expert resources",
            "Professional management"
          ],
          metric: {
            value: "100%",
            label: "Project Success"
          }
        }
      ]}

      // Stats Section
      statsTitle="Proven Resource Management Results"
      statsSubtitle="Numbers that speak for themselves - real outcomes from our resource management implementations"
      stats={[
        {
          icon: <Speed />,
          value: "40%",
          label: "Faster Delivery",
          description: "Average improvement in project delivery"
        },
        {
          icon: <TrendingUp />,
          value: "30%",
          label: "Cost Reduction",
          description: "Average reduction in resource costs"
        },
        {
          icon: <CheckCircle />,
          value: "100%",
          label: "Project Success",
          description: "Project success rate achieved"
        },
        {
          icon: <People />,
          value: "500+",
          label: "Experts Deployed",
          description: "Skilled IT professionals deployed"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Optimize Your Resources?"
      finalCtaSubtitle="Join hundreds of companies that have already improved their resource management with our managed resource services. Let's discuss how we can help you achieve similar results."
      finalCtaButtonText="Schedule Resource Consultation"
      finalCtaButtonLink="/contact"

      // Blog & Case Studies
      blogTitle="Resource Management Insights & Updates"
      blogSubtitle="Stay informed with our latest resource management research, industry trends, and thought leadership content"
      caseStudyTitle="Resource Management Success Stories"
      caseStudySubtitle="Discover how we've helped businesses achieve remarkable results with resource management"

      // Theme
      theme="light"
    />
  );
};

export default ManagedResourceServices;
