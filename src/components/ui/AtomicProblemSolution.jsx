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

const AtomicProblemSolution = ({
  title = "The Challenge & Our Solution",
  subtitle = "We understand your pain points and have the expertise to solve them",
  problems = [],
  solutions = [],
  variant = "default",
  theme = "light"
}) => {
  // Create items with only solutions
  const displayItems = [];
  
  // If we have solutions, create items
  if (solutions.length > 0) {
    solutions.forEach((solution, i) => {
      displayItems.push({
        id: i + 1,
        icon: [icon1, icon2, icon3, icon4, icon5, icon6][i % 6],
        title: solution.title || `Solution ${i + 1}`, // Solution title
        content: solution.description || solution, // Solution description
      });
    });
  }

  // If no items provided, use default content
  const defaultItems = [
    {
      id: 1,
      icon: icon1,
      title: 'Vetted IT Talent Pool',
      content: 'Access to pre-vetted, skilled IT professionals ready to contribute to your projects immediately.'
    },
    {
      id: 2,
      icon: icon2,
      title: 'Flexible Staffing Solutions',
      content: 'Flexible staffing options that scale with your project needs and business requirements.'
    },
    {
      id: 3,
      icon: icon3,
      title: 'Rapid Team Scaling',
      content: 'Quick team scaling capabilities that allow you to meet project deadlines and business objectives.'
    }
  ];

  let finalDisplayItems = displayItems.length > 0 ? displayItems : defaultItems;
  
  // Ensure even number of items by adding a placeholder if odd
  if (finalDisplayItems.length % 2 !== 0) {
    finalDisplayItems.push({
      id: finalDisplayItems.length + 1,
      icon: icon4,
      title: 'Custom Solutions',
      content: 'Tailored staffing solutions designed specifically for your unique business requirements and industry needs.'
    });
  }

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }

  return (
    <section className={`work mt-50 pb-130 ${theme === "dark" ? "dark-bg" : ""}`}>
      <div className="container">
        <div className="sec-title--two text-center mb-60">
          <h2 className="title">{title}</h2>
          {subtitle && (
            <p className="subtitle" style={{ 
              marginTop: '15px', 
              fontSize: '0.95rem', 
              color: '#64748b',
              maxWidth: '400px',
              margin: '15px auto 0',
              lineHeight: '1.4',
              whiteSpace: 'normal',
              wordWrap: 'break-word',
              overflowWrap: 'break-word'
            }}>
              {subtitle}
            </p>
          )}
        </div>
        <div className="tp-work-wrapp">
          <div className="row mt-none-30">
            {finalDisplayItems.map((item) => (
              <div className="col-lg-6 mt-30" key={item.id}>
                <div className="tp-work-item">
                  <div className="xb-item--inner ul_li">
                    <div className="xb-item--icon">
                      <img src={item.icon} alt={item.title} />
                    </div>
                    <div className="xb-item--holder">
                      <h3 className="xb-item--title" style={{ 
                        fontSize: '1.3rem', 
                        fontWeight: '700', 
                        color: '#1e293b',
                        marginBottom: '10px',
                        lineHeight: '1.3'
                      }}>{item.title}</h3>
                      <p className="xb-item--content" style={{ 
                        color: '#64748b', 
                        lineHeight: '1.6',
                        fontSize: '1rem',
                        margin: 0
                      }}>{item.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtomicProblemSolution;
