import React, { Fragment } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import Footer from "../footer/Footer";


// Atomic Components
import ModernHeroSection from "../common/ModernHeroSection";
import AtomicProblemSolution from "../ui/AtomicProblemSolution";
import AtomicServiceOfferings from "../ui/AtomicServiceOfferings";
import AtomicBenefits from "../ui/AtomicBenefits";

const MasterIndustryTemplate = ({
  // Hero Section Props
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroButtonText = "Get Started",
  heroButtonLink = "/contact",
  heroBackgroundImage,
  heroFeatures = [],
  heroTheme = "light",

  // Problem/Solution Section Props (Industry Challenges)
  showProblemSolution = true,
  problemSolutionTitle = "Industry Challenges & Solutions",
  problemSolutionSubtitle = "We understand the unique challenges facing your industry",
  problems = [],
  solutions = [],
  problemSolutionVariant = "split",

  // Service Offerings Props (Industry Solutions)
  showServiceOfferings = true,
  serviceOfferingsTitle = "Industry Solutions",
  serviceOfferingsSubtitle = "Tailored solutions designed specifically for your industry",
  services = [],
  serviceOfferingsVariant = "featured",

  // Benefits Section Props (Industry Process)
  showBenefits = true,
  benefitsTitle = "Our Industry Approach",
  benefitsSubtitle = "Proven methodology for delivering results in your sector",
  benefits = [],
  benefitsVariant = "default",

  // Stats Section Props
  showStats = true,
  statsTitle = "Industry Results",
  statsSubtitle = "Proven outcomes for businesses in your sector",
  stats = [],





  // Final CTA Props
  finalCtaTitle = "Ready to Transform Your Industry?",
  finalCtaSubtitle = "Let's discuss how we can help your business thrive in today's market",
  finalCtaButtonText = "Schedule Industry Consultation",
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
        buttonText={heroButtonText}
        buttonLink={heroButtonLink}
        backgroundImage={heroBackgroundImage}
        features={heroFeatures}
      />

      {/* 2. Problem/Solution Section (Industry Challenges) */}
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

      {/* 3. Service Offerings Section (Industry Solutions) */}
      {showServiceOfferings && services.length > 0 && (
        <AtomicServiceOfferings
          title={serviceOfferingsTitle}
          subtitle={serviceOfferingsSubtitle}
          services={services}
          variant={serviceOfferingsVariant}
          theme={theme}
        />
      )}

      {/* 4. Benefits Section (Industry Process) */}
      {showBenefits && benefits.length > 0 && (
        <AtomicBenefits
          title={benefitsTitle}
          subtitle={benefitsSubtitle}
          benefits={benefits}
          variant={benefitsVariant}
          theme={theme}
        />
      )}

      {/* 5. Stats Section (Industry Results) */}
      {showStats && stats.length > 0 && (
        <AtomicBenefits
          title={statsTitle}
          subtitle={statsSubtitle}
          stats={stats}
          variant="stats"
          theme={theme}
        />
      )}



      {/* Footer */}
      <Footer />
    </Fragment>
  );
};

export default MasterIndustryTemplate;
