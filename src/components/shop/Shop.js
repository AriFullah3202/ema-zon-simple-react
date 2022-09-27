import React, { useEffect, useState } from 'react'
import './Shop.css';
import Product from '../product/Product.js'

export const Shop = () => {
    const [products, setProducts] = useState([]);
    // const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // useEffect(() => {
    //     fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [])

    return (
        <div>
            {/* .shop-container>.products-container+.cart-container */}
            <div className="shop-container">
                <div className="products-container">
                    {
                        products.map((product, index) => <Product key={index}
                            product={product}></Product>)
                    }
                </div>
                <div className="cart-container">
                    <h1>this is cart</h1>
                </div>
            </div>
        </div>
    )
}
