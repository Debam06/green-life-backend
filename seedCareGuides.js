import CareGuide from "./models/CareGuide.js";
import sequelize from "./config/db.js";

async function seedCareGuides() {
  try {
    await sequelize.sync(); // ensure table exists

    await CareGuide.bulkCreate([
      {
        species: "Tulsi",
        watering: { frequency: 1, unit: "days", rule: "light watering daily, skip if rain > 10mm" },
        sunlight: "Direct sunlight, 4-6 hours",
        fertilizer: "Organic compost every 2 weeks",
        pruning: "Pinch off flowers to encourage leaf growth"
      },
      {
        species: "Mango",
        watering: { frequency: 2, unit: "days", rule: "skip if rain > 10mm" },
        sunlight: "Full sun, 6+ hours",
        fertilizer: "Nitrogen-rich once a month",
        pruning: "Light pruning in spring"
      },
      {
        species: "Rose",
        watering: { frequency: 1, unit: "days", rule: "daily in summer, every 2 days in winter" },
        sunlight: "Partial sun, 4-6 hours",
        fertilizer: "Phosphorus-rich every 2 weeks",
        pruning: "Remove dead flowers weekly"
      },
      {
        species: "AloeVera",
        watering: { frequency: 7, unit: "days", rule: "water weekly, skip if soil moist" },
        sunlight: "Indirect sunlight, 4-6 hours",
        fertilizer: "Diluted liquid fertilizer every 2 months",
        pruning: "Remove damaged leaves"
      },
      {
        species: "MoneyPlant",
        watering: { frequency: 3, unit: "days", rule: "keep soil slightly moist" },
        sunlight: "Indirect sunlight, avoid harsh rays",
        fertilizer: "Balanced fertilizer once a month",
        pruning: "Trim long vines to encourage bushy growth"
      },
      {
        species: "Hibiscus",
        watering: { frequency: 2, unit: "days", rule: "increase frequency in summer" },
        sunlight: "Full sun, 6+ hours",
        fertilizer: "Potassium-rich every 2 weeks",
        pruning: "Prune after flowering season"
      },
      {
        species: "Neem",
        watering: { frequency: 3, unit: "days", rule: "skip if rain > 10mm" },
        sunlight: "Full sun, 6+ hours",
        fertilizer: "Organic compost every month",
        pruning: "Minimal pruning, remove dead branches"
      },
      {
        species: "Basil",
        watering: { frequency: 1, unit: "days", rule: "light watering daily" },
        sunlight: "Direct sunlight, 6+ hours",
        fertilizer: "Organic compost every 2 weeks",
        pruning: "Pinch off flowers to prolong leaf harvest"
      },
      {
        species: "Tomato",
        watering: { frequency: 2, unit: "days", rule: "increase frequency in hot weather" },
        sunlight: "Full sun, 6-8 hours",
        fertilizer: "Balanced fertilizer every 2 weeks",
        pruning: "Remove suckers to improve yield"
      },
      {
        species: "Chili",
        watering: { frequency: 2, unit: "days", rule: "keep soil moist but not soggy" },
        sunlight: "Full sun, 6+ hours",
        fertilizer: "Nitrogen-rich every 2 weeks",
        pruning: "Remove weak branches"
      },
      {
        species: "CurryLeaf",
        watering: { frequency: 3, unit: "days", rule: "reduce in winter" },
        sunlight: "Full sun, 5-6 hours",
        fertilizer: "Organic compost every month",
        pruning: "Trim regularly to encourage bushy growth"
      },
      {
        species: "Mint",
        watering: { frequency: 1, unit: "days", rule: "keep soil consistently moist" },
        sunlight: "Partial sun, 3-4 hours",
        fertilizer: "Organic compost every 2 weeks",
        pruning: "Trim regularly to prevent flowering"
      },
      {
        species: "Coriander",
        watering: { frequency: 2, unit: "days", rule: "avoid waterlogging" },
        sunlight: "Partial sun, 4-5 hours",
        fertilizer: "Balanced fertilizer every 2 weeks",
        pruning: "Harvest leaves regularly"
      },
      {
        species: "Spinach",
        watering: { frequency: 2, unit: "days", rule: "increase frequency in hot weather" },
        sunlight: "Partial sun, 4-6 hours",
        fertilizer: "Nitrogen-rich every 2 weeks",
        pruning: "Harvest outer leaves first"
      },
      {
        species: "Papaya",
        watering: { frequency: 3, unit: "days", rule: "increase in summer" },
        sunlight: "Full sun, 6+ hours",
        fertilizer: "Organic compost every month",
        pruning: "Remove yellow leaves"
      },
      {
        species: "Banana",
        watering: { frequency: 2, unit: "days", rule: "needs consistent moisture" },
        sunlight: "Full sun, 6+ hours",
        fertilizer: "Potassium-rich every month",
        pruning: "Remove old leaves"
      },
      {
        species: "Guava",
        watering: { frequency: 3, unit: "days", rule: "skip if rain > 10mm" },
        sunlight: "Full sun, 6+ hours",
        fertilizer: "Balanced fertilizer every month",
        pruning: "Prune lightly after fruiting"
      },
      {
        species: "Peas",
        watering: { frequency: 2, unit: "days", rule: "keep soil moist" },
        sunlight: "Partial sun, 4-6 hours",
        fertilizer: "Nitrogen-rich every 2 weeks",
        pruning: "Support vines with stakes"
      },
      {
        species: "Potato",
        watering: { frequency: 3, unit: "days", rule: "avoid waterlogging" },
        sunlight: "Full sun, 6+ hours",
        fertilizer: "Balanced fertilizer every 2 weeks",
        pruning: "Remove flowers to boost tuber growth"
      }
    ]);

    console.log("✅ Care guides seeded successfully");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding care guides:", err);
    process.exit(1);
  }
}

seedCareGuides();