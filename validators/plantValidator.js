import { body } from "express-validator";
import CareGuide from "../models/CareGuide.js";

export const createPlantValidator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Plant name is required"),

  body("species")
    .trim()
    .notEmpty()
    .withMessage("Species is required")
    .custom(async (value) => {
      const guide = await CareGuide.findOne({ where: { species: value } });
      if (!guide) {
        throw new Error("Invalid species — must exist in CareGuides");
      }
      return true;
    }),

  body("plantedAt")
    .notEmpty()
    .withMessage("Planted date is required")
    .isISO8601()
    .withMessage("plantedAt must be a valid date")
    .toDate(), // ✅ auto-convert to JS Date
];