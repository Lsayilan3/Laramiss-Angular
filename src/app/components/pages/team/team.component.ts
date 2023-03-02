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
    {img:'../../../../assets/img/aaımg/tim_370x480.jpg',name:'Ünlü Sesler',designation:'consultant'},
    {img:'../../../../assets/img/aaımg/tim1_370x480.jpg',name:'Kaliteli Deri Baskı',designation:'co-founder'},
    {img:'../../../../assets/img/aaımg/tim5_370x480.jpg',name:'Kaliteli Metal Baskı',designation:'consultant'},
    {img:'../../../../assets/img/aaımg/tim2_370x480.jpg',name:'Kaliteli Ahşap Baskı',designation:'consultant'},
    {img:'../../../../assets/img/aaımg/tim3_370x480.jpg',name:'Kaliteli Kumaş Dekor',designation:'consultant'},
    {img:'../../../../assets/img/aaımg/fotograf-cekimi_370x480.jpg',name:'Kaliteli Üstün Çekimler',designation:'Founder & CEO'},
  ];
  ngOnInit(): void {
  }

}
