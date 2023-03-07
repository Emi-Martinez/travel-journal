const style = {
    container:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "25px",
        fontWeight: "400",
        lineHeight: "5%"
    }
}

export default function NoCardsAction(){
    return(
        <div style={style.container}>
            <p>There are no cards in your journal.</p>
            <p>¡Add some!</p>
        </div>
    )
}