import React from 'react'
import { Link } from 'react-router-dom'
import { Fade } from "react-awesome-reveal";
import icon1 from '../../../images/icon/arrow-black.png'
import cImg from '../../../images/cta/Left.png'
import cImg2 from '../../../images/cta/Right.png'


const CtaSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="cta pos-rel pt-50 pb-135" style={{ backgroundColor: '#ffffff' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="hd-cta text-center">
                            <div className="sec-title--two sec-title--four">
                                {/* <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
                                    <div>
                                        <div className="sub-title wow fadeInUp" data-wow-duration="600ms"><img src={icon} alt="" />Join the best</div>
                                    </div>
                                </Fade> */}
                                <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
                                    <div>
                                        <h2 className="title wow fadeInUp" data-wow-delay="150ms" data-wow-duration="600ms">Fresh Insights & Innovations. </h2>
                                    </div>
                                </Fade>
                            </div>
                            <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
                                <div>
                                    <div className="xb-btn text-center mt-45 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
                                        <Link onClick={ClickHandler} to="/pricing" className="thm-btn thm-btn--three">Stay Informed!
                                            <span>
                                                <img className="img--one" src={icon1} alt="" />
                                                <img className="img--two" src={icon1} alt="" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hd-cta_shape">
                <div>
                    <div className="shape shape--one wow fadeInLeft" data-wow-delay="000ms" data-wow-duration="600ms"><img src={cImg} alt="" /></div>
                </div>
                <div>
                    <div className="shape shape--two wow fadeInRight" data-wow-delay="100ms" data-wow-duration="600ms"><img src={cImg2} alt="" /></div>
                </div>
                {/* <div>
                    <div className="shape shape--three"><img src={line} alt="" /></div>
                </div> */}
            </div>
        </section>
    )
}

export default CtaSection;