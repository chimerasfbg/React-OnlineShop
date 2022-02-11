import React from 'react'
import Product from './Product';


const Products = ({ products ,onAddToCart}) => {
return(
    <div>
        <div className='flex'>
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
