import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const CareGuide = sequelize.define("CareGuide", {
  species: { type: DataTypes.STRING, allowNull: false, unique: true },
  watering: { type: DataTypes.JSONB, allowNull: true },
  sunlight: { type: DataTypes.TEXT, allowNull: true },
  fertilizer: { type: DataTypes.TEXT, allowNull: true },
  pruning: { type: DataTypes.TEXT, allowNull: true },
});

export default CareGuide;