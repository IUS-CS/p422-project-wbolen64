import { Component, OnInit } from '@angular/core';
import {AUCTIONS} from '../data/auctions';
import {Auction} from '../models/Auction';

@Component({
  selector: 'app-auction-container',
  templateUrl: './auction-container.component.html',
  styleUrls: ['./auction-container.component.css']
})
export class AuctionContainerComponent implements OnInit {
auctions = AUCTIONS;
selectedAuction: Auction;
model = 1;
  constructor() { }
  ngOnInit(): void {
  }
  onSelect(auction: Auction ) {
    if (this.selectedAuction && this.selectedAuction.date === auction.date){
      this.selectedAuction = null;
      return;
    }
    this.selectedAuction = auction;
    console.log(auction.date);
  }
}
