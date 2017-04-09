import express from 'express';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console*/
var path = require('path');
var open= require('open');


var port = 3001;
var app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.listen(port,function(err){

  if(err){
    console.log(err);
  }else{
    open('http://localhost:'+port);
  }
});