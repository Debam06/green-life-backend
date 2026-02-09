import sequelize from "../config/db.js";
import User from "./User.js";
import Plant from "./Plant.js";
import CareGuide from "./CareGuide.js";
import BlacklistedToken from "./BlacklistedToken.js";

// Associations
User.hasMany(Plant, { foreignKey: "userId", onDelete: "CASCADE" });
Plant.belongsTo(User, { foreignKey: "userId" });

CareGuide.hasMany(Plant, { foreignKey: "species", sourceKey: "species" });
Plant.belongsTo(CareGuide, { foreignKey: "species", targetKey: "species" });

export { sequelize, User, Plant, CareGuide, BlacklistedToken };