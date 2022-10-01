import { ArrowForwardIcon, RepeatClockIcon,InfoOutlineIcon,ArrowUpDownIcon,AtSignIcon, InfoIcon } from "@chakra-ui/icons";
import { Box, Button, Input, InputGroup, InputLeftElement, Select, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export default function SearchDreamJob(){

  const [skills,setSkills]=useState("")
  const [experience,setExperience]=useState("fresher");
  const [location,setLocation]=useState("");
  const navigate=useNavigate();

  const handlesearch=()=>{
    if(skills=="" || location==""){
      return(
       alert("please fill skills and location to search")
      )
    }
  axios(`https://www.arbeitnow.com/api/job-board-api?per_page=10&page=1`,{
    method:"get",
  })
    // .then((res)=>res.json())
    // .then((res)=>{res.json()})
    .then((res)=>{
      // let searcharr=[];
      localStorage.removeItem("searcharr");
      localStorage.setItem("searcharr",JSON.stringify(res.data.data));
      navigate("/searchresults")    
    })
  }


    return (
        <>
        <div className="SeachDream" >
            <div style={{fontSize:"35px",height:"50px",fontFamily: "Roboto Slab",fontWeight:"900"}}>
                <h1>Find your dream job now</h1>
            </div>
            <div style={{height:"30px",marginTop:"10px",marginBottom:"20px",color:"gray"}}>
            5 lakh+ jobs for you to explore
            </div>
            <div style={{width:"100%",height:"70px",borderRadius:"35px",paddingRight:"10px",paddingLeft:"10px", border:"1px solid",display:"flex",alignItems:"center",border: "1.26923px solid #eaf1f5",
  boxShadow: "0 4px 12px rgb(86 141 187 / 12%)"}}>
            <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="gray" width="20" height="20"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>}
    />
    <Input type='tel'value={skills} onChange={(e)=>{setSkills(e.target.value)}} border="none" width="350px" placeholder='Enter skills / designations / companies' focusBorderColor="white" />
  </InputGroup>
  <Select placeholder='Select experience' width="500px" variant="unstyled" style={{border:"none"}} color="gray" focusBorderColor="white"  >
  <option  value='fresher' onChange={(e)=>{setExperience(e.target.value)}}>Fresher (less than one year)</option>
  <option value='1'>1 year</option>
  <option value='2'>2 years</option>
  <option value='3'>3 years</option>
  <option value='4'>4 years</option>
  <option value='5'>5 years</option>
</Select>
<Input type='tel'value={location} onChange={(e)=>{setLocation(e.target.value)}} placeholder='Enter location' border="none" focusBorderColor="white" width="500px" />
<Button backgroundColor='#457eff' color="white" width="250px" height="50px" fontSize="20px" _hover={{color:"black"}} borderRadius="full" onClick={handlesearch} >Search</Button>
            </div>
            <div>
            <Button leftIcon={<RepeatClockIcon/>} borderRadius="full" marginTop="20px" marginBottom="0px" backgroundColor="white" color="gray" border="1.26923px solid #eaf1f5" boxShadow="0 4px 12px rgb(86 141 187 / 12%)" fontSize="sm" variant='solid'>devloper,pune,fresher 29 new</Button>
            </div>
        </div>

        <SimpleGrid columns={6} spacing={10} width="70%"  margin="auto" marginBottom="20px">
  <Box bg='white' height='60px' borderRadius="full">
  <Button leftIcon={<ArrowUpDownIcon InfoIcon color="blue.300"/>} rightIcon={<ArrowForwardIcon />} _hover={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} color='#1B2437' borderRadius="10px" fontWeight= "500"
    fontSize="17px"
    lineHeight= "22px"
     backgroundColor="#fff" border= "1px solid #EAF1F5" width="100%" height="100%" variant='outline'>
    Remote
  </Button>
  </Box>
  <Box bg='white' height='60px'>
  <Button leftIcon={<AtSignIcon InfoIcon color="purple.600"/>} rightIcon={<ArrowForwardIcon />} _hover={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} color='#1B2437' borderRadius="10px" fontWeight= "500"
    fontSize="17px"
    lineHeight= "22px"
     backgroundColor="#fff" border= "1px solid #EAF1F5" width="100%" height="100%" variant='outline'>
    MNC
  </Button>
  </Box>
  <Box bg='white' height='60px'>
  <Button leftIcon={<InfoIcon  color="blue.300"/>} rightIcon={<ArrowForwardIcon />} _hover={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} color='#1B2437' borderRadius="10px" fontWeight= "500"
    fontSize="17px"
    lineHeight= "22px"
     backgroundColor="#fff" border= "1px solid #EAF1F5" width="100%" height="100%" variant='outline'>
    HR
  </Button>
  </Box>

  <Box bg="white" height='60px'>
<Button leftIcon={<AtSignIcon  color="purple.600"/>} rightIcon={<ArrowForwardIcon />} color='#1B2437' _hover={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} borderRadius="10px" fontWeight= "500"
    fontSize="17px"
    lineHeight= "22px"
     backgroundColor="#fff" border= "1px solid #EAF1F5" width="100%" height="100%" variant='outline'>
    Software
  </Button>
  </Box>

  <Box bg='white' height='60px'>
<Button leftIcon={<InfoIcon InfoIcon color="blue.300"/>} rightIcon={<ArrowForwardIcon />} _hover={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} color='#1B2437' borderRadius="10px" fontWeight= "500"
    fontSize="17px"
    lineHeight= "22px"
     backgroundColor="#fff" border= "1px solid #EAF1F5" width="100%" height="100%" variant='outline'>
    Temp wth
  </Button>
  </Box>

  <Box bg='white' height='60px'>
<Button leftIcon={<AtSignIcon InfoIcon color="purple.600"/>} rightIcon={<ArrowForwardIcon />} _hover={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} color='#1B2437' borderRadius="10px" fontWeight= "500"
    fontSize="17px"
    lineHeight= "22px"
     backgroundColor="#fff" border= "1px solid #EAF1F5" width="100%" height="100%" variant='outline'>
    Supply c...
  </Button>
  </Box>

</SimpleGrid>
<SimpleGrid columns={5} spacing={10} width="65%" margin="auto">
  <Box bg='white' height='60px'>
<Button leftIcon={<InfoIcon InfoIcon color="blue.300"/>} rightIcon={<ArrowForwardIcon />} _hover={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} color='#1B2437' borderRadius="10px" fontWeight= "500"
    fontSize="17px"
    lineHeight= "22px"
     backgroundColor="#fff" border= "1px solid #EAF1F5" width="100%" height="100%" variant='outline'>
    Sales
  </Button>
  </Box>

  <Box bg='white' height='60px'>
<Button leftIcon={<AtSignIcon  InfoIcon color="gold"/>} rightIcon={<ArrowForwardIcon />} _hover={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} color='#1B2437' borderRadius="10px" fontWeight= "500"
    fontSize="17px"
    lineHeight= "22px"
     backgroundColor="#fff" border= "1px solid #EAF1F5" width="100%" height="100%" variant='outline'>
    Analytics
  </Button>
  </Box>

  <Box bg='white' height='60px'>
  <Button leftIcon={<InfoIcon color="blue.300"/>} rightIcon={<ArrowForwardIcon />} _hover={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} color='#1B2437' borderRadius="10px" fontWeight= "500"
    fontSize="17px"
    lineHeight= "22px"
     backgroundColor="#fff" border= "1px solid #EAF1F5" width="100%" height="100%" variant='outline'>
    Project mg...
  </Button>
  </Box>

  <Box bg='white' height='60px'>
<Button leftIcon={<AtSignIcon color="purple.600"/>} rightIcon={<ArrowForwardIcon />} _hover={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} color='#1B2437' borderRadius="10px" fontWeight= "500"
    fontSize="17px"
    lineHeight= "22px"
     backgroundColor="#fff" border= "1px solid #EAF1F5" width="100%" height="100%" variant='outline'>
    Marketing
  </Button>
  </Box>

  <Box bg='white' height='60px'>
    <Button leftIcon={<InfoIcon color="gold"/>} rightIcon={<ArrowForwardIcon />} _hover={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} color='#1B2437' borderRadius="10px" fontWeight= "500"
    fontSize="17px"
    lineHeight= "22px"
     backgroundColor="#fff" border= "1px solid #EAF1F5" width="100%" height="100%" variant='outline'>
    Banking
  </Button>
  </Box>
</SimpleGrid>
        </>
    )
}