import { Component, TemplateRef } from '@angular/core';
import { DashboardModule } from '../dashboard/dashboard.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { NgbCollapseModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { Options } from '@popperjs/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { WishListService } from '../wish-list/wish-list.service';

@Component({
  selector: 'nav-bar',
  standalone:true,
  imports:[CommonModule,RouterModule,CartComponent,NgbCollapseModule,NgbPopoverModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  isCollapsed = false;
  active:string=''
  products:any=[];
  wishProducts=[];

  constructor(
    private dashboardService:DashboardService,
    private wishList:WishListService
    ){
    this.cartArray()
    this.wishArray()
  }

  navbar={
    content1:"Home",
    content2:"Megamenu",
    content3:"Shop",
    content4:"Account",
    content5:"Blog",
    content6:"pages"
  }

  allCategories=[
        {
      heading:'Power Tool',
      marker:'>',
      subCategories:[
          {
            label:'Power Tool',
            options:["Engravers", "Drills", "Wrenches", "Plumbing", "Wall Chaser", "Pneumatic Tools",
            "Milling Cutters",]
          },
          {
            label:'Hand Tool',
            options:['Screwdrivers','Handsaws','Knives','Axes','Multitools','Paint Tools']
          },
          {
             label:'Machine Tools',
             options:['Thread Cutting','Chip Blowers','Sharpening Machines','Pipe Cutters','Slotting machines','Lathes']
          },
          {
            label:'Instruments',
             options:['Welding Equipment','Power Tools','Hand Tools','Measuring Tool']
          },
          {
            options:['Workbenches','Presses','Spray Guns','Riveters']
          },
          {
            label:'Instruments',
            options:['Welding Equipment','Power Tools','Hand Tools','Measuring Tool'] 
          }
      ]
  },
  {
    heading:'Hand Tool',
    marker:'>',
    subCategories:[
      {
        label:'Hand Tool',
        options:['Screwdrivers','Handsaws','Knives','Axes','Multitools','Paint Tools']
      },
      {
        label:'Machine Tool',
        options:['Thread Cutting','Chip Blowers','Sharpening Machines','Pipe Cutters','Slotting machines','Lathes']
      },
      {
        label:'Instruments',
        options:['Welding Equipment','Power Tools','Hand Tools','Measuring Tool']
       },
       {
        label:'Garden Equipment',
        options:['Motor Pumps','Chainsaws','Electric Saws','Brush Cutters']
      },
    ]
  },
    {
      heading:'Machine Tool',
      marker:'>',
      subCategories:[
        {
          label:'Hand Tool',
          options:['Screwdrivers','Handsaws','Knives','Axes','Multitools','Paint Tools']
        },
        {
          label:'Machine Tool',
          options:['Thread Cutting','Chip Blowers','Sharpening Machines','Pipe Cutters','Slotting machines','Lathes']
        },
        {
          label:'Instruments',
          options:['Welding Equipment','Power Tools','Hand Tools','Measuring Tool']
        },
         {
          label:'Garden Equipment',
          options:['Motor Pumps','Chainsaws','Electric Saws','Brush Cutters']
        },
      ]
    },
    {
     heading: 'Building supplies',
     marker:'>',
     subCategories:[
      {
        label:'Hand Tool',
        options:['Screwdrivers','Handsaws','Knives','Axes','Multitools','Paint Tools']
      },
      {
        label:'Machine Tool',
        options:['Thread Cutting','Chip Blowers','Sharpening Machines','Pipe Cutters','Slotting machines','Lathes']
      },
      {
        label:'Instruments',
        options:['Welding Equipment','Power Tools','Hand Tools','Measuring Tool']
      },
      {
        label:'Garden Equipment',
        options:['Motor Pumps','Chainsaws','Electric Saws','Brush Cutters']
      },
    ]
    },
    {
      heading:'Electrical',
      marker:'>',
      subCategories:
      [
        {
          label:'Soldering Equipment',
          options:['Light Bulbs','Batteries','Light Fixtures','Warm Floor','Generators','UPS']
        },
      ]
    },
    {
    heading:'Power Machinery'
    },
    {
    heading:'Measurement'
    },
    {
    heading:'Cloth & PPT'
    },
    {
    heading:'Plumbing'
    },
    {
    heading:'Storage & Organization'
    },
    {
    heading:'Welding & soldering'
    },
  ];


  // ofcanvas
  Home=[
    {
    Label:"Home 1",
    },
    {
    Label:"Home 2",
    },
    {
    Label:"offset",
    },
  ];

  categories=[
    {
    label:"Power Tool",
    subcategories:['Engravers','Wrenches','Wall Chaser','Pneumatic Tools']
    },
    {
    label:'Mechanical Tool',
    subcategories:['Thread Cutting','Chip Blowers','Sharpening Machines','Pipe Cutters','Slotting machines','Lathes']
    }
  ]

  shops=[
    {
      label:'Shop Grid'
    },
    {
      label:'shop List'
    },
    {
      label:'Shop Right Sidebar'
    },
    {
      label:'Products'
    },
    {
      label:'Cart',
      link:'../shopping-cart'
    },
    {
      label:'Checkout',
      link:'../checkout'
    },
    {
      label:'Order Success',
      link:'../success'
    },
    {
      label:'Wishlist',
      link:'../wish-list'
    },
    {
      label:'Compare',
      link:'../comparison'
    },
    {
    label:'Track Order'
    }

  ]

  Account=[
    {
      label:'Login',
      link:'../login'
    },
    {
      label:'Dashboard',
      link:'../account/dashboard'
    },
    {
      label:'Edit Profile',
      link:'../account/editprofile'
    },
    {
      label:'Order History',
      link:'../account/orderhistory'
    },
    {
      label:'Order Detail',
      link:'../account/orderdetail'
    },
    {
      label:'Address Book',
      link:'../account/addresses'
    },
    {
      label:'Edit Address',
      link:'../account/editaddress'
    },
    {
      label:'Change Password',
      link:'../account/password'
    },
  ]

  Blogs=[
    {
      label:'Blog Classic'
    },
    {
      label:'Blog Grid'
    },
    {
      label:'Blog List'
    },
    {
      label:'Blog Left Slidebar'
    },
    {
      label:'Post Page'
    },
    {
      label:'Post Without Slidebar'
    },
  ]

  pages=[
    {
      label:'About Us'
    },
    {
      label:'Contact Us'
    },
    {
      label:'Contact us Alt'
    },
    {
      label:'404'
    },
    {
      label:'Terms & Condition'
    },
    {
      label:'FAQ'
    },
    {
      label:'Component'
    },
    {
      label:'Typography'
    },
  ]
  
  Currency=[
    {
      label:'Euro'
    },
    {
      label:'Pond Sterling'
    },
    {
      label:'US dollar'
    },
    {
      label:'Russian Ruble'
    },
  ]

  Languages=[
    {
      label:'English'
    },
    {
      label:'Franch'
    },
    {
      label:'Germany'
    },
    {
      label:'Russian'
    },
    {
      label:'Italian'
    },
    {
      label:'Hindi'
    },
  ]


  megamenu=[
    {
      heading:'Power Tool',
      subMenu:["Engravers", "Drills", "Wrenches", "Plumbing", "Wall Chaser", "Pneumatic Tools"]
    },
    {
      heading:'Hand Tool',
      subMenu:['Screwdrivers','Handsaws','Knives','Axes','Multitools','Paint Tools']
    },
    {
      heading:'Machine Tool',
      subMenu:['Thread Cutting','Chip Blowers','Sharpening Machines','Pipe Cutters','Slotting machines','Lathes']
    },
    {
      heading:'Garden Equipment',
      subMenu:['Motor Pumps','Chainsaws','Electric Saws','Brush Cutters']
    },
  ]

  Currencys=[
    {
      label:'Euro'
    },
    {
      label:'Pond Sterling'
    },
    {
      label:'US dollar'
    },
    {
      label:'Russian Ruble'
    },
  ]

cartArray(){
  this.products=this.dashboardService.cartProduct()
}

wishArray(){
 this.wishProducts=this.wishList.wishTrans()
}

}
