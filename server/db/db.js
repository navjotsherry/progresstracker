import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const MongoDBURI = process.env.DB_Pass


const dbConnection =()=> {
    mongoose.connect(MongoDBURI, {useNewURLParser:true})
    mongoose.connection.on('connected', ()=>{
        console.log("Database connected")
    })
    mongoose.connection.on('disconnected',()=>{
        console.log("disconnected")
    })

}
// dbConnection.then(()=>{
//     console.log("Database Connected")

// })

export default dbConnection