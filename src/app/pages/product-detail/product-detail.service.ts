import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  constructor() { }

  product:any={

  }

  getObject(product:any){
   this.product=product
  }

  printObject(){
   return this.product
  }

}
