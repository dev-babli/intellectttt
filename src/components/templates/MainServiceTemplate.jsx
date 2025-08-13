import React, { Fragment } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import Footer from "../footer/Footer";
import OptimizedBlogSection from "../OptimizedBlogSection/OptimizedBlogSection";
import OptimizedCaseStudySection from "../OptimizedCaseStudySection/OptimizedCaseStudySection";
import ModernHeroSection from "../common/ModernHeroSection";
import ModernServiceCard from "../common/ModernServiceCard";
import AboutSection from "../Cyber-Security-Components/about/AboutSection";
import AlliancesSection from "../AlliancesSection/AlliancesSection";
import FeaturesSection from "../FeaturesSectionSub/FeaturesSection";

const MainServiceTemplate = ({
  // Hero Section Props
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroButtonText = "Talk to Our Experts",
  heroButtonLink = "/contact",
  heroBackgroundImage,
  heroFeatures = [],

  // About Section Props
  aboutIcon,
  aboutSubtitle = "What We Do",
  aboutTitle,
  aboutContent,
  aboutImage,
  aboutBadgeImage,
  aboutBadgeNumber,
  aboutBadgeText,

  // Features Section Props
  showFeaturesSection = true,
  features = [],

  // Service Cards Props
  showServiceCards = true,
  serviceCards = [],
  serviceCardsTitle = "Our Solutions",
  serviceCardsSubtitle = "Comprehensive solutions designed to transform your business",

  // Alliances Section Props
  showAlliancesSection = true,

  // Blog & Case Study Props
  blogTitle = "Latest Insights & Updates",
  blogSubtitle = "Stay informed with our latest industry insights, technical articles, and thought leadership content",
  caseStudyTitle = "Success Stories",
  caseStudySubtitle = "Discover how we've helped businesses achieve their digital transformation goals",
}) => {
  useScrollToTop();

  return (
    <Fragment>
      {/* Hero Section - Using existing ModernHeroSection as-is */}
      <ModernHeroSection
        title={heroTitle}
        subtitle={heroSubtitle}
        description={heroDescription}
        buttonText={heroButtonText}
        buttonLink={heroButtonLink}
        backgroundImage={heroBackgroundImage}
        features={heroFeatures}
      />

      {/* Overview / What We Do Section - White Background */}
      {aboutContent && (
        <section style={{
          backgroundColor: '#ffffff',
          padding: '40px 0',
          position: 'relative'
        }}>
          <div className="container">
            <AboutSection
              subtitleIcon={aboutIcon}
              subtitle={aboutSubtitle}
              title={aboutTitle}
              content={aboutContent}
              image={aboutImage}
              badgeImage={aboutBadgeImage}
              badgeNumber={aboutBadgeNumber}
              badgeText={aboutBadgeText}
            />
          </div>
        </section>
      )}

      {/* Key Features Section - White Background */}
      {showFeaturesSection && features.length > 0 && (
        <section style={{
          backgroundColor: '#ffffff',
          padding: '40px 0',
          borderTop: '1px solid #f1f5f9'
        }}>
          <div className="container">
            <FeaturesSection features={features} />
          </div>
        </section>
      )}

      {/* Service Cards Section - White Background */}
      {showServiceCards && serviceCards.length > 0 && (
        <section style={{
          backgroundColor: '#ffffff',
          padding: '40px 0',
          borderTop: '1px solid #f1f5f9'
        }}>
          <div className="container">
            <ModernServiceCard
              cards={serviceCards}
              title={serviceCardsTitle}
              subtitle={serviceCardsSubtitle}
            />
          </div>
        </section>
      )}

      {/* Alliances Section - White Background */}
      {showAlliancesSection && (
        <section style={{
          backgroundColor: '#ffffff',
          padding: '40px 0',
          borderTop: '1px solid #f1f5f9'
        }}>
          <div className="container">
            <AlliancesSection />
          </div>
        </section>
      )}

      {/* Blog Section - White Background */}
      <section style={{
        backgroundColor: '#ffffff',
        padding: '40px 0',
        borderTop: '1px solid #f1f5f9'
      }}>
        <div className="container">
          <OptimizedBlogSection
            title={blogTitle}
            subtitle={blogSubtitle}
          />
        </div>
      </section>

      {/* Case Study Section - White Background */}
      <section style={{
        backgroundColor: '#ffffff',
        padding: '40px 0',
        borderTop: '1px solid #f1f5f9'
      }}>
        <div className="container">
          <OptimizedCaseStudySection
            title={caseStudyTitle}
            subtitle={caseStudySubtitle}
          />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </Fragment>
  );
};

export default MainServiceTemplate;
