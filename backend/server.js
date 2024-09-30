const express = require("express");
const connectDB = require("./src/config/db");
const commentRoutes = require("./src/routes/commentRoutes");
const cors = require("cors");

connectDB();  // Connect to MongoDB

const app = express();
app.use(cors());
app.use(express.json());  // Parse incoming JSON requests

// Comment routes
app.use("/api", commentRoutes);

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
