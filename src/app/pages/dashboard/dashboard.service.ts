import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  
  
  products:any=[];
  constructor() { 
  }

  arrayLenght(){
  length=this.products.length
  }

  getCount(name: string): number {
    const selectedItem = this.products.find((product: { name: string; }) => product.name === name);
    return selectedItem ? selectedItem.count : 0;
  }

  createProduct(selectedItem:any){
    const name = selectedItem.name;
    const image = selectedItem.image;
    const price = selectedItem.price;
    const quantity = selectedItem.quantity;

    // Check if the name is already present in the array
    const existingItem = this.products.find((item: { name: any; }) => item.name === name);

    if (existingItem) {
      // If it's a duplicate, increase the quantity
      existingItem.quantity += 1;
      existingItem.totalPrice = existingItem.price * existingItem.quantity;
    } else {
      // If it's not a duplicate, push the new item into the array
     let productDetail={name,image,price, quantity: quantity ,totalPrice:price }
      this.products.push(productDetail);
    }
  }
  cartProduct(){
   return this.products
  }

  delete(index:any){
    this.products.splice(index,1)
  }

}
