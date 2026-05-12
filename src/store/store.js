import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reduser: {
        auth: authReducer,
        users: usersReduser,
    }
})