import express from 'express'
import { loginController, signUpController } from '../controllers/userControllers.js'


const router = express.Router()


router.post('/login', loginController)

router.post('/signup', signUpController)

export default router