import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        session: undefined
    },
    reducers: {
        logIn(state, action){
            // Action when log-in
            state.session = action.payload
        },
        logOut(state){
            // Action when log-out
            state.session = undefined
        }
    }
})

export default userSlice
export const userActions = userSlice.actions