import { useSelector, useDispatch } from "react-redux";
import { fetchLocations } from "./store/locations-actions";
import { popUpActions } from "./store/popUp-slice";
import { useEffect } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Button from "./components/Button"
import PopUp from "./components/PopUp";
import Alert from "./components/Alert";
import "./style.css"



export default function App(){
    const dispatch = useDispatch()
    const locations = useSelector((state) => state.locations.locations)
    const popUp = useSelector((state) => state.popUp)
    const alert = useSelector((state) => state.alert)

    const handleClick = () => {
        dispatch(popUpActions.togglePopUp("newLocation"))
    }

    useEffect(()=>{
        dispatch(fetchLocations())
    },[dispatch])

    const cards = locations.map((location) => (
        <Card
            key={location.id}
            location = {location}
        />
    ))

    return(
        <div>            
            {popUp.toggle && <PopUp />}
            {alert.toggle && <Alert message={alert.message} />}
            <Navbar />            
            <div className="card-container">
                {cards}               
                <Button onClick={handleClick}>
                    Add location
                </Button>
            </div>
        </div>
    )
}