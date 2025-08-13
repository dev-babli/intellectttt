import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import pimg1 from "../../../images/icon/Abbott.webp";
import pimg2 from "../../../images/icon/Bayer.webp";
import pimg3 from "../../../images/icon/Cordis.webp";
import pimg4 from "../../../images/icon/Embecta.webp";
import pimg5 from "../../../images/icon/Exel.webp";
import pimg6 from "../../../images/icon/Integra.webp";
import pimg7 from "../../../images/icon/Livanova.webp";
import pimg8 from "../../../images/icon/Medline.webp";
import pimg9 from "../../../images/icon/Philips.webp";
import pimg10 from "../../../images/icon/ThermoFisher.webp";
import pimg11 from "../../../images/icon/Terumo.webp";
import pimg12 from "../../../images/icon/Xylem.webp";
import pimg13 from "../../../images/icon/Alkermes.webp";
import pimg14 from "../../../images/icon/PSB.webp";
import pimg15 from "../../../images/icon/MTRN.webp";
import pimg16 from "../../../images/icon/Aya.webp";
import pimg17 from "../../../images/icon/Rentschler.webp";

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
  { pImg: pimg11 },
  { pImg: pimg12 },
  { pImg: pimg13 },
  { pImg: pimg14 },
  { pImg: pimg15 },
  { pImg: pimg16 },
  { pImg: pimg17 },
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
