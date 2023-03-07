import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { userActions } from "./store/user-slice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Signin from "./pages/Signin";
import TravelJournal from "./pages/TravelJournal";
import "./style.css"

export default function App(){
    const dispatch = useDispatch()
    useEffect(()=>{
        onAuthStateChanged(auth, (user) =>{
            if(user){
                dispatch(userActions.logIn(user))
            }
        })
    }, [dispatch])

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SharedLayout />} >
                    <Route index element={<Signin />} />
                    <Route path="traveljournal" element={<TravelJournal />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}