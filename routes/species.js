// backend/routes/species.js
import express from "express";
import CareGuide from "../models/CareGuide.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.get("/", authMiddleware, async (req, res, next) => {
  try {
    const species = await CareGuide.findAll({ attributes: ["species"] });
    res.json({ success: true, data: species.map(s => s.species) });
  } catch (err) {
    next(err);
  }
});

export default router;