import express, { json } from "express";
import routes from "./routes/routes.js"
import dbConnection from "./db/db.js";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js"
import authMiddleware from "./middleware/authMiddleware.js";

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors())
app.use('/user', userRoutes)
// app.use(authMiddleware)
app.use('/',routes)

dbConnection()
app.listen(PORT, ()=>{
    console.log("App is running on Port 5000")
})