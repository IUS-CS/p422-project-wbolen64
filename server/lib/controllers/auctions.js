const Auction = require('../models/auction');

module.exports = {
  root: (req, res) => {
    Auction.find().exec((err, auctions) => {
      if (err) {
        res.status(500);
        res.json(err);
        return;
      }
      let ret = [];
      for (let klass of auctions) {
        ret.push(klass.date);
      }
      res.json(ret);
    })
  },
  byAuction: (req, res) => {
    const section = req.params.date;

    Auction.findOne().bySection(section).exec((err, klass) => {
      if (err) {
        res.status(500);
        res.json(err);
        return;
      }
      if (!klass) {
        res.status(404);
        res.json({'err': 'auction not found'});
        return;
      }
      console.log('sending auction: ' + klass)
      res.json(klass);
    })
  }
}
