import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'popular-categories',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './popular-categories.component.html',
  styleUrl: './popular-categories.component.scss'
})
export class PopularCategoriesComponent {

  products1=[
    {
      image:"https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/categories/category-1.jpg",
      name:"Power Tools",
      item:['Drills & Mixers', 'Cordless Screwdrivers' ,'Screwdrivers',  'Grinding Machines' ],
      
    },
    {
      image:"https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/categories/category-2.jpg",
      name:"Hand Tools",
      item:['Tool Kits','Hammers','Spanners','Handsaws','Paint Tools'],
      
    },
    {
      image:"https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/categories/category-3.jpg",
      name:"Machine Tools",
      item:['Lathes','Milling Machines','Grinding Machines','Sharpening Machines'],
      
    },
    {
      image:"https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/categories/category-4.jpg",
      name:"Power Machinery",
      item:['Generators','Compressors','Winches','Plasma Cutting','Electric Motors'],
      badge:"SALE"
    },
    {
      image:"https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/categories/category-5.jpg",
      name:"Measurement",
      item:['Tape Measure','Theodolites','Thermal Imagers','Calipers','Levels'],
      
    },
    {
      image:"https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/categories/category-6.jpg",
      name:"Clothes and PPE",
      item:['Winter Workwear','Summer Workwear','Helmets','Belts and Bags','Work Shoes' ],
      
    },
  
  ]
}
