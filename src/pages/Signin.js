import SinginButton from "../components/SinginButton"
import GoogleLogIn from "../util/GoogleLogIn"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { alertActions } from "../store/alert-slice"
import { userActions } from "../store/user-slice"
import useWindowSize from "../hooks/useWindowSize"

const style = {
    signIn: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }
}

export default function Signin(){
    const navigate = useNavigate()
    const session = useSelector((state) => state.user.session)
    const dispatch = useDispatch()
    let mode = undefined
    useWindowSize(dispatch)
    const responsive = useSelector((state) => state.responsive.mobile)
       
    useEffect(()=>{
        if(session){
            return navigate('traveljournal')
        }
    },[navigate, session])

    const handleClickGoogleBtn = async () => {
        try {
            mode = responsive !== undefined ? "mobile" : undefined
            await GoogleLogIn(mode)

        } catch (error) {
            dispatch(alertActions.activateAlert(error.message))
            setTimeout(()=>{
                dispatch(alertActions.activateAlert())
            },6000)
        }
       
    }

    const handleClickTestMode = () => {
        try {
            dispatch(userActions.logIn("test-mode"))
        } catch (error) {
            dispatch(alertActions.activateAlert("Something went wrong"))
            setTimeout(()=>{
                dispatch(alertActions.activateAlert())
            },6000)
            
        }
    }

    return(
        <div style={style.signIn}>
            <h1>Sing in to Travel-journal</h1>
            <SinginButton variant="gears" onClick={handleClickTestMode} >
                Test mode
            </SinginButton>
            <SinginButton variant="google" onClick={handleClickGoogleBtn} >
                Google
            </SinginButton>         
        </div>
    )
}