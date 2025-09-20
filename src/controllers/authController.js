import bcrypt from "bcryptjs";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// user registration
export const registerUser = async (req, res) => {
  try {
    const { username, email, password, gender, role } = req.body;
    const checkingForExistingUser = await userModel.findOne({ email });
    const checkingForExistingbyusername = await userModel.findOne({ username });

    if (checkingForExistingUser) {
      return res
        .status(400)
        .json({ status: "error", message: "User already exists" });
    }
    if (checkingForExistingbyusername) {
      return res.status(400).json({
        status: "error",
        message: "Username not available, please give another username",
      });
    }
    const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS));
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      username,
      email,
      password: hashedPassword,
      gender,
      role,
    });
    await newUser.save();

    res.status(200).json({
      status: "success",
      message: "User registered successfully",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

//login user
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const checkingUser = await userModel.findOne({ email });

    if (!checkingUser) {
      return res.status(400).json({
        status: "error",
        message: "User not found",
      });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      checkingUser.password
    );

    if (!isPasswordValid) {
      return res.status(400).json({
        status: "error",
        message: "Invalid password",
      });
    }

    const token = jwt.sign(
      { id: checkingUser._id },
      process.env.JWT_AUTH_SECRET_KEY
    );

    res.status(200).json({
      status: "success",
      message: "Login successful",
      data: {
        user: {
          id: checkingUser._id,
          username: checkingUser.username,
          email: checkingUser.email,
          role: checkingUser.role,
        },
        token: token,
      },
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};
