// require("dotenv").config();
// const TARGET_SERVER_HOST = process.env.TARGET_SERVER_HOST ? process.env.TARGET_SERVER_HOST.trim() : "";
// const TARGET_SERVER_USER = process.env.TARGET_SERVER_USER ? process.env.TARGET_SERVER_USER.trim() : "";
// const REPO = "https://gitlab.sipstack.com/hub/console.git";

module.exports = {
  apps: [
    {
      name: 'sipstack_www:8380',
      // exec_mode: "cluster",
      // instances: "1",
      // watch: ".",
      //   script: 'index.js',
      script: 'node_modules/.bin/http-server',
      args: 'dist/ -d false -c-1 -p 8380 --log-ip',
      env: {
        // NODE_PORT: 8581,
        // NODE_ENV: 'development',
        // DB_SECURE_HOST: process.env.DB_SECURE_HOST,
        // DB_SECURE_PORT: process.env.DB_SECURE_PORT,
        // DB_SECURE_USER: process.env.DB_SECURE_USER,
        // DB_SECURE_PASS: process.env.DB_SECURE_PASS,
        // SMTP_PASS: process.env.SMTP_PASS,
        // JWT_SECRET: process.env.JWT_SECRET,
        // JWT_SECRET_AUTH: process.env.JWT_SECRET_AUTH,
      },
    },
  ],

  // 	production: {
  // 		user: "production",
  // 		host: ["10.11.24.21"],
  // 		// port: "22",
  // 		ref: "origin/main",
  // 		repo: "https://gitlab.sipstack.com/hub/console.git",
  // 		path: "/home/node/console",
  // 		"pre-deploy-local": "",
  // 		// "post-deploy":
  // 		// 	"nvm use 12 && npm install && rm -rf dist && mkdir -p tmp && node_modules/.bin/gulp build --env production && node_modules/.bin/gulp publish --env production && pm2 reload ecosystem.config.js --env production",
  // 		"post-deploy": "npm i && npm run gulp-build && pm2 startOrRestart ecosystem.config.js --env staging && pm2 save",
  // 		"pre-setup": "",
  // 		// env: {
  // 		// 	AWS_AKEY: process.env.AWS_AKEY,
  // 		// 	AWS_SKEY: process.env.AWS_SKEY,
  // 		// },
  // 	},
  // },
}
