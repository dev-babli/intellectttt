import React, { Fragment } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import Footer from "../footer/Footer";


// Atomic Components
import ModernHeroSection from "../common/ModernHeroSection";
import AtomicProblemSolution from "../ui/AtomicProblemSolution";
import AtomicServiceOfferings from "../ui/AtomicServiceOfferings";
import AtomicBenefits from "../ui/AtomicBenefits";

const MasterSubServiceTemplate = ({
  // Hero Section Props
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroButtonText = "Get Started",
  heroButtonLink = "/contact",
  heroBackgroundImage,
  heroFeatures = [],
  heroTheme = "light",
  heroTextColor = "auto",

  // Problem/Solution Section Props
  showProblemSolution = true,
  problemSolutionTitle = "The Challenge & Our Solution",
  problemSolutionSubtitle = "We understand your pain points and have the expertise to solve them",
  problems = [],
  solutions = [],
  problemSolutionVariant = "split",

  // Service Offerings Props (Benefits/Use Cases)
  showServiceOfferings = true,
  serviceOfferingsTitle = "Key Benefits",
  serviceOfferingsSubtitle = "Discover how this solution can transform your business",
  services = [],
  serviceOfferingsVariant = "default",

  // Benefits Section Props (Process/Workflow)
  showBenefits = true,
  benefitsTitle = "How It Works",
  benefitsSubtitle = "Our proven process for delivering results",
  benefits = [],
  benefitsVariant = "default",

  // Final CTA Props
  finalCtaTitle = "Ready to Get Started?",
  finalCtaSubtitle = "Let's discuss how this solution can work for you",
  finalCtaButtonText = "Schedule a Consultation",
  finalCtaButtonLink = "/contact",

  // Theme
  theme = "light",
}) => {
  useScrollToTop();

  return (
    <Fragment>
      {/* 1. Hero Section */}
      <ModernHeroSection
        title={heroTitle}
        subtitle={heroSubtitle}
        description={heroDescription}
        backgroundImage={heroBackgroundImage}
        features={heroFeatures}
        textColor="black"
      />

      {/* 2. Problem/Solution Section */}
      {showProblemSolution && problems.length > 0 && (
        <AtomicProblemSolution
          title={problemSolutionTitle}
          subtitle={problemSolutionSubtitle}
          problems={problems}
          solutions={solutions}
          variant={problemSolutionVariant}
          theme={theme}
        />
      )}

      {/* 3. Service Offerings Section (Benefits/Use Cases) */}
      {showServiceOfferings && services.length > 0 && (
        <AtomicServiceOfferings
          title={serviceOfferingsTitle}
          subtitle={serviceOfferingsSubtitle}
          services={services}
          variant={serviceOfferingsVariant}
          theme={theme}
        />
      )}

      {/* 4. Benefits Section (Process/Workflow) */}
      {showBenefits && benefits.length > 0 && (
        <AtomicBenefits
          title={benefitsTitle}
          subtitle={benefitsSubtitle}
          benefits={benefits}
          variant={benefitsVariant}
          theme={theme}
        />
      )}
    </Fragment>
  );
};

export default MasterSubServiceTemplate;
