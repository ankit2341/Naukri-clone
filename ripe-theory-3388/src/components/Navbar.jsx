import { Box, Button, ButtonGroup, Flex, Heading, Image, Spacer } from "@chakra-ui/react";
import { Companies, DrawerExample, ForEmployers, Jobs, Services } from "./NavButtonHover";

export default function Navbar(){
    return (
//         <Flex border="1px solid" minWidth='max-content' alignItems='center' gap='2'>
//   <Box p='2'>
//   <Image width="150px" height="30px" src='https://static.naukimg.com/s/4/100/i/naukri_Logo.png' alt='Dan Abramov' />
//   </Box>
//   <Spacer />
//   <ButtonGroup gap='2'>
//     <Button colorScheme='teal'>Sign Up</Button>
//     <Button colorScheme='teal'>Log in</Button>
//   </ButtonGroup>
// </Flex>
 <div className="main-container">
    <div>
    <Image width="150px" height="30px" src='https://static.naukimg.com/s/4/100/i/naukri_Logo.png' alt='Dan Abramov' />
    </div>
    <div className="btn-navbar" style={{display:"flex",width:"330px" ,height:"30px",alignItem:"center",justifyContent:"space-evenly"}}>
        <Jobs/>
        <Companies/>
        <Services/>
    </div>
    <div>
        <DrawerExample/>

        <ForEmployers/>
    </div>
 </div>
    )
}