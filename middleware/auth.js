import jwt from "jsonwebtoken";
import User from "../models/User.js";
import BlacklistedToken from "../models/BlacklistedToken.js";

export default async function authMiddleware(req, res, next) {
  const authHeader = req.header("Authorization");
  if (!authHeader) {
    return res.status(401).json({ success: false, message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ success: false, message: "Invalid token format" });
  }

  try {
    // Check blacklist
    const blacklisted = await BlacklistedToken.findOne({ where: { token } });
    if (blacklisted) {
      return res.status(401).json({ success: false, message: "Token has been revoked" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.id);
    if (!user) {
      return res.status(401).json({ success: false, message: "User not found" });
    }

    // ✅ Attach both user and raw token
    req.user = { id: user.id, email: user.email };
    req.token = token;

    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: "Token is not valid" });
  }
}