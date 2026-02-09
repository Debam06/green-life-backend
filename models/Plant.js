import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Plant = sequelize.define("Plant", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  species: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // ✅ ensures species names are unique
  },
  plantedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  notes: {
    type: DataTypes.TEXT,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  indexes: [
    {
      unique: true,
      fields: ["species"], // ✅ adds DB-level unique index
    }
  ]
});

export default Plant;