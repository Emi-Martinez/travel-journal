import { createSlice } from "@reduxjs/toolkit"

const popUpLoadLocationSlice = createSlice({
    name: 'popUp',
    initialState: {
        toggle: false,
        type: null
    },
    reducers:{
        togglePopUp(state,action){
            state.toggle = !state.toggle
            state.type = action.payload
        }
    }
})

export default popUpLoadLocationSlice
export const popUpLoadLocationActions = popUpLoadLocationSlice.actions