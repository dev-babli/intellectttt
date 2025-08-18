import React from 'react'
import { Link } from 'react-router-dom'
import ContactForm from '../ContactFrom/ContactForm'
import icon1 from '../../images/icon/call-calling.svg'
import icon2 from '../../images/icon/icon-sms.svg'

const ContactSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className="contact pt-85" style={{ padding: '4rem 0' }}>
                <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
                    <div className="row pb-130 mt-none-30" style={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: '2rem',
                        paddingBottom: '4rem',
                        marginTop: '0'
                    }}>
                        <div className="col-lg-8 mt-30" style={{ 
                            flex: '1 1 600px', 
                            minWidth: '300px',
                            marginTop: '0'
                        }}>
                            <div className="cs-contact-wrap cs-contact-form cd-contact-form item-contact_form" style={{
                                background: '#ffffff',
                                borderRadius: '12px',
                                padding: '2rem',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                                border: '1px solid rgba(0,0,0,0.05)',
                            }}>
                                <h2 className="xb-title" style={{
                                    color: '#1f2937',
                                    fontSize: '1.75rem',
                                    fontWeight: '700',
                                    marginBottom: '0.75rem',
                                    lineHeight: '1.2',
                                    letterSpacing: '-0.01em',
                                }}>
                                    Send us a message
                                </h2>
                                <p className="xb-content" style={{
                                    color: '#6b7280',
                                    fontSize: '1rem',
                                    lineHeight: '1.6',
                                    marginBottom: '2rem',
                                }}>
                                    Give us a chance to serve and bring magic to your brand.
                                </p>
                                <ContactForm />
                            </div>
                        </div>
                        <div className="col-lg-4 mt-30" style={{ 
                            flex: '1 1 300px', 
                            minWidth: '280px',
                            marginTop: '0'
                        }}>
                            <div className="item-contact_info" style={{
                                background: '#ffffff',
                                borderRadius: '12px',
                                padding: '2rem',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                                border: '1px solid rgba(0,0,0,0.05)',
                                height: '100%',
                            }}>
                                <div className="xb-item--inner">
                                    <div className="xb-item--top" style={{ marginBottom: '2rem' }}>
                                        <h3 className="xb-item--title" style={{
                                            color: '#1f2937',
                                            fontSize: '1.25rem',
                                            fontWeight: '600',
                                            marginBottom: '1rem',
                                            lineHeight: '1.2',
                                        }}>
                                            Contact Info
                                        </h3>
                                        <div style={{ 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            marginBottom: '0.75rem',
                                            gap: '0.75rem'
                                        }}>
                                            <img src={icon1} alt="" style={{ width: '1rem', height: '1rem' }} />
                                            <span style={{ 
                                                color: '#6b7280', 
                                                fontSize: '0.875rem',
                                                fontWeight: '500'
                                            }}>
                                                +(1) 1230 452 8597
                                            </span>
                                        </div>
                                        <div style={{ 
                                            display: 'flex', 
                                            alignItems: 'center',
                                            marginBottom: '1.5rem',
                                            gap: '0.75rem'
                                        }}>
                                            <img src={icon2} alt="" style={{ width: '1rem', height: '1rem' }} />
                                            <span style={{ 
                                                color: '#6b7280', 
                                                fontSize: '0.875rem',
                                                fontWeight: '500'
                                            }}>
                                                Intellectt@example.com
                                            </span>
                                        </div>
                                        <ul className="social_icons_block list-unstyled ul_li" style={{
                                            listStyle: 'none',
                                            padding: '0',
                                            margin: '0',
                                            display: 'flex',
                                            gap: '1rem',
                                        }}>
                                            <li>
                                                <Link onClick={ClickHandler} to="/contact" aria-label="Facebook" style={{
                                                    color: '#6b7280',
                                                    fontSize: '1rem',
                                                    transition: 'color 0.2s ease',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: '2rem',
                                                    height: '2rem',
                                                    borderRadius: '50%',
                                                    border: '1px solid transparent',
                                                    '&:hover': {
                                                        color: '#e53e3e',
                                                        borderColor: '#e53e3e',
                                                        backgroundColor: 'rgba(229, 62, 62, 0.1)',
                                                    }
                                                }}>
                                                    <i className="fab fa-facebook-f"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link onClick={ClickHandler} to="/contact" aria-label="Twitter" style={{
                                                    color: '#6b7280',
                                                    fontSize: '1rem',
                                                    transition: 'color 0.2s ease',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: '2rem',
                                                    height: '2rem',
                                                    borderRadius: '50%',
                                                    border: '1px solid transparent',
                                                }}>
                                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.3872 0H15.9952L10.299 7.20048L17 17H11.7545L7.64298 11.0582L2.94415 17H0.332464L6.42395 9.29688L0 0H5.37853L9.09105 5.43101L13.3872 0ZM12.4711 15.2755H13.9155L4.5917 1.63462H3.0402L12.4711 15.2755Z" fill="currentColor" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link onClick={ClickHandler} to="/contact" aria-label="Linkedin" style={{
                                                    color: '#6b7280',
                                                    fontSize: '1rem',
                                                    transition: 'color 0.2s ease',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: '2rem',
                                                    height: '2rem',
                                                    borderRadius: '50%',
                                                    border: '1px solid transparent',
                                                }}>
                                                    <i className="fab fa-linkedin-in"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="contact-info_widget" style={{ marginBottom: '1.5rem' }}>
                                        <h3 className="xb-title" style={{
                                            color: '#1f2937',
                                            fontSize: '1rem',
                                            fontWeight: '600',
                                            marginBottom: '0.5rem',
                                            lineHeight: '1.2',
                                        }}>
                                            United States Office
                                        </h3>
                                        <span className="xb-location" style={{
                                            color: '#6b7280',
                                            fontSize: '0.875rem',
                                            lineHeight: '1.5',
                                        }}>
                                            Sunshine example park, Floor <br /> No 05A, Sector-94,
                                        </span>
                                    </div>
                                    <div className="contact-info_widget" style={{ marginBottom: '1.5rem' }}>
                                        <h3 className="xb-title" style={{
                                            color: '#1f2937',
                                            fontSize: '1rem',
                                            fontWeight: '600',
                                            marginBottom: '0.5rem',
                                            lineHeight: '1.2',
                                        }}>
                                            United Kingdom Office
                                        </h3>
                                        <span className="xb-location" style={{
                                            color: '#6b7280',
                                            fontSize: '0.875rem',
                                            lineHeight: '1.5',
                                        }}>
                                            12 Buckingham Rd, example <br /> Thwaite, HG3 4 TY, UK Contact
                                        </span>
                                    </div>
                                    <hr className="breack-line" style={{
                                        border: 'none',
                                        height: '1px',
                                        background: '#e5e7eb',
                                        margin: '1.5rem 0',
                                    }} />
                                    <div className="contact-info_widget">
                                        <h3 className="xb-title" style={{
                                            color: '#1f2937',
                                            fontSize: '1rem',
                                            fontWeight: '600',
                                            marginBottom: '0.5rem',
                                            lineHeight: '1.2',
                                        }}>
                                            Our Office Open Time
                                        </h3>
                                        <span className="xb-location" style={{
                                            color: '#6b7280',
                                            fontSize: '0.875rem',
                                            lineHeight: '1.5',
                                        }}>
                                            Mon - Sat : 8.00-5.00 <br /> Sunday : Closed
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gmap_canvas bg-light" style={{
                background: '#f8fafc',
                height: '400px',
                width: '100%',
            }}>
                <iframe 
                    title='map' 
                    src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                    style={{
                        width: '100%',
                        height: '100%',
                        border: 'none',
                    }}
                ></iframe>
            </div>
        </div>
    )
}

export default ContactSection;