import { locationsActions } from "./locations-slice";
import axios from "axios";

export const fetchLocations = () => {
    return async (dispatch) => {
        const fetchHandler = async () => {
            const {data} = await axios.get('/api/locations')

            return data.data
        }

        try{
            const locations = await fetchHandler()
            dispatch(locationsActions.setLocations(locations))
        }catch(err){
            console.log(err)
        }
    } 
}