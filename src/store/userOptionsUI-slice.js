import { createSlice } from "@reduxjs/toolkit";

const userOptionsUISlice = createSlice({
    name: 'userOptionsUI',
    initialState: {toggle: false},
    reducers:{
        toggleUserOptions(state){
            state.toggle = !state.toggle
        }
    }
})

export default userOptionsUISlice
export const userOptionsUIActions = userOptionsUISlice.actions