import { configureStore } from '@reduxjs/toolkit'
import appReducer from "./Slices/appSlice"
import productReducer from "./Slices/productSlice"
import basketReducer from "./Slices/basketSlice"

export const store = configureStore({
    reducer: {
        app: appReducer,
        product: productReducer,
        basket: basketReducer
    },
})