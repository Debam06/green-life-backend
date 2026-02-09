import express from "express";
import { validationResult } from "express-validator";
import Plant from "../models/Plant.js";
import authMiddleware from "../middleware/auth.js";
import { createPlantValidator } from "../validators/plantValidator.js";

const router = express.Router();

// CREATE Plant
router.post("/", authMiddleware, createPlantValidator, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const { name, species, plantedAt, notes } = req.body;

    const plant = await Plant.create({
      name,
      species,
      plantedAt, // ✅ already a Date object
      notes,
      userId: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Plant created successfully",
      data: plant,
    });
  } catch (err) {
    err.statusCode = 500;
    next(err);
  }
});

// GET Plants
router.get("/", authMiddleware, async (req, res, next) => {
  try {
    const plants = await Plant.findAll({ where: { userId: req.user.id } });
    res.json({ success: true, data: plants });
  } catch (err) {
    err.statusCode = 500;
    next(err);
  }
});

// UPDATE Plant
router.put("/:id", authMiddleware, createPlantValidator, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const plant = await Plant.findOne({
      where: { id: req.params.id, userId: req.user.id },
    });
    if (!plant) {
      return res.status(404).json({ success: false, message: "Plant not found" });
    }

    const { name, species, plantedAt, notes } = req.body;

    plant.name = name;
    plant.species = species;
    plant.plantedAt = plantedAt; // ✅ already a Date object
    plant.notes = notes;

    await plant.save();

    res.json({
      success: true,
      message: "Plant updated successfully",
      data: plant,
    });
  } catch (err) {
    err.statusCode = 500;
    next(err);
  }
});

// DELETE Plant
router.delete("/:id", authMiddleware, async (req, res, next) => {
  try {
    const plant = await Plant.findOne({
      where: { id: req.params.id, userId: req.user.id },
    });
    if (!plant) {
      return res.status(404).json({ success: false, message: "Plant not found" });
    }

    await plant.destroy();
    res.json({ success: true, message: "Plant deleted successfully" });
  } catch (err) {
    err.statusCode = 500;
    next(err);
  }
});

export default router;