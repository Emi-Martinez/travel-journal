import { locationsActions } from "./locations-slice";
import { messagePopUpActions } from "./messagePopUp-slice";
import { signOut } from "firebase/auth"
import { auth } from "../firebase";
import {userActions} from "../store/user-slice"
import { alertActions } from "./alert-slice";
import axios from "axios";

export const fetchLocations = (email = "") => {
    return async (dispatch) => {
        const fetchHandler = async () => {
            const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/api/locations/${email}`)

            return data.data
        }

        try{
            const locations = await fetchHandler()
            dispatch(locationsActions.setLocations(locations))
        }catch(err){
            if(err.code === "ERR_NETWORK"){
                const backToLogInAction = async () => {
                    await signOut(auth)
                    dispatch(userActions.logOut())
                    dispatch(messagePopUpActions.toggleMessagePopUp({}))
                }

                dispatch(messagePopUpActions.toggleMessagePopUp(
                    {
                        type: "error",
                        message: "The back-end server is not responding correctly.\\nYou can test the app in test-mode if you want",
                        btnLabel: "Back to log-in",
                        btnAction: backToLogInAction,
                    }
                ))
            }else{
                dispatch(alertActions.activateAlert("Something went wrong"))
                setTimeout(()=>{
                    dispatch(alertActions.activateAlert())
                },6000)
            }
        }
    } 
}

export const testModeFetchLocations = async () => {
    return async (dispatch) => {
        const fetchHandler = async () => {
            
            const locations = await import("../test/locations")
            return locations
        }
    
        try {
            const locations = await fetchHandler()
            dispatch(locationsActions.setLocations({locations}))
        } catch(e){
            dispatch(alertActions.activateAlert("Something went wrong"))
            setTimeout(()=>{
                dispatch(alertActions.activateAlert())
            },6000)
            
        }
    }    
}