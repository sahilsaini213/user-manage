import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { NgbActiveModal, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardService } from '../dashboard/dashboard.service';
import { WishListService } from '../wish-list/wish-list.service';

export interface IProduct {
    image?: string,
    name: string,
    description?: string,
    availability?: string,
    brand?: string,
    sku?: string,
    price?: number,
    badge?: string,
    quantity:number,
    rating: number,
}


@Component({
  selector: 'app-fullscreen',
  standalone: true,
  imports: [CommonModule,NgbToastModule],
  templateUrl: './fullscreen.component.html',
  styleUrl: './fullscreen.component.scss'
})
export class FullscreenComponent {

  active:string=''
  cartToast:boolean=false;
  wishlistToast:boolean=false

  product: IProduct = {
   image: '',
   name: '',
   description: '',
   availability: '',
   brand: '',
   sku: '83690/32',
   price: 0,
   rating: 0,
   quantity:1,
  }

  constructor(
    private activeModal:NgbActiveModal,
    private dashboard:DashboardService,
    private wishlist:WishListService
  ){
    this.updateQuantity
  }

  close(reason: any) {
    this.activeModal.close(reason)
   }
    
  transProduct(product:any){
   this.dashboard.createProduct(product)

   //toast 
   this.cartToast = true
   setTimeout(() => {
     this.cartToast = false;
   },5000)
  }

    
   updateQuantity(amount:number) {
   this.product.quantity += amount;
  }

  wishlistProduct(product:any){
    this.wishlist.wishData(product)

     //toast 
   this.wishlistToast = true
   setTimeout(() => {
     this.wishlistToast = false;
   },5000)
  }
}
