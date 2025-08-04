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
    title: 'Vision-Driven Talent',
    content: 'Our team is united by a shared vision and passion for innovation, empowering each individual to contribute meaningfully and drive impactful results.',
  },
  {
    id: 2,
    icon: icon2,
    title: 'Collaborative Culture',
    content: 'We believe the best ideas emerge through teamwork. Our inclusive, cross-functional collaboration helps every team member feel supported and valued.',
  },
  {
    id: 3,
    icon: icon3,
    title: 'Ownership & Empowerment',
    content: 'From day one, you are encouraged to take ownership of your work. We trust our people with autonomy, empowering them to lead initiatives and make decisions confidently.',
  },
  {
    id: 4,
    icon: icon4,
    title: 'Performance with Purpose',
    content: 'We align personal growth with business goals, creating a results-driven environment where your efforts directly shape our collective success.',
  },
  {
    id: 5,
    icon: icon5,
    title: 'Diversity that Fuels Innovation',
    content: 'Our strength lies in our diversity. A mix of backgrounds, perspectives, and experiences fuels creative thinking and fosters a culture of continuous learning.',
  },
  {
    id: 6,
    icon: icon6,
    title: 'Passion Meets Purpose',
    content: 'We’re not just coworkers—we’re a purpose-driven community. Our team brings energy, empathy, and dedication to everything we do, making work deeply fulfilling.',
  },
];


const WorkSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className={`work mt-50 pb-130 ${props.bg}`}>
            <div className="container">
                <div className="sec-title--two text-center mb-60">
                    {/* <div className="sub-title">
                        <img src={iIcon} alt="" />
                        Why work with us
                    </div> */}
                    <h2 className="title">What makes our team the best?</h2>
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
