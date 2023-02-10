import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './features/users/usersSlice';
import betsReducer from './features/bets/betsSlice';
import statusReducer from './features/status/statusSlice';

export default configureStore ({
    reducer: {
        users: usersReducer,
        bets: betsReducer,
        status: statusReducer,
    }
})

