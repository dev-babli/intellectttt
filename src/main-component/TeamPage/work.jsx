import React from 'react';
import { Link } from 'react-router-dom'
import icon1 from '../../images/icon/tp-work-icon01.svg'
import icon2 from '../../images/icon/tp-work-icon02.svg'
import icon3 from '../../images/icon/tp-work-icon03.svg'
import icon4 from '../../images/icon/tp-work-icon04.svg'
import icon5 from '../../images/icon/tp-work-icon05.svg'
import icon6 from '../../images/icon/tp-work-icon06.svg'
import iIcon from '../../images/icon/eye-icon.svg'
import iIcon2 from '../../images/icon/sms-white-icon01.svg'


const workItems = [
    {
        id: 1,
        icon: icon1,
        title: 'Unlimited career growth',
        content: 'We offer abundant opportunities for advancement and skill development, empowering you to grow professionally and financially.',
    },
    {
        id: 2,
        icon: icon2,
        title: 'Mentorship & learning',
        content: 'Benefit from peer guidance and structured mentorship programs, including IT Talks and in-house courses tailored to your role.',
    },
    {
        id: 3,
        icon: icon3,
        title: 'Comfortable & inspiring offices',
        content: 'Our modern offices feature gyms, yoga spaces, snacks, foosball tables, VR equipment, and more to keep you energized and creative.',
    },
    {
        id: 4,
        icon: icon4,
        title: 'Competitive compensation',
        content: 'Our diverse portfolio across industries ensures your experience is rewarding and enriches your professional background.',
    },
    {
        id: 5,
        icon: icon5,
        title: 'Flexible career pathways',
        content: 'Ready for a new direction? We’ll help you learn fresh skills or transition to different roles without leaving Intellectt.',
    },
    {
        id: 6,
        icon: icon6,
        title: 'Supportive culture',
        content: 'Intellectt values people, fostering collaboration, respect, and limitless growth opportunities.',
    },
];

const WorkSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className={`work pt-100 pb-130 ${props.bg}`}>
            <div className="container">
                <div className="sec-title--two text-center mb-60">
                    <div className="sub-title">
                        <img src={iIcon} alt="" />
                        Why work with us
                    </div>
                    <h2 className="title">Why people work with us</h2>
                </div>
                <div className="tp-work-wrapp">
                    <div className="row mt-none-30">
                        {workItems.map((item) => (
                            <div className="col-lg-6 mt-30" key={item.id}>
                                <div className="tp-work-item">
                                    <div className="xb-item--inner ul_li">
                                        <div className="xb-item--icon">
                                            <img src={item.icon} alt={item.title} />
                                        </div>
                                        <div className="xb-item--holder">
                                            <h3 className="xb-item--title">{item.title}</h3>
                                            <p className="xb-item--content">{item.content}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className="header-contact text-center mt-60">
                        <Link onClick={ClickHandler} to="/contact" className="thm-btn thm-btn--aso thm-btn--header-black">
                            Let’s talk
                            <img src={iIcon2} alt="" />
                        </Link>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default WorkSection;
