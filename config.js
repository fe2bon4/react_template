const ENVIRONMENT = process.env.NODE_ENV;
const PORT = process.env.PORT;
var path = require('path');

module.exports = (ENVIRONMENT === 'production')? {
    APP_NAME: "NODE MCU",
    PORT: 4500 || PORT,
    WP_CONFIG : path.join(__dirname, 'config/webpack.prod.config.js')
}:{
    PORT: 3300,
    WP_CONFIG : path.join(__dirname, 'config/webpack.dev.config.js')
}