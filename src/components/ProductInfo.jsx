import React from 'react';
import '../styles/ProductInfo.scss';

const ProductInfo = () => {
    return(
        <>
            <img src="https://images.pexels.com/photos/2263815/pexels-photo-2263815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Game boy"/>
            <div className="product-info">
                <p>$35,00</p>
                <p>Game boy</p>
                <p>Is a very funny game console</p>
                <button 
                type="button"
                className="primary-button add-to-cart-button"  
                >
                    <img src="./src/static/icons/bt_add_to_cart.svg" alt="add to cart"/>
                    Add to cart
                </button>
            </div> 
        </>
    );
};

export default ProductInfo;