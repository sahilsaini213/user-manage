import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sidebarmenu',
  standalone: true,
  imports:  [CommonModule, NgbAccordionModule],
  templateUrl: './sidebarmenu.component.html',
  styleUrl: './sidebarmenu.component.scss'
})
export class SidebarmenuComponent {

products=[
{
  id:'categeory',
  name :'Categeory',
  options:[
    {Id:'1', name:'All Product', arrow:'bi bi-chevron-compact-left'},
    {Id:'2', name:'Instruments',arrow:'bi bi-chevron-compact-left'},
    {Id:'3', name:'Power Tools', class:'fw-bold'},
    {Id:'4', name:'Drills & Mixers', count:'57', class:'ps-2'},
    {Id:'5', name:'Cordless Screwdrivers', count:'15', class:'ps-2'},
    {Id:'6', name:'Screwdrivers', count:'126', class:'ps-2'},
    {Id:'7', name:'Wrenches', count:'12', class:'ps-2'},
    {Id:'8', name:'Grinding Machines', count:'78', class:'ps-2'},
    {Id:'9', name:'Milling Cutters', count:'15', class:'ps-2'},
    {Id:'10', name:'Electric Spray Guns', count:'15', class:'ps-2'},
  ]
},
{
  Id:'Price',
  name :'Price',
  options:[
    {Id:'1',name:'Price',class:"price"}
  ]
},

{
  id:'brand',
  name :'Brand',
  options:[
    {Id:'2', name:'Brandix',class:'check',count:'15'},
    {Id:'2', name:'Zosch',class:'check',count:'15'},
    {Id:'2', name:'Wakita',class:'check',count:'15'},
    {Id:'2', name:'WeVALT',class:'check',count:'15'},
    {Id:'2', name:'Hammer',class:'check',count:'15'},
    {Id:'2', name:'Mitasia',class:'check',count:'15'},
    {Id:'2', name:'Metaggo',class:'check',count:'15'},
  ]
},

{
  id:'with_discount',
  name :'With Discount',
  options:[
    {Id:'1', name:'Any',class:'radio',count:'5'},
    {Id:'2', name:'Yes',class:'radio',count:'4'},
    {Id:'3', name:'No',class:'radio',count:'1'},
  ]
},







// {
//   Id:'5',
//   name :'Color',
//   options:[{Id:'5', name:'All Product5',}]
// }
]}
