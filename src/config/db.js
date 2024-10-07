const mongoose = require("mongoose");

const DB_URI =
  process.env.DB_URI || "mongodb://localhost:27017/mongodb-aggregration";

mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
