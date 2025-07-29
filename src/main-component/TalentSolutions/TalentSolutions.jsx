import React, { Fragment } from "react";


import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";

import ServiceCard from "../../components/ServiceCard/ServiceCard";
import IndustriesSimple from "../../components/LuminCards/IndustriesSimpleold";
import ContactSection from "../../components/It-Services-Components/ContactSection";

const sampleCards = [
  {
    title: "IT Staff Augmentation",
    description: "Quickly scale your tech teams with vetted IT talent.",
    buttonText: "Explore",
    image: "/images/ITstaffaugmentatin.webp",
    url:"/service/talent-solutions/staffing"
  },
  {
    title: "Corp-to-Corp Staffing",
    description: "Flexible business-to-business workforce solutions.",
    buttonText: "Explore",
    image: "/images/Corptocorp.webp",
    url:"/service/talent-solutions/corp"
  },
  {
    title: "Direct Hire & Contract Hire",
    description: "Hire top talent for long-term or project needs.",
    buttonText: "Explore",
    image: "/images/DirectHirecontracthire.webp",
    url:"/service/talent-solutions/direct-hire"
  },
  {
    title: "Healthcare & Life Sciences Staffing",
    description: "Specialized staffing for clinical and medical roles.",
    buttonText: "Explore",
    image: "/images/HealthcareandLifesciencesstaffing.webp",
    url:"/service/talent-solutions/healthcare"
  },
];

const TalentSolutions = () => {
  return (
    <Fragment>
      <div className="body_wrap sco_agency">
     
        {/* <SAPServicesHero /> */}
        <HeroSectionTitle
          title="Tilent Solutions"
          subtitle="Accelerate innovation and efficiency in Engineering & Manufacturing"
          buttonText="TALK TO OUR EXPERTS"
          buttonLink="#contact"
          backgroundImage="/Healthcare-and-Life-sciences.webp"
        />
        <div className="sd-ser-content_wrap pb-110">
            <div className="container">
              <div className="sd-ser-content">
                <h2 className="sd-title text-center mt-5">
                  Empower business growth with agile Talent Solutions
                </h2>
                <p className="sd-content text-center">
                 In today’s rapidly evolving market, access to the right talent at the right time is critical for business success. Our Talent Solutions practice helps organizations scale quickly, bridge skill gaps, and stay competitive with flexible, high-quality workforce strategies.
                </p>
                <p className="sd-content text-center">
                We offer end-to-end talent services—from contract staffing and permanent recruitment to project-based resource deployment and niche skill hiring. Whether you need IT specialists, engineering professionals, or domain-specific consultants, we connect you with top-tier talent tailored to your needs.
                </p>
                <br />
                <p className="sd-content text-center">
                 Our approach blends deep industry knowledge with data-driven hiring practices to deliver reliable, cost-effective, and scalable talent solutions. From startup teams to enterprise-scale engagements, we focus on building long-term value through workforce excellence.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white">
             <ServiceCard cards={sampleCards} />
          </div>
         
          <IndustriesSimple />
          <ContactSection />
      </div>
      
    </Fragment>
  )
}

export default TalentSolutions
