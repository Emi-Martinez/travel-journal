import { useDispatch, useSelector } from "react-redux"
import { popUpLoadLocationActions } from "../store/popUpLoadLocation-slice"
import { locationActions } from "../store/location-slice"
import { removeLocation } from "../store/location-actions"
import {testModeRemoveLocation} from "../test/testModeLocation-actions"
import convertDate from "../util/util"
import Img from "./Image"
import Location from "./Location"
import Button from "./CardButton"
import Title from "./CardTitle"
import Date from "./CardDate"
import Desc from "./Description"

const style = {
    card: {
        width: "35%",
        height: "168px",
        display: "flex",
        marginBottom: "36px",
    },
    cardDescription: {
        padding: "10px 0px 20px 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    cardDescTopContent:{
        display: "flex",
        alignItems: "center",
    }
}

export default function Card({location}){
    const dispatch = useDispatch()
    const session = useSelector((state) => state.user.session)
    
    const handleEdit = () => {
        const editLocation = {
            ...location,            
            dateStar: convertDate(location.dateStar),
            dateFinish: convertDate(location.dateFinish)
        }

        dispatch(locationActions.setLocation(editLocation))
        dispatch(popUpLoadLocationActions.togglePopUp("editLocation")) 
    }

    const handleDeleteLocation = () => {
        if(session === "test-mode"){
            dispatch(testModeRemoveLocation(location))
        }else{            
            dispatch(removeLocation({...location, email: session.email}))
        }
    }

    return(
        <div style={style.card}>
            <Img src={session === "test-mode" ? `${location.imageURL}` : `${process.env.REACT_APP_API_URL}${location.imageURL}`} variant="cardImg" />
            <div style={style.cardDescription}>
                <div style={style.cardDescTopContent}>
                    <Location 
                        style={style.cardDescTopContent}
                        location={location.location}
                        googleMapsLink={location.googleMapsUrl} />
                     <Button 
                        variant="edit"
                        onClick={handleEdit}
                     />
                     <Button 
                        variant="delete"
                        onClick={handleDeleteLocation}    
                    />
                </div>
                <Title>{location.title}</Title>
                <Date start={location.dateStar} finish={location.dateFinish} />
                <Desc>{location.descript}</Desc>
            </div>
        </div>
    )
}