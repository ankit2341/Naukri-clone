import { Routes,Route } from "react-router-dom";
import Home from "./Home";

export default function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/register" element= { <h1>hello</h1> }></Route>
            <Route path="/searchresults" element={<Home/>}></Route>
            <Route path="/searchresults/:id" element={<Home/>}></Route>
        </Routes>
    )
}