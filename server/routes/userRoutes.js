import express from 'express';

// Import login and signup controller functions
import { loginController, signUpController } from '../controllers/userControllers.js';

// Create an Express router instance
const router = express.Router();

// Define routes for user authentication
router.post('/login', loginController); // Route for user login
router.post('/signup', signUpController); // Route for user signup

// Export the router for use in the application
export default router;