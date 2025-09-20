import mongoose from "mongoose";
import dotenv from "dotenv";

const connectDB = async () => {
  try {
    // Use MONGODB_URI if available (for Render deployment), otherwise construct from individual variables
    const dbURI =
      process.env.MONGODB_URI ||
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@jwtprojectcluster.iczsizz.mongodb.net/${process.env.COLLECTION_NAME}?retryWrites=true&w=majority&appName=jwtprojectcluster`;

    const options = {
      serverSelectionTimeoutMS: 30000, // 30 seconds
      socketTimeoutMS: 45000, // 45 seconds
      bufferMaxEntries: 0,
      bufferCommands: false,
      maxPoolSize: 10,
      minPoolSize: 5,
      maxIdleTimeMS: 30000,
      retryWrites: true,
      w: "majority",
    };

    await mongoose.connect(dbURI, options);
    console.log("✅ Connected to MongoDB successfully");

    // Handle connection events
    mongoose.connection.on("error", (err) => {
      console.error("❌ MongoDB connection error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("⚠️ MongoDB disconnected");
    });

    mongoose.connection.on("reconnected", () => {
      console.log("✅ MongoDB reconnected");
    });
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit process if database connection fails
  }
};

export default connectDB;
