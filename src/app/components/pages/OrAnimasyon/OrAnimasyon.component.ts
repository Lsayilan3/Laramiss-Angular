import { environment } from './../../../../environments/environment';
import { AnimasyoneService } from './services/animasyone.service';
import { OrAnimasyone } from './models/oranimasyone';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-OrAnimasyon',
  templateUrl: './OrAnimasyon.component.html',
  styleUrls: ['./OrAnimasyon.component.scss']
})
export class OrAnimasyonComponent implements OnInit {

  orAnimasyones:OrAnimasyone[] = [];

  baseUrl :string=environment.getApiUrl;

  constructor(private animasyoneService : AnimasyoneService) { }

  ngOnInit() : void {
    this.getAnimasyone()
  }

  getAnimasyone() {
		this.animasyoneService.getOrAnimasyoneList().subscribe(data => {
			this.orAnimasyones = data;
		
		});
  }
  
  shopgridpost = [


    {img:'../../../../assets/img/aaımg/orr_345x431.jpg',title:'Coffee Break Hizmeti',tag:'',price:'450',discountprice:'510', detay:'Menü içeriği genel  ve unlu  perverliği.'},
  ];

}
