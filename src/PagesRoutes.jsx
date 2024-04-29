import App from "./App";
import Education from "./Education";
import Home from "./Home";
import Internships from "./Internships";
import Projects from "./Projects";
import Skills from "./Skills";
import Others from "./Others";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function PagesRoutes(){
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/yProjects" element={<Projects />}/>
            <Route path="Education" element={<Education />}/>
            <Route path="Internships" element={<Internships />}/>
            <Route path="Skills" element={<Skills />}/>
            <Route path="Other" element={<Others />}/>
        </Routes>
    </BrowserRouter>)
}