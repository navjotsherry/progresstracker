import express, { Router } from 'express'
import {progressModel} from '../db/schema/schema.js'
import { getProgressController, postProgressController, getAllProgressController } from '../controllers/progressDataController.js'

const routes = express.Router()


export const getProgress =  routes.get('/one/:date',getProgressController)
export const getAll =  routes.get('/getAll', getAllProgressController)
export const postProgress = routes.post('/:date', postProgressController)


export default routes