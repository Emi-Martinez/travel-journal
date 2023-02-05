const style = {
    none:{
        position: "absolute",
        zIndex: "-1",
    }
}

export default function CustomInput(props){
    return(
        <input style={style[props.variant]} className="input" {...props} />
    )
}