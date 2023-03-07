import { locationsActions } from "../store/locations-slice"
import { nanoid } from "@reduxjs/toolkit"
import convertDate from "../util/util"

export const testModeAddLocation = () => {
    return (dispatch, getState) => {
        const locations = getState().locations.locations
        const location = getState().location.location

        const newLocation = {
            ...location, 
            id: nanoid(), 
            dateFinish: convertDate(location.dateFinish), 
            dateStar: convertDate(location.dateStar),
        }
        const newLocations = [...locations, newLocation]
        dispatch(locationsActions.setLocations(newLocations))
    }
}

export const testModeUpdateLocation = () => {
    return (dispatch, getState) => {
        const locations = getState().locations.locations
        const location = getState().location.location

        const updatedLocation = {
            ...location,
            dateFinish: convertDate(location.dateFinish),
            dateStar: convertDate(location.dateStar),
        }
        const newLocations = locations.map((loc) => (loc.id === updatedLocation.id ? updatedLocation : loc))
        dispatch(locationsActions.setLocations(newLocations))
    }
}

export const testModeRemoveLocation = (locationRemoved) => {
    return (dispatch,getState) => {
        const locations = getState().locations.locations
        const newLocations = locations.filter((location) => (location.id !== locationRemoved.id))
        dispatch(locationsActions.setLocations(newLocations))
    }
}