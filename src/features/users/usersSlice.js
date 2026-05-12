import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [
        {id: "1", name: "John", email: "john@mail.com"},
        {id: "2", name: "Anna", email: "anna@mail.com"},
        {id: "3", name: "Antony", email: "antony@mail.com"}
]
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.list.push(action.payload)
        },
        deleteUser: (state, action) => {
            state.list = state.list.filter(user => user.id !== action.payload)
        },
        updateUser: (state, action) => {
            const i = state.list.findIndex(user => user.id !== action.payload.id);
            state.list[i] = action.payload;
        },
    },    
})

export const { addUser, deleteUser, updateUser } = usersSlice.actions;
export default usersSlice.reducer;