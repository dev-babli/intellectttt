import React, { Fragment } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import Footer from "../footer/Footer";
import ModernHeroSection from "../common/ModernHeroSection";
import ServicesComponent from "../ServicesComponent/ServicesComponent";

const IndustryTemplate = ({
  // Hero Section Props
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroButtonText = "TALK TO OUR EXPERTS",
  heroButtonLink = "/contact",
  heroBackgroundImage,
  heroFeatures = [],

  // Services Component Props - Industry Solutions
  showServicesComponent = true,
  services = [],
  servicesLimit = 6,
  servicesShowButton = true,
  servicesButtonText = "Schedule a Strategy Call",
  servicesButtonLink = "/contact",
  servicesSectionStyle = { backgroundColor: "#ffffff" },

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
      />

      {/* Services Component Section */}
      {showServicesComponent && services.length > 0 && (
        <section style={{
          backgroundColor: '#ffffff',
          padding: '40px 0'
        }}>
          <div className="container">
            <ServicesComponent
              services={services}
              limit={servicesLimit}
              showButton={servicesShowButton}
              buttonText={servicesButtonText}
              buttonLink={servicesButtonLink}
              sectionStyle={servicesSectionStyle}
            />
          </div>
        </section>
      )}



      {/* Footer */}
      <Footer />
    </Fragment>
  );
};

export default IndustryTemplate;
