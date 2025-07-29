import React, { Fragment, useState } from "react";

import IndustrieSection from "../../components/IndustrieSection/IndustrieSection";
import About from "../../components/It-Services-Components/about/about";
import About2 from "../../components/Cyber-Security-Components/about/AboutSection";
import CloudAndApp from "../../components/CloudAndApp/CloudAndApp";
import AboutSection from "../../components/Cyber-Security-Components/about/AboutSection";
import icon from "../../images/icon/magic02.svg";
import about1 from "../../images/bg/image-belowhero.webp";
import about2 from "../../images/bg/abt-cnt_bg.png";
import IndustriesSimple from "../../components/LuminCards/IndustriesSimpleold";
import ContactSection from "../../components/It-Services-Components/ContactSection";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import AlliancesSection from "../../components/AlliancesSection/AlliancesSection";

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
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <CloudAndApp />

          {/* <div className="sd-ser-content_wrap pb-110">
            <div className="container">
              <div className="sd-ser-content">
                <h2 className="sd-title text-center mt-5">
                  Boost innovation and efficiency with AI-powered transformation
                </h2>
                <p className="sd-content text-center">
                  In today’s fast-paced digital world, Artificial Intelligence
                  (AI) and Generative AI (GenAI) are reshaping the way
                  businesses operate. Our AI & GenAI Practice helps
                  organizations unlock new growth opportunities, automate
                  complex tasks, and make smarter, faster decisions.
                </p>
                <p className="sd-content text-center">
                  We integrate AI technologies—from machine learning and natural
                  language processing to generative models—to solve real-world
                  business challenges. Whether you want to enhance customer
                  experiences, generate content, or optimize operations, we help
                  you leverage intelligent solutions tailored to your needs.
                </p>
                <br />
                <p className="sd-content text-center">
                  Our approach combines deep technical expertise with
                  industry-specific insights to deliver scalable, ethical, and
                  secure AI solutions. From building custom LLMs to deploying
                  GenAI chatbots, we focus on measurable results that create
                  lasting impact.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <About />
          </div> */}
          <AboutSection
            subtitleIcon={icon}
            subtitle="About Us"
            title="Cloud Engineering Expertise Across Azure, AWS & GCP"
            content="With deep expertise across Azure, AWS, and GCP, Intellectt empowers organizations to modernize, migrate, and manage mission-critical workloads at scale. From cloud-native development and multi-cloud strategies to infrastructure automation and compliance—we help you unlock the full potential of the cloud while reducing costs and increasing agility."
            buttonText="Book a free consultation"
            buttonLink="/contact"
            image={about1}
            badgeImage={about2}
            badgeNumber="50+"
            badgeText="Successful cloud transformations delivered"
          />

          {/* <WorkProcess /> */}
          {/* <IndustrieSection /> */}
          <ServiceCard cards={sampleCards} />
          <AlliancesSection />
          <IndustriesSimple />
          <ContactSection />
        </div>
      </div>

      {/* <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="7e90gBu4pas"
        onClose={() => setOpen(false)}
      /> */}
    </Fragment>
  );
};

export default CloudAndAppServices;
