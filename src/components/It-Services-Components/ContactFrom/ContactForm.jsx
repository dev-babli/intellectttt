import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import icon1 from '../../../images/icon/user-black.svg'
import icon2 from '../../../images/icon/sms.svg'
import icon3 from '../../../images/icon/call.svg'
import icon4 from '../../../images/icon/company-icon.svg'
import icon5 from '../../../images/icon/sms-white-icon01.svg'


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
        <form className="contact-form" onSubmit={(e) => submitHandler(e)}>
            <div className="row">
                <div className="col-lg-6">
                    <div className="input-field pos-rel">
                        <input
                            value={forms.name}
                            type="text"
                            name="name"
                            className="form-control"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Goladria Gomez" />
                        {validator.message('name', forms.name, 'required|alpha_space')}
                        <div className="img"><img src={icon1} alt=""/></div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="input-field pos-rel">
                        <input
                            value={forms.email}
                            type="email"
                            name="email"
                            className="form-control"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Intellectt@example.com" />
                        {validator.message('email', forms.email, 'required|email')}
                        <div className="img"><img src={icon2} alt=""/></div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="input-field pos-rel">
                        <input
                            value={forms.phone}
                            type="phone"
                            name="phone"
                            className="form-control"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="+8250-3560 6565" />
                        {validator.message('phone', forms.phone, 'required|phone')}
                        <div className="img"><img src={icon3} alt=""/></div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="input-field pos-rel">
                        <input
                            value={forms.company}
                            type="company"
                            name="company"
                            className="form-control"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="+8250-3560 6565" />
                        {validator.message('company', forms.company, 'required|phone')}
                        <div className="img"><img src={icon4} alt="" /></div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="input-field text-field pos-rel">
                        <textarea
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            value={forms.message}
                            type="text"
                            name="message"
                            className="form-control"
                            placeholder="How can we help you?">
                        </textarea>
                        {validator.message('message', forms.message, 'required')}
                        <div className="img"><img src={icon2} alt="" /></div>
                    </div>
                </div>
            </div>
            <div className="contact-btn">
                <button type="submit" className="thm-btn btn-effect_2">Let’s talk <img src={icon5}
                    alt="" /></button>
            </div>
        </form>
    )
}

export default ContactForm;