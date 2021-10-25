import React,{useState} from 'react';
import '@styles/ProductItem.scss';
import addToCart from '@icons/bt_add_to_cart.svg';

const ProductItem = ({product}) => {
    const [cart, setCart] = useState([]);

    const handleClick = () => {
        setCart([]);
    }

    return(
        <div className="product-card">
            <img 
            src={product.images[0]} 
            alt={product.title} 
            className="product-img"
            />
            <div className="product-info"> 
                <div className="product-info-text">
                    <p >${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <div>
                    <figure onClick={handleClick} className="produc-info-figure">
                        <img src={addToCart} alt="add-card"/>
                    </figure>
                </div>   
            </div>
        </div>
    );
};

export default ProductItem;