// require("dotenv").config();
// const express = require("express");

// const rootsRoutes = require("./src/routes");

// const app = express();
// const PORT = process.env.PORT || 3100;

// // Connect to MongoDB
// require("./src/config/db");

// // Middleware
// app.use(express.json());

// app.get("/", (req, res) => res.send("Express on Vercel"));

// // Base URL config
// app.use("/api", rootsRoutes);

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
//   console.log(`Base URL http://localhost:${PORT}/api`);
// });

const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
