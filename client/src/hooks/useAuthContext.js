import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContextProvider";


export const useAuthContext= ()=>{
    const context = useContext(AuthContext)
    if(!context){
        throw Error("Context should be called inside the scope of AuthContext Provider")
    }
    return context
}