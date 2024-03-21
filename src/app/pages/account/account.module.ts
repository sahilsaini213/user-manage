import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountdashboardComponent } from './accountdashboard/accountdashboard.component';
import { AddressesComponent } from './addresses/addresses.component';
import { AccountComponent } from './account.component';
import { EditaddressComponent } from './editaddress/editaddress.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardModule } from '../dashboard/dashboard.module';
import { PasswordComponent } from './password/password.component';
import { FooterComponent } from '../footer/footer.component';
import { TopNavComponent } from '../nav/top-nav/top-nav.component';
import { NavComponent } from '../nav/nav.component';


@NgModule({
  declarations: [
    AccountComponent,
   
  
    
    
   
   
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: "", component: AccountComponent,
      children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'dashboard',  loadComponent: () => import('./accountdashboard/accountdashboard.component').then(C=> C.AccountdashboardComponent )},
        { path: 'editprofile', loadComponent: () => import('./editprofile/editprofile.component').then(C=> C.EditprofileComponent )},
        { path: 'orderhistory',loadComponent: () => import('./order-history/order-history.component').then(C=> C.OrderHistoryComponent )},
        { path: 'orderdetail', loadComponent: () => import('./orderdetail/orderdetail.component').then(C=> C.OrderdetailComponent )},
        { path: 'addresses', loadComponent: () => import('./addresses/addresses.component').then(C=> C.AddressesComponent )},
        { path: 'editaddress', loadComponent: () => import('./editaddress/editaddress.component').then(C=> C.EditaddressComponent )},
        { path: 'password',loadComponent: () => import('./password/password.component').then(C=> C.PasswordComponent )},
        { path: 'login',loadComponent: () => import('./login/login.component').then(C=> C.LoginComponent )},
      ]
    }]),
    ReactiveFormsModule,
    FormsModule,
    DashboardModule,
    FooterComponent,
    TopNavComponent,
    NavComponent
  ]
})
export class AccountModule { }
