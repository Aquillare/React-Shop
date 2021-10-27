import React,{useState, useContext}from 'react';
import '@styles/Header.scss';

import Menu from '@components/Menu';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import AppContext from '../context/AppContext';


const Header = () => {
    const [toggle, setToggle] = useState(false);

    const {state} = useContext(AppContext); //traio el estado del contexto de la app.

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return(  
        <nav>
            <img 
            src={menu}
            alt="menu"
            className="menu"
            />

            <div className="navbar-left">
                <img 
                src={logo}
                alt="logo"
                className="logo-nav"
                />

                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>

            <div className="navbar-rigth">
                <ul>
                    <li>
                        <p className="navbar-email" onClick={handleToggle}>platzi@example.com</p>
                    </li>
                    <li className="navbar-shopping-cart">
                        <img
                        src={shoppingCart}
                        alt="shopping cart"
                        />
                        {state.cart.length > 0 ?<div>{state.cart.length}</div>: null}
                    </li>
                </ul>
            </div>
            {toggle && <Menu/>}
            
        </nav>
    );
};

export default Header;