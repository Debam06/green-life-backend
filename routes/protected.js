import express from "express";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.get("/", authMiddleware, (req, res) => {
  res.json({ success: true, message: "Access granted to protected route", user: req.user });
});

export default router;