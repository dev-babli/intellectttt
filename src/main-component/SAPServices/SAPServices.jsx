import React from "react";
import ServicePageTemplate from "../../components/common/ServicePageTemplate";

const sampleCards = [
  {
    title: "SAP S/4HANA Migration",
    description: "Seamless upgrade to S/4HANA for modern ERP with zero-downtime migration strategies and comprehensive testing.",
    buttonText: "Explore",
    image: "/images/1.webp",
    url:"/service/sap-services/s4hana",
    features: ["Zero-downtime migration", "Comprehensive testing", "Performance optimization"]
  },
  {
    title: "SAP BTP, ABAP & Fiori Development",
    description: "Smart applications with BTP, ABAP & Fiori for enhanced user experience and business process automation.",
    buttonText: "Explore",
    image: "/images/2.webp",
    url:"/service/sap-services/btp",
    features: ["Custom Fiori apps", "BTP integration", "ABAP development"]
  },
  {
    title: "SAP AMS & Managed Support",
    description: "Reliable SAP support for smooth operations with 24/7 monitoring and proactive issue resolution.",
    buttonText: "Explore",
    image: "/images/3.webp",
    url:"/service/sap-services/s4hana",
    features: ["24/7 monitoring", "Proactive support", "Performance tuning"]
  },
  {
    title: "DevOps & DevSecOps",
    description: "Automate and secure your development pipeline with CI/CD integration and security best practices.",
    buttonText: "Explore",
    image: "/images/3ser.webp",
    url:"/service/sap-services/s4hana",
    features: ["CI/CD automation", "Security scanning", "Infrastructure as code"]
  },
];

const SAPServices = () => {
  return (
    <ServicePageTemplate
      // Hero Section
      heroTitle="SAP Services"
      heroSubtitle="Enterprise Solutions"
      heroButtonText="Talk to Our Experts"
      heroButtonLink="/contact"
      heroBackgroundImage="/images/bg/image-belowhero.webp"
      
      // Service Cards
      showServiceCards={true}
      serviceCards={sampleCards}
      serviceCardsTitle="SAP Solutions & Services"
      serviceCardsSubtitle="Comprehensive SAP services designed to modernize your enterprise and drive digital transformation"
      
      // Alliances Section
      showAlliancesSection={true}
    />
  );
};

export default SAPServices;
