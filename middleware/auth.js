import jwt from "jsonwebtoken";
import User from "../models/User.js";
import BlacklistedToken from "../models/BlacklistedToken.js";

export default async function authMiddleware(req, res, next) {
  const authHeader = req.header("Authorization");
  if (!authHeader) return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Invalid token format" });

  try {
    // Check blacklist
    const blacklisted = await BlacklistedToken.findOne({ where: { token } });
    if (blacklisted) return res.status(401).json({ message: "Token has been revoked" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.id);
    if (!user) return res.status(401).json({ message: "User not found" });

    req.user = { id: user.id, email: user.email };
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token is not valid" });
  }
}