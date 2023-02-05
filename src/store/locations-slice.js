import { createSlice } from "@reduxjs/toolkit"

const locationsSlice = createSlice({
    name: 'locations',
    initialState: {
        locations: []
    },
    reducers: {
        setLocations(state,action){
            state.locations = action.payload
        }
    }
})

export default locationsSlice
export const locationsActions = locationsSlice.actions