import { CommonModule } from '@angular/common';
import { Component, TemplateRef,inject,ViewEncapsulation } from '@angular/core';
import { NgbOffcanvas, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarmenuComponent } from './sidebarmenu/sidebarmenu.component';

@Component({
  selector: 'app-shop',
  standalone:true,
  imports:[CommonModule,NgbRatingModule, SidebarmenuComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
  encapsulation: ViewEncapsulation.None,
  // providers: [NgbRatingConfig],
})
export class ShopComponent {
  private offcanvasService = inject(NgbOffcanvas)
step1:boolean=true;
step2:boolean=false;
step3:boolean=false;
active:string='';


  constructor(
    config: NgbRatingConfig,
    ) {
		config.max = 5;
		config.readonly = false;
	}

  rating = 6;

  products=[
    {
     image:"https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/products/product-1.jpg",
     name:"Electric Planer Brandix KL370090G 300 Watts",
     price:"$749.00",
     specification:[ 'Speed:750 RPM' , 'Power Source:Cordless-Electric' , 'Battery Cell Type: Lithium' , ' Voltage:20 Volts', ' Battery Capacity:  2 Ah'],
     rating:2
    },
    {
      image:"https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/products/product-2.jpg",
      name:"Undefined Tool IRadix DPS3000SY 2700 Watts",
      price:"$1,019.00",
      rating:2,
      specification:['Speed:750 RPM' , 'Power Source:Cordless-Electric' , 'Battery Cell Type: Lithium' , ' Voltage:20 Volts', ' Battery Capacity:  2 Ah']
    },
    {
      image:"https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/products/product-3.jpg",
      name:"Drill Screwdriver Brandix ALX7054 200 Watts",
      price:"$850.00",
      rating:5,
      specification:['Speed:750 RPM' , 'Power Source:Cordless-Electric' , 'Battery Cell Type: Lithium' , ' Voltage:20 Volts', ' Battery Capacity:  2 Ah']
    },
    {
      image:"https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/products/product-4.jpg",
      name:"Drill Series 3 Brandix KSR4590PQS 1500 Watts",
      price:"$949.00",
      rating:5,
      specification:['Speed:750 RPM' , 'Power Source:Cordless-Electric' , 'Battery Cell Type: Lithium' , ' Voltage:20 Volts', ' Battery Capacity:  2 Ah']
    },
    {
      image:"https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/products/product-5.jpg",
      name:"Brandix Router Power Tool 2017ERXPK",
      price:"$1,700.00",
      rating:4,
      specification:['Speed:750 RPM' , 'Power Source:Cordless-Electric' , 'Battery Cell Type: Lithium' , ' Voltage:20 Volts', ' Battery Capacity:  2 Ah']
    },
    {
      image:"https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/products/product-6.jpg",
      name:"Brandix Drilling Machine DM2019KW4 4kW",
      price:"$3,199.00",
      rating:4,
      specification:['Speed:750 RPM' , 'Power Source:Cordless-Electric' , 'Battery Cell Type: Lithium' , ' Voltage:20 Volts', ' Battery Capacity:  2 Ah']
    },
    {
      image:"https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/products/product-7.jpg",
      name:"Brandix Pliers",
      price:"$24.00",
      rating:5,
      specification:['Speed:750 RPM' , 'Power Source:Cordless-Electric' , 'Battery Cell Type: Lithium' , ' Voltage:20 Volts', ' Battery Capacity:  2 Ah']
    },
    {
      image:"https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/products/product-8.jpg",
      name:"Water Hose 40cm",
      price:"$15.00",
      rating:2,
      specification:['Speed:750 RPM' , 'Power Source:Cordless-Electric' , 'Battery Cell Type: Lithium' , ' Voltage:20 Volts', ' Battery Capacity:  2 Ah']
    },
    {
      image:"https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/products/product-9.jpg",
      name:"Spanner Wrench",
      price:"$19.00",
      rating:2,
      specification:['Speed:750 RPM' , 'Power Source:Cordless-Electric' , 'Battery Cell Type: Lithium' , ' Voltage:20 Volts', ' Battery Capacity:  2 Ah']
     },
     {
       image:"https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/products/product-10.jpg",
       name:"Water Tap",
       price:"$15.00",
       rating:4,
       specification:['Speed:750 RPM' , 'Power Source:Cordless-Electric' , 'Battery Cell Type: Lithium' , ' Voltage:20 Volts', ' Battery Capacity:  2 Ah']
     },
     {
       image:"https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/products/product-11.jpg",
       name:"Hand Tool Kit",
       price:"$149.00",
       rating:4,
       specification:['Speed:750 RPM' , 'Power Source:Cordless-Electric' , 'Battery Cell Type: Lithium' , ' Voltage:20 Volts', ' Battery Capacity:  2 Ah']
     },
     {
       image:"https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/products/product-12.jpg",
       name:"Ash's Chainsaw 3.5kW",
       price:"$666.99",
       rating:5,
       specification:['Speed:750 RPM' , 'Power Source:Cordless-Electric' , 'Battery Cell Type: Lithium' , ' Voltage:20 Volts', ' Battery Capacity:  2 Ah']
     },
     {
      image:"https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/products/product-13.jpg",
      name:"Brandix Angle Grinder KZX3890PQW",
      price:"$649.00",
      rating:5,
      specification:['Speed:750 RPM' , 'Power Source:Cordless-Electric' , 'Battery Cell Type: Lithium' , ' Voltage:20 Volts', ' Battery Capacity:  2 Ah']
     },
     {
      image:"https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/products/product-14.jpg",
      name:"Brandix Air Compressor DELTAKX500",
      price:"$1,800.00",
      rating:3,
      specification:['Speed:750 RPM' , 'Power Source:Cordless-Electric' , 'Battery Cell Type: Lithium' , ' Voltage:20 Volts', ' Battery Capacity:  2 Ah']
    },
   
     {
       image:"https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/products/product-15.jpg",
       name:"Brandix Air Compressor DELTAKX500",
       price:"$1,800.00",
       rating:3,
       specification:['Speed:750 RPM' , 'Power Source:Cordless-Electric' , 'Battery Cell Type: Lithium' , ' Voltage:20 Volts', ' Battery Capacity:  2 Ah']
     },
    
     {
       image:"https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/assets/images/products/product-16.jpg",
       name:"Brandix Screwdriver SCREW1500ACC",
       price:"$1,499.00",
       rating:1,
       specification:['Speed:750 RPM' , 'Power Source:Cordless-Electric' , 'Battery Cell Type: Lithium' , ' Voltage:20 Volts', ' Battery Capacity:  2 Ah']
     }
    ]


    changeLayout(value:string){
    if (value==="step2"){
      this.step1=false;
      this.step2 = true;
      this.step3 = false;
    }
    else if (value==="step3"){
      this.step1=false;
      this.step2 = false;
      this.step3 = true;
    }
    else{
      this.step1=true;
      this.step2 = false;
      this.step3 = false;
    }

    }

    openNoBackdrop(content: TemplateRef<any>) {
      this.offcanvasService.open(content, { backdrop: false });
    }

}