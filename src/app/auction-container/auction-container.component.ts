import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Auction, AuctionDataService} from '../auction-data.service';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-auction-container',
  templateUrl: './auction-container.component.html',
  styleUrls: ['./auction-container.component.css']
})
export class AuctionContainerComponent implements OnInit {
  selectedAuctionDate: string;
  selectedAuction: Observable<Auction>;

  constructor(
    private auctionDataService: AuctionDataService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.selectedAuction = this.route.paramMap.pipe(
      switchMap((params: ParamMap): Observable<Auction> => {
        return this.auctionDataService.getAuction(params.get('date'));
      })
    );
  }

  public selectAuction(name: string): void {
    this.selectedAuction = this.auctionDataService.getAuction(name);
    if (!this.selectedAuction) {
      this.router.navigateByUrl('/notfound');
    }
  }
}

/*
import { Component, OnInit} from '@angular/core';
import {AUCTIONS} from '../data/auctions';
import {Auction} from '../models/Auction';
import {Router} from '@angular/router';

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
*/
