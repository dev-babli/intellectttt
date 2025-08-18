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
  People,
  Build,
  Business,
  Work
} from '@mui/icons-material';

const TalentSolutions = () => {
  return (
    <MasterMainServiceTemplate
      // Hero Section - Minimal
      heroTitle="Talent Solutions"
      heroSubtitle="Workforce Solutions"
      heroDescription="Empower business growth with agile talent solutions. From IT staff augmentation to specialized healthcare staffing, we provide flexible workforce strategies that help organizations scale quickly and stay competitive."
      heroButtonText="Talent Solutions"
      heroButtonLink="/contact"
      heroBackgroundImage="/IT-Staff-Augmentation.webp"
      heroTextColor="white"
      heroFeatures={[
        "IT Staff Augmentation",
        "Corp-to-Corp Staffing",
        "Direct Hire & Contract Hire",
        "Healthcare & Life Sciences"
      ]}

      // Problem/Solution Section
      problemSolutionTitle="The Talent Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of talent acquisition and have the expertise to build agile workforce solutions"
      problems={[
        {
          title: "Talent Shortages",
          description: "Critical shortage of skilled IT professionals and specialized talent that delays projects and impacts business growth."
        },
        {
          title: "High Hiring Costs",
          description: "Expensive and time-consuming hiring processes that drain resources and slow down business operations."
        },
        {
          title: "Scalability Issues",
          description: "Difficulty scaling teams quickly to meet project demands and business growth requirements."
        }
      ]}
      solutions={[
        {
          title: "Agile Talent Solutions",
          description: "Flexible talent solutions that scale with your business needs and provide access to skilled professionals."
        },
        {
          title: "Cost-Effective Staffing",
          description: "Optimized hiring processes and cost-effective staffing solutions that reduce overhead and improve efficiency."
        },
        {
          title: "Rapid Team Scaling",
          description: "Quick team scaling capabilities that allow you to meet project demands and business growth requirements."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our Talent Solutions"
      serviceOfferingsSubtitle="Comprehensive talent solutions designed to help organizations scale quickly and access specialized talent"
      services={[
        {
          icon: <People />,
          title: "IT Staff Augmentation",
          description: "Quickly scale your tech teams with vetted IT talent for project-based or long-term needs.",
          features: [
            "Vetted IT talent",
            "Quick scaling",
            "Project-based hiring"
          ],
          badge: "Most Popular",
          link: "/service/talent-solutions/staffing",
          ctaText: "IT Staff Augmentation"
        },
        {
          icon: <Business />,
          title: "Corp-to-Corp Staffing",
          description: "Flexible business-to-business workforce solutions for enterprise clients.",
          features: [
            "B2B solutions",
            "Enterprise clients",
            "Flexible contracts"
          ],
          badge: "Trending",
          link: "/service/talent-solutions/corp",
          ctaText: "Corp-to-Corp"
        },
        {
          icon: <Work />,
          title: "Direct Hire & Contract Hire",
          description: "Hire top talent for long-term or project needs with comprehensive recruitment services.",
          features: [
            "Direct hiring",
            "Contract hiring",
            "Comprehensive recruitment"
          ],
          link: "/service/talent-solutions/direct-hire",
          ctaText: "Direct Hire"
        },
        {
          icon: <Build />,
          title: "Healthcare & Life Sciences Staffing",
          description: "Specialized staffing for clinical and medical roles in healthcare and life sciences.",
          features: [
            "Clinical roles",
            "Medical staffing",
            "Specialized expertise"
          ],
          link: "/service/talent-solutions/healthcare",
          ctaText: "Healthcare Staffing"
        }
      ]}
      serviceOfferingsVariant="default"

      // Benefits Section
      benefitsTitle="Why Choose Our Talent Solutions"
      benefitsSubtitle="Discover the tangible benefits and outcomes you can expect from our talent solutions"
      benefits={[
        {
          icon: <Speed />,
          title: "50% Faster Hiring",
          description: "Reduce hiring time by 50% with our streamlined processes and pre-vetted talent pool.",
          features: [
            "Faster hiring",
            "Streamlined processes",
            "Pre-vetted talent"
          ],
          metric: {
            value: "50%",
            label: "Faster Hiring"
          }
        },
        {
          icon: <TrendingUp />,
          title: "30% Cost Reduction",
          description: "Reduce hiring costs by 30% with optimized processes and efficient talent acquisition.",
          features: [
            "Cost reduction",
            "Optimized processes",
            "Efficient acquisition"
          ],
          metric: {
            value: "30%",
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
      statsTitle="Proven Talent Solutions Results"
      statsSubtitle="Numbers that speak for themselves - real outcomes from our talent solutions"
      stats={[
        {
          icon: <Speed />,
          value: "50%",
          label: "Faster Hiring",
          description: "Average reduction in hiring time"
        },
        {
          icon: <TrendingUp />,
          value: "30%",
          label: "Cost Reduction",
          description: "Average reduction in hiring costs"
        },
        {
          icon: <CheckCircle />,
          value: "100%",
          label: "Talent Quality",
          description: "Quality assurance achieved"
        },
        {
          icon: <People />,
          value: "1000+",
          label: "Talents Placed",
          description: "Successful talent placements"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Scale Your Team?"
      finalCtaSubtitle="Join hundreds of companies that have already improved their talent acquisition with our solutions. Let's discuss how we can help you achieve similar results."
      finalCtaButtonText="Schedule Talent Consultation"
      finalCtaButtonLink="/contact"

      // Blog & Case Studies
      blogTitle="Talent Solutions Insights & Updates"
      blogSubtitle="Stay informed with our latest talent acquisition research, industry trends, and thought leadership content"
      caseStudyTitle="Talent Solutions Success Stories"
      caseStudySubtitle="Discover how we've helped businesses achieve remarkable results with talent solutions"

      // Theme
      theme="light"
    />
  );
};

export default TalentSolutions;
