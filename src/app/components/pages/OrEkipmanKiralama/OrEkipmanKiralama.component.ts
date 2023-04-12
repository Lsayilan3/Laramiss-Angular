import { environment } from './../../../../environments/environment';
import { OrEkipman } from './models/orekipman';
import { EkipmanService } from './services/ekipman.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-OrEkipmanKiralama',
  templateUrl: './OrEkipmanKiralama.component.html',
  styleUrls: ['./OrEkipmanKiralama.component.scss']
})
export class OrEkipmanKiralamaComponent implements OnInit {

  orEkipmans : OrEkipman [] = [];

  baseUrl :string=environment.getApiUrlPhoto;

  constructor(private ekipmanService : EkipmanService) { }

  ngOnInit() : void {
    this.getEkipman()
  }

  getEkipman() {
		this.ekipmanService.getOrEkipmanList().subscribe(data => {
			this.orEkipmans = data;
		
		});
  }
  
  shopgridpost = [


    {img:'../../../../assets/img/aaımg/orr_345x431.jpg',title:'Coffee Break Hizmeti',tag:'',price:'450',discountprice:'510', detay:'Menü içeriği genel  ve unlu  perverliği.'},
  ];

}
