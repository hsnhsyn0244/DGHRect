import React from 'react'
import Product from '../Components/Product'
import { products } from '../Data/product'
function Products() {
    return (
        <div>
            {
                products && products.map((product) => (
                    <Product key={product.id} product={product} />
                ))
            }
        </div>
    )
}

export default Products