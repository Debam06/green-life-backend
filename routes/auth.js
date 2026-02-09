import express from "express";
import authMiddleware from "../middleware/auth.js";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const router = express.Router();

// REGISTER route
router.post("/register", async (req, res, next) => {
  try {
    const { name, email, password, city } = req.body;

    // Check if user already exists
    const existing = await User.findOne({ where: { email } });
    if (existing) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash password
    const hashed = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashed,
      city,
    });

    // Issue token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(201).json({ success: true, token });
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
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({ success: true, token });
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

// UPDATE profile (no avatar upload anymore)
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