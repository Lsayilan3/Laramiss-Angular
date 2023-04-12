import { environment } from './../../../../environments/environment';
import { OrSokakLezzeti } from './models/orsokaklezzeti';
import { SokakLezzetiService } from './services/sokakLezzeti.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-OrSokakLezzeti',
  templateUrl: './OrSokakLezzeti.component.html',
  styleUrls: ['./OrSokakLezzeti.component.scss']
})
export class OrSokakLezzetiComponent implements OnInit {
  sokakLezzetis : OrSokakLezzeti [] = [];

  baseUrl :string=environment.getApiUrlPhoto;

  constructor(private  sokakLezzetiService  :SokakLezzetiService ) { }

  ngOnInit() : void {
    this.getSokakLezzeti()
  }

  getSokakLezzeti() {
		this.sokakLezzetiService.getOrSokakLezzetiList().subscribe(data => {
			this.sokakLezzetis = data;
		
		});
  }

  
  shopgridpost = [


    {img:'../../../../assets/img/aaımg/orr_345x431.jpg',title:'Coffee Break Hizmeti',tag:'',price:'450',discountprice:'510', detay:'Menü içeriği genel  ve unlu  perverliği.'},
  ];

}
