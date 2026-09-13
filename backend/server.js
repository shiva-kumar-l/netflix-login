const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock user
const mockUser = {
  email: "demo@gmail.com",
  password: "123456",
};

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "Netflix Login Backend is running",
  });
});

// Login API
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  // Backend validation
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required.",
    });
  }

  // Check credentials
  if (
    email === mockUser.email &&
    password === mockUser.password
  ) {
    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        email: mockUser.email,
      },
    });
  }

  // Invalid credentials
  return res.status(401).json({
    success: false,
    message: "Incorrect email or password.",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});