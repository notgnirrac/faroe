import {Routes, Route} from "react-router-do";
import Home from "..pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

export default function BasicRouting() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> 
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}     