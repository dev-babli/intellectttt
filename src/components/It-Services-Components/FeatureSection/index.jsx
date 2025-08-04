import React from 'react';
import { Slide } from "react-awesome-reveal";
import icon1 from '../../../images/icon/Expert-team-members.png'
import icon2 from '../../../images/icon/Fastest-customer-service.png'
import icon3 from '../../../images/icon/Client-first-approach.png'

const Features = [
    {
        title: 'Expert team members',
        des: 'We bring together skilled professionals to power your growth.',
        icon: icon1,
        duration: 1000,
    },
    {
        title: 'Fastest customer service',
        des: 'Your needs are our priority—always prompt, always dependable.',
        icon: icon2,
        duration: 1200,
    },
    {
        title: 'Client-first approach',
        des: 'We build lasting partnerships through trust, care, and results.',
        icon: icon3,
        duration: 1400,
    },


]


const FeatureSection = (props) => {

    return (
        <div className="feature pb-70">
            <div className="container">
                <div className="feature-wrap">
                    <div className="row mt-none-30" >
                        {Features.map((features, fitem) => (
                            <div className="col-lg-4 col-md-12 mt-30" key={fitem}>
                                <Slide direction='left' triggerOnce={'false'} duration={features.duration}>
                                    <div >
                                        <div className="feature-item ul_li">
                                            <div className="xb-item--icon">
                                                <span><img src={features.icon} alt="" /></span>
                                            </div>
                                            <div className="xb-item--holder">
                                                <h4 className="xb-item--title">{features.title}</h4>
                                                <p className="xb-item--content">{features.des}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeatureSection;