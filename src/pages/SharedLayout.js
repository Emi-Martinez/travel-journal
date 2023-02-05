import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"

export default function SharedLayout(){

    return(
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}