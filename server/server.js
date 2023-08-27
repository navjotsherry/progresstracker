import express from "express";
import routes from "./routes/routes.js"
import dbConnection from "./db/db.js";


const app = express()

app.use('/',routes)

dbConnection()
app.listen(5000, ()=>{
    console.log("App is running on Port 5000")
})