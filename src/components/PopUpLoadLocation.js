import {useSelector, useDispatch} from "react-redux"
import { popUpLoadLocationActions } from "../store/popUpLoadLocation-slice"
import { locationActions } from "../store/location-slice"
import { addLocation, updateLocation } from "../store/location-actions"
import { testModeAddLocation,testModeUpdateLocation } from "../test/testModeLocation-actions"
import { alertActions } from "../store/alert-slice"
import PopUpContainer from "./PopUpContainer"
import PopUp from "./BasePopUp"
import ImgInput from "./ImgInput"
import InputField from "./InputField"
import Button from "./Button"

const style = {
    topDataContainer: {
        display: "flex",
        height: "60%",
        flexDirection: "row",
    },
    topDataContainerMobile: {
        display: "flex",
        height: "60%",
        width: "200%",
        flexDirection: "column",
        alignItems: "start",
        marginBottom: "45%"
    },
    dataContainer: {
        width: "70%",
        height: "60%",
        display: "flex",
        flexDirection: "column",
    },
    dataContainerMobile: {
        width: "70%",
        height: "50%",
        display: "flex",
        flexDirection: "column",
    },
    row:{
        display: "flex",
        alignItems: "center",
    },
    column:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    dltBtn:{
        position: "absolute",
        right: "10px",
    },
    textAreaMobile: {
        width: "98%",
        height: "100%",
    }
}

export default function PopUpLoadLocation(){
    const dispatch = useDispatch()
    const popUpType = useSelector((state) => state.popUpLoadLocation.type)
    const location = useSelector((state) => state.location.location)
    const session = useSelector((state) => state.user.session)
    const responsive = useSelector((state) => state.responsive.mobile)
    
    const handleClosePopUp = () => {
        dispatch(popUpLoadLocationActions.togglePopUp())
        dispatch(locationActions.resetLocation())
    }

    const handleChange = (e) => {
        const {name, type, value, files} = e.target
        
        try {
            dispatch(locationActions.changeLocation({data:{name,type,value,files}}))
        } catch (error) {
            dispatch(alertActions.activateAlert(error.message))
        }
        
    }

    const handleUpdateLocation = () => {
        if(session === "test-mode"){
            dispatch(testModeUpdateLocation())
            handleClosePopUp()
        }else{
            dispatch(updateLocation({...location, email: session.email}))
            handleClosePopUp()
        }        
    }

    const handleAddLocation = () => {
        if(session === "test-mode"){
            dispatch(testModeAddLocation())
            handleClosePopUp()
        }else {            
            dispatch(addLocation({...location, email: session.email }))
            handleClosePopUp()
        }
    }

    return(
        <PopUpContainer>
            <PopUp mobile={responsive && true} onClose={handleClosePopUp}>
                <div style={ responsive ? style.topDataContainerMobile : style.topDataContainer }>                    
                    <ImgInput 
                        name="img"
                        id="img" 
                        disabled={popUpType === "editLocation" ? true : false}
                        onChange={handleChange}
                        img={location.imageURL}
                     />
                    <div style={ responsive ? style.dataContainerMobile : style.dataContainer}>
                        <div style={ responsive ? style.column : style.row }>
                            <InputField 
                                name="location"
                                img="./img/location-icon.png"
                                value={location.location}
                                onChange={handleChange}
                                type={responsive ? "inputMobile" : undefined}
                            >
                                Location
                            </InputField>
                            <InputField
                                name="googleMapsUrl"
                                id="googleMapsUrl"
                                value={location.googleMapsUrl}
                                onChange={handleChange}
                                type={responsive ? "inputMobile" : undefined}
                            >
                                Link google Maps
                            </InputField>
                        </div>
                        <InputField
                            name="title"
                            id="title"
                            value={location.title}
                            onChange={handleChange}
                            type={responsive ? "inputMobile" : undefined}
                        >
                            Title
                        </InputField>
                        <div style={ responsive ? style.column : style.row }>
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
                    type= "textArea"
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
            </PopUp>
        </PopUpContainer>
    )
}