import { environment } from './../../../../environments/environment';
import { OrNisan } from './models/ornisan';
import { NisanService } from './services/nisan.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organizasyonNisan',
  templateUrl: './organizasyonNisan.component.html',
  styleUrls: ['./organizasyonNisan.component.scss']
})
export class OrganizasyonNisanComponent implements OnInit {

  orNisans : OrNisan [] = [];

  baseUrl :string=environment.getApiUrl;

  constructor(private  nisanService : NisanService ) { }

  ngOnInit() : void {
    this.getNisan()
  }

  getNisan() {
		this.nisanService.getNisanList().subscribe(data => {
			this.orNisans = data;
		
		});
  }
  

  
  shopgridpost = [


    {img:'../../../../assets/img/aaımg/orr_345x431.jpg',title:'Coffee Break Hizmeti',tag:'',price:'450',discountprice:'510', detay:'Menü içeriği genel  ve unlu  perverliği.'},
  ];

}
