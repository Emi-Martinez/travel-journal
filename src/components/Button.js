const style = {
    popUp: {
        width: "90%",
        margin: "auto"
    }
}

export default function customButton(props){
    return(
        <button className="btn" style={style[props.variant]} {...props}>
            {props.children}
        </button>
    )
}