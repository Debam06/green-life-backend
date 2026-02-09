import express from "express";
import axios from "axios";
import authMiddleware from "../middleware/auth.js";
import User from "../models/User.js";

const router = express.Router();

// GET Weather for logged-in user's city
router.get("/", authMiddleware, async (req, res, next) => {
  try {
    // Fetch user from DB to get city
    const user = await User.findByPk(req.user.id);
    if (!user || !user.city) {
      return res.status(400).json({ success: false, message: "City not set for user" });
    }

    const apiKey = process.env.OPENWEATHER_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ success: false, message: "OpenWeather API key not configured" });
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      user.city
    )}&appid=${apiKey}&units=metric`;

    const response = await axios.get(url);
    const data = response.data;

    res.json({
      success: true,
      data: {
        city: user.city,
        temp: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
      },
    });
  } catch (err) {
    err.statusCode = 500;
    next(err);
  }
});

export default router;