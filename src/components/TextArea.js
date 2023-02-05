const style = {
    width: "99%",
    height: "100%",
}

export default function CustomTextArea(props){
    return(
        <textarea style={style} className="input" {...props} />
    )
}