import {Component, Input, OnInit} from '@angular/core';
import {Auction} from '../models/Auction';
import {AUCTIONS} from '../data/auctions';


@Component({
  selector: 'app-aucdetails',
  templateUrl: './aucdetails.component.html',
  styleUrls: ['./aucdetails.component.css']
})
export class AucdetailsComponent implements OnInit {
  @Input() auction: Auction;
  constructor() { }

  ngOnInit(): void {
  }

}
