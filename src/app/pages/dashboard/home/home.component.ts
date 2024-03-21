import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopNavComponent } from '../../nav/top-nav/top-nav.component';
import { NewArrivalsComponent } from '../new-arrivals/new-arrivals.component';
import { PopularCategoriesComponent } from '../popular-categories/popular-categories.component';
import { ProductsGalleryComponent } from '../products-gallery/products-gallery.component';
import { ShopComponent } from '../shop/shop.component';
import { BestsellersComponent } from '../bestsellers/bestsellers.component';

@Component({
  selector: 'app-home',
  standalone:true,
  imports:[CommonModule,
    NewArrivalsComponent,
    PopularCategoriesComponent,
    ProductsGalleryComponent,
    ShopComponent,
    BestsellersComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  active:string=''
  
 
  PowerTool=[
    "Engravers",
    "Wrenches", 
    "Wall Chaser",
    "Pneumatic Tools"
  ];
  MechanicalTool=[
    "Thread Cutting",
    "Chip Blowers",
    "Sharpening Machines",
    "Pipe Cutters",
    "Slotting machines",
    "Lathes",
  ]

  Currencys=[
    {
      label:'Euro'
    },
    {
      label:'Pond Sterling'
    },
    {
      label:'US dollar'
    },
    {
      label:'Russian Ruble'
    },
  ]

  Languages=[
    {
      label:'English'
    },
    {
      label:'Franch'
    },
    {
      label:'Germany'
    },
    {
      label:'Russian'
    },
    {
      label:'Italian'
    },
    {
      label:'Hindi'
    },
  ]

  Account=[
    {
    label:'Dashboard',
    },
    {
    label:'Edit Profile',
    },
    {
    label:'Order History',
    },
    {
    label:'Addresess',
    },
    {
    label:'Pasword',
    },
    {
    label:'Logout'
    }
  ]
}