var http = require('http');
var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var restify = require('express-restify-mongoose')

mongoose.connect('mongodb://localhost/ngconf');
var beerSchema = new Schema({
  _id: ObjectId,
  id: Number,
  brewery: {
    name: String,
    country: String,
    state: String,
    city: String,
    geocodes: {
      longitude: Number,
      latitude: Number
    }
  },
  name: String,
  category: String,
  style: String,
  abv: Number,
  descript: String
});

var Beers = mongoose.model('Beers', beerSchema);

var app = express();
var options = {
  access : function (request) {
    return 'public'
  }
}

app.configure(function(){
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(
      function crossOrigin(req,res,next){
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        return next();
      }
    );

    restify.serve(app, Beers, options);
});

http.createServer(app).listen(3000, function() {
    console.log("Express server listening on port 3000");
});