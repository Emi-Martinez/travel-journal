import { locationsActions } from "./locations-slice";
import { alertActions } from "./alert-slice";
import axios from "axios";

export const addLocation = (location) => {
    return async (dispatch) => {
        const postLocation = async () => {
            const url = '/api/locations'
            const {data} = await axios.post(
                url,
                location,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            )

            return data.data
            
        }

        try {
            const locations = await postLocation()
            dispatch(locationsActions.setLocations(locations))

        } catch (error) {
            if(error.response.status === 400){
                dispatch(alertActions.activateAlert(error.response.data.errorMessage))
                setTimeout(()=>{
                    dispatch(alertActions.activateAlert())
                },6000)
            }else{
                dispatch(alertActions.activateAlert("Something went wrong"))
                setTimeout(()=>{
                    dispatch(alertActions.activateAlert())
                },6000)
            }
        }
    }
}

export const updateLocation = (location) => {
    return async (dispatch) => {
        const putLocation = async () => {
            const url = `/api/locations/${location.id}`
            const {data} = await axios.put(url,{
                updatedLocation: {
                    ...location
                }
            })
 
            return data.data
            
        }

        try {
            const locations = await putLocation()
            dispatch(locationsActions.setLocations(locations))
            
        } catch (error) {
            if(error.response.status === 400){
                dispatch(alertActions.activateAlert(error.response.data.errorMessage))
                setTimeout(()=>{
                    dispatch(alertActions.activateAlert())
                },6000)
            }else{
                dispatch(alertActions.activateAlert("Something went wrong"))
                setTimeout(()=>{
                    dispatch(alertActions.activateAlert())
                },6000)
            }
        }
    }
}

export const removeLocation = (location) => {
    return async (dispatch) => {
        const deleteLocation = async() => {
            const url = `/api/locations/${location.id}/${location.email}`
            const {data} = await axios.delete(url)

            return data.data
        }

        try{
            const locations = await deleteLocation()
            dispatch(locationsActions.setLocations(locations))
        }catch(error){
            if(error.response.status === 400){
                dispatch(alertActions.activateAlert(error.response.data.errorMessage))
                setTimeout(()=>{
                    dispatch(alertActions.activateAlert())
                },6000)
            }else{
                dispatch(alertActions.activateAlert("Something went wrong"))
                setTimeout(()=>{
                    dispatch(alertActions.activateAlert())
                },6000)
            }
        }
    }
}