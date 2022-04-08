import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [
        { id: 1, img: '../../public/test1.jpg', name: 'producto 1', price: 100.00 },
        { id: 2, img: '../../public/test2.jpg', name: 'producto 2', price: 50.00 },
        { id: 3, img: '../../public/test3.jpg', name: 'producto 3', price: 70.00 },
    ],
    cart: []
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, name, price } = action;
            
            if (state.cart.length === 0) {
                state.cart = [{ id, name, price, qty: 1, sum: price }];
            } else {
                const newCart = state.cart;
                const exists = newCart.filter(prod => {
                    return prod.id === id;
                }).length > 0;

                if (exists) {
                    newCart.forEach((prod, index) => {
                        if (prod.id === id) {
                            const qty = newCart[index].qty;
                            const sum = newCart[index].sum;

                            newCart[index] = {
                                id, name, price, qty: qty + 1, sum: sum + price
                            };
                        }
                    });
                } else {
                    newCart.push({
                        id, name, price, qty: 1, sum: price
                    });
                }

                state.cart = newCart;
                console.log(action);
            }
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

export const { addToCart, decrement, incrementByAmount } = productSlice.actions

export default productSlice.reducer