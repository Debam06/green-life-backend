import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Plant = sequelize.define("Plant", {
  name: { type: DataTypes.STRING, allowNull: false },
  species: { type: DataTypes.STRING, allowNull: false },
  plantedAt: { type: DataTypes.DATE, allowNull: false },
  notes: { type: DataTypes.TEXT },
  userId: { type: DataTypes.INTEGER, allowNull: false },
});

export default Plant;