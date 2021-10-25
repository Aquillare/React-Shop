import React from 'react';
import '../styles/SendEmail.scss';

import logo from '@logos/logo_yard_sale.svg';
import email from '@icons/email.svg';

const SendEmail= () => {
    return(
        <div className="login">
            <div className="form-container">
                <img src={logo} alt="logo" className="logo-login"/>
                <h1 className="title-login">
                    Email has been sent!
                </h1>
                <p className="subtitle">
                    Please check your inbox for instruccions
                    on how to reset the password
                </p>
                <div className="email-image">
                    <img src={email} alt="email"/>
                </div>
                
                    <button
                        type="submit"
                        className="primary-button login-button"   
                    >Login</button>
                    <p className="ressend">
                        <span>Didn't recive the email?</span>
                        <a href="/">Resend</a>
                    </p>
            </div>
        </div>
    );
};

export default SendEmail;