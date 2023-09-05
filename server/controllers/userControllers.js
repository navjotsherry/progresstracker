import { userModel } from "../db/schema/userSchema.js"
import jwt from "jsonwebtoken"

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.JWT_SECRET ,{expiresIn:"2h"})
}

export const loginController = (req, res) => {
    res.json({user:"Logged In"})
}


export const signUpController = async (req, res) => {
    const {email, password} = req.body

    try {
        const resp = await userModel.signUp(email,password)
        const token = createToken(resp._id)
        res.status(200).json({email,token})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
