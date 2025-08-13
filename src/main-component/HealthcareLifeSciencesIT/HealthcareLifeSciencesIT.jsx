import React from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import IndustryTemplate from "../../components/templates/IndustryTemplate";
import { HealthcareServices } from "../../api/cardService";

const HealthcareLifeSciencesIT = () => {
  // Scroll to top when component mounts
  useScrollToTop();

  const sampleCards = [
    {
      title: "Compliance & Regulatory IT",
      description: "Streamline compliance with robust IT frameworks and regulatory management systems for healthcare organizations.",
      buttonText: "Explore",
      image: "/images/CompleianceandRegulatory-IT.webp",
      url: "/service/healthcare-and-life-sciences-it/compliance",
      features: ["Regulatory compliance", "Audit management", "Risk assessment"]
    },
    {
      title: "Clinical Data Platforms",
      description: "Power insights with unified clinical data systems and advanced analytics for patient care optimization.",
      buttonText: "Explore",
      image: "/images/Clinicaldataplatforms.webp",
      url: "/service/healthcare-and-life-sciences-it/data",
      features: ["Clinical analytics", "Patient data management", "Interoperability"]
    },
    {
      title: "AI in Imaging & Diagnostics",
      description: "Accelerate detection with AI-driven diagnostics and intelligent imaging systems for improved patient outcomes.",
      buttonText: "Explore",
      image: "/images/AIinImaginganDiagnostics.webp",
      url: "/service/healthcare-and-life-sciences-it/ai",
      features: ["AI diagnostics", "Medical imaging", "Predictive analytics"]
    },
    {
      title: "HL7 & FHIR Integration",
      description: "Enable seamless health data exchange with HL7 & FHIR standards for improved care coordination.",
      buttonText: "Explore",
      image: "/images/HL7FHIRIntegration.webp",
      url: "/service/healthcare-and-life-sciences-it/hl7",
      features: ["Data interoperability", "Care coordination", "Standards compliance"]
    },
  ];

  return (
    <IndustryTemplate
      // Hero Section Props
      heroTitle="Healthcare & Life Sciences IT"
      heroSubtitle="Digital Health Innovation"
      heroDescription="Empowering Better Healthcare Through Technology. Transform healthcare delivery with advanced technology solutions that improve patient care, streamline operations, and ensure compliance in the rapidly evolving healthcare landscape."
      heroButtonText="Talk to Our Experts"
      heroButtonLink="/contact"
      heroBackgroundImage="/Healthcare-and-Life-sciences.webp"
      heroFeatures={[
        "Compliance & Regulatory IT",
        "Clinical Data Platforms",
        "AI in Imaging & Diagnostics",
        "HL7 & FHIR Integration"
      ]}
      
      // Services Component Props
      showServicesComponent={false}
      
      // Service Cards Props
      showServiceCards={true}
      serviceCards={sampleCards}
      serviceCardsTitle="Healthcare & Life Sciences Solutions"
      serviceCardsSubtitle="Comprehensive healthcare IT services designed to transform patient care and drive medical innovation"
      
      // CTA Section Props
      showCtaSection={true}
      ctaTitle="Transform Healthcare Delivery"
      ctaDescription="Let's discuss how our healthcare IT expertise can improve patient care and operational efficiency"
      ctaButtonText="Get Healthcare Insights"
      ctaButtonLink="/contact"
      
      // Alliances Section Props
      showAlliancesSection={false}
      
      // Blog & Case Study Props
      blogTitle="Healthcare Insights & Updates"
      blogSubtitle="Stay informed with our latest healthcare technology insights, regulatory updates, and industry trends"
      caseStudyTitle="Healthcare Success Stories"
      caseStudySubtitle="Discover how we've helped healthcare organizations improve patient care and operational efficiency"
    />
  );
};

export default HealthcareLifeSciencesIT;
