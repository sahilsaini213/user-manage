import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  wishProducts:any=[]

  constructor() { }

  wishData(selectedItem:any){
    const name = selectedItem.name;
    const image = selectedItem.image;
    const price = selectedItem.price;
    const quantity = selectedItem.quantity;

    // Check if the name is already present in the array
    const existingItem = this.wishProducts.find((item: { name: any; }) => item.name === name);

    if (existingItem) {
      // array is not diuplicate
    } else {
      // If it's not a duplicate, push the new item into the array
     let productDetail={name,image,price}
      this.wishProducts.push(productDetail);
    }
  }
 
  wishTrans(){
  return this.wishProducts  
}

deleteProduct(index:any){
 this.wishProducts.splice(index,1)
}

}
