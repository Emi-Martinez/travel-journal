import { createSlice } from "@reduxjs/toolkit";

const minWidth = 800

const responsiveSlice = createSlice({
    name: 'responsive',
    initialState: {
        mobile: undefined,
    },
    reducers: {
        setResponsive(state, action){
            const width = action.payload
            state.mobile = width < minWidth ? true : undefined
        }
    }
})

export default responsiveSlice
export const responsiveActions = responsiveSlice.actions