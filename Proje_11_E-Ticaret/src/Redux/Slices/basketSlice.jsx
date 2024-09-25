import { createSlice } from '@reduxjs/toolkit'

const getBasketFromStorage = () => {
    if (localStorage.getItem('basket')) {
        return JSON.parse(localStorage.getItem('basket'))
    }
    return [];
}
const initialState = {
    products: getBasketFromStorage(),
    drawer: false,
    totalAmount: 0,
}
const writeFromBasketToStorage = (basket) => {
    localStorage.setItem('basket', JSON.stringify(basket))
}
const handleClearLocalStorage = () => {
    localStorage.removeItem('basket', JSON.stringify(basket)) // veya localStorage.removeItem('yourKey');
    alert('LocalStorage temizlendi!');
};


export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const findProduct = state.products && state.products.find((product) => product.id === action.payload.id);
            if (findProduct) {
                //daha önceden eklenmiştir.
                const extractedProducts = state.products.filter((product) => product.id != action.payload.id);
                findProduct.count += action.payload.count;
                state.products = [...extractedProducts, findProduct];
                writeFromBasketToStorage(state.products);

            } else {
                state.products = [...state.products, action.payload];
                writeFromBasketToStorage(state.products);
            }
        },
        deleteFromBasket: (state, action) => {
            const findProduct = state.products && state.products.find((product) => product.id === action.payload.id);
            if (findProduct) {
                //daha önceden eklenmiştir.
                const extractedProducts = state.products.filter((product) => product.id != action.payload.id);
                findProduct.count -= action.payload.count;
                state.products = [...extractedProducts, findProduct];
                handleClearLocalStorage(state.products);

            } else {
                state.products = [...state.products, action.payload];
                writeFromBasketToStorage(state.products);
            }
        },
        setDrawer: (state) => {
            state.drawer = !state.drawer
        },
        calculateBasket: (state, action) => {
            state.totalAmount = 0;
            state.products && state.products.map((product) => {
                state.totalAmount += product.price * product.count
            })
        }
    },
})

export const { addToBasket, setDrawer, calculateBasket, deleteFromBasket } = basketSlice.actions
export default basketSlice.reducer