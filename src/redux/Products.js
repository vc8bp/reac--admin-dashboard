import { createSlice } from "@reduxjs/toolkit"


const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: null,
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        addProducts: (state, action) => {
            state.products = [...state.products, action.payload];
        },
        clearProducts: (state) => {
            state.products = null;
        },
        editProduct: (state, action) => {
            state.products.forEach((element, index) => {
                if(element._id === action.payload._id) {
                    state.products[index] = action.payload
                }
            });
        }
    }
})

export const {setProducts, clearProducts, editProduct, addProducts} = productsSlice.actions;
export default productsSlice.reducer;

