import React from 'react'
import Product from './Product';


const Products = ({ products ,onAddToCart}) => {
return(
    <div className='top' >
        <div  className='cartFlex'>
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
