const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); 
const url = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("MongoDB connected successfully.");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1); 
  }
};

module.exports = connectDB;
