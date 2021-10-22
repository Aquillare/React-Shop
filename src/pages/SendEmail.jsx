import React from 'react';
import '../styles/SendEmail.scss';

const SendEmail= () => {
    return(
        <div clasName="login">
            <div clasName="form-container">
                <img src="src/static/logos/logo_yard_sale.svg" alt="logo" clasName="logo"/>
                <h1 clasName="title">
                    Email has been sent!
                </h1>
                <p clasName="subtitle">
                    Please check your inbox for instruccions
                    on how to reset the password
                </p>
                <div clasName="email-image">
                    <img src="src/static/icons/email.svg" alt="email"/>
                </div>
                
                    <button
                        type="submit"
                        clasName="primary-button login-button"   
                    >Login</button>
                    <p clasName="ressend">
                        <span>Didn't recive the email?</span>
                        <a href="/">Resend</a>
                    </p>
            </div>
        </div>
    );
};

export default SendEmail;