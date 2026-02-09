require("dotenv").config();

module.exports = {
  development: {
    url: process.env.DB_URL,
    dialect: "postgres"
  },
  test: {
    url: process.env.DB_TEST_URL || "postgres://postgres:Dpost26@localhost:5432/green_life_test",
    dialect: "postgres"
  },
  production: {
    url: process.env.DB_URL,
    dialect: "postgres"
  }
};