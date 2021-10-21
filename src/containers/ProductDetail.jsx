import React from "react";
import ProductInfo from '../components/ProductInfo';
import '../styles/ProductDetail.scss';

const ProductDetail = () => {
    return(
        <aside class="product-detail">
            <div class="product-detail-close">
                <img src="./src/static/icons/icon_close.png" alt="close"/>
            </div>
            <ProductInfo/>
        </aside>
    );
};

export default ProductDetail;