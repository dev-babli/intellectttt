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
  // Combine problems and solutions into work items format
  const workItems = [
    ...problems.map((problem, index) => ({
      id: `problem-${index}`,
      icon: [icon1, icon3, icon5][index % 3], // Rotate through odd-numbered icons for problems
      title: problem.title || `Challenge ${index + 1}`,
      content: problem.description || problem,
      type: 'problem'
    })),
    ...solutions.map((solution, index) => ({
      id: `solution-${index}`,
      icon: [icon2, icon4, icon6][index % 3], // Rotate through even-numbered icons for solutions
      title: solution.title || `Solution ${index + 1}`,
      content: solution.description || solution,
      type: 'solution'
    }))
  ];

  // If no items provided, use default content
  const displayItems = workItems.length > 0 ? workItems : [
    {
      id: 1,
      icon: icon1,
      title: 'Complex AI Integration',
      content: 'Organizations struggle with integrating AI solutions into existing systems, facing compatibility issues and steep learning curves.',
      type: 'problem'
    },
    {
      id: 2,
      icon: icon2,
      title: 'Seamless Integration',
      content: 'Our expert team provides end-to-end AI integration services, ensuring smooth implementation and minimal disruption to your operations.',
      type: 'solution'
    },
    {
      id: 3,
      icon: icon3,
      title: 'Lack of AI Expertise',
      content: 'Many companies lack the internal expertise needed to develop and maintain sophisticated AI solutions.',
      type: 'problem'
    },
    {
      id: 4,
      icon: icon4,
      title: 'Expert Guidance',
      content: 'We provide comprehensive AI consulting and development services, bringing deep expertise to every project.',
      type: 'solution'
    },
    {
      id: 5,
      icon: icon5,
      title: 'Scalability Concerns',
      content: 'AI solutions often fail to scale with business growth, leading to performance bottlenecks and increased costs.',
      type: 'problem'
    },
    {
      id: 6,
      icon: icon6,
      title: 'Scalable Architecture',
      content: 'Our AI solutions are built with scalability in mind, ensuring they grow with your business needs.',
      type: 'solution'
    }
  ];

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
            {displayItems.map((item) => (
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
        </div>
      </div>
    </section>
  );
};

export default AtomicProblemSolution;
