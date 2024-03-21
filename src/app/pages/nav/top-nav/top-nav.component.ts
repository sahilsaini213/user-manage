import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-top-nav',
  standalone:true,
  imports:[CommonModule,RouterModule],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss'
})
export class TopNavComponent {

  active:string=''


  PowerTool = [
    "Engravers",
    "Wrenches",
    "Wall Chaser",
    "Pneumatic Tools"
  ];
  MechanicalTool = [
    "Thread Cutting",
    "Chip Blowers",
    "Sharpening Machines",
    "Pipe Cutters",
    "Slotting machines",
    "Lathes",
  ];

  Currencys = [
    {
      label: 'Euro'
    },
    {
      label: 'Pond Sterling'
    },
    {
      label: 'US dollar'
    },
    {
      label: 'Russian Ruble'
    },
  ];

  Languages = [
    {
      label: 'English'
    },
    {
      label: 'Franch'
    },
    {
      label: 'Germany'
    },
    {
      label: 'Russian'
    },
    {
      label: 'Italian'
    },
    {
      label: 'Hindi'
    },
  ];

  Account = [
    {
      label: 'Dashboard',
      link: '../account/dashboard'
    },
    {
      label: 'Edit Profile',
      link: '../account/editprofile'
    },
    {
      label: 'Order History',
      link: '../account/orderhistory'
    },
    {
      label: 'Addresess',
      link: '../account/addresses'
    },
    {
      label: 'Pasword',
      link: '../account/password'
    },
    {
      label: 'Logout',
      link:''
    }
  ];
}
