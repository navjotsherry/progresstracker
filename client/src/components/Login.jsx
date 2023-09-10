import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

// Component for user login
const Login = () => {
    // Define state variables for email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Get the dispatch function from the authentication context
    const { dispatch } = useAuthContext();

    // Function to handle user login
    const login = async () => {
        try {
            // Send a POST request to the server to authenticate the user
            const response = await axios.post('http://localhost:5000/user/login', { email, password });

            // Dispatch a login action to update the user's authentication status
            dispatch({ type: 'LOGIN', payload: response.data });
        } catch (error) {
            console.log(error.response.data);
        }
    }

    return (
        <div className="flex flex-col items-center my-5 justify-center space-y-6">
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