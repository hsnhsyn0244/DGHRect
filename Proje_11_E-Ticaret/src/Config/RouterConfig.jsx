import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import ProductDetails from '../Components/ProductDetails'
import BasketDetails from '../Components/BasketDetails'

function RouterConfig() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product-details/:id' element={<ProductDetails />} />
            <Route path='/basket-details' element={<BasketDetails />} />
        </Routes>
    )
}

export default RouterConfig