import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const BlacklistedToken = sequelize.define("BlacklistedToken", {
  token: { type: DataTypes.STRING, allowNull: false },
  expiresAt: { type: DataTypes.DATE, allowNull: false }  // ✅ add this
});

export default BlacklistedToken;