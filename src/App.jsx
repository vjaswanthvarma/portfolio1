import Education from "./Education";
import Home from "./Home";
import Internships from "./Internships";
import Projects from "./Projects";
import Skills from "./Skills";
import Others from "./Others";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
function  App(){
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Projects" element={<Projects />}/>
            <Route path="/Education" element={<Education />}/>
            <Route path="/Internships" element={<Internships />}/>
            <Route path="/Skills" element={<Skills />}/>
            <Route path="/Other" element={<Others />}/>
        </Routes>
    </BrowserRouter>
        </>
    )
}
export default App;