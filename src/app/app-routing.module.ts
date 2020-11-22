import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { AucdetailsComponent } from './aucdetails/aucdetails.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import {AuctionContainerComponent} from './auction-container/auction-container.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component'


const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'auctions', component: AucdetailsComponent },
  {path: 'auctions/:date', component: AuctionContainerComponent},
  { path: 'contactus', component: ContactUsComponent },
  { path: 'aboutus', component: AboutUsComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
