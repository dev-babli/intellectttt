import React, { Fragment } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import Footer from "../footer/Footer";
import ModernHeroSection from "../common/ModernHeroSection";
import ModernServiceCard from "../common/ModernServiceCard";
import FeaturesSection from "../FeaturesSectionSub/FeaturesSection";
import DataSection from "../DataSection/DataSection";
import TestimonialSection from "../TestimonialSection/TestimonialSection";

const FlexibleTemplate = ({
  // Hero Section Props
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroButtonText = "Get Started",
  heroButtonLink = "/contact",
  heroBackgroundImage,
  heroFeatures = [],
  heroTheme = "light",

  // Features Section Props
  showFeaturesSection = false,
  features = [],
  featuresTitle = "Key Features",
  featuresSubtitle = "Discover what makes us different",

  // Data Section Props
  showDataSection = false,
  dataTitle,
  dataDescription,
  dataFeatures = [],
  dataCtaText = "Learn More",
  dataCtaLink = "/contact",

  // Service Cards Props
  showServiceCards = false,
  serviceCards = [],
  serviceCardsTitle = "Our Services",
  serviceCardsSubtitle = "Explore our comprehensive solutions",

  // Testimonials Props
  showTestimonials = false,
  testimonials = [],

  // FAQ Props
  showFaq = false,
  faqTitle = "Frequently Asked Questions",
  faqSubtitle = "Get answers to common questions",
  faqs = [],

  // Custom Sections Props
  customSections = [],

  // Theme
  theme = "light",
}) => {
  useScrollToTop();

  return (
    <Fragment>
      {/* Hero Section */}
      <ModernHeroSection
        title={heroTitle}
        subtitle={heroSubtitle}
        description={heroDescription}
        buttonText={heroButtonText}
        buttonLink={heroButtonLink}
        backgroundImage={heroBackgroundImage}
        features={heroFeatures}
        theme={heroTheme}
      />

      {/* Features Section */}
      {showFeaturesSection && features.length > 0 && (
        <section style={{
          backgroundColor: theme === "dark" ? "#1a1a1a" : "#ffffff",
          padding: '80px 0',
          borderTop: '1px solid rgba(0,0,0,0.05)'
        }}>
          <div className="container">
            <FeaturesSection 
              features={features}
              title={featuresTitle}
              subtitle={featuresSubtitle}
            />
          </div>
        </section>
      )}

      {/* Data Section */}
      {showDataSection && dataTitle && (
        <section style={{
          backgroundColor: theme === "dark" ? "#1a1a1a" : "#f8fafc",
          padding: '80px 0',
          borderTop: '1px solid rgba(0,0,0,0.05)'
        }}>
          <div className="container">
            <DataSection
              title={dataTitle}
              description={dataDescription}
              features={dataFeatures}
              ctaText={dataCtaText}
              ctaLink={dataCtaLink}
            />
          </div>
        </section>
      )}

      {/* Service Cards Section */}
      {showServiceCards && serviceCards.length > 0 && (
        <section style={{
          backgroundColor: theme === "dark" ? "#1a1a1a" : "#ffffff",
          padding: '80px 0',
          borderTop: '1px solid rgba(0,0,0,0.05)'
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

      {/* Testimonials Section */}
      {showTestimonials && testimonials.length > 0 && (
        <section style={{
          backgroundColor: theme === "dark" ? "#1a1a1a" : "#f8fafc",
          padding: '80px 0',
          borderTop: '1px solid rgba(0,0,0,0.05)'
        }}>
          <div className="container">
            <TestimonialSection testimonials={testimonials} />
          </div>
        </section>
      )}

      {/* Custom Sections */}
      {customSections.map((section, index) => (
        <section key={index} style={{
          backgroundColor: section.backgroundColor || (theme === "dark" ? "#1a1a1a" : "#ffffff"),
          padding: section.padding || '80px 0',
          borderTop: '1px solid rgba(0,0,0,0.05)'
        }}>
          <div className="container">
            {section.content}
          </div>
        </section>
      ))}

      {/* Footer */}
      <Footer />
    </Fragment>
  );
};

export default FlexibleTemplate;
