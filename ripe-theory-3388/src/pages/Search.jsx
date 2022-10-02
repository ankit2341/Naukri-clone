import { Skeleton, Spinner, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import RegisterSide from "../components/Registerside";
import AirbnbCard from "../components/SeachpageDiv";
import "../Nvabar.css"
import axios from "axios"
import Footer from "../components/Footer";

export default function Search(){
     const navigate= useNavigate();
     const [loading,setLoading]=useState(true)
    
    setTimeout(()=>{
      setLoading(false)
    },2000)

     let searcharr=JSON.parse(localStorage.getItem("searcharr"))||[];

     const handlesearchplus=()=>{
      
      axios(`https://www.arbeitnow.com/api/job-board-api?per_page=10&page=1`,{
        method:"get",
      })
       
        .then((res)=>{
         
          localStorage.removeItem("searcharr");
          localStorage.setItem("searcharr",JSON.stringify(res.data.data));   
       
        })
      }
  
  useEffect(()=>{
    handlesearchplus();
  },[])

    return (
      <>
      {loading ? <> <Navbar/><Stack margin="auto">
  <Skeleton height='80px' marginBottom="30px" />
  <Skeleton height='200px' marginBottom="50px" />
  <Skeleton height='270px' marginBottom="30px" />
</Stack></> :
       
        <>
        <Navbar/>
        <RegisterSide/>
       
        <div style={{display:"flex",justifyContent:"space-between",marginTop:"30px"}}>
            
        <div style={{display:"grid",gridTemplateColumns:"repeat(1,600px)",gridTemplateRows:"repeat(100,auto)",marginLeft:"500px",gap:"20px"}}>
            {searcharr.map((el)=>{
                return(
                <AirbnbCard eld={el}/>
                )
            })}
        </div>
        <div style={{width:"400px",height:"200px",marginRightt:"20px"}} >
        <img src="https://i.postimg.cc/KzYYxXkH/Capture4.jpg" style={{width:"270px",height:"550px"}} onClick={()=>{navigate("/")}} alt="" />
        </div>
        </div>

        <div style={{marginTop:"30px"}}></div>
        
        <Footer style={{marginTop:"30px"}}/>
        </>
      }
        </>
        
    )
}