import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Box, Image } from "@chakra-ui/react"
import "../Nvabar.css"

export default function TopcompaniesHiring(){
    return (
        <>
        <h1 style={{fontSize:"28px",marginTop:"70px",fontWeight:"700",marginBottom:"30px"}}>Top Companies hiring now</h1>

        <div className="Topcompanies" style={{display:"flex",alignItems:"center",justifyContent:"space-evenly",textAlign:"start",width:"80%",height:"150px",margin:"auto",marginBottom:"70px"}}>
            <div  style={{padding:"20px 10px 20px 10px",border:"1px solid #EAF1F5",boxshadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px"}}>
                <h1 style={{color:"#1B2437",fontWeight:"700",fontSize:"17px"}} >MNCs<ArrowForwardIcon/></h1>
                <p style={{color:"gray"}} >1.9k+ are now hiring</p>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-evenly",paddingTop:"10px"}}>
                <Box boxSize='50px'><Image src='https://img.naukimg.com/logo_images/groups/v1/391952.gif' alt='Dan Abramov' /></Box>
                <Box boxSize='50px'><Image src='https://img.naukimg.com/logo_images/groups/v1/277916.gif' alt='Dan Abramov' /></Box>
                <Box boxSize='50px'><Image src='https://img.naukimg.com/logo_images/groups/v1/247012.gif' alt='Dan Abramov' /></Box>
                <Box boxSize='50px'><Image src='https://img.naukimg.com/logo_images/groups/v1/2740760.gif' alt='Dan Abramov' /></Box>
                </div>
            </div>
          
            <div style={{padding:"20px 10px 20px 10px",border:"1px solid #EAF1F5"}}>
            <h1 style={{color:"#1B2437",fontWeight:"700",fontSize:"17px"}}>Fintech<ArrowForwardIcon/></h1>
                <p style={{color:"gray"}}>4.2k+ are now hiring</p>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-evenly",paddingTop:"10px"}}>
                <Box boxSize='50px'><Image src='https://img.naukimg.com/logo_images/groups/v1/1957780.gif' alt='Dan Abramov' /></Box>
                <Box boxSize='50px'><Image src='https://img.naukimg.com/logo_images/groups/v1/306162.gif' alt='Dan Abramov' /></Box>
                <Box boxSize='50px'><Image src='https://img.naukimg.com/logo_images/groups/v1/3714874.gif' alt='Dan Abramov' /></Box>
                <Box boxSize='50px'><Image src='https://img.naukimg.com/logo_images/groups/v1/144830.gif' alt='Dan Abramov' /></Box>
                </div>
            </div>


            <div style={{padding:"20px 10px 20px 10px",border:"1px solid #EAF1F5"}}>
            <h1 style={{color:"#1B2437",fontWeight:"700",fontSize:"17px"}}>FMCG & retail<ArrowForwardIcon/></h1>
                <p style={{color:"gray"}}>3.1k+ are now hiring</p>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-evenly",paddingTop:"10px"}}>
                <Box boxSize='50px'><Image src='https://img.naukimg.com/logo_images/groups/v1/20528.gif' alt='Dan Abramov' /></Box>
                <Box boxSize='50px'><Image src='https://img.naukimg.com/logo_images/groups/v1/57716.gif' alt='Dan Abramov' /></Box>
                <Box boxSize='50px'><Image src='https://img.naukimg.com/logo_images/groups/v1/24010.gif' alt='Dan Abramov' /></Box>
                <Box boxSize='50px'><Image src='https://img.naukimg.com/logo_images/groups/v1/4389252.gif' alt='Dan Abramov' /></Box>
                </div>
            </div>


            <div style={{padding:"20px 10px 20px 10px",border:"1px solid #EAF1F5"}}>
            <h1 style={{color:"#1B2437",fontWeight:"700",fontSize:"17px"}}>Startups<ArrowForwardIcon/></h1>
                <p style={{color:"gray"}}>1.3k+ are now hiring</p>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-evenly",paddingTop:"10px"}}>
                <Box boxSize='50px'><Image src='https://img.naukimg.com/logo_images/groups/v1/1616024.gif' alt='Dan Abramov' /></Box>
                <Box boxSize='50px'><Image src='https://img.naukimg.com/logo_images/groups/v1/716336.gif' alt='Dan Abramov' /></Box>
                <Box boxSize='50px'><Image src='https://img.naukimg.com/logo_images/groups/v1/4062120.gif' alt='Dan Abramov' /></Box>
                <Box boxSize='50px'><Image src='https://img.naukimg.com/logo_images/groups/v1/1849510.gif' alt='Dan Abramov' /></Box>
                </div>
            </div>

            <div style={{padding:"20px 10px 20px 10px",border:"1px solid #EAF1F5"}}>
            <h1 style={{color:"#1B2437",fontWeight:"700",fontSize:"17px"}}>Edtech<ArrowForwardIcon/></h1>
                <p style={{color:"gray"}}>2.1k+ are now hiring</p>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-evenly",paddingTop:"10px"}}>
                <Box boxSize='50px'><Image src='https://img.naukimg.com/logo_images/groups/v1/3248720.gif' alt='Dan Abramov' /></Box>
                <Box boxSize='50px'><Image src='https://img.naukimg.com/logo_images/groups/v1/13424.gif' alt='Dan Abramov' /></Box>
                <Box boxSize='50px'><Image src='https://img.naukimg.com/logo_images/groups/v1/204166.gif' alt='Dan Abramov' /></Box>
                <Box boxSize='50px'><Image src='https://img.naukimg.com/logo_images/groups/v1/3407630.gif' alt='Dan Abramov' /></Box>
                </div>
            </div>

        </div>
        </>
    )
}