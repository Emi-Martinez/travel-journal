const style = {
    popUpContainer: {
        position: "fixed",
        top: "-0.01%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        height: "100%",
        width: "100%",
    },
}

export default function PopUpContainer(props){
    return(
        <div style={style.popUpContainer}>
            {props.children}
        </div>
    )
}