import React from "react";
import { Link } from "react-router-dom";
import sIcon1 from "../../../images/icon/int-icon.svg";
import sIcon2 from "../../../images/icon/arrow-black.png";
import Icon1 from "../../../images/icon/BD.webp";
import Icon2 from "../../../images/icon/Catalent.webp";
import Icon3 from "../../../images/icon/Cordis.webp";
import Icon4 from "../../../images/icon/Deloitte.webp";
import Icon5 from "../../../images/icon/Edwards-Lifesciences.webp";
import Icon6 from "../../../images/icon/Fidelity.webp";
import Icon7 from "../../../images/icon/Getinge.webp";
import Icon8 from "../../../images/icon/HCL.webp";
import Icon9 from "../../../images/icon/IBM.webp";
import Icon10 from "../../../images/icon/johnson and johnson.webp";
import Icon11 from "../../../images/icon/L&T.webp";
import Icon12 from "../../../images/icon/Livanova.webp";
import Icon13 from "../../../images/icon/Moderna.webp";
import Icon14 from "../../../images/icon/Satate-Street.webp";
import Icon15 from "../../../images/icon/Terumo.webp";
import Icon16 from "../../../images/icon/Vertex.webp";
import Icon17 from "../../../images/icon/Zimmer-Biomet.webp";

const IntegrationSection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section
      id="integration"
      className="integration  pb-120"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="integration-left ul_li_between flex-nowrap">
              <div className="intgration-item--one pos-rel">
                <div className="integration-inner marquee-first">
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon1} alt="" />
                    </div>
                    {/* <span className="xb-title">BD</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon2} alt="" />
                    </div>
                    {/* <span className="xb-title">Catalent</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon3} alt="" />
                    </div>
                    {/* <span className="xb-title">Cordis</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon4} alt="" />
                    </div>
                    {/* <span className="xb-title">Deloitte</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon5} alt="" />
                    </div>
                    {/* <span className="xb-title">Edwards Lifesciences</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon6} alt="" />
                    </div>
                    {/* <span className="xb-title">Fidelity</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon7} alt="" />
                    </div>
                    {/* <span className="xb-title">Getinge</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon8} alt="" />
                    </div>
                    {/* <span className="xb-title">HCL</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon9} alt="" />
                    </div>
                    {/* <span className="xb-title">IBM</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon10} alt="" />
                    </div>
                    {/* <span className="xb-title">Johnson & Johnson</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon11} alt="" />
                    </div>
                    {/* <span className="xb-title">L&T</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon12} alt="" />
                    </div>
                    {/* <span className="xb-title">LivaNova</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon13} alt="" />
                    </div>
                    {/* <span className="xb-title">Moderna</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon14} alt="" />
                    </div>
                    {/* <span className="xb-title">State Street</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon15} alt="" />
                    </div>
                    {/* <span className="xb-title">Terumo</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon16} alt="" />
                    </div>
                    {/* <span className="xb-title">Vertex</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon17} alt="" />
                    </div>
                    {/* <span className="xb-title">Zimmer Biomet</span> */}
                  </div>
                </div>
              </div>
              <div className="intgration-item--two pos-rel">
                <div className="integration-inner marquee-2">
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon1} alt="" />
                    </div>
                    {/* <span className="xb-title">BD</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon2} alt="" />
                    </div>
                    {/* <span className="xb-title">Catalent</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon3} alt="" />
                    </div>
                    {/* <span className="xb-title">Cordis</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon4} alt="" />
                    </div>
                    {/* <span className="xb-title">Deloitte</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon5} alt="" />
                    </div>
                    {/* <span className="xb-title">Edwards Lifesciences</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon6} alt="" />
                    </div>
                    {/* <span className="xb-title">Fidelity</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon7} alt="" />
                    </div>
                    {/* <span className="xb-title">Getinge</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon8} alt="" />
                    </div>
                    {/* <span className="xb-title">HCL</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon9} alt="" />
                    </div>
                    {/* <span className="xb-title">IBM</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon10} alt="" />
                    </div>
                    {/* <span className="xb-title">Johnson & Johnson</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon11} alt="" />
                    </div>
                    {/* <span className="xb-title">L&T</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon12} alt="" />
                    </div>
                    {/* <span className="xb-title">LivaNova</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon13} alt="" />
                    </div>
                    {/* <span className="xb-title">Moderna</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon14} alt="" />
                    </div>
                    {/* <span className="xb-title">State Street</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon15} alt="" />
                    </div>
                    {/* <span className="xb-title">Terumo</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon16} alt="" />
                    </div>
                    {/* <span className="xb-title">Vertex</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon17} alt="" />
                    </div>
                    {/* <span className="xb-title">Zimmer Biomet</span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="integration-middle">
              <div className="xb-inner">
                <div className="sec-title--two sec-title--four">
                  <div className="sub-title">
                    <img src={sIcon1} alt="" />
                    Clients
                  </div>
                  <h2 className="title">Fortune 500 Clients Trust Us</h2>
                </div>
                <div className="xb-btn mt-40">
                  <Link
                    onClick={ClickHandler}
                    to="/pricing"
                    className="thm-btn thm-btn--three thm-btn--black"
                  >
                    See all clients
                    <span>
                      <img className="img--one" src={sIcon2} alt="" />
                      <img className="img--two" src={sIcon2} alt="" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="integration-right ul_li_between flex-nowrap">
              <div className="intgration-item--two pos-rel">
                <div className="integration-inner marquee-first">
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon1} alt="" />
                    </div>
                    {/* <span className="xb-title">BD</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon2} alt="" />
                    </div>
                    {/* <span className="xb-title">Catalent</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon3} alt="" />
                    </div>
                    {/* <span className="xb-title">Cordis</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon4} alt="" />
                    </div>
                    {/* <span className="xb-title">Deloitte</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon5} alt="" />
                    </div>
                    {/* <span className="xb-title">Edwards Lifesciences</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon6} alt="" />
                    </div>
                    {/* <span className="xb-title">Fidelity</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon7} alt="" />
                    </div>
                    {/* <span className="xb-title">Getinge</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon8} alt="" />
                    </div>
                    {/* <span className="xb-title">HCL</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon9} alt="" />
                    </div>
                    {/* <span className="xb-title">IBM</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon10} alt="" />
                    </div>
                    {/* <span className="xb-title">Johnson & Johnson</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon11} alt="" />
                    </div>
                    {/* <span className="xb-title">L&T</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon12} alt="" />
                    </div>
                    {/* <span className="xb-title">LivaNova</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon13} alt="" />
                    </div>
                    {/* <span className="xb-title">Moderna</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon14} alt="" />
                    </div>
                    {/* <span className="xb-title">State Street</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon15} alt="" />
                    </div>
                    {/* <span className="xb-title">Terumo</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon16} alt="" />
                    </div>
                    {/* <span className="xb-title">Vertex</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon17} alt="" />
                    </div>
                    {/* <span className="xb-title">Zimmer Biomet</span> */}
                  </div>
                </div>
              </div>
              <div className="intgration-item--one pos-rel">
                <div className="integration-inner marquee-2">
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon1} alt="" />
                    </div>
                    {/* <span className="xb-title">BD</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon2} alt="" />
                    </div>
                    {/* <span className="xb-title">Catalent</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon3} alt="" />
                    </div>
                    {/* <span className="xb-title">Cordis</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon4} alt="" />
                    </div>
                    {/* <span className="xb-title">Deloitte</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon5} alt="" />
                    </div>
                    {/* <span className="xb-title">Edwards Lifesciences</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon6} alt="" />
                    </div>
                    {/* <span className="xb-title">Fidelity</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon7} alt="" />
                    </div>
                    {/* <span className="xb-title">Getinge</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon8} alt="" />
                    </div>
                    {/* <span className="xb-title">HCL</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon9} alt="" />
                    </div>
                    {/* <span className="xb-title">IBM</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon10} alt="" />
                    </div>
                    {/* <span className="xb-title">Johnson & Johnson</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon11} alt="" />
                    </div>
                    {/* <span className="xb-title">L&T</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon12} alt="" />
                    </div>
                    {/* <span className="xb-title">LivaNova</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon13} alt="" />
                    </div>
                    {/* <span className="xb-title">Moderna</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon14} alt="" />
                    </div>
                    {/* <span className="xb-title">State Street</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon15} alt="" />
                    </div>
                    {/* <span className="xb-title">Terumo</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon16} alt="" />
                    </div>
                    {/* <span className="xb-title">Vertex</span> */}
                  </div>
                  <div className="integration-item">
                    <div className="xb-icon">
                      <img src={Icon17} alt="" />
                    </div>
                    {/* <span className="xb-title">Zimmer Biomet</span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
