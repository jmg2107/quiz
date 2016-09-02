var express = require('express');
var mongoose = require('mongoose');

var app = express();

// connect to mongo database named "quiz"
mongoose.connect('mongodb://localhost/quiz');


require('./middleware.js')(app, express);
require('./routes.js')(app, express);

module.exports = app;