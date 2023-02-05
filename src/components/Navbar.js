import Img from "./Image"

const style = {
    navBar: {
        height: "55px",
        backgroundColor: "#F55A5A",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: "14.46px",
        fontWeight: 100,
        marginLeft: "7px",
    }
}

export default function Navbar(){
    return(
        <div style={style.navBar}>
            <Img src="./img/world.png" />
            <h2 style={style.title}>My travel journal</h2>
        </div>
    )
}