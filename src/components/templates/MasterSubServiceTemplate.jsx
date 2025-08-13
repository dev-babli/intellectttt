import React, { Fragment } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import Footer from "../footer/Footer";
import OptimizedBlogSection from "../OptimizedBlogSection/OptimizedBlogSection";
import OptimizedCaseStudySection from "../OptimizedCaseStudySection/OptimizedCaseStudySection";
import TechnologyLogos from "../TechnologyLogos/TechnologyLogos";


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

  // Technology Logos Props
  showTechnologyLogos = true,



  // Blog & Case Study Props
  showBlog = true,
  showCaseStudies = true,
  blogTitle = "Related Insights",
  blogSubtitle = "Stay informed with our latest insights and updates",
  caseStudyTitle = "Success Stories",
  caseStudySubtitle = "See how we've helped businesses achieve their goals",

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
        buttonText={heroButtonText}
        buttonLink={heroButtonLink}
        backgroundImage={heroBackgroundImage}
        features={heroFeatures}
        textColor={heroTextColor}
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

      {/* 5. Technology Logos Section */}
      {showTechnologyLogos && (
        <section style={{
          backgroundColor: theme === "dark" ? "#1a1a1a" : "#f8fafc",
          padding: '80px 0',
          borderTop: '1px solid rgba(0,0,0,0.05)'
        }}>
          <div className="container">
            <TechnologyLogos />
          </div>
        </section>
      )}

      {/* 6. Blog Section */}
      {showBlog && (
        <section style={{
          backgroundColor: theme === "dark" ? "#1a1a1a" : "#ffffff",
          padding: '8px 0',
          borderTop: '1px solid rgba(0,0,0,0.05)'
        }}>
          <div className="container">
            <OptimizedBlogSection
              title={blogTitle}
              subtitle={blogSubtitle}
            />
          </div>
        </section>
      )}

      {/* 7. Case Study Section */}
      {showCaseStudies && (
        <section style={{
          backgroundColor: theme === "dark" ? "#1a1a1a" : "#f8fafc",
          padding: '80px 0',
          borderTop: '1px solid rgba(0,0,0,0.05)'
        }}>
          <div className="container">
            <OptimizedCaseStudySection
              title={caseStudyTitle}
              subtitle={caseStudySubtitle}
            />
          </div>
        </section>
      )}

      {/* Footer */}
      <Footer />
    </Fragment>
  );
};

export default MasterSubServiceTemplate;
