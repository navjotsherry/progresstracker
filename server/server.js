import express, { json } from "express";
import routes from "./routes/routes.js"
import dbConnection from "./db/db.js";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js"
import authMiddleware from "./middleware/authMiddleware.js";

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(authMiddleware)
app.use('/user', userRoutes)
app.use('/',routes)

dbConnection()
app.listen(5000, ()=>{
    console.log("App is running on Port 5000")
})