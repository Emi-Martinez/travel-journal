import { createSlice } from "@reduxjs/toolkit";

const messagePopUpSlice = createSlice({
    name: 'messagePopUp',
    initialState: {
        toggle: false,
        type: undefined,
        message: undefined,
        btnLabel: undefined,
        btnAction: undefined
    },
    reducers:{
        toggleMessagePopUp(state,action){
            state.toggle = !state.toggle
            state.type = action.payload.type
            state.message = action.payload.message
            state.btnLabel = action.payload.btnLabel
            state.btnAction = action.payload.btnAction
        }
    }
})

export default messagePopUpSlice
export const messagePopUpActions = messagePopUpSlice.actions