import React from "react";        
import OrderItem from '../components/OrderItem';
import '../styles/Checkout.scss';

const Checkout = () => {
    return(
        <div className="my-order">

        <div className="my-order-container">
            <h1 className="title">My order</h1>

            <div className="my-order-content">

                <div className="order">
                    <p>
                        <span>03.25.21</span>
                        <span>6 articles</span>
                    </p>
                    <p>
                         <span>$560.00</span>
                    </p>
                </div>
            </div>
            <OrderItem />
        </div>
</div>        
    );
};

export default Checkout;