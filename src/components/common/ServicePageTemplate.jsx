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
      <div className="sco_agency" style={{ 
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
        minHeight: '100vh'
      }}>
        <div className="page_content service-single-page" style={{
          position: 'relative',
          zIndex: 1
        }}>
          {/* Hero Section */}
          <div style={{ 
            position: 'relative',
            marginBottom: '0'
          }}>
            <ModernHeroSection
              title={heroTitle}
              subtitle={heroSubtitle}
              description={heroDescription}
              buttonText={heroButtonText}
              buttonLink={heroButtonLink}
              backgroundImage={heroBackgroundImage}
              features={heroFeatures}
            />
          </div>
          
          {/* Who Are We Section */}
          {whoAreWeParagraphs.length > 0 && (
            <div style={{ 
              position: 'relative',
              marginTop: '0',
              marginBottom: '0'
            }}>
              <WhoAreWeSection
                heading={whoAreWeHeading}
                subheading={whoAreWeSubheading}
                paragraphs={whoAreWeParagraphs}
                stats={whoAreWeStats}
              />
            </div>
          )}
          
          {/* Service Section */}
          {showServiceSection && (
            <div style={{ 
              position: 'relative',
              marginTop: '0',
              marginBottom: '0',
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              borderRadius: '20px 20px 0 0',
              marginTop: '-20px',
              paddingTop: '40px'
            }}>
              <ServiceSection {...serviceSectionProps} />
            </div>
          )}
          
          {/* Service Cards */}
          {showServiceCards && serviceCards.length > 0 && (
            <div style={{ 
              position: 'relative',
              marginTop: '0',
              marginBottom: '0'
            }}>
              <ModernServiceCard 
                cards={serviceCards} 
                title={serviceCardsTitle}
                subtitle={serviceCardsSubtitle}
              />
            </div>
          )}
          
          {/* Alliances Section */}
          {showAlliancesSection && (
            <div style={{ 
              position: 'relative',
              marginTop: '0',
              marginBottom: '0',
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              paddingTop: '40px',
              paddingBottom: '40px'
            }}>
              <AlliancesSection />
            </div>
          )}
          
          {/* Additional Components */}
          {additionalComponents.map((Component, index) => (
            <div key={index} style={{ 
              position: 'relative',
              marginTop: '0',
              marginBottom: '0'
            }}>
              <Component />
            </div>
          ))}
        </div>
      </div>
      
      {/* Blog Section */}
      <div style={{ 
        position: 'relative',
        background: '#ffffff',
        paddingTop: '40px',
        paddingBottom: '40px'
      }}>
        <OptimizedBlogSection 
          title={blogTitle}
          subtitle={blogSubtitle}
        />
      </div>
      
      {/* Case Study Section */}
      <div style={{ 
        position: 'relative',
        background: '#ffffff',
        paddingTop: '20px',
        paddingBottom: '40px'
      }}>
        <OptimizedCaseStudySection 
          title={caseStudyTitle}
          subtitle={caseStudySubtitle}
        />
      </div>
      
      {/* Footer */}
      <div style={{ 
        position: 'relative',
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)'
      }}>
        <Footer />
      </div>
    </Fragment>
  );
};

export default ServicePageTemplate;
