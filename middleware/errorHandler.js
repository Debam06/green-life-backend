import logger from "../config/logger.js";

// Global error handler middleware
export default function errorHandler(err, req, res, next) {
  // Log error with Winston
  logger.error({
    message: err.message,
    stack: err.stack,
    statusCode: err.statusCode || 500,
    url: req.originalUrl,
    method: req.method,
    body: req.body,
  });

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    message,
  });
}