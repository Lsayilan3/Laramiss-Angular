import { environment } from './../../../../environments/environment';
import { OrPartiEglence } from './models/orpartieglence';
import { PartieglenceService } from './services/partieglence.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-OrPartiEglence',
  templateUrl: './OrPartiEglence.component.html',
  styleUrls: ['./OrPartiEglence.component.scss']
})
export class OrPartiEglenceComponent implements OnInit {

  orPartiEglences : OrPartiEglence [] = [];

  baseUrl :string=environment.getApiUrl;

  constructor(private  partieglenceService  : PartieglenceService) { }

  ngOnInit() : void {
    this.getPartiEğlence()
  }

  getPartiEğlence() {
		this.partieglenceService.getOrPartiEglenceList().subscribe(data => {
			this.orPartiEglences = data;
		
		});
  }

  
  shopgridpost = [


    {img:'../../../../assets/img/aaımg/orr_345x431.jpg',title:'Coffee Break Hizmeti',tag:'',price:'450',discountprice:'510', detay:'Menü içeriği genel  ve unlu  perverliği.'},
  ];

}
