import React from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import Footer from "../../components/footer/Footer";

// Atomic Components
import ModernHeroSection from "../../components/common/ModernHeroSection";
import AtomicProblemSolution from "../../components/ui/AtomicProblemSolution";
import AtomicServiceOfferings from "../../components/ui/AtomicServiceOfferings";
import AtomicBenefits from "../../components/ui/AtomicBenefits";
import StaffAugmentationDetails from "../../components/StaffAugmentationDetails/StaffAugmentationDetails";

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
  useScrollToTop();

  return (
    <>
      {/* 1. Hero Section */}
      <ModernHeroSection
        title="Staff Augmentation"
        subtitle="Tech Team Scaling"
        description="Quickly scale your tech teams with vetted IT talent for project-based or long-term needs. Access skilled professionals and accelerate your development with flexible staffing solutions."
        backgroundImage="/IT-Staff-Augmentation.webp"
        features={[
          "Vetted IT Talent",
          "Quick Scaling",
          "Project-Based Hiring",
          "Flexible Contracts"
        ]}
        textColor="black"
      />

      {/* 2. Problem/Solution Section */}
      <AtomicProblemSolution
        title="The IT Staffing Challenge & Our Solution"
        subtitle="We understand the complexities of IT staffing and have the expertise to provide flexible workforce solutions"
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
        variant="split"
        theme="minimal"
      />

      {/* 3. Service Offerings Section */}
      <AtomicServiceOfferings
        title="Our IT Staff Augmentation Services"
        subtitle="Comprehensive IT staffing services designed to scale your tech teams quickly"
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
        variant="default"
        theme="minimal"
      />

      {/* 4. Benefits Section */}
      <AtomicBenefits
        title="Why Choose Our IT Staff Augmentation Services"
        subtitle="Discover the tangible benefits and outcomes you can expect from our IT staffing solutions"
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
        variant="default"
        theme="minimal"
      />

      {/* 5. Custom Staff Augmentation Details Section */}
      <StaffAugmentationDetails />
      
      {/* 6. Footer */}
      <Footer />
    </>
  );
};

export default ITStaffAugmentation;
