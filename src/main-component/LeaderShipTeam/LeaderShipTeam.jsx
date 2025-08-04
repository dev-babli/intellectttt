import React, { Fragment } from "react";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import Teams from "../../api/team";
import WorkSectionTeam from "../TeamPage/workteam";

import bg from "../../images/team/team-bg.jpg";
import { Link } from "react-router-dom";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import TeamIntroSection from "../../components/TeamIntroSection/TeamIntroSection";

const LeaderShipTeam = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <Fragment>
      <div className="body_wrap sco_agency">
        <HeroSectionTitle
          title="Visionaries Behind  Our Growth"
          subtitle="Our leadership team brings together decades of industry experience, strategic insight, and a shared commitment to excellence."
          buttonText="TALK TO OUR EXPERTS"
          buttonLink="#contact"
          backgroundImage="/Our-team.webp"
        />

        <section className="team pt-55 " style={{ backgroundColor: "#f5f5f5" }}>
          <div className="container">
            <div
              className="row mt-none-30"
              style={{ justifyContent: "center" }}
            >
              <div className="sd-ser-content_wrap pb-110">
                <div className="container">
                  <div className="sd-ser-content">
                    <h2 className="sd-title text-center mt-5">
                      Meet the Leaders Behind Intellectt
                    </h2>
                    <p className="sd-content text-center">
                      At Intellectt, our leadership team is the driving force
                      behind our vision, culture, and sustained global growth.
                      Comprising seasoned professionals from diverse industries
                      and backgrounds, they bring together strategic foresight,
                      domain expertise, and a relentless pursuit of excellence.
                    </p>
                    <p className="sd-content text-center">
                      With a deep understanding of evolving market dynamics, our
                      leaders guide the organization through innovation,
                      integrity, and a people-first approach. Their combined
                      experience in talent solutions, technology, and business
                      transformation empowers Intellectt to deliver lasting
                      value to clients and career opportunities to professionals
                      across the globe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TeamIntroSection
          imageSrc="/t2.jpg"
          imageAlt="Team Member"
          testimonialText="Kiran M's leadership combines vision with execution, reshaping Intellectt's innovation culture and driving excellence, agility, collaboration, and sustained organizational growth."
          testimonialName="Kiran M"
          testimonialTitle="PRESIDENT"
          sectionOverline="ABOUT KIRAN"
          sectionTitle="The Story of Our Passionate Leader"
          sectionDescription="Kranthi Kiran brings a unique blend of strategic vision and operational excellence to Intellectt Inc. His leadership inspires innovation, drives performance, and strengthens team synergy. With a deep understanding of technology and business dynamics, he plays a pivotal role in shaping the company's future and delivering impactful, scalable solutions."
          buttonText="LEARN MORE ABOUT KIRAN"
          onButtonClick={() => console.log("Clicked Learn More")}
          // reversed={true}
        />
        <TeamIntroSection
          imageSrc="/t3.jpg"
          imageAlt="Team Member"
          testimonialText="Kranthi Kiran's visionary leadership fuels Intellectt's growth, cultivates innovation, strengthens teams, and nurtures a high-performing culture of agility, collaboration, and excellence within the organization."
          testimonialName="Kranthi Kiran"
          testimonialTitle="Founder & CEO"
          sectionOverline="ABOUT KIRAN"
          sectionTitle="The Story of Our Passionate Leader"
          sectionDescription="Kranthi Kiran brings a unique blend of strategic vision and operational excellence to Intellectt Inc. His leadership inspires innovation, drives performance, and strengthens team synergy. With a deep understanding of technology and business dynamics, he plays a pivotal role in shaping the company's future and delivering impactful, scalable solutions."
          buttonText="LEARN MORE ABOUT KIRAN"
          onButtonClick={() => console.log("Clicked Learn More")}
          // reversed={true}
        />

        {/* <ProfileCard /> */}
        <WorkSectionTeam />
      </div>
    </Fragment>
  );
};

export default LeaderShipTeam;
