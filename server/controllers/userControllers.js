import { userModel } from "../db/schema/userSchema.js"

export const loginController = (req, res) => {
    res.json({user:"Logged In"})
}


export const signUpController = async (req, res) => {
    const {email, password} = req.body
    console.log(email,password)

    try {
        const resp = await userModel.signUp(email,password)
        res.status(200).json({resp})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
