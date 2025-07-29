import React from 'react';
import cta from '../../images/cta/clip-bord.png'
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";


const CtaSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className={`cta ${props.cClass}`}>
            <div className="container">
                <div className="cta-wrap">
                    <div className="cta-inner ul_li_between">
                        <Fade direction='left' triggerOnce={'false'} duration={1000} delay={9}>
                            <div>
                                <div className="xb-item--holder wow fadeInLeft" data-wow-delay="100ms"
                                    data-wow-duration="600ms">
                                    <h2 className="xb-item--title">Fuel your Innovation Today</h2>
                                    {/* <span className="xb-item--content">Unlocking Value With Fresh Perspectives </span> */}
                                    <div className="xb-btn mt-45">
                                        <Link onClick={ClickHandler} to="/contact" className="thm-btn thm-btn--aso thm-btn--aso_white">Talk to our Experts</Link>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        <Fade direction='right' triggerOnce={'false'} duration={1000} delay={9}>
                            <div>
                                <div className="cta-right_img wow fadeInRight" data-wow-delay="150ms" data-wow-duration="600ms">
                                    <img className="updown" src={cta} alt="" />
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CtaSection;