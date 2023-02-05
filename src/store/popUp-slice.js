import { createSlice } from "@reduxjs/toolkit"

const popUpSlice = createSlice({
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

export default popUpSlice
export const popUpActions = popUpSlice.actions