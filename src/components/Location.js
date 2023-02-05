import Img from "./Image"
import A from "./Link"
import LocationName from "./LocationName"

export default function Location(props){
    return(
        <div style={props.style}>
            <Img src="./img/location-icon.png" />
            <LocationName>{props.location}</LocationName>
            <A href={props.googleMapsLink}>View on Google Maps</A>
            {props.children}
        </div>
    )
}