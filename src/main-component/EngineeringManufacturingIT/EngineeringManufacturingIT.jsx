import React from "react";
import ServicePageTemplate from "../../components/common/ServicePageTemplate";

const sampleCards = [
  {
    title: "Industry 4.0",
    description: "Digitize operations with smart, connected systems and advanced automation for modern manufacturing.",
    buttonText: "Explore",
    image: "/images/Industry.webp",
    url:"/service/engineering-and-manufacturing-it/industry4",
    features: ["Smart automation", "Connected systems", "Digital transformation"]
  },
  {
    title: "MES Integration & IoT",
    description: "Unify shop floors with IoT and MES connectivity for real-time monitoring and process optimization.",
    buttonText: "Explore",
    image: "/images/mes.webp",
    url:"/service/engineering-and-manufacturing-it/mes",
    features: ["IoT connectivity", "Real-time monitoring", "Process optimization"]
  },
  {
    title: "PLM, CAD & CAE Automation",
    description: "Streamline design and engineering with automation and integrated product lifecycle management.",
    buttonText: "Explore",
    image: "/images/PLM.webp",
    url:"/service/engineering-and-manufacturing-it/plm",
    features: ["PLM integration", "CAD automation", "Design optimization"]
  },
  {
    title: "Smart Factory",
    description: "Enable agile, data-driven manufacturing at scale with intelligent factory solutions and digital twins.",
    buttonText: "Explore",
    image: "/images/Smart-Factory.webp",
    url:"/service/engineering-and-manufacturing-it/twins",
    features: ["Digital twins", "Data-driven insights", "Agile manufacturing"]
  },
];

const EngineeringManufacturingIT = () => {
  return (
    <ServicePageTemplate
      // Hero Section
      heroTitle="Engineering & Manufacturing IT"
      heroSubtitle="Smart Manufacturing Solutions"
      heroButtonText="Get Started"
      heroButtonLink="/contact"
      heroBackgroundImage="/herosectionimages/cloud-computing-illustration.jpg"
      
      // Service Cards
      showServiceCards={true}
      serviceCards={sampleCards}
      serviceCardsTitle="Engineering & Manufacturing Solutions"
      serviceCardsSubtitle="Comprehensive engineering and manufacturing IT services designed to accelerate innovation and drive operational excellence"
      
      // Alliances Section
      showAlliancesSection={true}
    />
  );
};

export default EngineeringManufacturingIT
