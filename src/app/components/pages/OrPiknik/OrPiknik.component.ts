import { environment } from './../../../../environments/environment';
import { OrPiknik } from './models/orpiknik';
import { PiknikService } from './services/piknik.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-OrPiknik',
  templateUrl: './OrPiknik.component.html',
  styleUrls: ['./OrPiknik.component.scss']
})
export class OrPiknikComponent implements OnInit {

  orPikniks : OrPiknik [] = [];

  baseUrl :string=environment.getApiUrl;

  constructor(private  piknikService  :PiknikService ) { }

  ngOnInit() : void {
    this.getPiknik()
  }

  getPiknik() {
		this.piknikService.getOrPiknikList().subscribe(data => {
			this.orPikniks = data;
		
		});
  }
  
  shopgridpost = [


    {img:'../../../../assets/img/aaımg/orr_345x431.jpg',title:'Coffee Break Hizmeti',tag:'',price:'450',discountprice:'510', detay:'Menü içeriği genel  ve unlu  perverliği.'},
  ];

}
