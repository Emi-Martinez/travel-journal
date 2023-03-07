import Button from "./Button"
import { signOut } from "firebase/auth"
import { auth } from "../firebase"
import { useDispatch } from "react-redux"
import { userActions } from "../store/user-slice"
import { userOptionsUIActions } from "../store/userOptionsUI-slice"

const style = {
    userOptionsContainer: {
        position: "absolute",
        right: "1px",
        top: "50px",
        width: "300%",
        backgroundColor: "white",
        border: "1px solid grey",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        padding: "2px"
    }
}

export default function UserOptions(){
    const dispatch = useDispatch()

    const handleClickLogOut = async () => {
        await signOut(auth)
        dispatch(userActions.logOut())
        dispatch(userOptionsUIActions.toggleUserOptions())
    }

    return(
        <div style={style.userOptionsContainer} >
            <Button className="user-option-btn" onClick={handleClickLogOut}>
                Log-out
            </Button>
        </div>
    )
}