import { FormControl, FormLabel, Input, FormHelperText, InputGroup, InputLeftAddon, HStack, RadioGroup, Radio, Button, Checkbox, Image, Alert, AlertIcon } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Register.css"


export default function RegistrationForm(){
  const [name,setname]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [mobile,setMobile]=useState("");
  const navigate=useNavigate()

  const handlesubmit=()=>{
    // event.preventdefault();
    
   fetch(`https://reqres.in/api/register`,{
    method:"post",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({email,password})
   })
   .then(res=>res.json())
   .then(res=>{
       if(res.token && res.id){
      navigate("/")
       }
   })
   .catch(err=>console.log(err))
  
}

  // console.log(username);
  // console.log("email",email);
  // console.log("pass",password);

    return (
      <>
        <div style={{width:"40%",margin:"auto",display:"flex",flexDirection:"column",backgroundColor:"#fff",marginTop:"20px",padding:"10px 0px 0px 90px",justifyContent:"left",textAlign:"left"}}>
    
      <div>
        <h1 style={{fontSize:"30px",fontWeight:"700",marginTop:"50px",marginBottom:"20px",backgroundColor: "#fff"}} >Find a job & grow your career</h1>
      </div>

           <div style={{marginTop:"20px",marginBottom:"20px",backgroundColor: "#fff"}}>
         <FormControl backgroundColor="#fff" >
                <FormLabel>Full name</FormLabel>
          <Input value={name} onChange={(e)=>{setname(e.target.value)}} placeholder='What is your full name?' />
         </FormControl>
        </div>

        <div style={{marginTop:"20px",marginBottom:"20px",background: "#fff"}}>
        <FormControl isRequired backgroundColor="#fff">
  <FormLabel>Email address</FormLabel>
  <Input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Email" />
  <FormHelperText>We'll send you relevant jobs in your mail</FormHelperText>
</FormControl>
        </div>

        <div style={{marginTop:"20px",marginBottom:"20px",background: "#fff"}}>
        <FormControl isRequired backgroundColor="#fff">
  <FormLabel>Password</FormLabel>
  <Input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter password" />
  <FormHelperText>Create a password for your account</FormHelperText>
</FormControl>
        </div>
    
    <div style={{marginTop:"20px",marginBottom:"20px",background: "#fff"}}>
      <FormControl backgroundColor="#fff">
    <FormLabel>Mobile Number</FormLabel>
    <InputGroup>
    <InputLeftAddon children='+91' />
    <Input value={mobile} onChange={(e)=>{setMobile(e.target.value)}} type='tel' placeholder='Mobile number' />
  </InputGroup>
  <FormHelperText>Recreuiters will call you on this number</FormHelperText>
  </FormControl>
    </div>

    <div style={{marginTop:"20px",marginBottom:"20px",background: "#fff"}}>
    <FormControl as='fieldset' backgroundColor="#fff">
  <FormLabel as='legend'>Work Status</FormLabel>
  <RadioGroup defaultValue='fresher'>
    <HStack spacing='24px'>
      <Radio value='experinced'>Experienced</Radio>
      <Radio value='fresher'>Fresher</Radio>
    </HStack>
  </RadioGroup>
  <FormHelperText>Select your wworking status</FormHelperText>
</FormControl>
  
    </div>

    <div style={{marginTop:"20px",marginBottom:"20px",background: "#fff"}}>
        <FormControl isRequired backgroundColor="#fff">
  <FormLabel>Enter city</FormLabel>
  <Input type='text' placeholder="Enter your current city" />
  <FormHelperText>Enter your current city</FormHelperText>
</FormControl>
        </div>

    <div>
    <Checkbox colorScheme="orange" backgroundColor="#fff" defaultChecked >Send me important update on whatsapp</Checkbox>
    </div>

    <div style={{marginTop:"20px",marginBottom:"20px",background: "#fff"}}>
      <p style={{fontSize:"12px",color:"#445578",marginBottom:"10px"}}>By clicking Register, you agree to the Terms and Conditions & Privacy Policy of Naukri.com</p>
    <Button borderRadius="full" _hover={{color:"black"}} marginTop="10px" background="#fff" color='#fff' backgroundColor="#457eff" onClick={handlesubmit}>Register Now</Button>
    </div>
        </div>
      </>
        
    )
}