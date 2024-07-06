import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    isOrder: false,
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        openOrder(state) {
            state.isOpen = true;
        },
        plasedOrder(state) {
            state.isOpen = true;
            state.isOrder = true;
        },
        closeModal(state) {
            state.isOpen = false;
        }
    }
})

export const { openOrder, plasedOrder, closeModal } = orderSlice.actions;

export default orderSlice.reducer;