import React , {useContext} from "react";        
import OrderItem from '../components/OrderItem';
import '../styles/Checkout.scss';
import AppContext from '../context/AppContext';
import Header from "../components/Header";

const Checkout = () => {

    const {state} = useContext(AppContext);


    return(
        <>
        <Header/>
        <div className="Checkout">

            <div className="Checkout-container">
                <h1 className="title">My order</h1>

                <div className="Checkout-content">

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
                <div className="my-order-content">
                {
                    state.cart.map( product =>
                        <OrderItem product={product} key={`checkId-${product.id}`} />)
                }
                
                </div>
               
            </div>
        </div>
        </>        
    );
};

export default Checkout;