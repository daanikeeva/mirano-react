import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import modalReducer from "./orderSlice";


const store = configureStore({
    reducer: {
        cart: cartReducer,
        order: modalReducer
    }

}
)

export default store;