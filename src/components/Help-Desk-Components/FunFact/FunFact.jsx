import React from "react";
import CountUp, { useCountUp } from "react-countup";
import sIcon1 from "../../../images/icon/chart-icon02.png";
import sIcon2 from "../../../images/icon/receipt-icon.png";
import sIcon3 from "../../../images/icon/wallet.png";

const FunFactSection = (props) => {
  useCountUp({
    end: "56656",
    ref: "counter",
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

  return (
    <section className="fanfact ">
      <div className="container">
        <div className="fanfact-wrap ul_li_between mt-none-30">
          <div
            className="xb-fanfact-item wow fadeInLeft"
            data-wow-delay="000ms"
            data-wow-duration="600ms"
          >
            <div className="xb-item--holder mb-25 ul_li_between">
              <h2 className="xb-item--number">Proven ROI</h2>
              <span>
                <img src={sIcon1} alt="" />
              </span>
            </div>
            <p className="xb-item--content">
              Customers consistently achieve significant returns on their investments within just a few years.

            </p>
          </div>
          <div
            className="xb-fanfact-item xb-fanfact-item--two wow fadeInLeft"
            data-wow-delay="150ms"
            data-wow-duration="600ms"
          >
            <div className="xb-item--holder mb-25 ul_li_between">
              <h2 className="xb-item--number">
                Fast Payback

              </h2>
              <span>
                <img src={sIcon2} alt="" />
              </span>
            </div>
            <p className="xb-item--content">
             On average, organizations realize full payback in under a year of implementation.

            </p>
          </div>
          <div
            className="xb-fanfact-item xb-fanfact-item--three wow fadeInLeft"
            data-wow-delay="300ms"
            data-wow-duration="600ms"
          >
            <div className="xb-item--holder mb-25 ul_li_between">
              <h2 className="xb-item--number">
                Exceptional Value

              </h2>
              <span>
                <img src={sIcon3} alt="" />
              </span>
            </div>
            <p className="xb-item--content">
              Our solutions drive substantial net value for customers over the long term.
            </p>
          </div>
        </div>
      </div>
      <span id="counter" className="d-none" />
    </section>
  );
};

export default FunFactSection;
