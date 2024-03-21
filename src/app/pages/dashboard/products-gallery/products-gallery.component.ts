import { Component } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { CommonModule } from '@angular/common';
import { WishListService } from '../../wish-list/wish-list.service';
import { NgbModal, NgbModule, NgbRatingConfig, NgbRatingModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { FullscreenComponent } from '../../fullscreen/fullscreen.component';
import { RouterModule } from '@angular/router';
import { ProductDetailService } from '../../product-detail/product-detail.service';
import { ComparisonService } from '../../comparison/comparison.service';

@Component({
  selector: 'products-gallery',
  standalone:true,
  imports:[CommonModule,NgbModule, NgbToastModule,NgbRatingModule,FullscreenComponent,RouterModule,],
  templateUrl: './products-gallery.component.html',
  styleUrl: './products-gallery.component.scss'
})
export class ProductsGalleryComponent {
  show: boolean=false;
  element=''

  constructor(
    private dashboardService:DashboardService,
    private wishList:WishListService,
    config: NgbRatingConfig,
    private ngbModal: NgbModal,
    private productdetail:ProductDetailService,
    private compareService:ComparisonService
    ){
      config.max = 5;
      config.readonly = false;
    }
    rating=3;
  showSpinner: boolean=false;
  
  active: string = '';
  products=[
    {
     image:"https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/products/product-1.jpg",
     name:"Electric Planer Brandix KL370090G 300 Watts",
     price:749,
     quantity:1,
     rating:3,
     color:"yellow",
      speed:"750RPM",
      power_source:"Cordless-Electric",
      battery_cell_type:"Lithium",
      voltage:"20 Volts",
      battery_capacity:"2 Ah"
    },
    {
      image:"https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/products/product-2.jpg",
      name:"Undefined Tool IRadix DPS3000SY 2700 Watts",
      price:1019,
      quantity:1,
      rating:3,
      color:"yellow",
      speed:"750RPM",
      power_source:"Cordless-Electric",
      battery_cell_type:"Lithium",
      voltage:"20 Volts",
      battery_capacity:"2 Ah"
    },
    {
      image:"https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/products/product-3.jpg",
      name:"Drill Screwdriver Brandix ALX7054 200 Watts",
      price:850,
      quantity:1,
      rating:3,
      color:"yellow",
      speed:"750RPM",
      power_source:"Cordless-Electric",
      battery_cell_type:"Lithium",
      voltage:"20 Volts",
      battery_capacity:"2 Ah"
    },
    {
      image:"https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/products/product-4.jpg",
      name:"Drill Series 3 Brandix KSR4590PQS 1500 Watts",
      price:949,
      quantity:1,
      rating:3,
      color:"yellow",
      speed:"750RPM",
      power_source:"Cordless-Electric",
      battery_cell_type:"Lithium",
      voltage:"20 Volts",
      battery_capacity:"2 Ah"
    },
   
    
  ]

  product2=[
    
    {
      image:"https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/products/product-5.jpg",
      name:"Brandix Router Power Tool 2017ERXPK",
      price:1700,
      quantity:0,
      rating:3,
      color:"yellow",
      speed:"750RPM",
      power_source:"Cordless-Electric",
      battery_cell_type:"Lithium",
      voltage:"20 Volts",
      battery_capacity:"2 Ah"
    },
    {
      image:"https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/products/product-6.jpg",
      name:"Brandix Drilling Machine DM2019KW4 4kW",
      price:3199,
      quantity:0,
      rating:3,
      color:"yellow",
      speed:"750RPM",
      power_source:"Cordless-Electric",
      battery_cell_type:"Lithium",
      voltage:"20 Volts",
      battery_capacity:"2 Ah"
    },
    {
      image:"https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/products/product-7.jpg",
      name:"Brandix Pliers",
      price:24,
      quantity:0,
      rating:3,
      color:"yellow",
      speed:"750RPM",
      power_source:"Cordless-Electric",
      battery_cell_type:"Lithium",
      voltage:"20 Volts",
      battery_capacity:"2 Ah"
    },
    {
      image:"https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/products/product-8.jpg",
      name:"Water Hose 40cm",
      price:15,
      quantity:0,
      rating:3,
      color:"yellow",
      speed:"750RPM",
      power_source:"Cordless-Electric",
      battery_cell_type:"Lithium",
      voltage:"20 Volts",
      battery_capacity:"2 Ah"
    }
    
  ]

    getProducts(product: any): any {
    let pro=this.dashboardService.createProduct(product)
    this.element=product.name

    this.showSpinner = true;
    // Simulate a delay of 1 second before hiding the spinner
    setTimeout(() => {
      this.showSpinner = false;
    }, 1000);

    this.show = true
    setTimeout(() => {
      this.show = false;
    },5000)

  }

  getProduct2(product: any) {
    let pro=this.dashboardService.createProduct(product)
    this.element=product.name

    this.showSpinner = true;
    // Simulate a delay of 1 second before hiding the spinner
    setTimeout(() => {
      this.showSpinner = false;
    }, 1000);

    this.show = true
    setTimeout(() => {
      this.show = false;
    },5000)
  }

  wishlistArray(index:any){
    let wishObj=this.products[index];
    let wishproduct=this.wishList.wishData(wishObj)
  }
  wishlistArray2(index:any){
    let wishObj=this.product2[index];
    let wishproduct=this.wishList.wishData(wishObj)
  }


  
  viewProductDetail(product: any) {
    let modalRef =  this.ngbModal.open(FullscreenComponent, {centered:true, size: 'xl'})
    modalRef.componentInstance.product = product;
    modalRef.result.then(
     (result) => {
     })
 
   }

   getobject(product:any){
    this.productdetail.getObject(product)
   }


   compareProduct(product:any){
    this.compareService.createProduct(product)
   }


}


