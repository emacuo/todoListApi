var express = require('express');
var app = express();
var port = process.env.PORT || 3300;
var mongoose = require('mongoose');
var Task = require('./api/models/todoListModel'); //created model loading here
var bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

//routes
var routes = require('./api/routes/todoListRoute'); //importing route
routes(app); //register the route

//middleware
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

app.listen(port);

console.log('to-do list RESTful API server started listening on port ' + port);