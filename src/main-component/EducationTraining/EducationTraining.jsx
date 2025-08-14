import React, { Fragment } from "react";
import Footer from "../../components/footer/Footer";

import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";
import { EducationTrainingServices } from "../../api/cardService";
import WorkProcess from "../../components/It-Services-Components/WorkProcess/WorkProcess";
import HelpDeskBlogSection from "../../components/Help-Desk-Components/HelpDeskBlogSection/HelpDeskBlogSection";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";

import pImg1 from "../../images/shape/process-shape01.png";
import pImg2 from "../../images/shape/process-shape01.png";
import sIcon1 from "../../images/process/image01.png";
import sIcon2 from "../../images/process/image02.png";
import sIcon3 from "../../images/process/image03.png";
import sIcon4 from "../../images/process/image04.png";
import sIcon5 from "../../images/process/image05.png";

const processList = [
  {
    id: "01",
    title: "Learning Strategy & Platform Assessment",
    subTitle:
      "We analyze your current educational infrastructure, learning objectives, and technology requirements to design a comprehensive digital learning strategy.",
    icon: sIcon1,
  },
  {
    id: "02",
    title: "Digital Learning Platform Architecture",
    subTitle:
      "Our experts design scalable, user-friendly learning management systems that support diverse learning styles and educational delivery methods.",
    icon: sIcon2,
  },
  {
    id: "03",
    title: "Interactive Content & Virtual Classroom Development",
    subTitle:
      "We create engaging virtual learning environments with video conferencing, interactive tools, and collaborative features for enhanced student engagement.",
    icon: sIcon3,
  },
  {
    id: "04",
    title: "AI-Powered Personalization & Analytics",
    subTitle:
      "We implement intelligent tutoring systems, adaptive learning algorithms, and analytics dashboards to personalize education and track student progress.",
    icon: sIcon4,
  },
  {
    id: "05",
    title: "Deployment, Training & Continuous Improvement",
    subTitle:
      "From platform launch to ongoing optimization, we ensure smooth deployment, comprehensive training, and data-driven improvements for better learning outcomes.",
    icon: sIcon5,
  },
];

const shapeImages = [pImg1, pImg2];

const EducationTraining = () => {
  return (
    <Fragment>
      <div className="body_wrap sco_agency">
        <HeroSectionTitle
          title="Education & Training"
          subtitle="Enhance education delivery with digital learning platforms"
          buttonText="TALK TO OUR EXPERTS"
          buttonLink="#contact"
          backgroundImage="/Education-Elearning.webp"
        />
        <WorkProcess
          heading="Digital Learning Transformation"
          description="Our proven 5-step process helps educational institutions and training organizations deliver engaging, personalized, and effective digital learning experiences."
          buttonText="Connect with Education Experts"
          buttonLink="/contact"
          processList={processList}
          shapeImages={shapeImages}
        />
        <ServicesComponent
          services={EducationTrainingServices}
          limit={6}
          showButton={true}
          buttonText="Schedule a Strategy Call"
          buttonLink="/contact"
          sectionStyle={{ backgroundColor: "#f8f9fa" }}
        />
        <HelpDeskBlogSection />
      </div>
      <Footer />

     
        </Fragment>
  );
};

export default EducationTraining;
