import React from 'react';
import '../styles/ProductItem.scss';

const ProductItem = () => {
    return(
        <div className="product-card">
            <img 
            src="https://images.pexels.com/photos/2263815/pexels-photo-2263815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
            alt="" 
            className="product-img"
            />
            <div className="product-info"> 
                <div className="product-info-text">
                    <p >$120,00</p>
                    <p>Game Boy</p>
                </div>
                <div>
                    <figure className="produc-info-figure">
                        <img src="./src/static/icons/bt_add_to_cart.svg" alt="add-card"/>
                    </figure>
                </div>   
            </div>
        </div>
    );
};

export default ProductItem;