import React from "react";
import FeatureCards from "../feature/FeatureCards";
import IntelligenceCore from "../Intelligence/IntelligenceCore";
import IntegrationSection from "../Help-Desk-Components/IntegrationSection/IntegrationSection";
import HelpDeskBlogSection from "../Help-Desk-Components/HelpDeskBlogSection/HelpDeskBlogSection";
import Footer from "../footer/Footer";
import "./BottomSection.css";

const BottomSection = () => {
  return (
    <section className="bottom-section">
      <FeatureCards />
      <IntelligenceCore />
      <IntegrationSection />
      {/* <TestimonialSliderHome /> */}
      <HelpDeskBlogSection />
      <Footer />
    </section>
  );
};

export default BottomSection;
