import { environment } from './../../../../environments/environment';
import { OrCatering } from './models/orcatering';
import { CateringService } from './services/catering.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-OrCatering',
  templateUrl: './OrCatering.component.html',
  styleUrls: ['./OrCatering.component.scss']
})
export class OrCateringComponent implements OnInit {

  
  orCaterings : OrCatering [] = [];

  baseUrl :string=environment.getApiUrlPhoto;

  constructor(private cateringService : CateringService) { }

  ngOnInit() : void {
    this.getCatering()
  }

  getCatering() {
		this.cateringService.getOrCateringList().subscribe(data => {
			this.orCaterings = data;
		
		});
  }

  
  shopgridpost = [


    {img:'../../../../assets/img/aaımg/orr_345x431.jpg',title:'Coffee Break Hizmeti',tag:'',price:'450',discountprice:'510', detay:'Menü içeriği genel  ve unlu  perverliği.'},
  ];

}
