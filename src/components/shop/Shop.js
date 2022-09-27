import React from 'react'
import './Shop.css';
import Product from '../product/Product.js'

export const Shop = () => {
    return (
        <div>
            {/* .shop-container>.products-container+.cart-container */}
            <div className="shop-container">
                <div className="products-container">
                    <Product></Product>
                </div>
                <div className="cart-container">
                    <h1>this is cart</h1>
                </div>
            </div>
        </div>
    )
}
