import { Router } from "express";
import { registerUser } from "../controllers/authController.js";
import { loginUser } from "../controllers/authController.js";

const userRoute = Router();
// user registration
userRoute.post("/register", registerUser);

//login user
userRoute.post("/login", loginUser);

export default userRoute;
