const style = {
    none:{
        display:"none"
    }
}

export default function CustomInput(props){
    return(
        <input style={style[props.variant]} className="input" {...props} />
    )
}