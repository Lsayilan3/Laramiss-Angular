import { environment } from './../../../../environments/environment';
import { OrSunnet } from './models/orsunnet';
import { SunnetService } from './services/sunnet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organizasyonSunnet',
  templateUrl: './organizasyonSunnet.component.html',
  styleUrls: ['./organizasyonSunnet.component.scss']
})
export class OrganizasyonSunnetComponent implements OnInit {

  orSunnets : OrSunnet [] = [];

  baseUrl :string=environment.getApiUrlPhoto;

  constructor(private  sunnetService  : SunnetService) { }

  ngOnInit() : void {
    this.getSunnet()
  }

  getSunnet() {
		this.sunnetService.getOrSunnetList().subscribe(data => {
			this.orSunnets = data;
		
		});
  }

  
  shopgridpost = [


    {img:'../../../../assets/img/aaımg/orr_345x431.jpg',title:'Coffee Break Hizmeti',tag:'',price:'450',discountprice:'510', detay:'Menü içeriği genel  ve unlu  perverliği.'},
  ];

}
