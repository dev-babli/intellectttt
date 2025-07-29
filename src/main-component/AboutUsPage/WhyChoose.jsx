import React from 'react';
import sIcon1 from '../../images/icon/eye-icon.svg'
import sIcon2 from '../../images/feature/a1.webp'
import sIcon3 from '../../images/feature/a2.webp'
import sIcon4 from '../../images/feature/a3.webp'


const WhyChoose = (props) => {

    return (
        <section className="feature pt-50">
                <div className="container">
                    <div className="sec-title--two text-center mb-60">
                        {/* <div className="sub-title"><img src={sIcon1} alt=""/> Why choose us</div> */}
                        <h2 className="title">A Culture Built on Trust and Innovation</h2>
                    </div>
                    <div className="row mt-none-30">
                        <div className="col-lg-4 col-md-6 mt-30">
                            <div className="ap-fea-item pos-rel">
                                <div className="xb-item--img"><img src={sIcon2} alt=""/></div>
                                <h3 className="xb-item--content">Cutting-Edge Solutions</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-30">
                            <div className="ap-fea-item pos-rel">
                                <div className="xb-item--img"><img src={sIcon3} alt=""/></div>
                                <h3 className="xb-item--content">High-Performance Teams</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-30">
                            <div className="ap-fea-item pos-rel">
                                <div className="xb-item--img"><img src={sIcon4} alt=""/></div>
                                <h3 className="xb-item--content">Strategic Delivery</h3>
                            </div>
                        </div>
                    </div>
                </div>
             </section>
    );
}

export default WhyChoose;