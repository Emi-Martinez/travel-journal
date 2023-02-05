import {createSlice} from '@reduxjs/toolkit'

const alertSlice = createSlice({
    name: 'alert',
    initialState: {
        toggle: false,
        message: undefined
    },
    reducers: {
        activateAlert(state,action){
            state.message = action.payload
            state.toggle = !state.toggle            
        }
    }
})

export default alertSlice
export const alertActions = alertSlice.actions