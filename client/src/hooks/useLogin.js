import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import axios from "axios"

export const useLogin = ()=>{
    const [loading,setLoading] = useState(null)
    const [error,setError] = useState(null)
    const {dispatch} = useAuthContext()


    const loginController= async (email,password)=>{
        try {
            setLoading(true)
            const user = await axios.post('http://localhost:5000/user/login',{email,password}) 
            if(user.statusText == "OK"){
                dispatch({type:'LOGIN',payload:user.data})
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            setError(error.message)
        }
    }


    return {loading,error,loginController}
    
    

}