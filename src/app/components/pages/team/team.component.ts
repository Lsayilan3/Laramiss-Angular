import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }
  // Team grid
  teamgridposts = [
    {img:'../../../../assets/img/aaimg/tim_370x480.jpg',name:'Ünlü Sesler',designation:'consultant'},
    {img:'../../../../assets/img/aaimg/tim1_370x480.jpg',name:'Kaliteli Deri Baskı',designation:'co-founder'},
    {img:'../../../../assets/img/aaimg/tim5_370x480.jpg',name:'Kaliteli Metal Baskı',designation:'consultant'},
    {img:'../../../../assets/img/aaimg/tim2_370x480.jpg',name:'Kaliteli Ahşap Baskı',designation:'consultant'},
    {img:'../../../../assets/img/aaimg/tim3_370x480.jpg',name:'Kaliteli Kumaş Dekor',designation:'consultant'},
    {img:'../../../../assets/img/aaimg/fotografcekimi_370x480.jpg',name:'Kaliteli Üstün Çekimler',designation:'Founder & CEO'},
  ];
  ngOnInit(): void {
  }

}
