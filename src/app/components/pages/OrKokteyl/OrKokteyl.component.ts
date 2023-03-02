import { environment } from './../../../../environments/environment';
import { OrKokteyl } from './models/orkokteyl';
import { KokteylService } from './services/kokteyl.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-OrKokteyl',
  templateUrl: './OrKokteyl.component.html',
  styleUrls: ['./OrKokteyl.component.scss']
})
export class OrKokteylComponent implements OnInit {

  orKokteyls : OrKokteyl [] = [];

  baseUrl :string=environment.getApiUrl;

  constructor(private  kokteylService  : KokteylService) { }

  ngOnInit() : void {
    this.getKokteyl()
  }

  getKokteyl() {
		this.kokteylService.getOrKokteylList().subscribe(data => {
			this.orKokteyls = data;
		
		});
  }

  
  shopgridpost = [


    {img:'../../../../assets/img/aaımg/orr_345x431.jpg',title:'Coffee Break Hizmeti',tag:'',price:'450',discountprice:'510', detay:'Menü içeriği genel  ve unlu  perverliği.'},
  ];

}
