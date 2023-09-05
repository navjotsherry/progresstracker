import mongoose from "mongoose";
import bcrypt from "bcrypt"
import validator from "validator";


const user = new mongoose.Schema({
    name : {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

//static signup
user.statics.signUp = async function (email,password) {
    
    //Validation
    if(!email || !password){
        throw Error("All Fields must be filled")
    }
    if(!validator.isEmail(email)){
        throw Error("Please enter a valid Email")
    }
    if(!validator.isStrongPassword(password)){
        throw Error("Please enter a strong Password")
    }



    const exists = await this.findOne({email})
    console.log("From statics.signup", typeof email, typeof password)

    if(exists){
        throw Error("Email already exists")
    }


    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const user = await this.create({email, password:hashedPassword})

    return user
    
    
}

export const userModel = mongoose.model('userModel',user)