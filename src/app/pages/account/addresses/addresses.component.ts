import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  standalone: true,
  imports:[CommonModule],
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrl: './addresses.component.scss'
})
export class AddressesComponent {
  address:any=[]

  constructor(private dataService:AccountService){
    this.accountList()
  }


  accountList(){
    this.address=this.dataService.addressList()
  }

  removeAddress(i:any){
    this.dataService.removeAddress(i)
  }

}