var env = process.env.NODE_ENV || "development";
var config = require('./config');
var express = require('express');
var path = require('path')

var app = express();

//webpack Middleware
var {
    dev_middleware,
    hot_middleware
} = require('./webpack.js')
app.use(dev_middleware);
app.use(hot_middleware);

app.get("/list", (req, res )=>{
    res.send("PLDTMyDSLBiz-Home,-66,WPA\nPLDTHOMEDSL-HOME,-45,Auto\nWireless-N,-94,WPA2\nPLDTHOMEDSL-HOME,-79,Auto\n");
})

app.use(express.static('public'))

var server = app.listen( config.PORT ,  (error)=>{
    if(error){
        throw error
    } else {
        console.log(`Server [${env}] is running on PORT: ${config.PORT}`)
    }
})
