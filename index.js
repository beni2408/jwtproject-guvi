import express from "express";
import * as Express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
