import { Component, OnInit } from '@angular/core';
import {AuctionDataService} from '../auction-data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-aucdetails',
  templateUrl: './aucdetails.component.html',
  styleUrls: ['./aucdetails.component.css']
})
export class AucdetailsComponent implements OnInit {

  auctionDates: Observable<string[]>;

  constructor(
    private auctionDataService: AuctionDataService
  ) { }

  ngOnInit(): void {
    this.auctionDates = this.auctionDataService.getAuctionDate();
  }

}
