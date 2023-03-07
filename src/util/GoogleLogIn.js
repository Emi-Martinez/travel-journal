import { auth } from '../firebase'
import { signInWithPopup, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";

export default async function GoogleLogIn(mode){
    const provider = new GoogleAuthProvider()
    provider.setCustomParameters({
        prompt: 'select_account'
    })

    try {
        if(mode === 'mobile'){
            await signInWithRedirect(auth, provider)
        }else {
            const credentials = await signInWithPopup(auth, provider)
        }  
    } catch (error) {
        
        if(error.code !== "auth/popup-closed-by-user"){
           throw new Error('Something went wrong')
        }      
    }

}