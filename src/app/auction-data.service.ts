import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Items} from './models/Items';


export class Auction{
  company: string;
  auctioneer: string;
  contact: string;
  address: string;
  time: string;
  date: string;
  items: Items[];
}
@Injectable({
  providedIn: 'root'
})
export class AuctionDataService {
  constructor(
    private http: HttpClient
  ) {
  }

  private url = '/v1/auctions/';

  public getAuction(date: string): Observable<Auction> {
    return this.http.get<Auction>(`${this.url}/${date}`);
  }

  public getAuctionDate(): Observable<string[]> {
    return this.http.get<string[]>(this.url);
  }
}
