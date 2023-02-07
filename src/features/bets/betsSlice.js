import { createSlice, current } from "@reduxjs/toolkit";

export const betsSlice = createSlice({
    name: 'bets',
    initialState: {
        bets: [],
        currentBet: { // TODO: Remove this in favor of route params with Nav
            id: null,
            owner_id: null,
            title: null,
            type: null,
            custom_wager: null,
            bet_info: {},
        }
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
        },
        
        // TODO: Remove this, in favor of navigation param passing
        changeCurrentBet: (state, action) => {
            const newCurrentBet = {...state.currentBet}
            for (const prop in action.payload){
                newCurrentBet[prop] = action.payload[prop];
            }
            console.log("NEW CB " + JSON.stringify(newCurrentBet));

            return {
                currentBet: newCurrentBet
            }
        }
        /*
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
    changeCurrentBet,
} = betsSlice.actions;

export default betsSlice.reducer;