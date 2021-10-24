import React from 'react';
import '../styles/SendEmail.scss';

const SendEmail= () => {
    return(
        <div className="login">
            <div className="form-container">
                <img src="src/static/logos/logo_yard_sale.svg" alt="logo" className="logo"/>
                <h1 className="title">
                    Email has been sent!
                </h1>
                <p className="subtitle">
                    Please check your inbox for instruccions
                    on how to reset the password
                </p>
                <div className="email-image">
                    <img src="src/static/icons/email.svg" alt="email"/>
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