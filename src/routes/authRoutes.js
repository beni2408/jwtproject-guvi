import { Router } from "express";
import { registerUser } from "../controllers/authController.js";

const userRoute = Router();

userRoute.post("/register", registerUser);

export default userRoute;
