import { Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export default function RegisterNavbar(){
    return (

        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",paddingBottom:"0px",border: "1px solid #eaf1f5",backgroundColor:"#fff",borderRadius: "3.5px",width:"100%",height:"60px",margin:"auto"}}>
            <div style={{marginLeft:"11%"}}>
            <Image width="180px" height="32px" src='https://static.naukimg.com/s/4/100/i/naukri_Logo.png' alt='Dan Abramov' />
            </div>
            <div style={{marginRight:"11%"}}>
                <p style={{fontSize:"15px"}}>Already registered? <Link color="blue" to="/"> Login</Link> here</p>
            </div>
        </div>
    )
}