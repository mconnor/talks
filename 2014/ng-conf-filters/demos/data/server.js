var http = require('http');
var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var restify = require('express-restify-mongoose')

mongoose.connect('mongodb://localhost/beers');

var beerSchema = new Schema({
  _id: ObjectId,
  id: Number,
  brewery_id: Number,
  name: String,
  cat_id: Number,
  style_id: Number,
  abv: Number,
  ibu: Number,
  srm: Number,
  upc: Number,
  filepath: String,
  descript: String,
  add_user: Number,
  last_mod: Date
});

var Beers = mongoose.model('Beers', beerSchema);

var app = express();
var options = {
  access : function (request) {
    console.log("REQUEST:", request)
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