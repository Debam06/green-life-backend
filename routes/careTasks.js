import express from "express";
import axios from "axios";
import authMiddleware from "../middleware/auth.js";
import User from "../models/User.js";
import Plant from "../models/Plant.js";
import CareGuide from "../models/CareGuide.js";

const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, { include: Plant });
    if (!user.city) {
      return res.status(400).json({ success: false, message: "City not set for user" });
    }

    let temp = 25; // fallback
    let rain = 0;  // fallback

    try {
      const weatherRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${user.city}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
      );
      const weather = weatherRes.data;
      rain = weather.rain?.["1h"] || 0;
      temp = weather.main.temp;
    } catch (err) {
      console.warn("Weather API failed, using fallback:", err.message);
    }

    const tasks = await Promise.all(
      user.Plants.map(async (plant) => {
        const guide = await CareGuide.findOne({ where: { species: plant.species } });

        const todayTasks = [];

        // 🌧️ + 🌡️ Watering logic
        if (rain > 10) {
          todayTasks.push(
            `It rained ${rain}mm in ${user.city} today, so ${plant.name} already received enough moisture. Skip watering to prevent overwatering. Check soil before deciding.`
          );
        } else if (rain > 0 && rain <= 10) {
          if (temp >= 30) {
            todayTasks.push(
              `Light rain (${rain}mm) in ${user.city}, but it’s hot (${temp}°C). Give ${plant.name} a light watering if soil feels dry.`
            );
          } else {
            todayTasks.push(
              `Light rain (${rain}mm) in ${user.city}. That’s enough for ${plant.name} today — check soil before adding more water.`
            );
          }
        } else {
          if (temp >= 30) {
            todayTasks.push(
              `No rain in ${user.city} and it’s hot (${temp}°C). Water ${plant.name} generously once today.`
            );
          } else if (temp <= 15) {
            todayTasks.push(
              `No rain in ${user.city}, but it’s cool (${temp}°C). Water ${plant.name} lightly once today.`
            );
          } else {
            todayTasks.push(
              `No rain in ${user.city}. Water ${plant.name} once today to keep soil moist.`
            );
          }
        }

        // ✅ CareGuide fallback
        if (!guide) {
          todayTasks.push(
            `Generic care for ${plant.name}: Water daily if soil is dry, ensure sunlight, and check leaves for pests.`
          );
        } else {
          if (guide.sunlight) todayTasks.push(`Sunlight: ${guide.sunlight}`);
          if (guide.fertilizer) todayTasks.push(`Fertilizer: ${guide.fertilizer}`);
          if (guide.pruning) todayTasks.push(`Pruning: ${guide.pruning}`);
        }

        return {
          plant: plant.name,
          species: plant.species,
          tasks: todayTasks,
        };
      })
    );

    console.log("Generated tasks:", tasks);

    res.json({
      success: true,
      data: { city: user.city, weather: { temp, rain }, tasks },
    });
  } catch (err) {
    console.error("CareTasks error:", err.message, err.stack);
    res.status(500).json({
      success: false,
      message: "Failed to generate care tasks",
      error: err.message,
    });
  }
});

export default router;