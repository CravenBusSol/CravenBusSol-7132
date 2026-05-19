module.exports = {
  apps: [
    {
      name: "sandbox-app-template-web",
      cwd: "./packages/web",
      script: "src/server.ts",
      interpreter: "bun",
      exec_mode: "fork",
      instances: 1,
      autorestart: true,
      restart_delay: 1000,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
