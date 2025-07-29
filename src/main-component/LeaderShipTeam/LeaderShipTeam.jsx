import React, { Fragment } from 'react';
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import Teams from '../../api/team'
import bg from '../../images/team/team-bg.jpg'
import { Link } from 'react-router-dom'

const LeaderShipTeam = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
  return (
    <Fragment>
      <div className="body_wrap sco_agency">
        <HeroSectionTitle
          title="Our Leadership Team"
          subtitle="Meet the visionaries and experts who drive our success. "
          buttonText="TALK TO OUR EXPERTS"
          buttonLink="#contact"
          backgroundImage="/Our-team.webp"
        />
        <section className="team pt-55 pb-130">
          <div className="container">
            <div className="row mt-none-30">
              {Teams.map((team, tsm) => (
                <div className="col-xl-4 col-lg-6 col-md-6 mt-30" key={tsm}>
                  <div className="team-item">
                    <div className="xb-item--content pos-rel">
                      <div className="xb-item--img">
                        <img src={bg} alt="" />
                      </div>
                      <div className="xb-item--item">
                        <span className="xb-item--skill">{team.exprience}</span>
                        <span className="xb-item--reating">
                          {/* <i className="fas fa-star"></i> {team.rating} */}
                        </span>
                      </div>
                    </div>
                    <div className="xb-item--inner ul_li_between align-items-end">
                      <div className="xb-item--holder">
                        <div className="xb-item--avatar">
                          <img src={team.tImg} alt="" />
                        </div>
                        <div className="xb-item--author">
                          <h3 className="xb-item--name">{team.name}</h3>
                          <span className="xb-item--desig">{team.title}</span>
                        </div>
                      </div>
                      <ul className="xb-item--social-link ul_li">
                        <li>
                          <Link onClick={ClickHandler} to="#">
                            <i className="fab fa-linkedin-in"></i>
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="#">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.6883 7.62176L17.2244 0H15.6756L10.0002 6.61789L5.46738 0H0.239258L7.09382 10.0074L0.239258 18H1.7882L7.7815 11.0113L12.5685 18H17.7967L10.6879 7.62176H10.6883ZM2.3463 1.16972H4.72537L15.6763 16.8835H13.2972L2.3463 1.16972Z"
                                fill="#111112"
                              />
                            </svg>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default LeaderShipTeam;
