import bcrypt from "bcryptjs";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

// user register
export const registerUser = async (req, res) => {
  try {
    const { username, email, password, gender, role } = req.body;
    const checkingForExistingUser = await userModel.findOne({ email });
    const checkingForExistingbyusername = await userModel.findOne({ username });

    if (checkingForExistingUser) {
      return res
        .status(400)
        .json({ status: error, message: "User already exists" });
    }
    if (checkingForExistingbyusername) {
      return res
        .status(400)
        .json({
          status: error,
          message: "Username not availale exists, please give another username",
        });
    }

    const newUser = new userModel({ username, email, password, gender, role });
    await newUser.save();

    res
      .status(200)
      .json({
        status: "success",
        message: "User registered successfully",
        data: newUser,
      });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};
