import Img from "./Image"
import User from "./User"
import { useSelector } from "react-redux"
import Alert from "./Alert"

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
    const session = useSelector((state) => state.user.session)
    const alert = useSelector((state) => state.alert)

    return(
        <div style={style.navBar}>
            {alert.toggle && <Alert message={alert.message} />}
            <Img src="./img/world.png" />
            <h2 style={style.title}>My travel journal</h2>
            {session && <User userImg={session.photoURL}/>}            
        </div>
    )
}