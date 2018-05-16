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
// create schema (must export models)

require('./server/models/quote.js')(app);  // ????

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
//routes (have been exported)

require('./server/config/routes.js')(app);




app.listen(8000, function(){
    console.log("listening on 8000");
})