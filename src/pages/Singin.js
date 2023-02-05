import SinginButton from "../components/SinginButton"

const style = {
    signIn: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }
}

export default function Singin(){
    return(
        <div style={style.signIn}>
            <h1>Sing in to Travel-journal</h1>
            <SinginButton variant="glasses" >
                Anonymous
            </SinginButton>
            <SinginButton variant="facebook" >
                Facebook
            </SinginButton>
            <SinginButton variant="google" >
                Google
            </SinginButton>            
        </div>
    )
}