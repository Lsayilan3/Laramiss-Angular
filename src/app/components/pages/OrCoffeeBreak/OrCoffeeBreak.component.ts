import { environment } from './../../../../environments/environment';
import { OrCoffe } from './models/orcoffe';
import { CoffeService } from './services/coffe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-OrCoffeeBreak',
  templateUrl: './OrCoffeeBreak.component.html',
  styleUrls: ['./OrCoffeeBreak.component.scss']
})
export class OrCoffeeBreakComponent implements OnInit {

  
  orCofves : OrCoffe [] = [];

  baseUrl :string=environment.getApiUrlPhoto;

  constructor(private coffeService : CoffeService) { }

  ngOnInit() : void {
    this.getCoffe()
  }

  getCoffe() {
		this.coffeService.getOrCoffeList().subscribe(data => {
			this.orCofves = data;
		
		});
  }


  
  shopgridpost = [


    {img:'../../../../assets/img/aaımg/orr_345x431.jpg',title:'Coffee Break Hizmeti',tag:'',price:'450',discountprice:'510', detay:'Menü içeriği genel  ve unlu  perverliği.'},
  ];

}
