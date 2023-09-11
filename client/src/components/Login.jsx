import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogin } from "../hooks/useLogin";
// Component for user login
const Login = () => {
    // Define state variables for email and password
    const {user} = useAuthContext()
    const navigate = useNavigate() 
    useEffect(()=>{
        if(user) navigate('/')
    },[user])
    
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {loginController,loading,error} = useLogin()

    

    // Function to handle user login
    const login = async () => {
        loginController(email,password)
        navigate('/')
    }

    if(loading) return <h1>Loading...</h1>

    return (
        
        <div className="flex flex-col items-center my-5 justify-center space-y-6">
            {error}
            <div className="flex flex-col w-6/12">
                <label>Please enter your registered Email:</label>
                <input
                    className="border border-solid border-gray-600 rounded-md p-2"
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Please enter email"
                />
            </div>
            <div className="flex flex-col w-6/12">
                <label>Please enter your Password:</label>
                <input
                    className="border border-solid border-gray-600 rounded-md p-2"
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Please enter password"
                />
            </div>
            <button
                className="bg-black text-white border border-solid border-black border-3 px-4 py-2 rounded-md hover:bg-yellow-100 hover:text-black hover:transition-all hover:duration-300"
                onClick={login}
            >
                Login
            </button>
            <div className="flex flex-col">
                <label>Don't have an account?</label>
                <button
                    className="bg-black text-white border border-solid border-black border-3 px-4 py-2 rounded-md hover:bg-yellow-100 hover:text-black hover:transition-all hover:duration-300"
                >
                    <Link to='/signup'>Signup</Link>
                </button>
            </div>
        </div>
    );
}

export default Login;