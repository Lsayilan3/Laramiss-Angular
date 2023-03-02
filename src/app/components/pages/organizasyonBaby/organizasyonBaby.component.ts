import { environment } from './../../../../environments/environment';
import { OrBaby } from './models/orbaby';
import { BabyService } from './services/baby.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organizasyonBaby',
  templateUrl: './organizasyonBaby.component.html',
  styleUrls: ['./organizasyonBaby.component.scss']
})
export class OrganizasyonBabyComponent implements OnInit {

  orBabies : OrBaby [] = [];

  baseUrl :string=environment.getApiUrl;

  constructor(private babyService : BabyService ) { }

  ngOnInit() : void {
    this.getBaby()
  }

  getBaby() {
		this.babyService.getOrBabyList().subscribe(data => {
			this.orBabies = data;
		
		});
  }
  
  shopgridpost = [


    {img:'../../../../assets/img/aaımg/orr_345x431.jpg',title:'Coffee Break Hizmeti',tag:'',price:'450',discountprice:'510', detay:'Menü içeriği genel  ve unlu  perverliği.'},
  ];

}
