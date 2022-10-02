import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import JobDescriptionLeftone from "../components/DescriptionJob";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";



export default function JobDescription(){

    var Loginuser=[JSON.parse(localStorage.getItem("Loginuser"))] ||undefined
    console.log(Loginuser);
    var lengthl=Loginuser.length;
    console.log(lengthl);
  
    const [num]=useState(0)
    const navigate=useNavigate();
    const params=useParams();
    //console.log(params.id)
    var searcharr=JSON.parse(localStorage.getItem("searcharr"))||[];
    var filterarr=JSON.parse(localStorage.getItem("filtered"))||[];
   
    console.log(filterarr.length);
    function checkdata(){
      let filtered=searcharr.filter((el)=>{
       
        return el.slug==params.id
      })
      localStorage.removeItem("filtered");
      localStorage.setItem("filtered",JSON.stringify(filtered));
    }
    checkdata();
    // useEffect(()=>{
    //     checkdata();
    // },[])
 
    
    return (
       
      <>
      <Navbar/>
        <div style={{background: "#d4e5ff",width:"100%",height:"50px"}}></div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",width:"600px",margin:"auto"}}>
            <div>
            <JobDescriptionLeftone eld={filterarr[0]}/>
            </div>
  
            {Loginuser[0]!=null  ?
             <div>
             <div style={{display:"flex",alignItems:"center",justifyContent:"space-evenly",width:"550px",height:"30px",marginTop:"20px",marginBottom:"20xp"}}>
             <button style={{width:"250px",height:"40px",backgroundColor:"#4A90E2",color:"white"}} onClick={()=>{if (window.confirm("Do you really want to apply")) {alert("Hurray! Applied successfully Recruiter will soon contact you");navigate("/")}}}>Apply Now</button>
           </div>
             </div>
           :
             <div>
             <div style={{display:"flex",alignItems:"center",justifyContent:"space-evenly",width:"550px",height:"30px",marginTop:"20px",marginBottom:"20xp"}}>
             <button style={{width:"250px",height:"40px",color:"#4A90E2",backgroundColor:"white",border:"2px solid #4A90E2"}} onClick={()=>{navigate("/register")}}>Register To Apply</button>
             <button style={{width:"250px",height:"40px",backgroundColor:"#4A90E2",color:"white"}} onClick={()=>{navigate("/")}}>Login To Apply</button>
           </div>
             </div> 
        }
            

            <div style={{width:"800px",height:"400px",padding:"20px 40px",border:"1px solid lightgray",borderRadius:"5px",marginTop:"20px",fontSize:"12px",color:"gray",display:"flex",flexDirection:"column",justifyContent:"left",textAlign:"justify"}}>
                <h1 style={{fontSize:"18px",fontWeighT:"bolder",color:"black",marginBottom:"10px",fontSize: "18px",fontWeight: "bold", color: "#091e42!important"}}>Job Description</h1>
                <p>{filterarr[0].description}</p>
            </div>

            <div style={{width:"800px",height:"400px",padding:"20px 40px",border:"1px solid lightgray",borderRadius:"5px",marginTop:"20px",fontSize:"12px",color:"gray",display:"flex",flexDirection:"column",justifyContent:"left",textAlign:"justify"}}>
                <h1 style={{fontSize:"18px",fontWeighT:"bolder",color:"black",marginBottom:"10px",fontSize: "18px", fontWeight: "bold",color: "#091e42!important"}}>About us</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae dolorem eum harum aliquid molestias, at quas ad sapiente iste deleniti dicta culpa doloribus natus esse ea accusantium assumenda nulla corrupti.
                Numquam voluptatum culpa ipsum ad qui, praesentium vitae in sunt consequatur dolorum excepturi, ullam itaque ut corrupti a voluptates eveniet ducimus minus nisi. Sequi veritatis vero in tempore exercitationem recusandae!
                Unde, deleniti aliquid rem velit eos perspiciatis minus maiores ab placeat dolores explicabo quas mollitia neque pariatur impedit sint delectus repudiandae minima omnis, odit sequi nulla obcaecati consectetur consequuntur? Ducimus.
                Harum veniam, inventore beatae id suscipit quos numquam quam debitis. Est repudiandae vero pariatur, molestiae repellendus deserunt modi necessitatibus suscipit quibusdam et. Aut consectetur sequi tempora, quis vero autem natus!
                Necessitatibus ipsa asperiores numquam consectetur. Necessitatibus expedita, libero maiores perspiciatis eveniet dignissimos consequatur pariatur neque voluptate debitis et in ipsum sed laudantium fugit facilis architecto sunt ratione ea, sint natus?
                Quia sequi id odit velit maiores vitae nam aperiam doloremque repudiandae ad rerum asperiores nemo, porro iusto quidem, ducimus autem aliquid praesentium suscipit explicabo assumenda eum expedita error aut. Itaque.
                Nihil exercitationem nobis pariatur similique rerum incidunt fugit ipsa harum maiores quis animi, laboriosam commodi quas facere et illo, fugiat saepe dicta. Maxime, nam. Aspernatur eius eveniet aliquam distinctio explicabo.
                Voluptatum commodi ex veniam eos dolorum sit impedit. Corrupti, sit. Amet impedit corporis consectetur, enim accusantium molestias aliquid distinctio rem sequi dolore, ipsa dolorum. Amet quam quo consequatur recusandae tempora.
                Sunt cupiditate libero quisquam quae eligendi deserunt nostrum inventore numquam deleniti at eveniet omnis eos, debitis aperiam dolorem laboriosam neque amet voluptate odit explicabo consectetur voluptas possimus. Vitae, ullam atque!
                Quia debitis voluptatibus ipsum dicta minus. Perspiciatis itaque quo atque, sapiente in dolore adipisci id ratione nisi ut sint. Error eligendi libero totam perspiciatis, est deleniti iure maxime harum incidunt.</p>
            </div>
        </div>
        <Footer/>
        </>
         )
}