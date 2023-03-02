import { environment } from './../../../../environments/environment';
import { OrSirketEglence } from './models/orsirketeglence';
import { SirketEglenceService } from './services/sirketEglence.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-OrSirketEglence',
  templateUrl: './OrSirketEglence.component.html',
  styleUrls: ['./OrSirketEglence.component.scss']
})
export class OrSirketEglenceComponent implements OnInit {

  orSirketEglences : OrSirketEglence [] = [];
  baseUrl :string=environment.getApiUrl;

  constructor(private  sirketEglenceService  :SirketEglenceService ) { }

  ngOnInit() : void {
    this.getSirketEglence()
  }

  getSirketEglence() {
		this.sirketEglenceService.getOrSirketEglenceList().subscribe(data => {
			this.orSirketEglences = data;
		
		});
  }

  
  shopgridpost = [


    {img:'../../../../assets/img/aaımg/orr_345x431.jpg',title:'Coffee Break Hizmeti',tag:'',price:'450',discountprice:'510', detay:'Menü içeriği genel  ve unlu  perverliği.'},
  ];
}
