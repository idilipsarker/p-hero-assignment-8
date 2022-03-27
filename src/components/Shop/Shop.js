import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css"
const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleAddToCart = () => {
       console.log("clicked")
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">This is for order</div>
        </div>
    );
};

export default Shop;