import {ReactComponent as FacebookSVG} from "../icons/facebook.svg"
import {ReactComponent as GoogleSVG} from "../icons/google.svg"
import {ReactComponent as GlassesSVG} from "../icons/glasses.svg"

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
    facebook : <FacebookSVG style={style.icons} />,
    google: <GoogleSVG style={style.icons} />,
    glasses: <GlassesSVG  style={{...style.icons, width: "30px", marginRight: "5px"}}/>

}

export default function SinginButton(props){

    return(
        <button className="btn" >
           { props.variant && icons[props.variant] }
            <span style={style.text} >{props.children}</span>
        </button>
    )
}