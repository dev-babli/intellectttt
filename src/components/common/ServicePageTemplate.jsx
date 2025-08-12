import React, { Fragment } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import Footer from "../footer/Footer";
import OptimizedBlogSection from "../OptimizedBlogSection/OptimizedBlogSection";
import OptimizedCaseStudySection from "../OptimizedCaseStudySection/OptimizedCaseStudySection";
import ModernHeroSection from "./ModernHeroSection";
import ModernServiceCard from "./ModernServiceCard";
import WhoAreWeSection from "../WhoAreWeSection/WhoAreWeSection";
import ServiceSection from "../ServiceSection/ServiceSection";
import AlliancesSection from "../AlliancesSection/AlliancesSection";

const ServicePageTemplate = ({
  // Hero Section Props
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroButtonText = "Talk to Our Experts",
  heroButtonLink = "/contact",
  heroBackgroundImage,
  heroFeatures = [],
  
  // Who Are We Section Props
  whoAreWeHeading = "Who Are We?",
  whoAreWeSubheading = "About Intellectt",
  whoAreWeParagraphs = [],
  whoAreWeStats = [],
  
  // Service Section Props
  showServiceSection = true,
  serviceSectionProps = {},
  
  // Service Cards Props
  showServiceCards = false,
  serviceCards = [],
  serviceCardsTitle = "Our Services",
  serviceCardsSubtitle = "Explore our comprehensive solutions",
  
  // Alliances Section Props
  showAlliancesSection = true,
  
  // Blog & Case Study Props
  blogTitle = "Latest Insights & Updates",
  blogSubtitle = "Stay informed with our latest industry insights, technical articles, and thought leadership content",
  caseStudyTitle = "Success Stories",
  caseStudySubtitle = "Discover how we've helped businesses achieve their digital transformation goals",
  
  // Additional Components
  additionalComponents = [],
}) => {
  // Scroll to top when component mounts
  useScrollToTop();

  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
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
          
          {/* Who Are We Section */}
          {whoAreWeParagraphs.length > 0 && (
            <WhoAreWeSection
              heading={whoAreWeHeading}
              subheading={whoAreWeSubheading}
              paragraphs={whoAreWeParagraphs}
              stats={whoAreWeStats}
            />
          )}
          
          {/* Service Section */}
          {showServiceSection && <ServiceSection {...serviceSectionProps} />}
          
          {/* Service Cards */}
          {showServiceCards && serviceCards.length > 0 && (
            <ModernServiceCard 
              cards={serviceCards} 
              title={serviceCardsTitle}
              subtitle={serviceCardsSubtitle}
            />
          )}
          
          {/* Alliances Section */}
          {showAlliancesSection && <AlliancesSection />}
          
          {/* Additional Components */}
          {additionalComponents.map((Component, index) => (
            <Component key={index} />
          ))}
        </div>
      </div>
      
      {/* Blog Section */}
      <OptimizedBlogSection 
        title={blogTitle}
        subtitle={blogSubtitle}
      />
      
      {/* Case Study Section */}
      <OptimizedCaseStudySection 
        title={caseStudyTitle}
        subtitle={caseStudySubtitle}
      />
      
      {/* Footer */}
      <Footer />
    </Fragment>
  );
};

export default ServicePageTemplate;
