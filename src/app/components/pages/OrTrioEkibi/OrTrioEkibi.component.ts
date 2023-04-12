import { environment } from './../../../../environments/environment';
import { OrTrioEkibi } from './models/ortrioekibi';
import { TrioEkibiService } from './services/trioEkibi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-OrTrioEkibi',
  templateUrl: './OrTrioEkibi.component.html',
  styleUrls: ['./OrTrioEkibi.component.scss']
})
export class OrTrioEkibiComponent implements OnInit {

  orTrioEkibis : OrTrioEkibi [] = [];

  baseUrl :string=environment.getApiUrlPhoto;

  constructor(private  trioEkibiService  :TrioEkibiService ) { }

  ngOnInit() : void {
    this.getTiroEkibi()
  }

  getTiroEkibi() {
		this.trioEkibiService.getOrTrioEkibiList().subscribe(data => {
			this.orTrioEkibis = data;
		
		});
  }
  
  shopgridpost = [


    {img:'../../../../assets/img/aaımg/orr_345x431.jpg',title:'Coffee Break Hizmeti',tag:'',price:'450',discountprice:'510', detay:'Menü içeriği genel  ve unlu  perverliği.'},
  ];

}
