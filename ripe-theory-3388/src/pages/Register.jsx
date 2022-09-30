import RegistrationForm from "../components/RegisterForm";
import RegisterGoogle from "../components/RegisterGoogle";
import RegisterNavbar from "../components/RegisterNavbar";
import RegisterSide from "../components/Registerside";
import "../Register.css"


export default function Register(){
    

    return (

        <>
         <RegisterNavbar/>
         <RegisterSide/>
         <RegistrationForm/>
         <p>-----------------------------------------or-------------------------------------------</p>
         <RegisterGoogle/>
         
        </>
    )
}