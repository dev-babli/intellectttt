import React, { useState } from "react";
import about1 from "../../../images/about/About-Us.webp";
import about2 from "../../../images/about/Our-Mission.webp";
import about3 from "../../../images/about/Our-vision.webp";
import aIcon1 from "../../../images/icon/about-icon01.png";
import aIcon2 from "../../../images/icon/about-icon02.png";
import aIcon3 from "../../../images/icon/about-icon03.png";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const aboutItems = [
    {
      img: about1,
      icon: aIcon1,
      heading: "Tag line",
      content:
        "Innovating with Intelligence. Delivering with Trust.",
    },
    {
      img: about3,
      icon: aIcon3,
      heading: "Our vision",
      content:
        "To be the most trusted global partner in technology and consulting, transforming industries through intelligence, innovation, and uncompromising trust.",
    },
    {
      img: about2,
      icon: aIcon2,
      heading: "Our mission",
      content:
        "At Intellectt, we empower businesses across healthcare, engineering, and technology by delivering intelligent, secure, and scalable solutions. We are committed to: Driving innovation with AI, Cloud, and next-gen technologies. Ensuring compliance and security through global standards (FDA, HIPAA, ISO, ITAR). Accelerating digital transformation with agility and excellence. Building sustainable value through global talent and partnerships.",
    },
  ];

  return (
    <section className="about pb-140">
      <div className="container">
        <div className="about-wrap mt-none-30 ul_li_between">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className={`about-item mt-30 xb-mouseenter wow fadeInUp ${
                activeIndex === index ? "active" : ""
              }`}
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
