import Discover from "../components/Discover";
import FeaturedCompaniesActivelyHiring from "../components/FeaturedCompaniesHiring";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SearchDreamJob from "../components/Searchdreamjob";
import SponsoredCompanies from "../components/SponsoredCompanies";
import TopcompaniesHiring from "../components/TopcompaniesHiring";


export default function Home(){
    return (
        <>
      <Navbar/>
      <SearchDreamJob/>
      <TopcompaniesHiring/>
      <FeaturedCompaniesActivelyHiring/>
      <Discover/>
      <SponsoredCompanies/>
      <Footer/>
      </>
    )
}