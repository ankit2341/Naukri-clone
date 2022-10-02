import React,{useState} from "react";

export const AuthContext=React.createContext();

export default function AuthcontextProvider({children}){

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

    return (
        <AuthContext.Provider value={{state,LoginUser,LogoutUser}}>
            {children}
        </AuthContext.Provider>
    )
}