import React from 'react';
import '../styles/Order.scss';

const Order = () => {
    return(
        <div className="order">
            <p>
                <span>04.25.2021</span>
                <span>6 articles</span>
            </p>
            <p>
                <span>$ 120,00</span>
                <img 
                 src="./src/static/icons/flechita.svg"
                 alt="arrow"
                 className="arrow-img"/>
            </p>
        </div>
    );
};

export default Order;