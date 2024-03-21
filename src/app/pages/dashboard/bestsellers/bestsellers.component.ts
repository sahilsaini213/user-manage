import { Component, TemplateRef } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { CommonModule } from '@angular/common';
import { WishListService } from '../../wish-list/wish-list.service';
import { NgbModal, NgbModule, NgbRatingConfig, NgbRatingModule, NgbToastConfig, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from './toast.service';
import { FullscreenComponent, IProduct } from '../../fullscreen/fullscreen.component';
import { ProductDetailService } from '../../product-detail/product-detail.service';
import { RouterModule } from '@angular/router';
import { ComparisonService } from '../../comparison/comparison.service';

@Component({
  selector: 'bestsellers',
  standalone:true,
  imports:[CommonModule,NgbModule, NgbToastModule,FullscreenComponent,NgbRatingModule,RouterModule],
  providers: [NgbToastConfig],
  templateUrl: './bestsellers.component.html',
  styleUrl: './bestsellers.component.scss'
})
export class BestsellersComponent {
  
  cartToast: boolean=false;
  wishlistToast:boolean=false;
  cartProducts : any;
  
showSpinner1: boolean = false;

constructor(
  private dashboardService:DashboardService,
  private wishList:WishListService,
  private config: NgbRatingConfig,
  private ngbModal: NgbModal,
  private productdetail:ProductDetailService,
  private compareService:ComparisonService,
  ){
    config.max = 5;
		config.readonly = true;
  }

  products: any =[
    {
      image:"https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/products/product-1.jpg",
      name:'Electric Planer Brandix KL370090G 300 Watts',
      price:749,
      badge:"NEW",
      quantity:1,
      rating:2,
      availability:'In Stock',
      brand:'Wakita',
      sku:'83690/32',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.',
      color:'yellow',
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
      badge:"HOT",
      quantity:1,
      rating:4,
      availability:'In Stock',
      brand:'Wakita',
      sku:'83690/32',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.',
      color:'yellow',
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
      badge:"SALE",
      quantity:1,
      rating:3,
      availability:'In Stock',
      brand:'Wakita',
      sku:'83690/32',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.',
      color:'yellow',
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
      badge:"SALE",
      quantity:1,
      rating:3,
      availability:'In Stock',
      brand:'Wakita',
      sku:'83690/32',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.',
      color:'yellow',
      speed:"750RPM",
      power_source:"Cordless-Electric",
      battery_cell_type:"Lithium",
      voltage:"20 Volts",
      battery_capacity:"2 Ah"
    },
    {
      image:"https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/products/product-5.jpg",
      name:"Brandix Router Power Tool 2017ERXPK",
      price:1700,
      badge:"SALE",
      quantity:1,
      rating:3,
      availability:'In Stock',
      brand:'Wakita',
      sku:'83690/32',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.',
      color:'yellow',
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
      badge:"SALE",
      quantity:1,
      rating:3,
      availability:'In Stock',
      brand:'Wakita',
      sku:'83690/32',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.',
      color:'yellow',
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
      badge:"SALE",
      quantity:1,
      rating:3,
      availability:'In Stock',
      brand:'Wakita',
      sku:'83690/32',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.',
      color:'yellow',
      speed:"750RPM",
      power_source:"Cordless-Electric",
      battery_cell_type:"Lithium",
      voltage:"20 Volts",
      battery_capacity:"2 Ah"
    },
  
  ]
  firstObject=this.products[0]
  hideElement=this.products.shift()
  element=''

  getproductsAtIndex(product: any){
    let pro=this.dashboardService.createProduct(product)
    this.showSpinner1 = true;
    this.element=product.name

    //delay of 1 second before hiding the spinner
    setTimeout(() => {
      this.showSpinner1 = false;
    }, 1000);
    
    //toast 
    this.cartToast = true
    setTimeout(() => {
      this.cartToast = false;
    },5000)

  }

  wishlistArray(product:any){
    let wishproduct=this.wishList.wishData(product)
    this.element=product.name

     //toast 
     this.wishlistToast = true
     setTimeout(() => {
       this.wishlistToast = false;
     },5000)
  }

  viewProductDetail(product: any) {
   let modalRef =  this.ngbModal.open(FullscreenComponent, {centered:true, size: 'xl'})
   modalRef.componentInstance.product = product;
   modalRef.result.then(
    (result) => {
    })

  }

  getObject(product:any){
    this.productdetail.getObject(product)
  }

  compareProduct(product:any){
    this.compareService.createProduct(product)
  }
}
