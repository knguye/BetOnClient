import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        id: null,
        email: null,
        fullname: null,
        username: null,
        phone_number: null,
    },
    reducers: {
        changeUser: (state, action) => {
            // Make copy of original state, go through each prop, change the values with the payload then return that new state
            
            var newState = {...state}
            for (const prop in action.payload){
                newState[prop] = action.payload[prop];
            }
            return newState;
        },

        clearUser: (state) => {
            var newState = {...state}
            for (const prop in state){
                newState[prop] = null;
            }
            return newState;
        }
    }
})

/*
export const selectUser = (state) => { state.users };
export const selectUserId = (state) => { state.users.id }
*/
export const { changeUser, clearUser } = usersSlice.actions;

export default usersSlice.reducer