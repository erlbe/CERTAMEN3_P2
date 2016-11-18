/**
 * Created by Erlend on 18.11.2016.
 */
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var ip         = require('ip');
var morgan     = require('morgan');
var mongoose   = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev')); // log every request to the console

// set our port
var port = process.env.PORT || 8080;

// all of our routes will be prefixed with /api
app.use('/api', require('./routes/api'));

// START THE SERVER
app.listen(port);
console.log('The API is listening on: '+ ip.address() +':'+ port + "/api/");

mongoose.connect('mongodb://localhost/asdasd', function(err, res) {
    if(err) throw err;
    console.log('Connected to Database');
});