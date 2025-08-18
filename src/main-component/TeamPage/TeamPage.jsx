import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import Teams from '../../api/team'
import Header from '../../components/header/Header';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Bg from '../../images/bg/page_bg01.jpg'
import CtaSection from '../../components/CtaSection/CtaSection';
import icon from '../../images/icon/cap.svg'
import bg from '../../images/team/team-bg.jpg'
import WorkSection from './work';

const TeamPage = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    
    return (
        <Fragment>
            <div className='body_wrap sco_agency'>
                <Header />
                <section className="page-title pt-200 pos-rel bg_img" style={{ 
                    backgroundImage: `url(${Bg})`,
                    padding: '6rem 0',
                    position: 'relative',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>
                    <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
                        <div className="page-title-wrap">
                            <div className="row mt-none-30 align-items-end" style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '2rem',
                                margin: '0',
                                alignItems: 'flex-end'
                            }}>
                                <div className="col-lg-7 mt-30" style={{ 
                                    flex: '1 1 500px',
                                    minWidth: '300px',
                                    marginTop: '0'
                                }}>
                                    <div className="page-title-box">
                                        <span className="sub-title" style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            color: '#3b82f6',
                                            fontSize: '0.875rem',
                                            fontWeight: '600',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            marginBottom: '1rem',
                                        }}>
                                            <img src={icon} alt="" style={{ width: '1rem', height: '1rem' }} />
                                            Our Team
                                        </span>
                                        <h2 className="title" style={{
                                            fontSize: '2.5rem',
                                            fontWeight: '700',
                                            color: '#1f2937',
                                            lineHeight: '1.2',
                                            letterSpacing: '-0.01em',
                                            margin: '0',
                                        }}>
                                            Meet the talented team driving innovation, expertise, and your digital success
                                        </h2>
                                    </div>
                                </div>
                                <div className="col-lg-5 mt-30" style={{ 
                                    flex: '1 1 300px',
                                    minWidth: '250px',
                                    marginTop: '0'
                                }}>
                                    <div className="count-box" style={{
                                        background: '#ffffff',
                                        borderRadius: '12px',
                                        padding: '2rem',
                                        textAlign: 'center',
                                        boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                                        border: '1px solid rgba(0,0,0,0.05)',
                                    }}>
                                        <h2 className="number" style={{
                                            fontSize: '3rem',
                                            fontWeight: '800',
                                            color: '#3b82f6',
                                            margin: '0 0 0.5rem 0',
                                            lineHeight: '1',
                                        }}>
                                            12 <span className="suffix" style={{ fontSize: '2rem' }}>+</span>
                                        </h2>
                                        <span className="text" style={{
                                            color: '#6b7280',
                                            fontSize: '1rem',
                                            fontWeight: '500',
                                            lineHeight: '1.4',
                                        }}>
                                            Professional Team <br /> Members
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="team pt-55 pb-130" style={{ 
                    padding: '4rem 0',
                    background: '#f8fafc'
                }}>
                    <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
                        <div className="row mt-none-30" style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '2rem',
                            margin: '0'
                        }}>
                            {Teams.map((team, tsm) => (
                                <div className="col-xl-4 col-lg-6 col-md-6 mt-30" key={tsm} style={{ 
                                    flex: '1 1 350px',
                                    minWidth: '300px',
                                    marginTop: '0'
                                }}>
                                    <div className="team-item" style={{
                                        background: '#ffffff',
                                        borderRadius: '12px',
                                        overflow: 'hidden',
                                        boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                                        border: '1px solid rgba(0,0,0,0.05)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-6px)',
                                            boxShadow: '0 16px 48px rgba(0,0,0,0.12)',
                                        }
                                    }}>
                                        <div className="xb-item--content pos-rel" style={{ position: 'relative' }}>
                                            <div className="xb-item--img" style={{
                                                height: '200px',
                                                overflow: 'hidden',
                                            }}>
                                                <img 
                                                    src={bg} 
                                                    alt="" 
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        transition: 'transform 0.3s ease',
                                                        '&:hover': {
                                                            transform: 'scale(1.05)',
                                                        }
                                                    }}
                                                />
                                            </div>
                                            <div className="xb-item--item" style={{
                                                position: 'absolute',
                                                top: '1rem',
                                                right: '1rem',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '0.5rem',
                                            }}>
                                                <span className="xb-item--skill" style={{
                                                    background: '#3b82f6',
                                                    color: '#ffffff',
                                                    padding: '0.25rem 0.75rem',
                                                    borderRadius: '4px',
                                                    fontSize: '0.75rem',
                                                    fontWeight: '600',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.05em',
                                                }}>
                                                    {team.exprience}
                                                </span>
                                                <span className="xb-item--reating" style={{
                                                    background: '#ffffff',
                                                    color: '#f59e0b',
                                                    padding: '0.25rem 0.75rem',
                                                    borderRadius: '4px',
                                                    fontSize: '0.75rem',
                                                    fontWeight: '600',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.25rem',
                                                }}>
                                                    <i className="fas fa-star" style={{ fontSize: '0.7rem' }}></i> {team.rating}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="xb-item--inner ul_li_between align-items-end" style={{
                                            padding: '1.5rem',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-end',
                                        }}>
                                            <div className="xb-item--holder" style={{ flex: '1' }}>
                                                <div className="xb-item--avatar" style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    borderRadius: '50%',
                                                    overflow: 'hidden',
                                                    marginBottom: '1rem',
                                                    border: '3px solid #3b82f6',
                                                }}>
                                                    <img 
                                                        src={team.tImg} 
                                                        alt="" 
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover',
                                                        }}
                                                    />
                                                </div>
                                                <div className="xb-item--author">
                                                    <h3 className="xb-item--name" style={{
                                                        fontSize: '1.125rem',
                                                        fontWeight: '700',
                                                        color: '#1f2937',
                                                        margin: '0 0 0.25rem 0',
                                                        lineHeight: '1.2',
                                                    }}>
                                                        {team.name}
                                                    </h3>
                                                    <span className="xb-item--desig" style={{
                                                        color: '#6b7280',
                                                        fontSize: '0.875rem',
                                                        fontWeight: '500',
                                                    }}>
                                                        {team.title}
                                                    </span>
                                                </div>
                                            </div>
                                            <ul className="xb-item--social-link ul_li" style={{
                                                listStyle: 'none',
                                                padding: '0',
                                                margin: '0',
                                                display: 'flex',
                                                gap: '0.75rem',
                                            }}>
                                                <li>
                                                    <Link onClick={ClickHandler} to="/team" style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        width: '36px',
                                                        height: '36px',
                                                        background: '#3b82f6',
                                                        color: '#ffffff',
                                                        borderRadius: '50%',
                                                        textDecoration: 'none',
                                                        transition: 'all 0.2s ease',
                                                        '&:hover': {
                                                            background: '#2563eb',
                                                            transform: 'scale(1.1)',
                                                        }
                                                    }}>
                                                        <i className="fab fa-linkedin-in" style={{ fontSize: '0.875rem' }}></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link onClick={ClickHandler} to="/team" style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        width: '36px',
                                                        height: '36px',
                                                        background: '#1da1f2',
                                                        color: '#ffffff',
                                                        borderRadius: '50%',
                                                        textDecoration: 'none',
                                                        transition: 'all 0.2s ease',
                                                        '&:hover': {
                                                            background: '#0d8bd9',
                                                            transform: 'scale(1.1)',
                                                        }
                                                    }}>
                                                        <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.6883 7.62176L17.2244 0H15.6756L10.0002 6.61789L5.46738 0H0.239258L7.09382 10.0074L0.239258 18H1.7882L7.7815 11.0113L12.5685 18H17.7967L10.6879 7.62176H10.6883ZM2.3463 1.16972H4.72537L15.6763 16.8835H13.2972L2.3463 1.16972Z" fill="currentColor" />
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
                <WorkSection />
                <CtaSection />
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default TeamPage;
