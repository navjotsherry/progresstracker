import { userModel } from "../db/schema/userSchema.js"
import jwt from "jsonwebtoken"

// Function to create a JSON Web Token (JWT) with the user's _id
const createToken = (_id) => {
    // Sign the _id using the JWT_SECRET from environment variables with a 2-hour expiration time
    return jwt.sign({_id}, process.env.JWT_SECRET ,{expiresIn:"2h"})
}

// Controller for user login (placeholder response)
export const loginController = (req, res) => {
    res.json({user:"Logged In"})
}

// Controller for user registration (sign-up)
export const signUpController = async (req, res) => {
    const {email, password} = req.body

    try {
        // Call the signUp function from the userModel to register a new user
        const resp = await userModel.signUp(email,password)
        
        // Create a JWT token for the newly registered user
        const token = createToken(resp._id)
        
        // Respond with a success status and the email and token
        res.status(200).json({email, token})
    } catch (error) {
        // Handle registration errors and respond with an error message
        res.status(400).json({error:error.message})
    }
}