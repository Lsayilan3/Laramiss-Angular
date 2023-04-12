import { environment } from './../../../../environments/environment';
import { cikolataService } from './services/cikolata.service';
import { Component, OnInit } from '@angular/core';
import { Cikolata } from './models/cikolata';

@Component({
  selector: 'app-orcikolata',
  templateUrl: './orcikolata.component.html',
  styleUrls: ['./orcikolata.component.scss']
})
export class OrcikolataComponent implements OnInit {

  cikolatas:Cikolata[] = [];

  baseUrl :string=environment.getApiUrlPhoto;

  constructor(private  cikolataService : cikolataService) { }

  ngOnInit() : void {
    this.getCikolata()
  }

  getCikolata() {
		this.cikolataService.getOrCikolataList().subscribe(data => {
			this.cikolatas = data;
		
		});
  }

}
