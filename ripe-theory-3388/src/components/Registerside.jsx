import { CheckCircleIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/react";

export default function RegisterSide(){

    return (
        <div style={{position:"fixed"}}>
        <Image marginLeft="220px" marginTop="100px" src='https://static.naukimg.com/s/7/104/assets/images/green-boy.c8b59289.svg' alt='Dan Abramov' />
        
        <div style={{display:"block",textAlign:"left",lineHeight:"18px",width:"250px",height:"200px",padding:"20px 20px 40px 20px",marginLeft:"150px",background: "#fff",border: "1px dashed #d3e1ea",borderRadius: "20px 14px",position: "relative"}}>
          <div style={{background: "#fff"}} >
          <h2 style={{fontSize:"18px",fontWeight:"bold",background: "#fff"}}>On registering, you can</h2>
          </div>

          <div style={{background: "#fff"}}>
            <p style={{color:"#445578",fontSize:"14px",marginTop:"15px",background: "#fff"}}> <CheckCircleIcon color="green.400" boxSize="15px" marginRight="7px"/>Build your profile and let recruiters find you</p>
           
          </div>
          <div style={{background: "#fff"}}>
            <p style={{color:"#445578",fontSize:"14px",marginTop:"15px",background: "#fff"}}> <CheckCircleIcon color="green.400" boxSize="15px" marginRight="7px"/>Get job postings delivered right to your email</p>
           
          </div>
          <div style={{background: "#fff"}}>
            <p style={{color:"#445578",fontSize:"14px",marginTop:"15px",background: "#fff"}}> <CheckCircleIcon color="green.400" boxSize="15px" marginRight="7px"/>Find a job and grow your career</p>
           
          </div>

        </div>
        </div>
    )
}