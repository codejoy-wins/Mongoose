//requires
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require('path');
var session = require('express-session');
var flash = require('express-flash');
//connect to db
mongoose.connect('mongodb://localhost/new_mongoose');
// create schema

var QuoteSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 6},
    quote: { type: String, required: true, minlength: 2}
    }, {timestamps: true});
    mongoose.model('Quote', QuoteSchema);
    var Quote = mongoose.model('Quote');

//  ADD VALIDATIONS HERE ^^^
// to make a model, you can first define a schema, which is just the BLUEPRINT for a model
// var UserSchema = new mongoose.Schema({
//     first_name:  { type: String, required: true, minlength: 6},
//     last_name: { type: String, required: true, maxlength: 20 },
//     age: { type: Number, min: 1, max: 150 },
//     email: { type: String, required: true }
// }, {timestamps: true });




//uses
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.use(flash());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, './client/static')));
//sets
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
//routes

require('./server/config/routes.js')(app);




app.listen(8000, function(){
    console.log("listening on 8000");
})