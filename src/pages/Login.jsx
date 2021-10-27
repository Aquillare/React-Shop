import React, {useRef} from 'react';
import '../styles/Login.scss';


import logo from '@logos/logo_yard_sale.svg';


const Login = () => {
    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('email'),
            password: formData.get('password'),
        }
        console.log(data);
    }

    return (
        <div className="Login">
        <div className="Login-container">
            <img 
            src={logo}
            alt="logo"
            className="logo-login"  
            />
            <form action="/" className="form" ref={form}>
                <label htmlFor="email" className="label">Email addres</label>
                <input 
                type="email" 
                className="input input-email"
                name="email"
                placeholder="email@example.com"
                />
                <label htmlFor="password" className="label">Password</label>
                <input
                type="password"
                className="input input-password"
                name="password"
                placeholder="******"
                />
                <button 
                type="submit"
                className="primary-button login-button"
                onClick={handleSubmit} 
                >
                    Log in
                </button> 
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