import React, { Fragment } from "react";
import IntegrationSection from "../../components/Help-Desk-Components/IntegrationSection/IntegrationSection";
import TabsComponent from "../../components/Tabs/TabsComponent";
import PartnerSection from "../../components/Help-Desk-Components/PartnerSection";
import HeroSection from "../../components/HeroSection/HeroSection";
import TestimonialSliderHome from "../../components/TestimonialSliderHome/TestimonialSliderHome";
import WorkFlow from "../../components/Cyber-Security-Components/WorkFlow/WorkFlow";

import LuminCards from "../../components/LuminCards/LuminCards";
import HelpDeskBlogSection from "../../components/Help-Desk-Components/HelpDeskBlogSection/HelpDeskBlogSection";
import IndustriesSimple from "../../components/LuminCards/IndustriesSimpleold";

import IntellecttAISolutions from "../../components/Help-Desk-Components/PartnerSection/IntellecttAiSolutions";
import StackingCardsScroll from "../../components/StaticCard/StackingCardsScroll";
import IntelligenceCore from "../../components/Intelligence/IntelligenceCore";

const HomePage = () => {
  return (
    <Fragment>
      <div className="help_desk">
        <HeroSection />
        <PartnerSection />
        <LuminCards />
        {/* <ImageLinkSection /> */}
        <TabsComponent />
        <IntellecttAISolutions />
        {/* <ImageCardGrid /> */}
        <WorkFlow />

        <IntegrationSection />
        <IndustriesSimple />
        <StackingCardsScroll />
        <IntelligenceCore />

        <TestimonialSliderHome />
        <HelpDeskBlogSection />
      </div>
    </Fragment>
  );
};
export default HomePage;
