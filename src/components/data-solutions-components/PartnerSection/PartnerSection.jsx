import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import pimg1 from "../../../images/brand/automation.png";
import pimg2 from "../../../images/brand/aws.png";
import pimg3 from "../../../images/brand/citrix.png";
import pimg4 from "../../../images/brand/cloud.png";
import pimg5 from "../../../images/brand/ibm.png";
import pimg6 from "../../../images/brand/microsoft.png";
import pimg7 from "../../../images/brand/redhat.png";
import pimg8 from "../../../images/brand/salesforce.png";
import pimg9 from "../../../images/brand/sap.png";
import pimg10 from "../../../images/brand/snowflake.png";


const partners = [
  { pImg: pimg1 },
  { pImg: pimg2 },
  { pImg: pimg3 },
  { pImg: pimg4 },
  { pImg: pimg5 },
  { pImg: pimg6 },
  { pImg: pimg7 },
  { pImg: pimg8 },
  { pImg: pimg9 },
  { pImg: pimg10 },
];

const PartnerSection = () => {
  const marqueeRef = useRef(null);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const speed = 0.5; 
    let offset = 0;

    const marqueeContent = marquee.querySelector(".da-brand_marquee");
    const clone = marqueeContent.innerHTML;
    marqueeContent.insertAdjacentHTML("beforeend", clone);

    const animateMarquee = () => {
      offset -= speed;
      marqueeContent.style.transform = `translateX(${offset}px)`;

      const totalWidth = marqueeContent.scrollWidth / 2;
      if (Math.abs(offset) >= totalWidth) {
        offset = 0;
      }

      requestAnimationFrame(animateMarquee);
    };

    animateMarquee();
  }, []);

  return (
    <section className="brand  pb-140 o-hidden" style={{ backgroundColor: '#fff' }}>
      <div className="container">
        <div className="da-brand_wrapper">
          <h2 className="xb-item--title">
           Alliances <span> & </span> Partnerships
          </h2>
          <div className="da-brand_inner" ref={marqueeRef} style={{ overflow: "hidden" }}>
            <div className="da-brand_marquee" style={{ display: "flex", whiteSpace: "nowrap" }}>
              {partners.map((partner, index) => (
                <div className="xb-item--item" key={index} style={{ margin: "0 20px", flexShrink: 0 }}>
                  <div className="xb-item--logo">
                    <img src={partner.pImg} alt={`Brand ${index}`} style={{ width: "80px" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <p className="xb-item--content">
            Got a question? Need more information? Our expert team is here to help.
          </p>
          <div className="xb-btn mt-25">
            <Link
              onClick={ClickHandler}
              to="/contact"
              className="thm-btn thm-btn--fill_icon thm-btn--data thm-btn--data_blue"
            >
              <div className="xb-item--hidden">
                <span className="xb-item--hidden-text">Book a Discover Call</span>
              </div>
              <div className="xb-item--holder">
                <span className="xb-item--text xb-item--text1">Book a Discover Call</span>
                <div className="xb-item--icon">
                  <i className="fal fa-plus"></i>
                </div>
                <span className="xb-item--text xb-item--text2">Book a Discover Call</span>
              </div>
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
