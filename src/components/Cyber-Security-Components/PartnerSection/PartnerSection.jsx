import React, { useEffect, useRef } from "react";
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
import pimg18 from "../../../images/icon/Abbott.webp";

const partnersLeft = [
  { pImg: pimg1 },
  { pImg: pimg2 },
  { pImg: pimg3 },
  { pImg: pimg4 },
  { pImg: pimg5 },
  { pImg: pimg6 },
  { pImg: pimg7 },
  { pImg: pimg8 },
  { pImg: pimg9 },
];

const partnersRight = [
  { pImg: pimg10 },
  { pImg: pimg11 },
  { pImg: pimg12 },
  { pImg: pimg13 },
  { pImg: pimg14 },
  { pImg: pimg15 },
  { pImg: pimg16 },
  { pImg: pimg17 },
  { pImg: pimg18 },
  { pImg: pimg10 },
  { pImg: pimg11 },
  { pImg: pimg12 },
  { pImg: pimg13 },
  { pImg: pimg14 },
  { pImg: pimg15 },
  { pImg: pimg16 },
  { pImg: pimg17 },
  { pImg: pimg18 },
];

const PartnerSection = () => {
  const marqueeLeftRef = useRef(null);
  const marqueeRightRef = useRef(null);

  useEffect(() => {
    const animateMarquee = (marqueeRef) => {
      const marquee = marqueeRef.current;
      const speed = 0.2; // Adjust speed as needed
      let offset = 0;

      if (!marquee) return;

      const marqueeContent = marquee.querySelector(".da-brand_marquee");
      const clone = marqueeContent.innerHTML;
      marqueeContent.insertAdjacentHTML("beforeend", clone);

      const moveMarquee = () => {
        offset -= speed;
        marqueeContent.style.transform = `translateX(${offset}px)`;

        const totalWidth = marqueeContent.scrollWidth / 2;
        if (Math.abs(offset) >= totalWidth) {
          offset = 0;
        }

        requestAnimationFrame(moveMarquee);
      };

      moveMarquee();
    };

    animateMarquee(marqueeLeftRef);
    animateMarquee(marqueeRightRef);
  }, []);

  return (
    <section className="brand mt-90">
      <div className="cs-brand_wrap pt-60 pb-60 pos-rel">
        
        {/* Marquee Left */}
        <div className="cs-brand-inner marquee-left" ref={marqueeLeftRef}>
          <div className="da-brand_marquee">
            {partnersLeft.map((partner, index) => (
              <div className="cs-brand-item" key={index}>
                <div className="xb-inner">
                  <div className="xb-img" style={{ 
                    height: "80px", 
                    width: "160px",
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    padding: "10px",
                    boxSizing: "border-box"
                  }}>
                    <img 
                      src={partner.pImg} 
                      alt={`Brand ${index + 1}`} 
                      style={{ 
                        maxWidth: "100%",
                        maxHeight: "60px",
                        width: "auto",
                        height: "auto",
                        objectFit: "contain",
                        filter: "none",
                        opacity: "1",
                        transition: "all 0.3s ease"
                      }} 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Marquee Right */}
        <div className="cs-brand-inner marquee-right" ref={marqueeRightRef}>
          <div className="da-brand_marquee">
            {partnersRight.map((partner, index) => (
              <div className="cs-brand-item" key={index}>
                <div className="xb-inner">
                  <div className="xb-img" style={{ 
                    height: "80px", 
                    width: "160px",
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    padding: "10px",
                    boxSizing: "border-box"
                  }}>
                    <img 
                      src={partner.pImg} 
                      alt={`Brand ${index + 20}`} 
                      style={{ 
                        maxWidth: "100%",
                        maxHeight: "60px",
                        width: "auto",
                        height: "auto",
                        objectFit: "contain",
                        filter: "none",
                        opacity: "1",
                        transition: "all 0.3s ease"
                      }} 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cs-brand_content">
          <div className="xb-holder">
            <span className="sub-title">
              <span data-parallax='{"x":50,"y":70}'>
                <span className="sub-title--inner"><span>Effective service</span></span>
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.4871 16.9645C18.7081 17.5684 18.1337 18.1603 17.5235 17.9576L1.04049 12.4812C0.386752 12.264 0.32721 11.3626 0.946757 11.0613L7.10885 8.06472C7.6312 7.81065 8.0478 7.38145 8.28597 6.85171L11.0963 0.602306C11.3788 -0.0259072 12.2816 0.00653915 12.5183 0.653458L18.4871 16.9645Z" fill="#F65A0B" />
                </svg>
              </span>
            </span>
            <h2 className="title"> <span>300K clients</span> worldwide</h2>
            <span className="sub-title sub-title--two">
              <span data-parallax='{"x":-50,"y":-70}'>
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.779727 1.06017C0.567847 0.453069 1.15106 -0.130154 1.75818 0.0817293L18.1571 5.80495C18.8075 6.03193 18.8535 6.93416 18.2295 7.22609L12.0231 10.1298C11.497 10.376 11.074 10.7989 10.8279 11.325L7.92409 17.5315C7.63216 18.1554 6.72993 18.1094 6.50295 17.459L0.779727 1.06017Z" fill="#E2EA46" />
                </svg><span className="sub-title--inner"><span>Fast security</span></span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
