import React, { Fragment } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import Footer from "../footer/Footer";
import OptimizedBlogSection from "../OptimizedBlogSection/OptimizedBlogSection";
import OptimizedCaseStudySection from "../OptimizedCaseStudySection/OptimizedCaseStudySection";
import ModernHeroSection from "../common/ModernHeroSection";
import ModernServiceCard from "../common/ModernServiceCard";
import WorkProcess from "../It-Services-Components/WorkProcess/WorkProcess";
import ServicesComponent from "../ServicesComponent/ServicesComponent";
import TestimonialSection from "../TestimonialSection/TestimonialSection";

const IndustryTemplate = ({
  // Hero Section Props
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroButtonText = "TALK TO OUR EXPERTS",
  heroButtonLink = "/contact",
  heroBackgroundImage,
  heroFeatures = [],

  // Work Process Props - Industry-Specific Process
  showWorkProcess = true,
  workProcessHeading,
  workProcessDescription,
  workProcessButtonText = "Connect with Industry Experts",
  workProcessButtonLink = "/contact",
  workProcessList = [],
  workProcessShapeImages = [],

  // Services Component Props - Industry Solutions
  showServicesComponent = true,
  services = [],
  servicesLimit = 6,
  servicesShowButton = true,
  servicesButtonText = "Schedule a Strategy Call",
  servicesButtonLink = "/contact",
  servicesSectionStyle = { backgroundColor: "#ffffff" },

  // Service Cards Props - Industry Use Cases
  showServiceCards = true,
  serviceCards = [],
  serviceCardsTitle = "Industry Solutions",
  serviceCardsSubtitle = "Tailored solutions designed specifically for your industry challenges",

  // Testimonials Props - Industry Proof Points
  showTestimonials = true,
  testimonials = [],

  // Blog & Case Study Props
  blogTitle = "Industry Insights & Updates",
  blogSubtitle = "Stay informed with our latest industry-specific insights, trends, and thought leadership content",
  caseStudyTitle = "Industry Success Stories",
  caseStudySubtitle = "Discover how we've helped businesses in your industry achieve their digital transformation goals",
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

      {/* Industry Challenges Section - White Background */}
      {showWorkProcess && workProcessList.length > 0 && (
        <section style={{
          backgroundColor: '#ffffff',
          padding: '40px 0',
          position: 'relative'
        }}>
          <div className="container">
            <WorkProcess
              heading={workProcessHeading}
              description={workProcessDescription}
              buttonText={workProcessButtonText}
              buttonLink={workProcessButtonLink}
              processList={workProcessList}
              shapeImages={workProcessShapeImages}
            />
          </div>
        </section>
      )}

      {/* Our Solutions Section - White Background */}
      {showServicesComponent && services.length > 0 && (
        <section style={{
          backgroundColor: '#ffffff',
          padding: '40px 0',
          borderTop: '1px solid #f1f5f9'
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

      {/* Industry Use Cases Section - White Background */}
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

      {/* Success Stories Section - White Background */}
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

export default IndustryTemplate;
