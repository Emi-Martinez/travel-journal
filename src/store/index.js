import { configureStore } from "@reduxjs/toolkit"
import locationsSlice from "./locations-slice"
import popUpSlice from "./popUp-slice"
import locationSlice from "./location-slice"
import alertSlice from "./alert-slice"

const store = configureStore({
    reducer:{
        locations: locationsSlice.reducer,
        popUp: popUpSlice.reducer,
        location: locationSlice.reducer,
        alert: alertSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export default store