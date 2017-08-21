
var env = process.env.NODE_ENV || "development"
var path = require('path');
var webpack = require('webpack');

const plugins = [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  ]
const babel_loader = {
	test: /\.jsx$/,
	loader: "babel-loader",
	exclude: /(node_modules|bower_components)/,
	query: {
		presets: [ 
			"es2015",
			"react",
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

	entry : {
    app:'./src/index.jsx',
	},
	output : {
		path: path.resolve(__dirname, "../dist"),
		filename: "[name].js"
	},
	module: {
		loaders: [ babel_loader, css_loader, font_loader ]
	},
	plugins,
	node: {
		net: 'empty',
		dns: 'empty'
	}  
}