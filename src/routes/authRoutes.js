import { Router } from "express";
import { registerUser } from "../controllers/authController.js";
import { loginUser } from "../controllers/authController.js";
import errorHandler from "../middlewares/errorHandler.js";

const userRoute = Router();
// user registration
userRoute.post("/register", registerUser);

//login user
userRoute.post("/login", errorHandler, loginUser);

export default userRoute;
