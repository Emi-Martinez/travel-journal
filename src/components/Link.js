const style = {
    color: "#918E9B",
    fontSize: "10.24px",
    marginLeft: "12px",
    marginBottom: "0xp", 
}

export default function Link(props){
    return(
        <a style={style} {...props} >{props.children}</a>
    )
}