import { Component } from '@angular/core';
import { ComparisonService } from './comparison.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-comparison',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './comparison.component.html',
  styleUrl: './comparison.component.scss'
})
export class ComparisonComponent {


  compareproduct:any=[]
 
  constructor(
    private compareService:ComparisonService
  ){
    this.addProduct()
  }

  addProduct(){
   this.compareproduct=this.compareService.passProduct()
  }

  deleteProduct(indx:any){
    this.compareService.deleteproduct(indx)
  }

}
