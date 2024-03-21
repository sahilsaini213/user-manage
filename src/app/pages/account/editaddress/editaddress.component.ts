import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AccountService } from '../account.service';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'app-editaddress',
  templateUrl: './editaddress.component.html',
  styleUrl: './editaddress.component.scss',
  standalone: true,
  imports:[CommonModule,ReactiveFormsModule],
})

export class EditaddressComponent {
  constructor(private dataService:AccountService){}

  profileForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    company: new FormControl(''),
    country: new FormControl(''),
    street: new FormControl(''),
    apartment: new FormControl(''),
    town: new FormControl(''),
    state: new FormControl(''),
    postcode: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
  });

  onSubmit(){
    let data=this.profileForm.value;
    let req=this.dataService.create(data)
    console.log(data)

  }
}
