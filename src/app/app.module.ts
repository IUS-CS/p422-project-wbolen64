import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuctionContainerComponent } from './auction-container/auction-container.component';
import { AucdetailsComponent } from './aucdetails/aucdetails.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { RatingStarsComponent } from './rating-stars/rating-stars.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AuctionContainerComponent,
    AucdetailsComponent,
    RatingStarsComponent,
    SidebarComponent,
    HomepageComponent,
    ContactUsComponent,
    AboutUsComponent,
    PageNotFoundComponent
  ],
    imports: [
      BrowserModule,
      NgbModule,
      FormsModule,
      AppRoutingModule,
      HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
