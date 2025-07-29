
import React, { useState } from 'react';
import hicon from '../../images/icon/magic.svg'
import { Fade } from "react-awesome-reveal";
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

const FaqSection = (props) => {

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <section className="faq pb-140">
            <div className="container">
                <div className="sec-title--two text-center mb-60">
                    <Fade direction='down' triggerOnce={'false'} duration={1000} delay={9}>
                        <div>
                            <div className="sub-title wow fadeInDown" data-wow-duration="600ms"><img
                                src={hicon} alt="" />FAQ’s</div>
                        </div>
                    </Fade>
                    <Fade direction='up' triggerOnce={'false'} duration={1200} delay={9}>
                        <div>
                            <h2 className="title wow fadeInDown" data-wow-delay="150ms" data-wow-duration="600ms">Have a
                                question look here</h2>
                        </div>
                    </Fade>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="xb-faq wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
                            <Accordion open={open} toggle={toggle} className='accordion_box clearfix list-unstyled'>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="1" className='acc-btn'><span className="number">01</span> _ What is the work culture like at Intellectt?
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="1" className='acc_body'>
                                        <div className="content">
                                            <p>At Intellectt, our culture is rooted in respect, collaboration, and curiosity. We believe in open communication and supporting each other to do our best work. Whether you’re brainstorming new ideas or tackling challenges, you’ll always find a team ready to help and celebrate your wins.</p>
                                            {/* <ul className="list-unstyled">
                                                <li><i className="far fa-check"></i>The age and authority of your site.
                                                </li>
                                                <li><i className="far fa-check"></i>Your on-page and off-page
                                                    optimization.</li>
                                                <li><i className="far fa-check"></i>Any penalties pulling your ranking
                                                    down.</li>
                                            </ul> */}
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="2" className='acc-btn'><span className="number">02</span> _ Do you offer flexible or remote work options?
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="2" className='acc_body'>
                                        <div className="content">
                                            <p>Yes, we understand that flexibility is essential for a healthy work-life balance. Intellectt offers hybrid work arrangements and fully remote options for many roles. Our teams are equipped with the tools and processes to collaborate effectively, no matter where you choose to work.</p>
                                            {/* <ul className="list-unstyled">
                                                <li><i className="far fa-check"></i>The age and authority of your site.
                                                </li>
                                                <li><i className="far fa-check"></i>Your on-page and off-page
                                                    optimization.</li>
                                                <li><i className="far fa-check"></i>Any penalties pulling your ranking
                                                    down.</li>
                                            </ul> */}
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="3" className='acc-btn'><span className="number">03</span> _ How does Intellectt support professional development?
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="3" className='acc_body'>
                                        <div className="content">
                                            <p>We invest in our employees’ growth through mentorship programs, training workshops, and access to learning resources. From technical certifications to leadership development, we encourage everyone to keep learning and to build the skills that move their careers forward.</p>
                                            {/* <ul className="list-unstyled">
                                                <li><i className="far fa-check"></i>The age and authority of your site.
                                                </li>
                                                <li><i className="far fa-check"></i>Your on-page and off-page
                                                    optimization.</li>
                                                <li><i className="far fa-check"></i>Any penalties pulling your ranking
                                                    down.</li>
                                            </ul> */}
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="4" className='acc-btn'><span className="number">04</span> _ What benefits and perks do employees receive?
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="4" className='acc_body'>
                                        <div className="content">
                                            <p>Intellectt offers comprehensive benefits, including health insurance, paid time off, and wellness programs. You’ll also enjoy perks like modern office spaces, team outings, learning stipends, and flexible schedules designed to help you stay happy and motivated.</p>
                                            {/* <ul className="list-unstyled">
                                                <li><i className="far fa-check"></i>The age and authority of your site.
                                                </li>
                                                <li><i className="far fa-check"></i>Your on-page and off-page
                                                    optimization.</li>
                                                <li><i className="far fa-check"></i>Any penalties pulling your ranking
                                                    down.</li>
                                            </ul> */}
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="5" className='acc-btn'><span className="number">05</span> _ How does the company recognize and reward achievements?
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="5" className='acc_body'>
                                        <div className="content">
                                            <p>We believe great work deserves recognition. Intellectt celebrates individual and team accomplishments through awards, performance bonuses, and public appreciation. Regular feedback and growth conversations ensure your contributions are valued and rewarded.</p>
                                            {/* <ul className="list-unstyled">
                                                <li><i className="far fa-check"></i>The age and authority of your site.
                                                </li>
                                                <li><i className="far fa-check"></i>Your on-page and off-page
                                                    optimization.</li>
                                                <li><i className="far fa-check"></i>Any penalties pulling your ranking
                                                    down.</li>
                                            </ul> */}
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default FaqSection;
