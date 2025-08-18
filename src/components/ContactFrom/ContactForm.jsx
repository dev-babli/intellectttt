import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';

const ContactForm = (props) => {
    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        company: '',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                subject: '',
                phone: '',
                company: '',
                message: ''
            })
        } else {
            validator.showMessages();
        }
    };

    return (
        <form onSubmit={(e) => submitHandler(e)} className="contact-form">
            <div className="row" style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '1.5rem',
                margin: '0'
            }}>
                <div className="col-lg-6" style={{ 
                    flex: '1 1 250px',
                    minWidth: '250px'
                }}>
                    <div className="input-field" style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="text1" style={{
                            display: 'block',
                            color: '#1f2937',
                            fontSize: '0.875rem',
                            fontWeight: '600',
                            marginBottom: '0.5rem',
                            lineHeight: '1.2',
                        }}>
                            Name*
                        </label>
                        <div className="input-box">
                            <input
                                value={forms.name}
                                type="text"
                                name="name"
                                className="form-control"
                                style={{
                                    width: '100%',
                                    padding: '0.75rem 1rem',
                                    border: '1px solid #d1d5db',
                                    borderRadius: '8px',
                                    fontSize: '0.875rem',
                                    transition: 'border-color 0.2s ease',
                                    outline: 'none',
                                    '&:focus': {
                                        borderColor: '#3b82f6',
                                        boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
                                    }
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)} />
                            {validator.message('name', forms.name, 'required|alpha_space')}
                        </div>
                    </div>
                </div>
                <div className="col-lg-6" style={{ 
                    flex: '1 1 250px',
                    minWidth: '250px'
                }}>
                    <div className="input-field" style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="text2" style={{
                            display: 'block',
                            color: '#1f2937',
                            fontSize: '0.875rem',
                            fontWeight: '600',
                            marginBottom: '0.5rem',
                            lineHeight: '1.2',
                        }}>
                            Email*
                        </label>
                        <div className="input-box">
                            <input
                                value={forms.email}
                                type="email"
                                name="email"
                                className="form-control"
                                style={{
                                    width: '100%',
                                    padding: '0.75rem 1rem',
                                    border: '1px solid #d1d5db',
                                    borderRadius: '8px',
                                    fontSize: '0.875rem',
                                    transition: 'border-color 0.2s ease',
                                    outline: 'none',
                                    '&:focus': {
                                        borderColor: '#3b82f6',
                                        boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
                                    }
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)} />
                            {validator.message('email', forms.email, 'required|email')}
                        </div>
                    </div>
                </div>
                <div className="col-lg-12" style={{ 
                    flex: '1 1 100%',
                    width: '100%'
                }}>
                    <div className="input-field" style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="text3" style={{
                            display: 'block',
                            color: '#1f2937',
                            fontSize: '0.875rem',
                            fontWeight: '600',
                            marginBottom: '0.5rem',
                            lineHeight: '1.2',
                        }}>
                            Phone*
                        </label>
                        <div className="input-box">
                            <input
                                value={forms.phone}
                                type="phone"
                                name="phone"
                                className="form-control"
                                style={{
                                    width: '100%',
                                    padding: '0.75rem 1rem',
                                    border: '1px solid #d1d5db',
                                    borderRadius: '8px',
                                    fontSize: '0.875rem',
                                    transition: 'border-color 0.2s ease',
                                    outline: 'none',
                                    '&:focus': {
                                        borderColor: '#3b82f6',
                                        boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
                                    }
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)} />
                            {validator.message('phone', forms.phone, 'required|phone')}
                        </div>
                    </div>
                </div>
                <div className="col-lg-12" style={{ 
                    flex: '1 1 100%',
                    width: '100%'
                }}>
                    <div className="input-field text-field" style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="text5" style={{
                            display: 'block',
                            color: '#1f2937',
                            fontSize: '0.875rem',
                            fontWeight: '600',
                            marginBottom: '0.5rem',
                            lineHeight: '1.2',
                        }}>
                            Message
                        </label>
                        <div className="input-box">
                            <textarea
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                value={forms.message}
                                type="text"
                                name="message"
                                className="form-control"
                                rows="5"
                                style={{
                                    width: '100%',
                                    padding: '0.75rem 1rem',
                                    border: '1px solid #d1d5db',
                                    borderRadius: '8px',
                                    fontSize: '0.875rem',
                                    transition: 'border-color 0.2s ease',
                                    outline: 'none',
                                    resize: 'vertical',
                                    minHeight: '120px',
                                    fontFamily: 'inherit',
                                    '&:focus': {
                                        borderColor: '#3b82f6',
                                        boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-12" style={{ 
                    flex: '1 1 100%',
                    width: '100%',
                    textAlign: 'center'
                }}>
                    <button
                        type="submit"
                        style={{
                            background: '#3b82f6',
                            color: '#ffffff',
                            border: 'none',
                            padding: '0.875rem 2rem',
                            borderRadius: '8px',
                            fontSize: '0.875rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            '&:hover': {
                                background: '#2563eb',
                                transform: 'translateY(-1px)',
                                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                            }
                        }}
                    >
                        Send Message
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;