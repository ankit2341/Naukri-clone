import { Spinner } from "@chakra-ui/react";
import { useState } from "react";
import Discover from "../components/Discover";
import FeaturedCompaniesActivelyHiring from "../components/FeaturedCompaniesHiring";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SearchDreamJob from "../components/Searchdreamjob";
import SponsoredCompanies from "../components/SponsoredCompanies";
import TopcompaniesHiring from "../components/TopcompaniesHiring";


export default function Home(){
  const [loadiNG,setLoading]=useState(true);
     
  setTimeout(()=>{
    setLoading(false)
  },2000)

    return (
      <>
      {loadiNG ? <Spinner thickness='4px' margin="auto" marginTop="300px" speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl'/> :
       <>
      <Navbar/>
      <SearchDreamJob/>
      <TopcompaniesHiring/>
      <FeaturedCompaniesActivelyHiring/>
      <Discover/>
      <SponsoredCompanies/>
      <Footer/>
      </>
    }
      </>
    
    )
}