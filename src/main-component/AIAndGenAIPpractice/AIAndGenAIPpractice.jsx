import React, { Fragment, useState } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import Footer from "../../components/footer/Footer";
import OptimizedBlogSection from "../../components/OptimizedBlogSection/OptimizedBlogSection";
import OptimizedCaseStudySection from "../../components/OptimizedCaseStudySection/OptimizedCaseStudySection";

import IndustrieSection from "../../components/IndustrieSection/IndustrieSection";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import WhoAreWeSection from "../../components/WhoAreWeSection/WhoAreWeSection";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
import AlliancesSection from "../../components/AlliancesSection/AlliancesSection";

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
  
  // Scroll to top when component mounts
  useScrollToTop();

  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <HeroSectionTitle
            title="AI & Gen AI Industrialization Consulting"
            subtitle="We help companies harness the power of AI and Gen AI to unlock new growth opportunities, automate complex tasks, and make smarter, faster decisions."
            buttonText="TALK TO OUR EXPERTS"
            buttonLink="/contact"
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
          {}
        </div>
      </div>
      
        <OptimizedBlogSection 
          title="Latest Insights & Updates"
          subtitle="Stay informed with our latest industry insights, technical articles, and thought leadership content"
        />
        <OptimizedCaseStudySection 
          title="Success Stories"
          subtitle="Discover how we've helped businesses achieve their digital transformation goals"
        /><Footer />

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
