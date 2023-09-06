import mongoose from "mongoose";
import bcrypt from "bcrypt"
import validator from "validator";

// Define a schema for the user entity
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

// Define a static method for user registration
user.statics.signUp = async function (email,password) {
    
    // Validation: Ensure both email and password are provided
    if(!email || !password){
        throw Error("All Fields must be filled")
    }
    // Validation: Check if the email is in a valid format
    if(!validator.isEmail(email)){
        throw Error("Please enter a valid Email")
    }
    // Validation: Check if the password meets strength criteria
    if(!validator.isStrongPassword(password)){
        throw Error("Please enter a strong Password")
    }

    // Check if a user with the same email already exists
    const exists = await this.findOne({email})

    if(exists){
        throw Error("Email already exists")
    }

    // Generate a salt and hash the password for security
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    // Create a new user document in the database with the hashed password
    const user = await this.create({email, password:hashedPassword})

    // Return the newly created user document
    return user
}

// Create a user model based on the defined schema
export const userModel = mongoose.model('userModel',user)