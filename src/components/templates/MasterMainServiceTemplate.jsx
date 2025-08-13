import React, { Fragment } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import Footer from "../footer/Footer";
import OptimizedBlogSection from "../OptimizedBlogSection/OptimizedBlogSection";
import OptimizedCaseStudySection from "../OptimizedCaseStudySection/OptimizedCaseStudySection";
import AlliancesSection from "../AlliancesSection/AlliancesSection";


// Atomic Components
import ModernHeroSection from "../common/ModernHeroSection";
import AtomicProblemSolution from "../ui/AtomicProblemSolution";
import AtomicServiceOfferings from "../ui/AtomicServiceOfferings";
import AtomicBenefits from "../ui/AtomicBenefits";

const MasterMainServiceTemplate = ({
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
  problemSolutionVariant = "default",

  // Service Offerings Props
  showServiceOfferings = true,
  serviceOfferingsTitle = "Our Solutions",
  serviceOfferingsSubtitle = "Comprehensive services designed to transform your business",
  services = [],
  serviceOfferingsVariant = "default",
  showPricing = false,

  // Benefits Section Props
  showBenefits = true,
  benefitsTitle = "Why Choose Us",
  benefitsSubtitle = "Discover the tangible benefits and outcomes you can expect",
  benefits = [],
  benefitsVariant = "default",

  // Stats Section Props
  showStats = true,
  statsTitle = "Proven Results",
  statsSubtitle = "Numbers that speak for themselves",
  stats = [],



  // Alliances Section Props
  showAlliances = true,

  // Blog & Case Study Props
  showBlog = true,
  showCaseStudies = true,
  blogTitle = "Latest Insights & Updates",
  blogSubtitle = "Stay informed with our latest industry insights and thought leadership content",
  caseStudyTitle = "Success Stories",
  caseStudySubtitle = "Discover how we've helped businesses achieve their digital transformation goals",

  // Final CTA Props
  finalCtaTitle = "Ready to Transform Your Business?",
  finalCtaSubtitle = "Let's discuss how we can help you achieve your goals",
  finalCtaButtonText = "Schedule a Discovery Call",
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

      {/* 3. Service Offerings Section */}
      {showServiceOfferings && services.length > 0 && (
        <AtomicServiceOfferings
          title={serviceOfferingsTitle}
          subtitle={serviceOfferingsSubtitle}
          services={services}
          variant={serviceOfferingsVariant}
          showPricing={showPricing}
          theme={theme}
        />
      )}

      {/* 4. Benefits Section */}
      {showBenefits && benefits.length > 0 && (
        <AtomicBenefits
          title={benefitsTitle}
          subtitle={benefitsSubtitle}
          benefits={benefits}
          variant={benefitsVariant}
          theme={theme}
        />
      )}

      {/* 5. Stats Section */}
      {showStats && stats.length > 0 && (
        <AtomicBenefits
          title={statsTitle}
          subtitle={statsSubtitle}
          stats={stats}
          variant="stats"
          theme={theme}
        />
      )}

      {/* 6. Alliances Section */}
      {showAlliances && (
        <section style={{
          backgroundColor: theme === "dark" ? "#1a1a1a" : "#f8fafc",
          padding: '80px 0',
          borderTop: '1px solid rgba(0,0,0,0.05)'
        }}>
          <div className="container">
            <AlliancesSection />
          </div>
        </section>
      )}

      {/* 7. Blog Section */}
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

      {/* 8. Case Study Section */}
      {showCaseStudies && (
        <section style={{
          backgroundColor: theme === "dark" ? "#1a1a1a" : "#f8fafc",
          padding: '8px 0',
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

export default MasterMainServiceTemplate;
