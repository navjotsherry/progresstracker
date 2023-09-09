import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {dispatch} = useAuthContext()
    const login = async()=>{
        try {
            const response = await axios.post('http://localhost:5000/user/login',{email,password})
            dispatch({type:'LOGIN',payload:response.data})
        } catch (error) {
            console.log(error.response.data)
        }
    }
    return (
        <div className="flex flex-col items-center my-5 justify-center space-y-6">
            <div className="flex flex-col w-6/12 ">
                <label> Please enter your registered Email:</label>
                <input className="border border-solid border-gray-600 rounded-md p-2" onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Please enter email"/>
            </div>
            <div className="flex flex-col w-6/12">
                <label> Please enter your Password:</label>
                <input className="border border-solid border-gray-600 rounded-md p-2" onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Please enter password"/>
            </div>
            <button className="bg-black text-white border border-solid border-black border-3 px-4 py-2 rounded-md hover:bg-yellow-100 hover:text-black hover:transition-all hover:duration-300" onClick={login}>Login</button>
            <div className="flex flex-col">
                <label>Don't have an account?</label>
                <button className="bg-black text-white border border-solid border-black border-3 px-4 py-2 rounded-md hover:bg-yellow-100 hover:text-black hover:transition-all hover:duration-300"><Link to='/signup'>Signup</Link></button>
            </div>
        </div>
    )
}

export default Login