import React, { Fragment } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import Footer from "../footer/Footer";
import OptimizedBlogSection from "../OptimizedBlogSection/OptimizedBlogSection";
import OptimizedCaseStudySection from "../OptimizedCaseStudySection/OptimizedCaseStudySection";
import ModernHeroSection from "../common/ModernHeroSection";
import FeaturesSection from "../FeaturesSectionSub/FeaturesSection";
import DataSection from "../DataSection/DataSection";
import TechnologyLogos from "../TechnologyLogos/TechnologyLogos";
import ModernServiceCard from "../common/ModernServiceCard";

const SubServiceTemplate = ({
  // Hero Section Props
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroButtonText = "TALK TO OUR EXPERTS",
  heroButtonLink = "/contact",
  heroBackgroundImage,
  heroFeatures = [],

  // Features Section Props (Benefits/Use Cases)
  showFeaturesSection = true,
  features = [],

  // Data Section Props (Process/Workflow)
  showDataSection = true,
  dataTitle,
  dataDescription,
  dataFeatures = [],
  dataCtaText = "Let's Connect",
  dataCtaLink = "/contact",

  // Technology Logos Props
  showTechnologyLogos = true,

  // Service Cards Props (Related Services)
  showServiceCards = false,
  serviceCards = [],
  serviceCardsTitle = "Related Services",
  serviceCardsSubtitle = "Explore other solutions in this domain",

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

      {/* Benefits / Use Cases Section - White Background */}
      {showFeaturesSection && features.length > 0 && (
        <section style={{
          backgroundColor: '#ffffff',
          padding: '40px 0',
          position: 'relative'
        }}>
          <div className="container">
            <FeaturesSection features={features} />
          </div>
        </section>
      )}

      {/* Process / Workflow Section - White Background */}
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

      {/* Technology Logos Section - White Background */}
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

      {/* Related Services Section - White Background */}
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

export default SubServiceTemplate;
