const errorHandler = require("../middlewares/errorHandler");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Letter=require("../models/LetterSchema")


// @desc    Register the user
// @route   POST /api/user/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Check if all fields are provided
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  // Check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already registered");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  // Send response
  if (user) {
    res.status(201).json({ _id: user._id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
});

// @desc    Login User
// @route   POST /api/user/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log("📥 Received login request", email);

  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  // Fetch user from database
  const user = await User.findOne({ email });
  console.log("🔍 Fetched user:", user);

  if (!user) {
    res.status(401);
    throw new Error("Email or Password is not valid");
  }

  // Compare password with hashed password in DB
  console.log("Checking password:", password);
  console.log("Hashed password in database:", user.password);

  const passwordMatch = await bcrypt.compare(password, user.password);
  console.log("Password match result:", passwordMatch);

  if (passwordMatch) {
    // Generate access token
    const accessToken = jwt.sign(
      {
        name: user.name,
        email: user.email,
        id: user.id,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );
    console.log("Generated Access Token:", accessToken);

    console.log("✅ Login successful");
    res.status(200).json({ token: accessToken, message: "Login successful" });
  } else {
    res.status(401);
    throw new Error("Email or Password is not valid");
  }
});


// @desc    Get current user
// @route   GET /api/user/current
// @access  Public
const currentUser = asyncHandler(async (req, res) => {
  res.json(
    req.user,
    user.name,
    user.email
  );
});



// @desc    Submit Letter
// @route   POST /api/letter/submit
// @access  Public
// const submitLetter = asyncHandler(async (req, res) => {
//     const { fullName, department, semester, recipient, letterType, reason } = req.body;

//     // 🔍 Basic Validation
//     if (!fullName || !department || !semester || !recipient || !letterType) {
//         res.status(400);
//         throw new Error("All fields are required");
//     }

//     // 📌 Save to Database
//     const newLetter = new Letter({ fullName, department, semester, recipient, letterType, reason });
//     await newLetter.save();

//     res.status(201).json({ message: "Letter details saved successfully", letterId: newLetter._id ,fullName:newLetter.fullName});
// });


module.exports = {
  registerUser,
  loginUser,
  currentUser,
  
  
};
