import React from 'react';
import '../styles/MyAccount.scss';

const MyAccount = () => {
    return(
        <div clasName="login">
            <div clasName="form-container">
                <h1 clasName="title">
                    My account
                </h1>
                <form action="/" clasName="form">
                    <label htmlFor="name" clasName="label">Name</label>
                    <p clasName="value">
                        Camila Yoko
                    </p>
                    <label htmlFor="email" clasName="label">Email address</label>
                    <p clasName="value">
                        camilayoko@gmail.com
                    </p>
                    <label htmlFor="password" clasName="label">Password</label>
                    <p clasName="value">
                        ******
                    </p>
                    <input 
                    type="submit"
                    value="Edit"
                    clasName="secondary-button"  
                    />
                </form>
            </div>
        </div>
    );
};

export default MyAccount; 