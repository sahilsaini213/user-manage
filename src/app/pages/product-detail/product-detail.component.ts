import { Component } from '@angular/core';
import { ProductDetailService } from './product-detail.service';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardService } from '../dashboard/dashboard.service';
import { RouterModule } from '@angular/router';
import { WishListService } from '../wish-list/wish-list.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule,NgbPaginationModule,RouterModule,NgbToastModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {

  page = 1;
  step1:boolean=true;
  step2:boolean=false
  step3:boolean=false
  
  activeimg:string=''
  active:string=''
  cartToast:boolean=false;
  WishlistToast:boolean=false

  constructor(
    private productdetail:ProductDetailService,
    private dashboard:DashboardService,
    private wishlistservice:WishListService,
  ){
    this.getObject();
  }

  product:any={};
  reviews:any=[
    {
      image:"https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/avatars/avatar-1.jpg",
      name:"Samantha Smith",
      reviewText:"Phasellus id mattis nulla. Mauris velit nisi, imperdiet vitae sodales in, maximus ut lectus. Vivamus commodo scelerisque lacus, at porttitor dui iaculis id. Curabitur imperdiet ultrices fermentum.",
      date:"27 May, 2018"
    },
    {
      image:"https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/avatars/avatar-2.jpg",
      name:"Adam Taylor",
      reviewText:"Aenean non lorem nisl. Duis tempor sollicitudin orci, eget tincidunt ex semper sit amet. Nullam neque justo, sodales congue feugiat ac, facilisis a augue. Donec tempor sapien et fringilla facilisis. Nam maximus consectetur diam. Nulla ut ex mollis, volutpat tellus vitae, accumsan ligula.",
      date:"12 April, 2018"
    },
    {
      image:"https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/avatars/avatar-3.jpg",
      name:"Adam Taylor",
      reviewText:"Duis ac lectus scelerisque quam blandit egestas. Pellentesque hendrerit eros laoreet suscipit ultrices.",
      date:"2 January, 2018"
    },
    {
      image:"https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/avatars/avatar-1.jpg",
      name:"Samantha Smith",
      reviewText:"Phasellus id mattis nulla. Mauris velit nisi, imperdiet vitae sodales in, maximus ut lectus. Vivamus commodo scelerisque lacus, at porttitor dui iaculis id. Curabitur imperdiet ultrices fermentum.",
      date:"27 May, 2018"
    }
  ];

  getObject(){
    this.product=this.productdetail.printObject()
  }

  updateQuantity(amount:number) {
    this.product.quantity += amount;
   }

   addtoCart(product:any){
    this.dashboard.createProduct(product)

    //toast 
    this.cartToast = true
    setTimeout(() => {
      this.cartToast = false;
    },5000)

   }
   


   changeLayout(value:string){
    if (value==="step2"){
      this.step1=false;
      this.step2 = true;
      this.step3 = false;
    }
    else if (value==="step3"){
      this.step1=false;
      this.step2 = false;
      this.step3 = true;
    }
    else{
      this.step1=true;
      this.step2 = false;
      this.step3 = false;
    }

    }

    wishlistproduct(product:any){
      this.wishlistservice.wishData(product)

      //toast 
    this.WishlistToast = true
    setTimeout(() => {
      this.WishlistToast = false;
    },5000)
    }


}
