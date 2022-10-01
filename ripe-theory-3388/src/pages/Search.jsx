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
     const [page,setPage]=useState(1);
    //  const [loading,setLoading]=useState(true)

     const handlesearch=()=>{
       
      axios(`https://www.arbeitnow.com/api/job-board-api?per_page=10&page=${page}`,{
        method:"get",
      })
        // .then((res)=>res.json())
        // .then((res)=>{res.json()})
        .then((res)=>{
          // let searcharr=[];
          localStorage.removeItem("searcharr");
          localStorage.setItem("searcharr",JSON.stringify(res.data.data));    
        })
      }
    //   setTimeout(() => {
    //     setLoading(false)
    // }, 2000);

      useEffect(()=>{
        
        handlesearch();
        //  setLoading(false)
      },[page])



    let searcharr=JSON.parse(localStorage.getItem("searcharr"))||[];

    return (
        <>
        <Navbar/>
        <RegisterSide/>
        {/* {loading ? <Spinner thickness='4px' margin="auto" marginTop="300px" speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl'/> : */}
        <>
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
        </>
{/* } */}
        <div style={{marginTop:"30px"}}></div>
        <div className="pagintion" style={{display:"flex",alignItems:"center",justifyContent:"space-evenly",width:"350px",margin:"auto",marginTop:"20px",marginBottom:"20px",height:"40px"}} >
           <button onClick={()=>setPage(1)} style={{width:"30px",height:"30px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",background:"#fff"}}>1</button>
           <button onClick={()=>setPage(2)} style={{width:"30px",height:"30px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",background:"#fff"}}>2</button>
           <button onClick={()=>setPage(3)} style={{width:"30px",height:"30px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",background:"#fff"}}>3</button>
           <button onClick={()=>setPage(4)} style={{width:"30px",height:"30px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",background:"#fff"}}>4</button>
           <button onClick={()=>setPage(5)} style={{width:"30px",height:"30px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",background:"#fff"}}>5</button>
           <button onClick={()=>setPage(6)} style={{width:"30px",height:"30px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",background:"#fff"}}>6</button>
           <button onClick={()=>setPage(7)} style={{width:"30px",height:"30px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",background:"#fff"}}>7</button>
           <button onClick={()=>setPage(8)} style={{width:"30px",height:"30px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",background:"#fff"}}>8</button>
           <button onClick={()=>setPage(9)} style={{width:"30px",height:"30px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",background:"#fff"}}>9</button>
           <button onClick={()=>setPage(10)} style={{width:"30px",height:"30px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",background:"#fff"}}>10</button>
        </div>
        <Footer style={{marginTop:"30px"}}/>
        
        
        </>
    )
}