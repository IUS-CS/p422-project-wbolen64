import { Auction } from '../models/Auction';
import { Items } from '../models/Items';

export const AUCTIONS: Auction[] =[
  { company: 'STROUDS AUCTION SERVICE LLC', auctioneer: 'Eric Stroud', contact: '8129722499',
    address: 'Old Mill St', time: '10am', date: '10-31-20', items: [{cars: '69 Roadrunner', collectables: 'Coca-Cola ',
      decor: 'Barn wood', glass: 'Fine China', signage: 'Shell and Texaco Signs', firearms: 'None', misc: 'Much More'},
      {cars: '1992 Ford Mustang 5.0', collectables: 'GI JOE',
      decor: 'Farmhouse', glass: 'USA Pottery', signage: 'Theater X Signage', firearms: 'None', misc: 'Much More'}]},
  { company: 'STROUDS AUCTION SERVICE LLC', auctioneer: 'Eric Stroud', contact: '8129722499',
    address: 'Eagle Court', time: '9am', date: '1-2-21', items: [{cars: 'None', collectables: 'Pepsi Co',
      decor: 'Basic Home Shit', glass: 'none', signage: 'Coke Signs', firearms: 'Remington 870 Wingmaster', misc: 'Much More'}]},
  { company: 'STROUDS AUCTION SERVICE LLC', auctioneer: 'Eric Stroud', contact: '8129722499',
    address: 'Floyd Co Impound', time: '10am', date: '2-6-21', items: [{cars: '2005 Ford FiveHundred', collectables: 'Beanie Babies',
      decor: 'ArtDeco', glass: 'Glassware for youngins', signage: 'Neon signs', firearms: 'Tommy Gun', misc: 'much more'}]},
];

