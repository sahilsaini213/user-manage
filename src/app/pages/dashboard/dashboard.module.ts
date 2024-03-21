import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ProductsGalleryComponent } from './products-gallery/products-gallery.component';
import { BestsellersComponent } from './bestsellers/bestsellers.component';
import { PopularCategoriesComponent } from './popular-categories/popular-categories.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { ShopComponent } from './shop/shop.component';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from '../nav/nav.component';
import { TopNavComponent } from '../nav/top-nav/top-nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';



@NgModule({
  declarations: [
  ],

  imports: [
    CommonModule,
    RouterModule,
    NgbRatingModule,
    ReactiveFormsModule,
    RouterOutlet,
    FooterComponent,
    NavComponent,
    TopNavComponent
  ],

  // exports:[DashboardModule]
})
export class DashboardModule { }
