import express from "express";
import BlacklistedToken from "../models/BlacklistedToken.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  const authHeader = req.header("Authorization");
  if (!authHeader) return res.status(400).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(400).json({ message: "Invalid token format" });

  try {
    await BlacklistedToken.create({ token });
    res.json({ success: true, message: "Logged out successfully" });
  } catch (err) {
    err.statusCode = 500;
    next(err);
  }
});

export default router;