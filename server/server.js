const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// env variables
const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGO_URI;

// MongoDB
mongoose
  .connect(mongoUri)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

// Routes
app.use("/api/users", require("./routes/userRoutes"));

// Server (ONLY ONE)
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
