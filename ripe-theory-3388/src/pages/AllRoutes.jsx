import { Routes,Route } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";

export default function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/register" element= { <Register/>}></Route>
            <Route path="/searchresults" element={<Home/>}></Route>
            <Route path="/searchresults/:id" element={<Home/>}></Route>
        </Routes>
    )
}