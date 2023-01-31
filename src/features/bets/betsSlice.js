import { createSlice } from "@reduxjs/toolkit";

export const betsSlice = createSlice({
    name: 'bets',
    initialState: {
        owner_id: null,
        bet_id: null,
        title: null,
        type: null,
        custom_wager: null,
        options_and_odds: {},
    },
    reducers: {
        changeBet: (state, action) => {
            var newState = {...state}
            for (const prop in action.payload){
                newState[prop] = action.payload[prop];
            }
            return newState;
        },

        clearBet: (state) => {
            var newState = {...state}
            for (const prop in state){
                newState[prop] = null;
            }
            return newState;
        }
    }
})

export const {changeBet} = betsSlice.actions;

export default betsSlice.reducer;