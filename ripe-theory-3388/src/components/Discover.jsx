import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


export default function Discover(){
  const navigate=useNavigate();
       return(
        <>
     <div style={{display:"flex",alignItems:"center",jsutifyContent:"center",width:"75%",height:"400px",background:"#fef9f4",margin:"auto"}}>
        <div style={{width:"40%",height:"300px",marginLeft:"10%",textAlign:"left",marginTop:"30px",background:"#fef9f4"}}>
        <Image
    boxSize='100px'
    objectFit='cover' background="#fef9f4"
    src='https://static.naukimg.com/s/0/0/i/role-collection.png'
    alt='Dan Abramov' />
    <h1 style={{fontSize:"35px",marginBottom:"20px",fontWeight:"700",background:"#fef9f4"}}>Discover jobs across popular roles</h1>
    <p style={{color:"#8292b4",background:"#fef9f4"}}>Select a role and we'll show you relevant jobs for it!</p>
        </div>

        <div style={{width:"40%",height:"400px",backgroundColor:"white"}}>
        <SimpleGrid columns={2} rows={3}  spacingX='20px' spacingY='20px'>
  <Box onClick={()=>{navigate("/searchresults")}} _hover={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}} bg='white' height='120px' style={{display:"flex",alignItems:"center",justifyContent:"left",paddingLeft:"20px",border:"1px solid #EAF1F5"}}>
    Full Stack Devloper <ArrowForwardIcon/>
  </Box>
  <Box onClick={()=>{navigate("/searchresults")}} _hover={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}} bg='white' style={{display:"flex",alignItems:"center",justifyContent:"left",paddingLeft:"20px",border:"1px solid #EAF1F5"}} height='120px'>
    Mobile Devloper <ArrowForwardIcon/>
  </Box>
  <Box onClick={()=>{navigate("/searchresults")}} _hover={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}} bg='white' height='120px' style={{display:"flex",alignItems:"center",justifyContent:"left",paddingLeft:"20px",border:"1px solid #EAF1F5"}}>
    Frontend devloper <ArrowForwardIcon/>
  </Box>
  <Box onClick={()=>{navigate("/searchresults")}} _hover={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}} bg='white' height='120px' style={{display:"flex",alignItems:"center",justifyContent:"left",paddingLeft:"20px",border:"1px solid #EAF1F5"}}>
    Devops engineer <ArrowForwardIcon/>
  </Box>
  <Box onClick={()=>{navigate("/searchresults")}} _hover={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}} bg='white' height='120px' style={{display:"flex",alignItems:"center",justifyContent:"left",paddingLeft:"20px",border:"1px solid #EAF1F5"}}>
    Engineering Manager <ArrowForwardIcon/>
  </Box>
  <Box onClick={()=>{navigate("/searchresults")}} _hover={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}} bg='white' height='120px' style={{display:"flex",alignItems:"center",justifyContent:"left",paddingLeft:"20px",border:"1px solid #EAF1F5"}}>
    Technical Lead <ArrowForwardIcon/>
  </Box>
</SimpleGrid>
        </div>
        
       
     </div>
     
        </>
       )
}