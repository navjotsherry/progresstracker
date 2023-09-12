import jwt from 'jsonwebtoken'
import {userModel} from '../db/schema/userSchema'

const authMiddleware = async (req,res,next) => {
    const {authorization} = req.headers

    if(!authorization){
        res.status(401).json({error:"Authorization token required"})
    }

    const token = authorization.split(' ')[1]

    try {
        const { _id } = jwt.verify(token , process.env.JWT_SECRET)
        req.user = await userModel.findOne({_id}).select('_id')
        next()
    } catch (error) {
        res.status(401).json({error:"Request is not authorized"})
    }


    
}

export default authMiddleware