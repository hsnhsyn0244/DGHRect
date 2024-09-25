import React from 'react'

function ProductDetailss({ product }) {
    const { name, price } = product;
    return (
        <>
            <h3>İsim : {name}</h3>
            <h3>Fiyat : {price}</h3>
        </>
    )
}

export default ProductDetailss