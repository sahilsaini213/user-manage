import { Component } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  products:any=[];
  constructor(private dashBoardService:DashboardService){
    this.productServe();
  }

productServe(){
  this.products=this.dashBoardService.cartProduct()
  console.log(this.products)
}

delete(i:any){
  this.dashBoardService.delete(i)
}

calculateSubtotal(){
  const subtotal = this.products.reduce((sum: any,obj: {totalPrice: any; }) => sum + obj.totalPrice, 0);
  return subtotal
}

Tax(){
  const Tax = this.products.reduce((sum: any,obj: {totalPrice: any; }) => sum + obj.totalPrice*20/100, 0).toFixed(2);
  return Tax
}

Total(){
  const allTotal = this.products.reduce((sum: any,obj: {totalPrice: any; }) => sum + obj.totalPrice + (obj.totalPrice*20/100),0)+25;
  allTotal.toFixed(2)
  return allTotal
}

}
