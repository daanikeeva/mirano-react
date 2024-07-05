import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    isOrder: false,
};

const modalSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        openModal(state) {
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

export const { openModal } = modalSlice.actions;
export const { plasedOrder } = modalSlice.actions;
export const { closeModal } = modalSlice.actions;


export default modalSlice.reducer;