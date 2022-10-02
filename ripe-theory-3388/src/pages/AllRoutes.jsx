import { Routes,Route } from "react-router-dom";
import Home from "./Home";
import JobDescription from "./JobDescription";
import Register from "./Register";
import Search from "./Search";

export default function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/register" element= { <Register/>}></Route>
            <Route path="/searchresults" element={<Search/>}></Route>
            <Route path="/searchresults/:id" element={<JobDescription/>}></Route>
        </Routes>
    )
}