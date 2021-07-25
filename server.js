"use strict";
exports.__esModule = true;
var express = require("express");
var mongoose = require("mongoose");
require('dotenv').config();
var app = express();
var PORT = process.env.PORT || 3000;
app.get('/', function (req, res) {
    res.send('Express server is live');
});
//middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use('/api', require('./controllers/userController')); 
mongoose.connect("mongodb+srv://admin:" + process.env.DB_PASSWORD + "@cluster0.lxflj.mongodb.net/Connected?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function (err) {
    if (err)
        throw err;
    console.log('connected to database youre gucci!');
});
app.listen(PORT, function () {
    console.log("App is listening on PORT " + PORT);
});
