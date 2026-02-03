const FtpDeploy = require("ftp-deploy");
require("dotenv").config();

const ftpDeploy = new FtpDeploy();

const configOptions = {
    user: process.env.FTP_USER,
    password: process.env.FTP_PASS,
    host: process.env.FTP_HOST,
    port: 21,
    localRoot: __dirname + "/build", // CRA uses 'build', not 'dist'
    remoteRoot: process.env.FTP_PATH || "/", 
    include: ["*", "**/*", ".htaccess"], 
    deleteRemote: false, // safer default
    forcePasv: true,
};

// Simple check
if (!configOptions.user || !configOptions.password || !configOptions.host) {
  console.log('Using config:', { ...configOptions, password: '***' });
  console.warn('Warning: Some FTP environment variables might be missing.');
}

ftpDeploy
    .deploy(configOptions)
    .then((res) => console.log("✅ Deployment complete!"))
    .catch((err) => console.error("❌ Deployment failed:", err));
