import React from 'react';
import '../styles/MyAccount.scss';

const MyAccount = () => {
    return(
        <div className="login">
            <div className="form-container">
                <h1 className="title">
                    My account
                </h1>
                <form action="/" className="form">
                    <label htmlFor="name" className="label">Name</label>
                    <p className="value">
                        Camila Yoko
                    </p>
                    <label htmlFor="email" className="label">Email address</label>
                    <p className="value">
                        camilayoko@gmail.com
                    </p>
                    <label htmlFor="password" className="label">Password</label>
                    <p className="value">
                        ******
                    </p>
                    <input 
                    type="submit"
                    value="Edit"
                    className="secondary-button"  
                    />
                </form>
            </div>
        </div>
    );
};

export default MyAccount; 