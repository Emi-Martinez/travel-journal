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
            const validFileTypes = ['image/jpg','image/jpeg','image/png']
            const {name, type, value, files} = action.payload.data

            if(type === "file"){
                const file = files[0]
                if(!validFileTypes.find(type => type === file.type)){
                    throw new Error("File must be in JPG/PNG format")
                }
                
                const path = URL.createObjectURL(file)
                state.location[name] = file
                state.location.imageURL = path
            }else{
                state.location[name] = value
            }
        }
    }
})

export default locationSlice
export const locationActions = locationSlice.actions