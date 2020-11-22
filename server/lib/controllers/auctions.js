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
      for (let da of auctions) {
        ret.push(da.section);
      }
      res.json(ret);
    })
  },
  byAuction: (req, res) => {
    const date = req.params.date;

    Auction.findOne().bySection(date).exec((err, da) => {
      if (err) {
        res.status(500);
        res.json(err);
        return;
      }
      if (!da) {
        res.status(404);
        res.json({'err': 'auction not found'});
        return;
      }
      console.log('sending auction: ' + da)
      res.json(da);
    })
  }
}
