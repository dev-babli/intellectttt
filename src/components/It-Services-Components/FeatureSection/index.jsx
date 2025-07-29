import React from 'react';
import { Slide } from "react-awesome-reveal";
import icon1 from '../../../images/icon/user-icon.png'
import icon2 from '../../../images/icon/music-play.png'
import icon3 from '../../../images/icon/dollar-circle.png'

const Features = [
    {
        title: 'Expert team members',
        des: 'We bring together a highly skilled, diverse team committed to delivering top-tier solutions tailored to your business needs.',
        icon: icon1,
        duration: 1000,
    },
    {
        title: 'Fastest customer service',
        des: 'Count on us for prompt, reliable support—we’re dedicated to resolving your queries with speed and efficiency.',
        icon: icon2,
        duration: 1200,
    },
    {
        title: 'Reasonable pricing',
        des: 'We leverage the latest tools and emerging technologies to deliver innovative, future-ready solutions that drive real impact.',
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