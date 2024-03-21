import { Component } from '@angular/core';
import { DashboardService } from '../../dashboard/dashboard.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {
  Products:any=[];

  constructor(private dataService:DashboardService){
    this.ProductList()
  }

  ProductList(){
    this.Products = this.dataService.cartProduct()
  }
  
  delete(i:any){
    this.dataService.delete(i)
  }

  calculateSubtotal(){
    const subtotal = this.Products.reduce((sum: any,obj: {totalPrice: any; }) => sum + obj.totalPrice, 0);
    return subtotal
  }

  Tax(){
    const Tax= this.Products.reduce((sum: any,obj: {totalPrice: any; }) => sum + obj.totalPrice * 20 / 100, 0).toFixed(2);
    return Tax
  }

  Total(){
    let allTotal= this.Products.reduce((sum: number,obj: {totalPrice: number; }) =>sum + obj.totalPrice + obj.totalPrice /100*20,0)+25;
    return allTotal
  }
  
  updateQuantity(amount:number){
  this.Products.quantity +=amount
  }
}
