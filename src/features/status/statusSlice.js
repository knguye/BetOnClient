import { createSlice } from "@reduxjs/toolkit";

export const statusSlice = createSlice({
    name: 'status',
    initialState: {
        loading: false,
    },
    reducers: {
        toggleLoading: (state, action) => {
            return {
                ...state,
                loading: action.payload,
            }
        }
    }
})

export const {
    toggleLoading
} = statusSlice.actions;

export default statusSlice.reducer;