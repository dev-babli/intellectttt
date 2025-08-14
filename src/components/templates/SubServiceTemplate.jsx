import React, { Fragment } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import Footer from "../footer/Footer";
import ModernHeroSection from "../common/ModernHeroSection";
import FeaturesSection from "../FeaturesSectionSub/FeaturesSection";
import DataSection from "../DataSection/DataSection";
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

  // Service Cards Props (Related Services)
  showServiceCards = false,
  serviceCards = [],
  serviceCardsTitle = "Related Services",
  serviceCardsSubtitle = "Explore other solutions in this domain",


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



      {/* Footer */}
      <Footer />
    </Fragment>
  );
};

export default SubServiceTemplate;
