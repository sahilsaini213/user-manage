import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComparisonService {

  constructor() { }

  compareProduct:any=[];


  createProduct(product:any){
  this.compareProduct.push(product)
}

  passProduct(){
    return this.compareProduct
  }

  deleteproduct(indx:any){
   return this.compareProduct.splice(indx,1)
  }

}
