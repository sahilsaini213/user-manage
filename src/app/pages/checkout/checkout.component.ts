import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardService } from '../dashboard/dashboard.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {

  products:any=[]
  constructor(
    private dashboardService:DashboardService
  ){
    this.ProductList()
  }

  ProductList(){
    this.products = this.dashboardService.cartProduct()
  }

  calculateSubtotal(){
    const subtotal = this.products.reduce((sum: any,obj: {totalPrice: any; }) => sum + obj.totalPrice, 0);
    return subtotal
  }

  Tax(){
    const Tax= this.products.reduce((sum: any,obj: {totalPrice: any; }) => sum + obj.totalPrice * 20 / 100, 0).toFixed(2);
    return Tax
  }

  Total(){
    let allTotal= this.products.reduce((sum: number,obj: {totalPrice: number; }) =>sum + obj.totalPrice + obj.totalPrice /100*20,0)+25;
    return allTotal
  }
  
}
