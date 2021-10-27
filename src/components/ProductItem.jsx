import React,{useContext} from 'react';
import '@styles/ProductItem.scss';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import AppContext from '../context/AppContext';

const ProductItem = ({product}) => {
    const {addToCart} = useContext(AppContext);  //recibimos la funcion addToCart del contexto de la app.

    const handleClick = (item) => {
        addToCart([item]);
    }

    return(
        <div className="ProductItem">
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
                    <figure onClick={() => handleClick(product)} className="produc-info-figure">
                        <img src={addToCartImage} alt="add-card"/>
                    </figure>
                </div>   
            </div>
        </div>
    );
};

export default ProductItem;