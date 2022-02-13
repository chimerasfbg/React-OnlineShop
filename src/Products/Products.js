import React from 'react'
import Product from './Product';


const Products = ({ products ,onAddToCart}) => {
return(
    <div className='top' >
        <div className="banner">
            <img className='imgBanner'src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="banner" />
        </div>
        <div className="containerBtns">
            <button className="btn small">All</button>
            <button className="btn small">Appliance</button>
            <button className="btn small">Decor</button>
            <button className="btn small">Gardening</button>
            <button className="btn small">Gadgets</button>

        </div>
        <div  className='productFlex'>
            {products.map(product=>(
                <div key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} onAddToCart= {onAddToCart}/>
                </div>
            ))}
        </div>
    </div>
)
}

export default Products
