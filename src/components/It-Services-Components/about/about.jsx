import React, { useState } from 'react';
import about1 from '../../../images/about/img-01.png';
import about2 from '../../../images/about/img-02.png';
import about3 from '../../../images/about/img-03.png';
import aIcon1 from '../../../images/icon/about-icon01.png';
import aIcon2 from '../../../images/icon/about-icon02.png';
import aIcon3 from '../../../images/icon/about-icon03.png';

const About = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const aboutItems = [
    {
      img: about1,
      icon: aIcon1,
      heading: 'About us',
      content:
        'Intellectt IT Services provides innovative, scalable solutions to drive business growth and efficiency. Our expert team ensures your business remains competitive with tailored IT services and reliable support for long-term success.',
    },
    {
      img: about2,
      icon: aIcon2,
      heading: 'Our mission',
      content:
        'To deliver cutting-edge IT solutions that drive business growth, boost productivity, and ensure long-term helping competitiveness. We are dedicated to scalable, reliable technology and exceptional support.',
    },
    {
      img: about3,
      icon: aIcon3,
      heading: 'Our vision',
      content:
        'Our Vision is to empower businesses with innovative IT solutions that drive growth, efficiency, and long-term success. We deliver scalable technology to keep you competitive and ready for the future.',
    },
  ];

  return (
    <section className="about pb-140">
      <div className="container">
        <div className="about-wrap mt-none-30 ul_li_between">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className={`about-item mt-30 xb-mouseenter wow fadeInUp ${activeIndex === index ? 'active' : ''}`}
              data-wow-delay={`${index * 150}ms`}
              data-wow-duration="600ms"
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <div>
                <div className="xb-item--img">
                  <img src={item.img} alt="" />
                </div>
                <h3 className="xb-item--heading">
                  <span>
                    <img src={item.icon} alt="" />
                  </span>
                  {item.heading}
                </h3>
                <div className="xb-item--holder">
                  <h3 className="xb-item--title">
                    <span>
                      <img src={item.icon} alt="" />
                    </span>
                    {item.heading}
                  </h3>
                  <p className="xb-item--content">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
