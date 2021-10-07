var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./src/config');
var setupController = require('./src/controller/setupController');
var apiController = require('./src/controller/apiController');

var port = process.env.PORT || 5000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString());
setupController(app);
apiController(app);

app.listen(port);
