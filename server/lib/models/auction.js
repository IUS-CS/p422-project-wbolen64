const mongoose = require('mongoose');

const AuctionSchema = mongoose.Schema({
  section: {
    type: String,
    required: true,
    unique: true
  },
  company: String,
  auctioneer: String,
  contact: String,
  address: String,
  time: String,
  date: String,
  items: [String]
});


AuctionSchema.query.bySection = function(name) {
  return this.where({date: name});
}

const Auction = mongoose.model('Auction', AuctionSchema);
module.exports = Auction;
