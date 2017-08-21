
var env = process.env.NODE_ENV || "development"
var path = require('path');
var webpack = require('webpack');


const plugins = [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.UglifyJsPlugin(
			{ 
				mangle: false,
				sourcemap: false,
				compress: {
					warnings: false
				}
			 }),
	]

const babel_loader = {
	test: /\.jsx$/,
	loader: "babel-loader",
	exclude: /(node_modules|bower_components)/,
	query: {
		presets: [ 
			"es2015",
			"react",
			"react-hmre"
		]
	}
}

const css_loader = {
	rules: [{
		test: /\.scss$/,
		use: [{
			loader: "style-loader" // creates style nodes from JS strings
		}, {
			loader: "css-loader" // translates CSS into CommonJS
		}, {
			loader: "sass-loader" // compiles Sass to CSS
		}]
	}]
}

const font_loader = {
	test: /\.(ttf|eot|woff|woff2)$/,
	loader: 'file-loader',
	options: {
	  name: 'fonts/[name].[ext]',
	},
  }

module.exports = {
	entry : [
    './src/index.jsx',
    'webpack-hot-middleware/client'
  ],
	output : {
		path: path.join(__dirname, "../public"),
		publicPath: '/',
		filename: "app.js"
	},
	module: {
		loaders: [ babel_loader, css_loader, font_loader ], 
	},
	plugins,
	resolve: {
	    extensions: [ '.js', 'jsx' ]
	  },
	node: {
		net: 'empty',
		dns: 'empty'
	}  
}