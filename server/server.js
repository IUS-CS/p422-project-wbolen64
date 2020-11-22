const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./lib/routes');

let port = 6061;

mongoose.connect('mongodb://localhost:27017/ProjectWebApp', {useNewUrlParser: true, useUnifiedTopology: true});

let app = express();

app.use('/', bodyParser.json());

app.use('/v1/', routes);

app.listen(port, function() {
  console.log("Listening on :%d", port);
});
