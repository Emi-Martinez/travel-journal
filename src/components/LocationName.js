const style = {
    fontSize: "10.24px",
    fontWeight: "100",
    letterSpacing: "0.17em",
    margin: "4px",
    marginRight: "0px",
    marginBottom: "0xp", 
}

export default function LocationName(props){
    return(
        <h3 style={style} {...props} >{props.children}</h3>
    )
}