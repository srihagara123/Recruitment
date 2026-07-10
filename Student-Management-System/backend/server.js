const express = require("express");
const cors = require("cors");
require("dotenv").config();

const pool = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
//Middleware

app.use(cors());
app.use(express.json());

//student routes
app.use("/api/students", studentRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("🎉 Student Management System Backend is Running...");
});

// Database Test Route
app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({
      message: "Database Connected Successfully!",
      time: result.rows[0].now
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Database Connection Failed"
    });
  }
});

//start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});