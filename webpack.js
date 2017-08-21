var config = require('./config.js')
var webpack_config = require(config.WP_CONFIG)
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')

var compiler = webpack(webpack_config)
module.exports = {
    dev_middleware: webpackDevMiddleware(compiler, { 
            noInfo: false
        }
    ), 
    hot_middleware: webpackHotMiddleware(compiler)
}
