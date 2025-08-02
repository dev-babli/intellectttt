import React, { Fragment } from "react";
import TopSection from "../../components/TopSection/TopSection";
import LuminCards from "../../components/LuminCards/LuminCards";
import BottomSection from "../../components/BottomSection/BottomSection";
import IndustriesSimple from "../../components/LuminCards/IndustriesSimpleold";
import StackingCardsScroll from "../../components/StaticCard/StackingCardsScroll";

const HomePage = () => {
  return (
    <Fragment>
      <div className="help_desk" style={{ margin: 0, padding: 0 }}>
        <TopSection />
        <LuminCards />
        <BottomSection />
      </div>
    </Fragment>
  );
};
export default HomePage;
