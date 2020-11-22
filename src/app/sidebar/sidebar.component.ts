import { Component, Input, OnInit } from '@angular/core';
import {AUCTIONS} from '../data/auctions';
import {Auction} from '../models/Auction';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  auctions = AUCTIONS;
  selectedAuction: Auction;
  active = 'top';
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
