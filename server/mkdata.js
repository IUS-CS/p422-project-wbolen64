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
  items: ['Cars: 69 Roadrunner', 'Collectables: Coca-Cola ',
  'Decor: Barn wood', 'Glass: Fine China', 'Signage: Shell and Texaco Signs', 'Firearms: None', 'Misc: Much More',
  'Cars: 1992 Ford Mustang 5.0', 'Collectables: GI JOE', 'Decor: Farmhouse', 'Glass: USA Pottery', 'Signage: Theater X Signage', 'Firearms: None', 'Misc: Much More',
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
    items: ['Cars: None', 'Collectables: Pepsi Co',
  'Decor: Basic Home Shit', 'Glass: N/A', 'Signage: Coke Signs', 'Firearms: Remington 870 Wingmaster', 'Misc: Much More']
});
const Floyd = new Auction({
  section:'Floyd',
  company: 'STROUDS AUCTION SERVICE LLC',
  auctioneer: 'Eric Stroud',
  contact: '8129722499',
  address: 'Floyd Co Impound',
  time: '10am',
  date: '2-6-21',
  items: ['Cars: 2005 Ford FiveHundred', 'Collectables: Beanie Babies',
    'Decor: ArtDeco', 'Glass: Glassware for Youngins', 'Signage: Neon Signs', 'Firearms: Tommy Gun', 'Misc: Much More']
});
const Crawford = new Auction({
  section:'Crawford',
  company: 'STROUDS AUCTION SERVICE LLC',
  auctioneer: 'Eric Stroud',
  contact: '8129722499',
  address: 'Crawford Lane',
  time: '8:30am',
  date: '3-6-21',
  items: ['Cars: 78 Chevy C10', 'Collectables: Grandmas Favorite Rocks',
    'Decor: FarmHouse', 'Glass: Made in USA Pottery', 'Signage: Oil Company and Local Signage', 'Firearms: Typical Redneck Shit', 'Misc: Much More']
});

mongoose.connect('mongodb://localhost:27017/ProjectWebApp', {useNewUrlParser: true, useUnifiedTopology: true});

Mill.save().catch(err => console.error(err)).then(() => { console.log('saved mill') });
Eagle.save().catch(err => console.error(err)).then(() => { console.log('saved eagle') });
Floyd.save().catch(err => console.error(err)).then(() => { console.log('saved floyd') });
Crawford.save().catch(err => console.error(err)).then(() => { console.log('saved crawford') });
