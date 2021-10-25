import React, {useRef} from 'react';
import '../styles/Login.scss';


import logo from '@logos/logo_yard_sale.svg';


const Login = () => {
    const form = useRef(null);

    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('')
        }
    }

    return (
        <div className="Login">
        <div className="Login-container">
            <img 
            src={logo}
            alt="logo"
            className="logo-login"  
            />
            <form action="/" className="form">
                <label htmlFor="email" className="label">Email addres</label>
                <input 
                type="email" 
                className="input input-email"
                id="email"
                placeholder="email@example.com"
                />
                <label htmlFor="password" className="label">Password</label>
                <input
                type="password"
                className="input input-password"
                id="password"
                placeholder="******"
                />
                <input 
                type="submit"
                className="primary-button login-button"
                value="Log in"  
                />
                <a href="/">Forgot mi password</a>       
            </form>

            <button 
            type="submit"
            className="secondary-button-login sign-up-button" 
            >Sign up</button>



        </div>
    </div>
    );
};

export default Login;