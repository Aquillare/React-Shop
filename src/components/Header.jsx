import React from 'react';
import '@styles/Header.scss';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
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
                className="logo"
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
                        <p className="navbar-email">platzi@example.com</p>
                    </li>
                    <li className="navbar-shopping-cart">
                        <img
                        src={shoppingCart}
                        alt="shopping cart"
                        />
                        <div>2</div>
                    </li>
                </ul>
            </div>
    </nav>
    );
};

export default Header;