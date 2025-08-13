import React, { Fragment } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import Footer from "../footer/Footer";
import OptimizedBlogSection from "../OptimizedBlogSection/OptimizedBlogSection";
import OptimizedCaseStudySection from "../OptimizedCaseStudySection/OptimizedCaseStudySection";
import ModernHeroSection from "../common/ModernHeroSection";
import ModernServiceCard from "../common/ModernServiceCard";
import AboutSection from "../Cyber-Security-Components/about/AboutSection";
import FeaturesSection from "../FeaturesSectionSub/FeaturesSection";
import DataSection from "../DataSection/DataSection";
import TechnologyLogos from "../TechnologyLogos/TechnologyLogos";
import TestimonialSection from "../TestimonialSection/TestimonialSection";
import FaqSection from "../FaqSection/FaqSection";

const FlexibleTemplate = ({
  // Hero Section Props
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroButtonText = "Get Started",
  heroButtonLink = "/contact",
  heroBackgroundImage,
  heroFeatures = [],

  // About Section Props
  showAboutSection = false,
  aboutIcon,
  aboutSubtitle = "About",
  aboutTitle,
  aboutContent,
  aboutImage,
  aboutBadgeImage,
  aboutBadgeNumber,
  aboutBadgeText,

  // Features Section Props
  showFeaturesSection = false,
  features = [],

  // Data Section Props
  showDataSection = false,
  dataTitle,
  dataDescription,
  dataFeatures = [],
  dataCtaText = "Learn More",
  dataCtaLink = "/contact",

  // Technology Logos Props
  showTechnologyLogos = false,

  // Service Cards Props
  showServiceCards = false,
  serviceCards = [],
  serviceCardsTitle = "Featured Solutions",
  serviceCardsSubtitle = "Explore our featured solutions and services",

  // Testimonials Props
  showTestimonials = false,
  testimonials = [],

  // FAQ Section Props
  showFaqSection = false,
  faqTitle = "Frequently Asked Questions",
  faqSubtitle = "Find answers to common questions",
  faqItems = [],

  // Blog & Case Study Props
  showBlogSection = true,
  showCaseStudySection = true,
  blogTitle = "Latest Insights & Updates",
  blogSubtitle = "Stay informed with our latest insights and thought leadership content",
  caseStudyTitle = "Success Stories",
  caseStudySubtitle = "Discover how we've helped businesses achieve their goals",

  // Custom Sections
  customSections = [],

  // Layout Options
  layoutStyle = "default", // "default", "minimal", "featured", "campaign"
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

      {/* About Section - White Background */}
      {showAboutSection && aboutContent && (
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

      {/* Features Section - White Background */}
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

      {/* Data Section - White Background */}
      {showDataSection && dataTitle && (
        <section style={{
          backgroundColor: '#ffffff',
          padding: '40px 0',
          borderTop: '1px solid #f1f5f9'
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

      {/* Technology Logos - White Background */}
      {showTechnologyLogos && (
        <section style={{
          backgroundColor: '#ffffff',
          padding: '40px 0',
          borderTop: '1px solid #f1f5f9'
        }}>
          <div className="container">
            <TechnologyLogos />
          </div>
        </section>
      )}

      {/* Service Cards - White Background */}
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

      {/* Testimonials - White Background */}
      {showTestimonials && testimonials.length > 0 && (
        <section style={{
          backgroundColor: '#ffffff',
          padding: '40px 0',
          borderTop: '1px solid #f1f5f9'
        }}>
          <div className="container">
            <TestimonialSection testimonials={testimonials} />
          </div>
        </section>
      )}

      {/* FAQ Section - White Background */}
      {showFaqSection && faqItems.length > 0 && (
        <section style={{
          backgroundColor: '#ffffff',
          padding: '40px 0',
          borderTop: '1px solid #f1f5f9'
        }}>
          <div className="container">
            <FaqSection
              title={faqTitle}
              subtitle={faqSubtitle}
              faqItems={faqItems}
            />
          </div>
        </section>
      )}

      {/* Custom Sections - White Background */}
      {customSections.map((section, index) => (
        <section key={index} style={{
          backgroundColor: '#ffffff',
          padding: '40px 0',
          borderTop: '1px solid #f1f5f9'
        }}>
          <div className="container">
            {section.component}
          </div>
        </section>
      ))}

      {/* Blog Section - White Background */}
      {showBlogSection && (
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
      )}

      {/* Case Study Section - White Background */}
      {showCaseStudySection && (
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
      )}

      {/* Footer */}
      <Footer />
    </Fragment>
  );
};

export default FlexibleTemplate;
