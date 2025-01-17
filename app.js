const express = require("express");
const mongoose = require("mongoose");
const coderRouter = require("./routers/coders");

const url = "mongodb://localhost/coders"; // Replace with your MongoDB connection URL
const PORT = process.env.PORT || 3000;

const app = express();

// Connect to MongoDB
mongoose
  .connect(url)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit the app if unable to connect
  });

// Middleware
app.use(express.json()); // Parse JSON data from requests

// Routers
app.use("/coders", coderRouter);

// Start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
