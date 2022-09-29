import { Box, Button, ButtonGroup, Flex, Heading, Image, Spacer } from "@chakra-ui/react";
import { Companies, DrawerExample, ForEmployers, Jobs, Services } from "./NavButtonHover";
import "../Nvabar.css";
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
 <div className="main-container">
    <div className="Logo">
    <Image width="150px" height="27px" src='https://static.naukimg.com/s/4/100/i/naukri_Logo.png' alt='Dan Abramov' />
    </div>
    <div className="btn-navbar" style={{display:"flex",width:"300px" ,fontWeight:"500", height:"30px",alignItem:"flex-end",justifyContent:"space-evenly"}}>
        <Jobs/>
        <Companies/>
        <Services/>
    </div>
    <div className="side-nav" style={{display:"flex",width:"380px",height:"40px",alignItems:"flex-end",justifyContent:"space-evenly"}}>
        <div><DrawerExample/></div>
        <div><Button backgroundColor="#ff7555" color="#fff" width="100px" borderRadius="full"><Link to="/register">Register</Link> </Button></div>
        <ForEmployers/>
    </div>
 </div>
    )
}