import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './features/users/usersSlice';
import betsReducer from './features/bets/betsSlice';

export default configureStore ({
    reducer: {
        users: usersReducer,
        bets: betsReducer,
    }
})

