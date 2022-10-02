import { Box, Button, ButtonGroup, Flex, Heading, Image, Spacer } from "@chakra-ui/react";
import { Companies, DrawerExample, ForEmployers, Jobs, Services } from "./NavButtonHover";
import "../Nvabar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar(){
    const navigate=useNavigate();
    var Loginuser=[JSON.parse(localStorage.getItem("Loginuser"))] ||undefined
    console.log(Loginuser);
    var lengthl=Loginuser.length;
    console.log(lengthl);


    function handlelogout(){
        if (window.confirm("Do you want to logout?")) {
            localStorage.removeItem("Loginuser");
            window.location.reload();
          }
       
    }
    return (
 <div className="main-container">
    <div className="Logo">
    <Image onClick={()=>{navigate("/")}} width="150px" height="27px" src='https://static.naukimg.com/s/4/100/i/naukri_Logo.png' alt='Dan Abramov' />
    </div>
    <div className="btn-navbar" style={{display:"flex",width:"300px" ,fontWeight:"500", height:"30px",alignItem:"flex-end",justifyContent:"space-evenly"}}>
        <Jobs/>
        <Companies/>
        <Services/>
    </div>
    {Loginuser[0]!=null  ? 
    <div className="side-nav" style={{display:"flex",width:"380px",height:"40px",alignItems:"flex-end",justifyContent:"space-evenly"}}>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-evenly",width:"150px",height:"40px",border:"1px solid blue",borderRadius:"20px"}} onClick={handlelogout}>
    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M256 112c-48.6 0-88 39.4-88 88C168 248.6 207.4 288 256 288s88-39.4 88-88C344 151.4 304.6 112 256 112zM256 240c-22.06 0-40-17.95-40-40C216 177.9 233.9 160 256 160s40 17.94 40 40C296 222.1 278.1 240 256 240zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-46.73 0-89.76-15.68-124.5-41.79C148.8 389 182.4 368 220.2 368h71.69c37.75 0 71.31 21.01 88.68 54.21C345.8 448.3 302.7 464 256 464zM416.2 388.5C389.2 346.3 343.2 320 291.8 320H220.2c-51.36 0-97.35 26.25-124.4 68.48C65.96 352.5 48 306.3 48 256c0-114.7 93.31-208 208-208s208 93.31 208 208C464 306.3 446 352.5 416.2 388.5z"/></svg></div>
    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}><p style={{fontSize:"15px"}}>{Loginuser[0].email}</p></div>

    </div>
    
    <ForEmployers/>
</div> :
<div className="side-nav" style={{display:"flex",width:"380px",height:"40px",alignItems:"flex-end",justifyContent:"space-evenly"}}>
        
<div><DrawerExample/></div>
<div><Button backgroundColor="#ff7555" color="#fff" width="100px" borderRadius="full"><Link to="/register">Register</Link> </Button></div>
<ForEmployers/>
</div>

}
 </div>
    )
}