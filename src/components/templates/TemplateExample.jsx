import React from "react";
import { useParams } from "react-router-dom";
import { usePageTemplate, PageTemplateAPI, TEMPLATE_TYPES } from "../../api/pageTemplates";
import MainServiceTemplate from "./MainServiceTemplate";
import SubServiceTemplate from "./SubServiceTemplate";
import IndustryTemplate from "./IndustryTemplate";
import FlexibleTemplate from "./FlexibleTemplate";

// Dynamic Template Renderer Component
const TemplateRenderer = ({ pageData }) => {
  if (!pageData) return null;

  const { type, hero, sections, content, layout } = pageData;

  // Map API data to template props
  const getTemplateProps = () => {
    const baseProps = {
      // Hero Section
      heroTitle: hero?.title,
      heroSubtitle: hero?.subtitle,
      heroDescription: hero?.description,
      heroButtonText: hero?.buttonText,
      heroButtonLink: hero?.buttonLink,
      heroBackgroundImage: hero?.backgroundImage,
      heroFeatures: hero?.features || [],
      
      // Blog & Case Study
      blogTitle: content?.blog?.title,
      blogSubtitle: content?.blog?.subtitle,
      caseStudyTitle: content?.caseStudies?.title,
      caseStudySubtitle: content?.caseStudies?.subtitle,
    };

    switch (type) {
      case TEMPLATE_TYPES.MAIN_SERVICE:
        return {
          ...baseProps,
          // About Section
          aboutIcon: sections?.about?.icon,
          aboutSubtitle: sections?.about?.subtitle,
          aboutTitle: sections?.about?.title,
          aboutContent: sections?.about?.content,
          aboutImage: sections?.about?.image,
          aboutBadgeImage: sections?.about?.badge?.image,
          aboutBadgeNumber: sections?.about?.badge?.number,
          aboutBadgeText: sections?.about?.badge?.text,
          
          // Features Section
          showFeaturesSection: sections?.features?.show,
          features: sections?.features?.items || [],
          
          // Service Cards
          showServiceCards: sections?.serviceCards?.show,
          serviceCards: sections?.serviceCards?.items || [],
          serviceCardsTitle: sections?.serviceCards?.title,
          serviceCardsSubtitle: sections?.serviceCards?.subtitle,
          
          // Work Process
          showWorkProcess: sections?.workProcess?.show,
          workProcessHeading: sections?.workProcess?.heading,
          workProcessDescription: sections?.workProcess?.description,
          workProcessButtonText: sections?.workProcess?.buttonText,
          workProcessButtonLink: sections?.workProcess?.buttonLink,
          workProcessList: sections?.workProcess?.items || [],
          workProcessShapeImages: sections?.workProcess?.shapeImages || [],
          
          // CTA Section
          showCtaSection: sections?.cta?.show,
          ctaTitle: sections?.cta?.title,
          ctaDescription: sections?.cta?.description,
          ctaButtonText: sections?.cta?.buttonText,
          ctaButtonLink: sections?.cta?.buttonLink,
          
          // Alliances Section
          showAlliancesSection: sections?.alliances?.show,
        };

      case TEMPLATE_TYPES.SUB_SERVICE:
        return {
          ...baseProps,
          // Features Section
          showFeaturesSection: sections?.features?.show,
          features: sections?.features?.items || [],
          
          // Data Section
          showDataSection: sections?.data?.show,
          dataTitle: sections?.data?.title,
          dataDescription: sections?.data?.description,
          dataFeatures: sections?.data?.features || [],
          dataCtaText: sections?.data?.ctaText,
          dataCtaLink: sections?.data?.ctaLink,
          
          // Service Cards (Related Services)
          showServiceCards: sections?.serviceCards?.show,
          serviceCards: sections?.serviceCards?.items || [],
          serviceCardsTitle: sections?.serviceCards?.title,
          serviceCardsSubtitle: sections?.serviceCards?.subtitle,
          
          // CTA Section
          showCtaSection: sections?.cta?.show,
          ctaTitle: sections?.cta?.title,
          ctaDescription: sections?.cta?.description,
          ctaButtonText: sections?.cta?.buttonText,
          ctaButtonLink: sections?.cta?.buttonLink,
          
          // Alliances Section
          showAlliancesSection: sections?.alliances?.show,
        };

      case TEMPLATE_TYPES.INDUSTRY:
        return {
          ...baseProps,
          // Work Process
          showWorkProcess: sections?.workProcess?.show,
          workProcessHeading: sections?.workProcess?.heading,
          workProcessDescription: sections?.workProcess?.description,
          workProcessButtonText: sections?.workProcess?.buttonText,
          workProcessButtonLink: sections?.workProcess?.buttonLink,
          workProcessList: sections?.workProcess?.items || [],
          workProcessShapeImages: sections?.workProcess?.shapeImages || [],
          
          // Services Component
          showServicesComponent: sections?.services?.show,
          services: sections?.services?.items || [],
          servicesLimit: sections?.services?.limit,
          servicesShowButton: sections?.services?.showButton,
          servicesButtonText: sections?.services?.buttonText,
          servicesButtonLink: sections?.services?.buttonLink,
          servicesSectionStyle: sections?.services?.sectionStyle,
          
          // Service Cards (Industry Use Cases)
          showServiceCards: sections?.serviceCards?.show,
          serviceCards: sections?.serviceCards?.items || [],
          serviceCardsTitle: sections?.serviceCards?.title,
          serviceCardsSubtitle: sections?.serviceCards?.subtitle,
          
          // Testimonials
          showTestimonials: sections?.testimonials?.show,
          testimonials: sections?.testimonials?.items || [],
          
          // CTA Section
          showCtaSection: sections?.cta?.show,
          ctaTitle: sections?.cta?.title,
          ctaDescription: sections?.cta?.description,
          ctaButtonText: sections?.cta?.buttonText,
          ctaButtonLink: sections?.cta?.buttonLink,
          
          // Alliances Section
          showAlliancesSection: sections?.alliances?.show,
        };

      case TEMPLATE_TYPES.FLEXIBLE:
        return {
          ...baseProps,
          // About Section
          showAboutSection: sections?.about?.show,
          aboutIcon: sections?.about?.icon,
          aboutSubtitle: sections?.about?.subtitle,
          aboutTitle: sections?.about?.title,
          aboutContent: sections?.about?.content,
          aboutImage: sections?.about?.image,
          aboutBadgeImage: sections?.about?.badge?.image,
          aboutBadgeNumber: sections?.about?.badge?.number,
          aboutBadgeText: sections?.about?.badge?.text,
          
          // Features Section
          showFeaturesSection: sections?.features?.show,
          features: sections?.features?.items || [],
          
          // Data Section
          showDataSection: sections?.data?.show,
          dataTitle: sections?.data?.title,
          dataDescription: sections?.data?.description,
          dataFeatures: sections?.data?.features || [],
          dataCtaText: sections?.data?.ctaText,
          dataCtaLink: sections?.data?.ctaLink,
          
          // Service Cards
          showServiceCards: sections?.serviceCards?.show,
          serviceCards: sections?.serviceCards?.items || [],
          serviceCardsTitle: sections?.serviceCards?.title,
          serviceCardsSubtitle: sections?.serviceCards?.subtitle,
          
          // Testimonials
          showTestimonials: sections?.testimonials?.show,
          testimonials: sections?.testimonials?.items || [],
          
          // FAQ Section
          showFaqSection: sections?.faq?.show,
          faqTitle: sections?.faq?.title,
          faqSubtitle: sections?.faq?.subtitle,
          faqItems: sections?.faq?.items || [],
          
          // CTA Section
          showCtaSection: sections?.cta?.show,
          ctaTitle: sections?.cta?.title,
          ctaDescription: sections?.cta?.description,
          ctaButtonText: sections?.cta?.buttonText,
          ctaButtonLink: sections?.cta?.buttonLink,
          
          // Alliances Section
          showAlliancesSection: sections?.alliances?.show,
          
          // Blog & Case Study
          showBlogSection: content?.blog?.show,
          showCaseStudySection: content?.caseStudies?.show,
          
          // Custom Sections
          customSections: pageData.customSections || [],
          
          // Layout Options
          layoutStyle: layout?.style,
          backgroundColor: layout?.backgroundColor,
          heroStyle: layout?.heroStyle,
        };

      default:
        return baseProps;
    }
  };

  const templateProps = getTemplateProps();

  // Render appropriate template based on type
  switch (type) {
    case TEMPLATE_TYPES.MAIN_SERVICE:
      return <MainServiceTemplate {...templateProps} />;
    
    case TEMPLATE_TYPES.SUB_SERVICE:
      return <SubServiceTemplate {...templateProps} />;
    
    case TEMPLATE_TYPES.INDUSTRY:
      return <IndustryTemplate {...templateProps} />;
    
    case TEMPLATE_TYPES.FLEXIBLE:
      return <FlexibleTemplate {...templateProps} />;
    
    default:
      return <div>Unknown template type: {type}</div>;
  }
};

// Main Template Example Component
const TemplateExample = () => {
  const { slug } = useParams();
  const { pageData, loading, error } = usePageTemplate(slug);

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '18px',
        color: '#666'
      }}>
        Loading page...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '18px',
        color: '#dc2626'
      }}>
        Error: {error}
      </div>
    );
  }

  return <TemplateRenderer pageData={pageData} />;
};

// Example usage in routing
export const TemplateRoutes = [
  {
    path: "/template/:slug",
    element: <TemplateExample />
  }
];

// Example of how to create a new page using the API
export const createNewPage = async (pageData) => {
  // Validate the page data
  const validation = PageTemplateAPI.validatePageData(pageData);
  if (!validation.isValid) {
    throw new Error(`Invalid page data: ${validation.errors.join(', ')}`);
  }

  // In a real implementation, you would save to CMS/database here
  console.log('Creating new page:', pageData);
  
  // Generate SEO metadata
  const seo = PageTemplateAPI.generateSEO(pageData);
  console.log('SEO metadata:', seo);
  
  return {
    success: true,
    pageId: pageData.id,
    seo
  };
};

// Example of how to update an existing page
export const updatePage = async (slug, updates) => {
  const existingPage = await PageTemplateAPI.getPageBySlug(slug);
  if (!existingPage) {
    throw new Error(`Page not found: ${slug}`);
  }

  const updatedPage = { ...existingPage, ...updates };
  
  // Validate the updated page data
  const validation = PageTemplateAPI.validatePageData(updatedPage);
  if (!validation.isValid) {
    throw new Error(`Invalid page data: ${validation.errors.join(', ')}`);
  }

  // In a real implementation, you would update in CMS/database here
  console.log('Updating page:', updatedPage);
  
  return {
    success: true,
    pageId: updatedPage.id
  };
};

export default TemplateExample;

