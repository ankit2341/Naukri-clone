import { AddIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormLabel, Image, Input, InputGroup, InputLeftAddon, InputRightAddon, InputRightElement, Menu, MenuButton, MenuItem, MenuList, Select, Stack, Textarea, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Nvabar.css"

 function Jobs(){
    return (
        <div>
        <Menu isLazy>
  <MenuButton >Jobs</MenuButton>
  <MenuList>
    {/* MenuItems are not rendered unless Menu is open */}
    <MenuItem>New Window</MenuItem>
    <MenuItem>Open Closed Tab</MenuItem>
    <MenuItem>Open File</MenuItem>
  </MenuList>
   </Menu>
   </div>
    )
}

function Companies(){
    return (
        <div>
            <Menu isLazy>
           <MenuButton >Companies</MenuButton>
        <MenuList>
          {/* MenuItems are not rendered unless Menu is open */}
          <MenuItem>New Window</MenuItem>
          <MenuItem>Open Closed Tab</MenuItem>
          <MenuItem>Open File</MenuItem>
        </MenuList>
        </Menu>
        </div>
    )
}

function Services(){
    return (
        <div>
            <Menu isLazy>
     <MenuButton >Services</MenuButton>
  <MenuList>
    {/* MenuItems are not rendered unless Menu is open */}
    <MenuItem>New Window</MenuItem>
    <MenuItem>Open Closed Tab</MenuItem>
    <MenuItem>Open File</MenuItem>
  </MenuList>
  </Menu>
        </div>
    )
}

function ForEmployers(){
    return (
        <div className="for_employers" 
        >
            <Menu>
  <MenuButton as={Button} bg="white" _hover={{borderBottom:"3px solid orange"}}  _focus={{bg:"white"}} rightIcon={<ChevronDownIcon />}>
    For employers
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
        </div>
    )
}

function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef();
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate()


    const handlesubmit=()=>{
      // event.preventdefault();
      
     fetch(`https://reqres.in/api/login`,{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({email,password})
     })
     .then(res=>res.json())
     .then(res=>{
         if(res.token){
          alert("login success")
            navigate("/")
         }
     })
     .catch(err=>console.log(err))
    
  }
  
    return (
      < >
        <Button color="#457eff"  width="80px" borderRadius="full" backgroundColor="white" border="1px solid #457eff" onClick={onOpen}>
          Login
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          initialFocusRef={firstField}
          onClose={onClose}
          size="sm"
          style={{paddingLeft:"50px"}}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'  marginBottom="20px" marginTop="20px">
              Login
            </DrawerHeader>
  
            <DrawerBody>
              <Stack spacing='24px'>
                <Box>
                  <FormLabel htmlFor='username' fontSize="sm">Email ID / Username</FormLabel>
                  <Input
                    ref={firstField}
                    id='username' value={email} onChange={(e)=>{setEmail(e.target.value)}}
                    placeholder='Enter your active Email ID / Username' style={{marginBottom:"20px",border:"1px solid black",borderRadius:"0px"}}
                  />
                </Box>
  
                <Box>
                  <FormLabel htmlFor='username' fontSize="sm">Password</FormLabel>
                  {/* <Input
                    ref={firstField}
                    id='username'
                    placeholder='Enter your password'
                  /> */}
                 <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}  value={password} onChange={(e)=>{setPassword(e.target.value)}}
        placeholder='Enter password' style={{marginBottom:"0px",border:"1px solid black",borderRadius:"0px"}}
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' >
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
    <FormLabel htmlFor='username' fontSize="14px" marginBottom="15px" marginTop="10px" color="blue" fontWeight="normal" textAlign="right" >Forgot Password?</FormLabel>
                </Box>
                <Button backgroundColor='#4a90e2' color="white" borderRadius="0px" boxShadow="0 2px 6px 0 rgb(0 0 0 / 20%);" _hover={{color:"black"}} size="md" onclick={handlesubmit}>Login</Button>
                <Button Color='#457eff' textDecoration="none" variant='link' marginBottom="10px">Use OTP to Login</Button>
                <p style={{color:"gray",marginTop:"10px",marginBottom:"0px"}}>-------------------------------or------------------------------</p>
                <Button _hover={{backgroundColor:"lightgray"}} leftIcon="" colorScheme='#457eff' marginTop="0px" boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" variant='ghost'>
                <Image
  borderRadius='full'
  boxSize='30px' marginLeft="0px" marginTop="0px"
  src='data:image/png;base64,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'

  alt='Dan Abramov'
/>Sign in with Google</Button>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

export {Jobs,Companies,Services,ForEmployers,DrawerExample};