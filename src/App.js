import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Singin from "./pages/Singin";
import TravelJournal from "./pages/TravelJournal";
import "./style.css"

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SharedLayout />} >
                    <Route index element={<Singin />} />
                    <Route path="traveljournal" element={<TravelJournal />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}