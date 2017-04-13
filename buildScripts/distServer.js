import express from 'express';
import compression from 'compression';
/* eslint-disable no-console*/
var path = require('path');
var open= require('open');


var port = 3001;
var app = express();

app.use(compression()); /*Only to test prod build works in local*/
app.use(express.static('dist')); /*Only to test prod build works in local*/

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.get('/users', function(req, res){


  res.json([
    { "id":"1", "firstName":"Bob", "lastName": "Smith", "email":"bob@gmail.com" },
    { "id":"2", "firstName":"John", "lastName": "Lee", "email":"john@gmail.com" }
  ]);

});


app.listen(port,function(err){

  if(err){
    console.log(err);
  }else{
    open('http://localhost:'+port);
  }
});
