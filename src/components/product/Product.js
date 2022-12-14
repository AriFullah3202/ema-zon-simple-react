import React from 'react';
import '../product/Product.css'

const Product = (props) => {
    const { name, img, price, seller, ratings } = props.product;

    return (
        <div className="product">
            <img src={img} alt="" />
            <p className="product-name">{name}</p>
        </div>
    )
}

export default Product
