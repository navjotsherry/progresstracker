import express, { Router } from 'express'

const routes = express.Router()


export const getProgress = routes.get('/',()=>{
    console.log("Get request recieved")
})


export default routes