import React, { Fragment } from "react";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import GlobalMap from "../GlobalMap/GlobalMap";
import GlobalPresenceCards from "../GlobalPresenceCards/GlobalPresenceCards";
import Footer from "../../components/footer/Footer";

const GlobalPresence = () => {
  return (
    <Fragment>
      <div className="body_wrap sco_agency">

        <HeroSectionTitle
          title="Our Global Presence"
          subtitle="With a strong footprint across continents, we serve diverse markets, bridging cultures and delivering impactful solutions to clients worldwide."
          buttonText="TALK TO OUR EXPERTS"
          buttonLink="#contact"
          backgroundImage="/global.jpg"
        />
       
        <GlobalMap />
        <GlobalPresenceCards />
      </div>
      <Footer />
    </Fragment>
  );
};

export default GlobalPresence;
