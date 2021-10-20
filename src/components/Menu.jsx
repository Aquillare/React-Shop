import React from 'react';
import '../styles/Menu.scss';

const Menu = () => {
    return(
        <div class="desktop-menu">
            <ul>
                <li>
                    <a href="/" class="title">My orders</a>
                </li>
                <li>
                    <a href="/" class="title">My account</a>
                </li>
                <li>
                    <a href="/" >Sign out</a>
                </li>
            </ul>
        </div>
    );
};

export default Menu;