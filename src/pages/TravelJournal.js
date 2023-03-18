import { useSelector, useDispatch } from "react-redux";
import { fetchLocations } from "../store/locations-actions";
import {testModeFetchLocations} from "../test/testModeLocations-actions"
import { popUpLoadLocationActions } from "../store/popUpLoadLocation-slice";
import { useEffect } from "react";
import Card from "../components/Card";
import Button from "../components/Button"
import PopUpLoadLocation from "../components/PopUpLoadLocation";
import Alert from "../components/Alert";
import MessagePopUp from "../components/MessagePopUp";
import { useNavigate } from "react-router-dom"
import useWindowSize from "../hooks/useWindowSize";
import NoCardsAction from "../components/NoCardsAction";

export default function TravelJournal(){
    
    const navigate = useNavigate()
    const session = useSelector((state) => state.user.session)

    const dispatch = useDispatch()
    const locations = useSelector((state) => state.locations.locations)
    const popUpLoadLocation = useSelector((state) => state.popUpLoadLocation)
    const alert = useSelector((state) => state.alert)
    const messagePopUp = useSelector((state) => state.messagePopUp)
    useWindowSize(dispatch)    
    const responsive = useSelector((state) => state.responsive.mobile)

    const handleClick = () => {
        dispatch(popUpLoadLocationActions.togglePopUp("newLocation"))
    }

    useEffect(()=>{
        if(session === undefined){
            return navigate('/')
        }
        if(session === "test-mode"){
            dispatch(testModeFetchLocations())
        }else{
            dispatch(fetchLocations(session.email))
        }
              
    },[dispatch, navigate, session])

    const cards = locations ? locations.map((location) => (
        <Card
            key={location.id}
            location = {{
                ...location,
                imageURL: location.imageURL 
            }}
        />
    )) : []
    
    return(
        <div>
            {messagePopUp.toggle && <MessagePopUp /> }
            {popUpLoadLocation.toggle && <PopUpLoadLocation />}
            {alert.toggle && <Alert message={alert.message} />}          
            <div className={ responsive ? "card-container-mobile" : "card-container"}>
                {cards.length !== 0 ? cards : <NoCardsAction /> }               
                <Button 
                    onClick={handleClick}
                    variant={responsive ? "mobile" : undefined}
                >
                    Add location
                </Button>
            </div>
        </div>
    )
}