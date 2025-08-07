import React, { Fragment } from "react";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import Teams from "../../api/team";
import WorkSectionTeam from "../TeamPage/workteam";
import Footer from "../../components/footer/Footer";

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
          title="Who We Are"
          subtitle="At Intellectt, we are not just adapting to the technology revolution—we are leading it."
          buttonText="TALK TO OUR EXPERTS"
          buttonLink="#contact"
          backgroundImage="/Our-team.webp"
        />

        {/* Leadership Team Section */}
        <section className="team pt-30">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="sd-ser-content_wrap pb-60">
                  <div className="container">
                    <div className="sd-ser-content">
                      <h2 className="sd-title mt-3 mb-3 text-center">
                        Leadership Team
                      </h2>
                      <div className="row justify-content-center">
                        <div className="col-lg-10">
                          <p
                            className="sd-content mb-3 text-left"
                            style={{ fontSize: "1.1rem", lineHeight: "1.6" }}
                          >
                            Our leadership brings together decades of global
                            experience in technology, business transformation,
                            and digital innovation. Guided by a vision to
                            reshape industries through advanced IT solutions,
                            our team fosters a culture of excellence,
                            collaboration, and continuous learning.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Visionary Leaders Heading */}
        <section className="team pt-30">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="sd-ser-content_wrap pb-30">
                  <div className="container">
                    <div className="sd-ser-content">
                      <h2 className="sd-title mt-3 mb-3 text-center">
                        Meet the Visionary Leaders
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Kranthi Kiran Profile */}
        <section className="team pt-30">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <TeamIntroSection
                  imageSrc="/1716540118_12b16ee785c09331faa8.png"
                  imageAlt="Kranthi Kiran Damuluri - Founder & CEO"
                  testimonialText="Kranthi Kiran Damuluri is the visionary leader behind Intellectt Inc.'s evolution into a global force in AI, Data Engineering, and Digital Transformation."
                  testimonialName="Kranthi Kiran Damuluri"
                  testimonialTitle="Founder & Chief Executive Officer, Intellectt Inc"
                  sectionOverline="ABOUT KRANTHI"
                  sectionTitle="The Visionary Leader"
                  sectionDescription="With a strong foundation in engineering, technology, and business operations, Kranthi has over 15 years of experience driving growth and building high-performing global teams. Under his leadership, Intellectt has transitioned from its staffing roots to become a full-fledged IT Development and Consulting company, delivering intelligent, secure, and scalable solutions to clients worldwide. His deep expertise spans across industries such as Healthcare, Life Sciences, and Technology, where he has successfully led complex projects, streamlined operations, and built future-ready digital ecosystems. Kranthi's passion lies in solving real-world challenges through innovation. His commitment to excellence, operational efficiency, and technology-driven growth has been instrumental in positioning Intellectt as a trusted partner for businesses looking to embrace the future. With a proven track record of building global delivery capabilities, mentoring diverse teams, and fostering a culture of innovation, Kranthi continues to lead Intellectt's mission to engineer intelligent solutions that empower businesses to operate smarter, faster, and more efficiently."
                  buttonText="LEARN MORE ABOUT KRANTHI"
                  onButtonClick={() => console.log("Clicked Learn More")}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Kiran Madala Profile */}
        <section className="team pt-30">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <TeamIntroSection
                  imageSrc="/1716535506_94d96e32c277ff223790.png"
                  imageAlt="Kiran Madala - President"
                  testimonialText="Kiran Madala brings strategic leadership and operational excellence to Intellectt, driving innovation and sustainable growth across all business functions."
                  testimonialName="Kiran Madala"
                  testimonialTitle="President at INTELLECTT INC"
                  sectionOverline="ABOUT KIRAN"
                  sectionTitle="The Strategic Leader"
                  sectionDescription="Kiran Madala serves as President at Intellectt Inc, bringing strategic vision and operational excellence to drive the company's continued growth and success. With extensive experience in business operations and technology leadership, Kiran plays a pivotal role in shaping Intellectt's strategic direction and ensuring operational excellence across all business functions. His leadership combines deep industry knowledge with a forward-thinking approach to technology and business transformation."
                  buttonText="LEARN MORE ABOUT KIRAN"
                  onButtonClick={() => console.log("Clicked Learn More")}
                  reversed={true}
                  textAlign="left"
                />
              </div>
            </div>
          </div>
        </section>

        {/* <ProfileCard /> */}
        <WorkSectionTeam />
        <Footer />
      </div>
    </Fragment>
  );
};

export default LeaderShipTeam;
