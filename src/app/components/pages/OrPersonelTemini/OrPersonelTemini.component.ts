import { environment } from './../../../../environments/environment';
import { PersonelTeminiService } from './services/personelTemini.service';
import { OrPersonelTemini } from './models/orpersoneltemini';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-OrPersonelTemini',
  templateUrl: './OrPersonelTemini.component.html',
  styleUrls: ['./OrPersonelTemini.component.scss']
})
export class OrPersonelTeminiComponent implements OnInit {

  orPersonelTeminis : OrPersonelTemini [] = [];

  baseUrl :string=environment.getApiUrl;

  constructor(private  personelTeminiService  :PersonelTeminiService ) { }

  ngOnInit() : void {
    this.getPersonelTemini()
  }

  getPersonelTemini() {
		this.personelTeminiService.getOrPersonelTeminiList().subscribe(data => {
			this.orPersonelTeminis = data;
		
		});
  }

  
  shopgridpost = [


    {img:'../../../../assets/img/aaımg/orr_345x431.jpg',title:'Coffee Break Hizmeti',tag:'',price:'450',discountprice:'510', detay:'Menü içeriği genel  ve unlu  perverliği.'},
  ];

}
