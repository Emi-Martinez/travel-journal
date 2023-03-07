import { locationsActions } from "../store/locations-slice";

export const testModeFetchLocations = () => {
    return async (dispatch) => {
        const fetchLocations = async () => {
            const {locations} = await import("./locations")
            return locations
        }

        
        const locations = await fetchLocations()
        dispatch(locationsActions.setLocations(locations))
        
    }
}