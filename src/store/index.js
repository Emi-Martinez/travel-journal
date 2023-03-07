import { configureStore } from "@reduxjs/toolkit"
import locationsSlice from "./locations-slice"
import popUpLoadLocationSlice from "./popUpLoadLocation-slice"
import locationSlice from "./location-slice"
import alertSlice from "./alert-slice"
import userOptionsUISlice from "./userOptionsUI-slice"
import userSlice from "./user-slice"
import responsiveSlice from "./responsive-slice"
import messagePopUpSlice from "./messagePopUp-slice"

const store = configureStore({
    reducer:{
        locations: locationsSlice.reducer,
        popUpLoadLocation: popUpLoadLocationSlice.reducer,
        location: locationSlice.reducer,
        alert: alertSlice.reducer,
        user: userSlice.reducer,
        userOptionsUI: userOptionsUISlice.reducer,
        responsive: responsiveSlice.reducer,
        messagePopUp: messagePopUpSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export default store