require("dotenv").config();
const express = require("express");

const rootsRoutes = require("./src/routes");

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
require("./src/config/db");

// Middleware
app.use(express.json());

// Base URL config
app.use("/api", rootsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Base URL http://localhost:${PORT}/api`);
});
