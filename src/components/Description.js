const style = {
    color: "#2B283A",
    fontSize: "10.24px",
    fontWeight: 100,
    lineHeight: "150%",
    marginTop: "9px",
    marginBottom: "0px",
}

export default function Description(props){
    return(
        <p style={style}>{props.children}</p>
    )
}