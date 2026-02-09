import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import compression from "compression";
import rateLimit from "express-rate-limit";
import { sequelize } from "./models/index.js";
import logger from "./config/logger.js"; // ✅ Winston logger

import authRoutes from "./routes/auth.js";
import logoutRoutes from "./routes/logout.js";
import plantRoutes from "./routes/plants.js";
import protectedRoutes from "./routes/protected.js";
import weatherRoutes from "./routes/weather.js";
import careTasksRoutes from "./routes/careTasks.js";
import speciesRoutes from "./routes/species.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();

const app = express();

// ✅ Security middleware
app.use(helmet()); // security headers
app.disable("x-powered-by"); // hide Express signature

// ✅ CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// ✅ Compression
app.use(compression());

// ✅ Rate limiting (global)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per window
  message: { success: false, message: "Too many requests, try again later." },
});
app.use(limiter);

// ✅ JSON parsing
app.use(express.json());

// ✅ Serve uploaded files
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/logout", logoutRoutes);
app.use("/api/plants", plantRoutes);
app.use("/api/protected", protectedRoutes);
app.use("/api/weather", weatherRoutes);
app.use("/api/care-tasks", careTasksRoutes);
app.use("/api/species", speciesRoutes);

// ✅ Global error handler (must be last)
app.use(errorHandler);

// ✅ Database Connection (no sync, migrations handle schema)
sequelize.authenticate()
  .then(() => logger.info("✅ Database connected"))
  .catch((err) => logger.error("❌ DB connection error:", err));

// ✅ Server start
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "development";

app.listen(PORT, () => {
  logger.info(`🚀 Server running on port ${PORT} in ${NODE_ENV} mode`);
});