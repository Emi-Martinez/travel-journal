import { useDispatch, useSelector } from "react-redux"
import { userOptionsUIActions } from "../store/userOptionsUI-slice"
import UserOptions from "./UserOptions"
import Img from "./Image"

const style = {
    userContainer:{
        width: "40px",
        height: "32px",
        position: "absolute",
        right: "12px",
        top: "12px",
        display:"flex",
        flexDirection: "colum",
        alignItems: "center",
        justifyContent: "space-between",
    },
    testMode: {
        textAlign: "center",
        lineHeight: "2",
        backgroundColor: "#6603fc"
    }
}

export default function User(props){
    const dispatch = useDispatch()
    const userOptionsToggle = useSelector((state) => state.userOptionsUI.toggle)
    const session = useSelector((state) => state.user.session)

    const handleClick = () => {
        dispatch(userOptionsUIActions.toggleUserOptions())
    }

    return(
        <div style={style.userContainer} >
            {
                session !== "test-mode" ? <Img referrerPolicy="no-referrer" src={props.userImg ? props.userImg : null} className="user-img" onClick={handleClick} />
                :
                <div className="user-img" style={style.testMode} onClick={handleClick}>T</div>
            }
            {userOptionsToggle && <UserOptions />}
        </div>
    )
}