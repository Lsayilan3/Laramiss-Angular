import { environment } from './../../../../environments/environment';
import { OrKinaa } from './models/orkinaa';
import { KinaaService } from './services/kinaa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organizasyonKına',
  templateUrl: './organizasyonKına.component.html',
  styleUrls: ['./organizasyonKına.component.scss']
})
export class OrganizasyonKınaComponent implements OnInit {

  
  orKinaas : OrKinaa [] = [];

  baseUrl :string=environment.getApiUrlPhoto;

  constructor(private  kinaaService : KinaaService ) { }

  ngOnInit() : void {
    this.getKinaa()
  }

  getKinaa() {
		this.kinaaService.getOrKinaaList().subscribe(data => {
			this.orKinaas = data;
		
		});
  }
  
  shopgridpost = [


    {img:'../../../../assets/img/aaımg/orr_345x431.jpg',title:'Coffee Break Hizmeti',tag:'',price:'450',discountprice:'510', detay:'Menü içeriği genel  ve unlu  perverliği.'},
  ];

}
