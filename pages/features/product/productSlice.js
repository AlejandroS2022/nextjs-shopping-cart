import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [
        { id: 1, img: './test1.jpg', name: 'producto 1', price: 100.00 },
        { id: 2, img: './test2.jpg', name: 'producto 2', price: 50.00 },
        { id: 3, img: './test3.jpg', name: 'producto 3', price: 70.00 },
    ],
    cart: [],
    total: 0.00
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const id = action.payload.id;
            const name = action.payload.name;
            const price = action.payload.price;

            if (state.cart.length === 0) {
                state.cart = [{ id, name, price, qty: 1, sum: price }];

                state.total = price;
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

                            state.total += price;
                        }
                    });
                } else {
                    newCart.push({
                        id, name, price, qty: 1, sum: price
                    });

                    state.total += price;
                }

                state.cart = newCart;
            }
        },
        removeFromCart: (state, action) => {
            const id = action.payload.id;
            const name = action.payload.name;
            const price = action.payload.price;

            if (state.cart.length === 0) {
                state.cart = [{ id, name, price, qty: 0, sum: 0 }];
            } else {
                const newCart = state.cart;
                const exists = newCart.filter(prod => {
                    return prod.id === id;
                }).length > 0;
                let count = 0;

                if (exists) {
                    newCart.forEach((prod, index) => {
                        if (prod.id === id && newCart[index].qty > 1) {
                            const qty = newCart[index].qty;
                            const sum = newCart[index].sum;

                            newCart[index] = {
                                id, name, price, qty: qty - 1, sum: sum - price
                            };

                            state.total -= price;
                        } else if (prod.id === id) {
                            newCart[index] = [];

                            state.total -= price;
                        }

                        if (newCart[index].length != 0) {
                            count += 1;
                        }
                    });

                    if (count == 0) {
                        state.cart.length = 0;
                    }
                }
                
                state.cart = newCart;
            }
        },
    },
})

export const { addToCart, removeFromCart } = productSlice.actions

export default productSlice.reducer