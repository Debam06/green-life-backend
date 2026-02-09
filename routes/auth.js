import express from "express";
import authMiddleware from "../middleware/auth.js";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import BlacklistedToken from "../models/BlacklistedToken.js";

const router = express.Router();

// REGISTER route
router.post("/register", async (req, res, next) => {
  try {
    const { name, email, password, city } = req.body;

    const existing = await User.findOne({ where: { email } });
    if (existing) {
      return res.status(400).json({ success: false, message: "Email already registered" });
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed, city });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
    });
  } catch (err) {
    err.statusCode = 500;
    next(err);
  }
});

// LOGIN route
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(401).json({ success: false, message: "Invalid credentials" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ success: false, message: "Invalid credentials" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.json({
      success: true,
      message: "Login successful",
      token,
    });
  } catch (err) {
    err.statusCode = 500;
    next(err);
  }
});

// LOGOUT route
router.post("/logout", authMiddleware, async (req, res, next) => {
  try {
    const token = req.token; // attach raw token in authMiddleware
    const decoded = jwt.decode(token);
    const expiresAt = decoded?.exp ? new Date(decoded.exp * 1000) : null;

    if (!expiresAt) {
      return res.status(400).json({ success: false, message: "Invalid token" });
    }

    await BlacklistedToken.create({ token, expiresAt });

    res.json({ success: true, message: "Logged out successfully" });
  } catch (err) {
    err.statusCode = 500;
    next(err);
  }
});

// GET profile
router.get("/me", authMiddleware, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id);
    res.json({ success: true, data: user });
  } catch (err) {
    err.statusCode = 500;
    next(err);
  }
});

// UPDATE profile
router.put("/me", authMiddleware, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id);
    await user.update(req.body); // only name + city now
    res.json({ success: true, data: user });
  } catch (err) {
    err.statusCode = 500;
    next(err);
  }
});

export default router;