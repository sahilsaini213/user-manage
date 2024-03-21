import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  addresses:any;

  constructor() { }

  address=[
    {
      name:'Helina gracia',
      street:'1234',
      state:'haryana',
      country:'india',
      phone:'123456789',
      email:'abc@gmail.com'
    },
   
  ]

  create(data:any){
  this.address.push(data)
  console.log(this.address)
  }

  addressList(){
    return this.address
  }

  removeAddress(i:any){
  this.address.splice(i,1)
  }


}
