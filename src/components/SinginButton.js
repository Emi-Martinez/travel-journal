import {ReactComponent as GoogleSVG} from "../icons/google.svg"
import {ReactComponent as Gears} from "../icons/gears.svg"

const style = {
    icons: {
        width:"25px",
        color: "white",
        marginRight: "10px",
        verticalAlign: "middle"
    },
    text:{
        verticalAlign: "middle"
    }
}

const icons = {
    google: <GoogleSVG style={style.icons} />,
    gears: <Gears style={{...style.icons, width: "30px", marginRight: "10px"}}/>
}

export default function SinginButton(props){

    return(
        <button className="btn" {...props} >
           { props.variant && icons[props.variant] }
            <span style={style.text} >{props.children}</span>
        </button>
    )
}