import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const BlacklistedToken = sequelize.define("BlacklistedToken", {
  token: { type: DataTypes.STRING, allowNull: false },
});

export default BlacklistedToken;