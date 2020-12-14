const express = require('express');
const auctions = require('./controllers/auctions');


let routes = express.Router();

routes.route('/auctions')
  .get(auctions.root)

routes.route('/auctions/:date')
  .get(auctions.byAuction)

module.exports = routes;
