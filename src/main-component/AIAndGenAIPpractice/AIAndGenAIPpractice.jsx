import React, { Fragment, useState } from "react";

import IndustrieSection from "../../components/IndustrieSection/IndustrieSection";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import WhoAreWeSection from "../../components/WhoAreWeSection/WhoAreWeSection";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
import ContactSection from "../../components/It-Services-Components/ContactSection";
import AlliancesSection from "../../components/AlliancesSection/AlliancesSection";
import IndustriesSimple from "../../components/LuminCards/IndustriesSimpleold";

const paragraphs = [
  "At Intellectt, we are not just adapting to the technology revolution—we are leading it...",
  "Our mission is to empower organizations with intelligent, scalable, and secure digital ecosystems...",
  "With a dedicated focus on Artificial Intelligence, Machine Learning, Data Engineering, Cloud...",
];

const stats = [
  { value: "50+", label: "Technologies" },
  { value: "95%", label: "Customer Retention Rate" },
  { value: "10+", label: "Offices Worldwide" },
  { value: "3x", label: "Workforce Upskilling" },
];

const AIAndGenAIPpractice = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <HeroSectionTitle
            title="AI & Gen AI Industrialization Consulting"
            subtitle="We help companies harness the power of AI and Gen AI to unlock new growth opportunities, automate complex tasks, and make smarter, faster decisions."
            buttonText="TALK TO OUR EXPERTS"
            buttonLink="#contact"
            backgroundImage="/AI-and-gen-ai-practice.webp"
          />
          <WhoAreWeSection
            heading="Who Are We?"
            subheading="About Intellectt"
            paragraphs={paragraphs}
            stats={stats}
          />
          <ServiceSection />
          {/* <AwardSection /> */}
          <AlliancesSection />
           {/* <IndustrieSection /> */}
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

export default AIAndGenAIPpractice;
