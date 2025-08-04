import React, { Fragment } from "react";
import WhyChoose from "./WhyChoose";
// import FunFactSection from "../../components/Help-Desk-Components/FunFact/FunFact";
import PartnerSection from "../../components/Help-Desk-Components/PartnerSection";
// import GallerySection from "../CareerPage/Gallery";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
// import WhoAreWeSection from "../../components/WhoAreWeSection/WhoAreWeSection";
// import OurStorySection from "../../components/OurStorySection/OurStorySection";
import FeatureSection2 from "../../components/Help-Desk-Components/FeatureSection/FeatureSection";
// import GlobalPresence from "../../components/GlobalPresence/GlobalPresence";
// import MissionVision from "../../components/MissionVision/MissionVision";
import Hero from "../../components/hero/hero";
import FeatureSection from "../../components/It-Services-Components/FeatureSection";
import About from "../../components/It-Services-Components/about/about";
// import ServiceSection from "../../components/It-Services-Components/ServiceSection/ServiceSection";
import BrandSection from "../../components/It-Services-Components/BrandSection/BrandSection";
import FunFactSection from "../../components/It-Services-Components/FunFact/FunFact";

// const paragraphs = [
//   "At Intellectt, we are not just adapting to the technology revolution—we are leading it...",
//   "Our mission is to empower organizations with intelligent, scalable, and secure digital ecosystems...",
//   "With a dedicated focus on Artificial Intelligence, Machine Learning, Data Engineering, Cloud...",
// ];

// const stats = [
//   { value: "50+", label: "Technologies" },
//   { value: "95%", label: "Customer Retention Rate" },
//   { value: "10+", label: "Offices Worldwide" },
//   { value: "3x", label: "Workforce Upskilling" },
// ];
const AboutUsPage = (props) => {
  return (
    <Fragment>
      <div className="body_wrap sco_agency">
        <HeroSectionTitle
          title="About Us"
          subtitle="We are a global leader in data solutions, transforming complex challenges into strategic opportunities. Our journey is a testament to innovation, resilience, and excellence."
          buttonText="TALK TO OUR EXPERTS"
          buttonLink="#contact"
          backgroundImage="/about-us-header.webp"
        />

        <div className="bg-white pt-100">
          <FeatureSection />
          <About />
        </div>
        {/* <ServiceSection /> */}

        <FunFactSection />

        {/* <WhoAreWeSection
          heading="Who Are We?"
          subheading="About Intellectt"
          paragraphs={paragraphs}
          stats={stats}
        /> */}
        {/* <OurStorySection /> */}

        <div style={{ backgroundColor: "#f6f6f8" }}>
          <WhyChoose />
        </div>

        {/* <FeatureSection2 /> */}
        {/* <FunFactSection /> */}

        {/* <MissionVision /> */}
        <Hero />
        <PartnerSection />

        {/* <GallerySection pClass={"pt-130"} /> */}
      </div>
    </Fragment>
  );
};
export default AboutUsPage;
