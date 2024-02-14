const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const connectDB = require("./db");
const cors = require("cors");
const dotenv = require("dotenv");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
// const result = dotenv.config({ path: "../.env" });
dotenv.config({ path: "../.env" });

// if (result.error) {
//   console.error("Error loading .env file:", result.error);
// }

const app = express();
// Middleware
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// mongodB
connectDB();

// Routes
app.use("/api", productRoutes);
app.use("/api", cartRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
