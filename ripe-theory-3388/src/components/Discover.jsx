import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Image, SimpleGrid } from "@chakra-ui/react";


export default function Discover(){
       return(
        <>
     <div style={{display:"flex",alignItems:"center",jsutifyContent:"center",width:"75%",height:"400px",background:"#fef9f4",margin:"auto"}}>
        <div style={{width:"40%",height:"300px",marginLeft:"10%",textAlign:"left",marginTop:"30px"}}>
        <Image
    boxSize='100px'
    objectFit='cover'
    src='https://static.naukimg.com/s/0/0/i/role-collection.png'
    alt='Dan Abramov' />
    <h1 style={{fontSize:"35px",marginBottom:"20px",fontWeight:"700"}}>Discover jobs across popular roles</h1>
    <p style={{color:"#8292b4"}}>Select a role and we'll show you relevant jobs for it!</p>
        </div>

        <div style={{width:"40%",height:"400px",backgroundColor:"white"}}>
        <SimpleGrid columns={2} rows={3} spacingX='20px' spacingY='20px'>
  <Box bg='white' height='120px' style={{display:"flex",alignItems:"center",justifyContent:"left",marginLeft:"20px",border:"1px solid #EAF1F5"}}>
    Full Stack Devloper <ArrowForwardIcon/>
  </Box>
  <Box bg='white' style={{display:"flex",alignItems:"center",justifyContent:"left",marginLeft:"20px",border:"1px solid #EAF1F5"}} height='120px'>
    Mobile Devloper <ArrowForwardIcon/>
  </Box>
  <Box bg='white' height='120px' style={{display:"flex",alignItems:"center",justifyContent:"left",marginLeft:"20px",border:"1px solid #EAF1F5"}}>
    Frontend devloper <ArrowForwardIcon/>
  </Box>
  <Box bg='white' height='120px' style={{display:"flex",alignItems:"center",justifyContent:"left",marginLeft:"20px",border:"1px solid #EAF1F5"}}>
    Devops engineer <ArrowForwardIcon/>
  </Box>
  <Box bg='white' height='120px' style={{display:"flex",alignItems:"center",justifyContent:"left",marginLeft:"20px",border:"1px solid #EAF1F5"}}>
    Engineering Manager <ArrowForwardIcon/>
  </Box>
  <Box bg='white' height='120px' style={{display:"flex",alignItems:"center",justifyContent:"left",marginLeft:"20px",border:"1px solid #EAF1F5"}}>
    Technical Lead <ArrowForwardIcon/>
  </Box>
</SimpleGrid>
        </div>
        
       
     </div>
     
        </>
       )
}