module.exports = {
  apps: [
    {
      name: "green-life-backend",
      script: "server.js",
      instances: "max",
      exec_mode: "cluster",
      watch: false,
      env: {
        NODE_ENV: "development",
        PORT: 5000,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 5000,
        LOG_LEVEL: "info",
      },
      error_file: "./logs/pm2-error.log",
      out_file: "./logs/pm2-out.log",
      merge_logs: true,
      max_memory_restart: "300M",
    },
  ],
};