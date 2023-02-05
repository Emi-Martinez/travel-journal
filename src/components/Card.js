import { useDispatch } from "react-redux"
import { popUpActions } from "../store/popUp-slice"
import { locationActions } from "../store/location-slice"
import { removeLocation } from "../store/location-actions"
import convertDate from "../util/util"
import Img from "./Image"
import Location from "./Location"
import Button from "./CardButton"
import Title from "./CardTitle"
import Date from "./CardDate"
import Desc from "./Description"

const style = {
    card: {
        width: "470px",
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
    
    const handleEdit = () => {
        const editLocation = {
            ...location,            
            dateStar: convertDate(location.dateStar),
            dateFinish: convertDate(location.dateFinish)
        }
        dispatch(locationActions.setLocation(editLocation))
        dispatch(popUpActions.togglePopUp("editLocation"))
    }

    const handleDeleteLocation = () => {
        dispatch(removeLocation(location))
    }

    return(
        <div style={style.card}>
            <Img src={location.imageURL} variant="cardImg" />
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