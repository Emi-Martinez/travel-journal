import CardButton from "./CardButton"

const style = {
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
    popUpMobile: {
        position: "absolute",
        left: "20%",
        top: "5%",
        backgroundColor: "white",
        height: "90%",
        width: "60%",
        display: "flex",
        flexDirection: "column",
        fontWeight: 600,
        fontSize: "20px",
        padding: "10px",
        borderRadius: "16px",
    },
    dltBtn:{
        position: "absolute",
        right: "10px",
    },
}

export default function PopUp(props){
    return(
        <div style={ props.mobile ? style.popUpMobile : style.popUp }>
            {props.onClose && <CardButton style={style.dltBtn} onClick={props.onClose} />}
            {props.children}
        </div>
    )
}