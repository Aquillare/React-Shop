import React from "react";
import '../styles/OrderItem.scss';

const OrderItem = () => {
    return(
        <div className="shopping-cart">
            <figure>
                   <img src="https://images.pexels.com/photos/2263815/pexels-photo-2263815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="game boy"/>
            </figure>
            <p>Game boy</p>
            <p>$30,00</p>
            <img src="./src/static/icons/icon_close.png" alt="close"/>
        </div>
    );
};

export default OrderItem;