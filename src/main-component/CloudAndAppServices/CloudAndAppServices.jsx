import React from "react";
import ServicePageTemplate from "../../components/common/ServicePageTemplate";

const sampleCards = [
  {
    title: "API & Integration Services",
    description: "Connect systems with seamless API solutions.",
    buttonText: "Explore",
    image: "/images/4ser.webp",
    url: "/service/cloud-and-application-services/api",
  },
  {
    title: "App Modernization & Microservices",
    description: "Upgrade legacy apps with microservice design.",
    buttonText: "Explore",
    image: "/images/1ser.webp",
    url: "/service/cloud-and-application-services/modernization",
  },
  {
    title: "Azure, AWS & GCP Engineering",
    description: "Cloud engineering on Azure, AWS & GCP.",
    buttonText: "Explore",
    image: "/images/2ser.webp",
    url: "/service/cloud-and-application-services/engineering",
  },
  {
    title: "DevOps & DevSecOps",
    description: "Automate and secure your dev pipeline.",
    buttonText: "Explore",
    image: "/images/3ser.webp",
    url: "/service/cloud-and-application-services/devops",
  },
];

const CloudAndAppServices = () => {
  return (
    <ServicePageTemplate
      // Hero Section
      heroTitle="Cloud & Application Services"
      heroSubtitle="Digital Transformation"
      heroButtonText="Start Your Journey"
      heroButtonLink="/contact"
      heroBackgroundImage="/images/bg/image-belowhero.webp"
      
      // Service Cards
      showServiceCards={true}
      serviceCards={sampleCards}
      serviceCardsTitle="Cloud & Application Solutions"
      serviceCardsSubtitle="Comprehensive cloud and application services designed to accelerate your digital transformation"
      
      // Alliances Section
      showAlliancesSection={true}
    />
  );
};

export default CloudAndAppServices;
