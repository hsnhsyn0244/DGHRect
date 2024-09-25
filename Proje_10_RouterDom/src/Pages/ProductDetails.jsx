import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../Data/product'
import Product from '../Components/Product';
import ProductDetailss from './ProductDetailss';

function ProductDetails() {
    //    params
    const { id } = useParams();


    return (
        <div key={products.id}>
            <h1>Ürün Detayları  </h1>
            <hr />
            {
                products && products.map((product) => {
                    if (product.id === id) {
                        return <ProductDetailss key={product.id} product={product} />
                    }
                })
            }

        </div>
    )
}

export default ProductDetails