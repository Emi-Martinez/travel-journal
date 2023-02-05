const style = {
    color: "#2B283A",
    fontSize: "25px",
    fontWeight: 700,
    marginTop: "7px",
    marginBottom: "0px",
}

export default function cardTitle(props){
    return(
        <h2 style={style} {...props}>{props.children}</h2>
    )
}