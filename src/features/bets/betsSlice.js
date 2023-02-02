import { createSlice } from "@reduxjs/toolkit";

export const betsSlice = createSlice({
    name: 'bets',
    initialState: {
        bets: [
            /*
            {
                id: null,
                owner_id: null,
                title: null,
                type: null,
                custom_wager: null,
                bet_info: {},
            }*/
        ],
    },
    reducers: {
        appendBet: (state, action) => {
            // payload == entire bet object
            return {
                ...state,
                bets: [...state.bets, action.payload]
            }
        },

        removeBet: (state, action) => {
            // payload == betID
            return {
                ...state,
                bets: state.bets.filter(bet => bet.id !== action.payload)
            }
        },

        initAllBetsForUser: (state, action) => {
            // payload == array of bets
            return {
                ...state,
                bets: action.payload
            }
        },

        clearAllBets: (state, action) => {
            return {
                ...state,
                bets: [],
            }
        }
        /*
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
        }*/

    }
})

export const {
    appendBet,
    removeBet,
    initAllBetsForUser,
    clearAllBets,
} = betsSlice.actions;

export default betsSlice.reducer;