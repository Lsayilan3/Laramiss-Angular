import { environment } from './../../../../environments/environment';


import { Component, OnInit } from '@angular/core';
import { OrDugun } from './models/ordugun';
import { OrDugunService } from './services/ordugun.service';

@Component({
  selector: 'app-organizasyonPartiStore',
  templateUrl: './organizasyonPartiStore.component.html',
  styleUrls: ['./organizasyonPartiStore.component.scss']
})
export class OrganizasyonPartiStoreComponent implements OnInit {

  orDuguns : OrDugun [] = [];

  baseUrl :string=environment.getApiUrl;

  constructor(private  orDugunService : OrDugunService ) { }

  ngOnInit() : void {
    this.getOrDugun()
  }

  getOrDugun() {
		this.orDugunService.getOrDugunList().subscribe(data => {
			this.orDuguns = data;
		
		});
  }
  
  shopgridpost = [


    {img:'../../../../assets/img/aaımg/orr_345x431.jpg',title:'Coffee Break Hizmeti',tag:'',price:'450',discountprice:'510', detay:''},
    {img:'../../../../assets/img/aaımg/orr_345x431.jpg',title:'Coffee Break Hizmeti',tag:'',price:'450',discountprice:'510', detay:'Menü içeriği genel  ve unlu  perverliği.'},
    {img:'../../../../assets/img/aaımg/orr_345x431.jpg',title:'Coffee Break Hizmeti',tag:'',price:'450',discountprice:'510', detay:'Menü içeriği genel  ve unlu  perverliği.'},
  ];
}
