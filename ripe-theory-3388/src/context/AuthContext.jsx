import React,{useState} from "react";

export const AuthContext=React.createContext();

function AuthcontextProvider({children}){

    const [state,setState]=useState({
        isAuth:false
    })

    const LoginUser=()=>{
        setState({
            isAuth:true
        })
    }
    const LogoutUser=()=>{
        setState({
            isAuth:false
        })
    }
}