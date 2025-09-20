import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import userRoute from "./src/routes/authRoutes.js";
import infoRouter from "./src/routes/infoRoutes.js";

// Load environment variables
dotenv.config();

// Validate required environment variables
const requiredEnvVars = ["JWT_AUTH_SECRET_KEY", "MONGODB_URI"];
const missingEnvVars = requiredEnvVars.filter((envVar) => !process.env[envVar]);

if (missingEnvVars.length > 0) {
  console.error(
    "❌ Missing required environment variables:",
    missingEnvVars.join(", ")
  );
  console.error("Please set the following environment variables:");
  missingEnvVars.forEach((envVar) => {
    console.error(`  - ${envVar}`);
  });
  process.exit(1);
}

console.log("✅ All required environment variables are set");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/user", userRoute);
app.use("/api/info/", infoRouter);

// Health check endpoint
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "JWT Authentication API is running",
    timestamp: new Date().toISOString(),
  });
});

// Start server
const startServer = async () => {
  try {
    // Connect to database first
    await connectDB();

    // Start the server
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
      console.log(`📡 API Base URL: http://localhost:${PORT}/api`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
