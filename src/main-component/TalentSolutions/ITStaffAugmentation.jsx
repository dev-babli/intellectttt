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
  Code,
  Computer
} from '@mui/icons-material';

const ITStaffAugmentation = () => {
  return (
    <MasterSubServiceTemplate
      // Hero Section - Minimal
      heroTitle="Staff Augmentation"
      heroSubtitle="Tech Team Scaling"
      heroDescription="Quickly scale your tech teams with vetted IT talent for project-based or long-term needs. Access skilled professionals and accelerate your development with flexible staffing solutions."
      heroButtonText="Staff Augmentation"
      heroButtonLink="/contact"
      heroBackgroundImage="/IT-Staff-Augmentation.webp"
      heroTextColor="black"
      heroFeatures={[
        "Vetted IT Talent",
        "Quick Scaling",
        "Project-Based Hiring",
        "Flexible Contracts"
      ]}

      // Problem/Solution Section
      problemSolutionTitle="The IT Staffing Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of IT staffing and have the expertise to provide flexible workforce solutions"
      problems={[
        {
          title: "Talent Shortages",
          description: "Critical shortage of skilled IT professionals that delays projects and impacts business growth and innovation."
        },
        {
          title: "High Hiring Costs",
          description: "Expensive and time-consuming hiring processes that drain resources and slow down development cycles."
        },
        {
          title: "Scalability Issues",
          description: "Difficulty scaling teams quickly to meet project demands and changing business requirements."
        }
      ]}
      solutions={[
        {
          title: "Vetted IT Talent Pool",
          description: "Access to pre-vetted, skilled IT professionals ready to contribute to your projects immediately."
        },
        {
          title: "Flexible Staffing Solutions",
          description: "Flexible staffing options that scale with your project needs and business requirements."
        },
        {
          title: "Rapid Team Scaling",
          description: "Quick team scaling capabilities that allow you to meet project deadlines and business objectives."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our IT Staff Augmentation Services"
      serviceOfferingsSubtitle="Comprehensive IT staffing services designed to scale your tech teams quickly"
      services={[
        {
          icon: <Code />,
          title: "Development Teams",
          description: "Full-stack developers, frontend specialists, and backend engineers for your development projects.",
          features: [
            "Full-stack developers",
            "Frontend specialists",
            "Backend engineers"
          ],
          badge: "Most Popular",
          link: "/contact",
          ctaText: "Development Teams"
        },
        {
          icon: <Computer />,
          title: "DevOps Engineers",
          description: "DevOps specialists and infrastructure engineers for automation and deployment needs.",
          features: [
            "DevOps specialists",
            "Infrastructure engineers",
            "Automation experts"
          ],
          badge: "Trending",
          link: "/contact",
          ctaText: "DevOps Engineers"
        },
        {
          icon: <Analytics />,
          title: "Data Specialists",
          description: "Data scientists, analysts, and engineers for your data and analytics projects.",
          features: [
            "Data scientists",
            "Data analysts",
            "Data engineers"
          ],
          link: "/contact",
          ctaText: "Data Specialists"
        },
        {
          icon: <Security />,
          title: "Security Experts",
          description: "Cybersecurity specialists and security engineers for your security and compliance needs.",
          features: [
            "Cybersecurity specialists",
            "Security engineers",
            "Compliance experts"
          ],
          link: "/contact",
          ctaText: "Security Experts"
        }
      ]}
      serviceOfferingsVariant="default"

      // Benefits Section
      benefitsTitle="Why Choose Our IT Staff Augmentation Services"
      benefitsSubtitle="Discover the tangible benefits and outcomes you can expect from our IT staffing solutions"
      benefits={[
        {
          icon: <Speed />,
          title: "50% Faster Hiring",
          description: "Reduce hiring time by 50% with our pre-vetted talent pool and streamlined processes.",
          features: [
            "Faster hiring",
            "Pre-vetted talent",
            "Streamlined processes"
          ],
          metric: {
            value: "50%",
            label: "Faster Hiring"
          }
        },
        {
          icon: <TrendingUp />,
          title: "40% Cost Reduction",
          description: "Reduce staffing costs by 40% with flexible contracts and optimized resource allocation.",
          features: [
            "Cost reduction",
            "Flexible contracts",
            "Optimized allocation"
          ],
          metric: {
            value: "40%",
            label: "Cost Reduction"
          }
        },
        {
          icon: <CheckCircle />,
          title: "100% Talent Quality",
          description: "Ensure 100% talent quality with our rigorous vetting and quality assurance processes.",
          features: [
            "Talent quality",
            "Rigorous vetting",
            "Quality assurance"
          ],
          metric: {
            value: "100%",
            label: "Talent Quality"
          }
        }
      ]}

      // Stats Section
      statsTitle="Proven IT Staff Augmentation Results"
      statsSubtitle="Numbers that speak for themselves - real outcomes from our IT staffing implementations"
      stats={[
        {
          icon: <Speed />,
          value: "50%",
          label: "Faster Hiring",
          description: "Average reduction in hiring time"
        },
        {
          icon: <TrendingUp />,
          value: "40%",
          label: "Cost Reduction",
          description: "Average reduction in staffing costs"
        },
        {
          icon: <CheckCircle />,
          value: "100%",
          label: "Talent Quality",
          description: "Quality assurance achieved"
        },
        {
          icon: <People />,
          value: "500+",
          label: "IT Professionals",
          description: "IT professionals deployed"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Scale Your IT Team?"
      finalCtaSubtitle="Join hundreds of companies that have already improved their IT capabilities with our staff augmentation services. Let's discuss how we can help you achieve similar results."
      finalCtaButtonText="Schedule IT Staffing Consultation"
      finalCtaButtonLink="/contact"

      // Blog & Case Studies
      blogTitle="IT Staffing Insights & Updates"
      blogSubtitle="Stay informed with our latest IT staffing research, industry trends, and thought leadership content"
      caseStudyTitle="IT Staffing Success Stories"
      caseStudySubtitle="Discover how we've helped businesses achieve remarkable results with IT staff augmentation"

      // Theme
      theme="light"
    />
  );
};

export default ITStaffAugmentation;
