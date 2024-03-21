import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-arrivals',
  standalone:true,
  imports:[CommonModule,NgbRatingModule],
  templateUrl: './new-arrivals.component.html',
  styleUrl: './new-arrivals.component.scss'
})
export class NewArrivalsComponent {
active:string=""


  constructor(config: NgbRatingConfig) {
		config.max = 5;
		config.readonly = false;
	}

  rating = 6;

products=[
  {
    Image:'https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/products/product-1.jpg',
    title:'Electric Planer Brandix KL370090G 300 Watts',
    price:' $749.00',
    rating:3
  },
  {
    Image:'https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/products/product-3.jpg',
    title:'Drill Screwdriver Brandix ALX7054 200 Watts',
    price:' $749.00',
    rating:3
  },
  {
    Image:'https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/products/product-5.jpg',
    title:'Brandix Router Power Tool 2017ERXPK',
    price:' $749.00',
    rating:3
  },
  {
    Image:'https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/products/product-2.jpg',
    title:'Undefined Tool IRadix DPS3000SY 2700 Watts',
    price:' $749.00',
    rating:3
  },
  {
    Image:'https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/products/product-4.jpg',
    title:'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
    price:' $749.00',
    rating:3
  },
  {
    Image:'https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/products/product-6.jpg',
    title:'Brandix Drilling Machine DM2019KW4 4kW',
    price:' $749.00',
    rating:3
  },
  {
    Image:'https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/products/product-7.jpg',
    title:'Brandix Pliers',
    price:' $749.00',
    rating:3
  },
  {
    Image:'https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/products/product-8.jpg',
    title:'Water Hose 40cm',
    price:' $749.00',
    rating:3
  }, 
]

}
