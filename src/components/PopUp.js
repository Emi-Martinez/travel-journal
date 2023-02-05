import {useSelector, useDispatch} from "react-redux"
import { popUpActions } from "../store/popUp-slice"
import { locationActions } from "../store/location-slice"
import { addLocation, updateLocation } from "../store/location-actions"
import ImgInput from "./ImgInput"
import InputField from "./InputField"
import Button from "./Button"
import CardButton from "./CardButton"

const style = {
    popUpContainer: {
        position: "fixed",
        top: "-0.01%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        height: "100%",
        width: "100%",
    },
    popUp: {
        position: "absolute",
        left: "20%",
        top: "20%",
        backgroundColor: "white",
        height: "60%",
        width: "60%",
        display: "flex",
        flexDirection: "column",
        fontWeight: 600,
        fontSize: "20px",
        padding: "10px",
        borderRadius: "16px",
    },
    topDataContainer: {
        display: "flex",
        height: "60%",
    },
    dataContainer: {
        width: "70%",
        height: "60%",
        display: "flex",
        flexDirection: "column",
    },
    row:{
        display: "flex",
        alignItems: "center",
    },
    dltBtn:{
        position: "absolute",
        right: "10px",
    }
}

export default function PopUp(){
    const dispatch = useDispatch()
    const popUpType = useSelector((state) => state.popUp.type)
    const location = useSelector((state) => state.location.location)
    
    const handleClosePopUp = () => {
        dispatch(popUpActions.togglePopUp())
        dispatch(locationActions.resetLocation())
    }

    const handleChange = (e) => {
        const {name, type, value, files} = e.target
        
        dispatch(locationActions.changeLocation({data:{name,type,value,files}}))
    }

    const handleUpdateLocation = () => {
        dispatch(updateLocation(location))
        handleClosePopUp()
    }

    const handleAddLocation = () => {
        dispatch(addLocation(location))
        handleClosePopUp()
    }

    return(
        <div style={style.popUpContainer}>
            <div style={style.popUp}>
                <CardButton style={style.dltBtn} onClick={handleClosePopUp} />
                <div style={style.topDataContainer}>                    
                    <ImgInput 
                        name="img"
                        id="img" 
                        disabled={popUpType === "editLocation" ? true : false}
                        onChange={handleChange}
                        img={location.imageURL}
                     />
                    <div style={style.dataContainer}>
                        <div style={style.row}>
                            <InputField 
                                name="location"
                                img="./img/location-icon.png"
                                value={location.location}
                                onChange={handleChange}
                            >
                                Location
                            </InputField>
                            <InputField
                                name="googleMapsUrl"
                                id="googleMapsUrl"
                                value={location.googleMapsUrl}
                                onChange={handleChange}
                            >
                                Link google Maps
                            </InputField>
                        </div>
                        <InputField
                            name="title"
                            id="title"
                            value={location.title}
                            onChange={handleChange}
                        >
                            Title
                        </InputField>
                        <div style={style.row}>
                            <InputField
                                name="dateStar"
                                id="dateStar"
                                type="date"
                                value={location.dateStar}
                                onChange={handleChange}
                            >
                                Initial date
                            </InputField>
                            <InputField 
                                name="dateFinish"
                                id="dateFinish"
                                type="date"
                                value={location.dateFinish}
                                onChange={handleChange}
                            >
                                End date
                            </InputField>
                        </div>              
                    </div>                
                </div>
                <InputField 
                    name="descript"
                    id="descript"
                    type="textArea"
                    value={location.descript}
                    onChange={handleChange}
                >
                    Description
                </InputField>
                {popUpType === "newLocation" ? 
                    <Button variant="popUp" onClick={handleAddLocation} >Add location</Button>
                :
                    <Button variant="popUp" onClick={handleUpdateLocation}>Update location</Button>
                }
            </div>
        </div>
    )
}