import React , {useContext} from "react";
import OrderItem from "@components/OrderItem";
import "@styles/MyOrder.scss/";
import arrow from '@icons/flechita.svg';
import AppContext from "../context/AppContext";


const MyOrder = () => {
    const {state} = useContext(AppContext);

    return(
        <aside className="MyOrder">
            <div className="title-container">
                <img src={arrow} alt="arrow"/>
                <p className="title">My order</p>
            </div>
            <div className="my-order-content">
                {state.cart.map( item => 
                  <OrderItem product={item} key={`orderItem-${item.id}`}/>)}  {/*Usamos `orderoItem-${}` para agregar un texto al numero del id y asi no tener conflictos ya que usamos es id en el key del map que usamos en el compoenente productList */}        

                <div className="order">
                    <p>
                        <span>Total</span>
                    </p>
                    <p>$560</p>
                </div>
                    <button 
                    type="button"
                    className="primary-button"  
                    >
                        Checkout
                    </button>
                </div>
        </aside>
    );
};

export default MyOrder; 