const mongoose = require('mongoose');
const Auction = require('./lib/models/auction');

const Mill = new Auction({
  section:'Mill',
  company: 'STROUDS AUCTION SERVICE LLC',
  auctioneer: 'Eric Stroud',
  contact: '8129722499',
  address: 'Old Mill St',
  time: '10am',
  date: '10-31-20',
  items: ['cars: 69 Roadrunner', 'collectables: Coca-Cola ',
  'decor: Barn wood', 'glass: Fine China', 'signage: Shell and Texaco Signs', 'firearms: None', 'misc: Much More',
  'cars: 1992 Ford Mustang 5.0', 'collectables: GI JOE', 'decor: Farmhouse', 'glass: USA Pottery', 'signage: Theater X Signage', 'firearms: None', 'misc: Much More',
  ]
});



const Eagle = new Auction({
  section:'Eagle',
 company: 'STROUDS AUCTION SERVICE LLC',
    auctioneer: 'Eric Stroud',
    contact: '8129722499',
   address: 'Eagle Court',
    time: '9am',
  date: '1-2-21',
    items: ['cars: None', 'collectables: Pepsi Co',
  'decor: Basic Home Shit', 'glass: none', 'signage: Coke Signs', 'firearms: Remington 870 Wingmaster', 'misc: Much More']
});

mongoose.connect('mongodb://localhost:27017/ProjectWebApp', {useNewUrlParser: true, useUnifiedTopology: true});

Mill.save().catch(err => console.error(err)).then(() => { console.log('saved mill') });
Eagle.save().catch(err => console.error(err)).then(() => { console.log('saved eagle') });
