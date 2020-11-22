import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  images = [1072, 284, 206].map((n) => `https://picsum.photos/id/${n}/200/300`)
  constructor() { }

  ngOnInit(): void {
  }

}
