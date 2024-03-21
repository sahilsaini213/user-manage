import { Component } from '@angular/core';
import { WishListService } from './wish-list.service';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbToastConfig, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { timeInterval } from 'rxjs';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';
import { DashboardModule } from '../dashboard/dashboard.module';
import { DashboardService } from '../dashboard/dashboard.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [CommonModule, NgbModule, NgbToastModule,RouterModule],
  providers: [NgbToastConfig],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss'
})
export class WishListComponent {
 wishProduct:any=[]
 show = false;

constructor(
  private wishList:WishListService,
  private toastConfig : NgbToastConfig,
  private dashboardService:DashboardService
  ){
  this.wishTrans()
}

wishTrans(){
  this.wishProduct=this.wishList.wishTrans()
}
deleteProduct(index:any){
  this.wishList.deleteProduct(index)
}


showToast(product:any) {
  let wishproduct=this.dashboardService.createProduct(product)

  this.show = true
  setTimeout(() => {
    this.show = false;
  },5000)
}

delete(i:any){
 this.wishList.deleteProduct(i)
}
}
