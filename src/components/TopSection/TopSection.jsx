import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import IntellecttAISolutions from "../Help-Desk-Components/PartnerSection/IntellecttAiSolutions";
import TabsComponent from "../Tabs/TabsComponent";
import PartnerSection from "../Help-Desk-Components/PartnerSection";
import "./TopSection.css";

const TopSection = () => {
  return (
    <section className="top-section">
      <HeroSection />
      <IntellecttAISolutions />
      <TabsComponent />
      <PartnerSection />
    </section>
  );
};

export default TopSection;
