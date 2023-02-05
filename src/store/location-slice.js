import {createSlice} from "@reduxjs/toolkit"

const locationSlice = createSlice({
    name: 'location',
    initialState: { 
        location: {
            id: "",
            title: "",
            location: "",
            googleMapsUrl: "",    
            imageURL: "",
            img: undefined,
            dateFinish: "",
            dateStar: "",
            descript: "",   
        }
    },
    reducers: {
        setLocation(state,action){
            state.location = action.payload
        },
        resetLocation(state){
            state.location = {
                id: "",
                title: "",
                location: "",
                googleMapsUrl: "",    
                imageURL: "",
                img: undefined,
                dateFinish: "",
                dateStar: "",
                descript: "",  
            }
        },
        changeLocation(state,action){
            const {name, type, value, files} = action.payload.data
            if(type === "file"){
                const path = URL.createObjectURL(files[0])
                state.location[name] = files[0]
                state.location.imageURL = path
            }else{
                state.location[name] = value
            }
        }
    }
})

export default locationSlice
export const locationActions = locationSlice.actions

// dateFinish: "24 Jan, 2021"
// ​
// dateStar: "12 Jan, 2021"
// ​
// descript: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
// ​
// googleMapsUrl: "https://goo.gl/maps/4SaSRRDbcBY4hcqQ9"
// ​
// id: 1
// ​
// imageURL: "/Mount-Fuji.jpg"
// ​
// location: "JAPAN"
// ​
// title: "Mount Fuji"