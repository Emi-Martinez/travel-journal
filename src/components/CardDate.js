const style = {
    color: "#2B283A",
    fontSize: "10.24px",
    fontWeight: 700,
    marginTop: "13px",
    marginBottom: "0px",
}

export default function CardDate(props){
    return(
       <p style={style}>{`${props.start} - ${props.finish}`}</p>
    )
}