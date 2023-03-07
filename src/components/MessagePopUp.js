import PopUpContainer from "./PopUpContainer"
import PopUp from "./BasePopUp"
import Button from "./Button"
import { messagePopUpActions } from "../store/messagePopUp-slice"
import { useDispatch, useSelector } from "react-redux"

const style = {
    messageContainer:{
        width: "97%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: "3%" ,
    },
    mensage:{
        fontSize: "30px"
    }
}

export default function MessagePopUp(){
    const messagePopUp = useSelector((state) => state.messagePopUp)
    const dispatch = useDispatch()
    const message = messagePopUp.message.split("\\n").map((text, i) => (<p key={i} style={style.mensage}>{text}</p>))

    const handleClosePopUp = () => {
        dispatch(messagePopUpActions.toggleMessagePopUp({}))
    }

    return(
        <div>
            <PopUpContainer>
                <PopUp>
                    <div style={style.messageContainer}>
                        <span>{message}</span>
                    </div>
                    <Button variant='popUp' onClick={ messagePopUp.btnAction ? messagePopUp.btnAction : handleClosePopUp}>
                        {messagePopUp.btnLabel ? messagePopUp.btnLabel : 'Accept'}
                    </Button>
                </PopUp>
            </PopUpContainer>
        </div>
    )
}