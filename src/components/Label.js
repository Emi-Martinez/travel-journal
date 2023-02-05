const style = {
    default:{
        marginRight: "155px"
    },
    imgInput: {
        position: "absolute",
        left: "25%",
        top: "40%",
        width: "50%",
        height: "10%",
        fontFamily: "Inter, sans-serif",
        fontWeight: 600,
        fontSize: "20px",
    }
}

export default function Label(props){
    return(
        <label style={style[props.variant]} {...props} >
            {props.children}
        </label>
    )
}